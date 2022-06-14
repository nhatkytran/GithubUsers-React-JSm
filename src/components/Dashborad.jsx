import { useGlobalContext } from "../context/context";
import Navbar from "./Dashboard/Navbar";
import User from "./Dashboard/User";
import UserInfo from "./Dashboard/UserInfo";
import Followers from "./Dashboard/Followers";
import Repos from "./Dashboard/Repos";
import StarsAndForks from "./Dashboard/StarsAndForks";
import Search from "./Dashboard/Search";

function Dashboard() {
  const { loading } = useGlobalContext();

  return (
    <div className="dashboard">
      <Navbar />
      <Search />
      {loading && <h3>Loading...</h3>}
      {!loading && (
        <>
          <User />
          <UserInfo />
          <Followers />
          <Repos kindOf="languages" />
          <Repos kindOf="stars" />
          <StarsAndForks kindOf="stars" />
          <StarsAndForks kindOf="forks" />
        </>
      )}
    </div>
  );
}

export default Dashboard;
