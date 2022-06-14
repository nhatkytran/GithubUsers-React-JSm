import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";
import { mockUserData, mockFollowersData, mockReposData } from "./mockData";

const GithubContext = createContext();

const rootAPI = "https://api.github.com";

function GithubContextProvider({ children }) {
  const [mockUser, setMockUser] = useState(mockUserData);
  const [mockFollowers, setMockFollowers] = useState(mockFollowersData);
  const [mockRepos, setMockRepos] = useState(mockReposData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({
    show: false,
    message: "Start searching",
  });
  const [rate, setRate] = useState({
    limit: null,
    used: null,
  });

  function setErrorHelper(show, message) {
    setError({ show, message });
  }

  async function searchUser(user) {
    try {
      setLoading(true);
      setErrorHelper(false, "Start searching");

      const respone = await fetch(`${rootAPI}/users/${user}`);

      if (!respone.ok) {
        setErrorHelper(false, "User not found!");
        return;
      }

      const data = await respone.json();

      setMockUser(data);

      const reposAndFollowersData = await Promise.allSettled([
        await (await fetch(`${rootAPI}/users/${user}/repos`)).json(),
        await (
          await fetch(`${rootAPI}/users/${user}/followers?per_page=4`)
        ).json(),
      ]);
      const [reposData, followersData] = reposAndFollowersData;

      setMockRepos(reposData.value);
      setMockFollowers(followersData.value);
    } catch (error) {
      console.error("Something went wrong!");
      console.log(error.message);
      setErrorHelper(true, error.message);
    } finally {
      setLoading(false);
    }
  }

  const checkRate = useCallback(async function () {
    try {
      const response = await fetch(`${rootAPI}/rate_limit`);

      if (!response.ok)
        throw new Error("Something went wrong checking requests limit!");

      const data = await response.json();
      const { rate } = data;

      setRate({
        limit: rate.limit,
        used: rate.used,
      });

      if (rate.used === rate.limit) {
        setErrorHelper(
          false,
          `Notice: Can't fetch information of the same user over ${rate.limit} times per hour!`
        );
      }
    } catch (error) {
      console.error("Something went wrong!");
      console.log(error.message);
      setErrorHelper(true, error.message + " (Requests unchecked!)");
    }
  }, []);

  useEffect(() => {
    checkRate();
  }, [checkRate]);

  const value = {
    mockUser,
    mockFollowers,
    mockRepos,
    loading,
    error,
    setErrorHelper,
    rate,
    searchUser,
  };

  return (
    <GithubContext.Provider value={value}>{children}</GithubContext.Provider>
  );
}

function useGlobalContext() {
  return useContext(GithubContext);
}

export { useGlobalContext };
export default GithubContextProvider;
