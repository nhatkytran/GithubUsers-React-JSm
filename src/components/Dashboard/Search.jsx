import { useState } from "react";
import { useGlobalContext } from "../../context/context";

function Search() {
  const [user, setUser] = useState("john-smilga");
  const { error, setErrorHelper, rate, searchUser } = useGlobalContext();

  function handleUser(event) {
    setUser(event.target.value);
    setErrorHelper(false, "Start searching");
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!user) {
      setErrorHelper(true, "Empty user's name!");
      setTimeout(setErrorHelper.bind(null, false, "Start searching"), 3000);
      return;
    }

    searchUser(user);
  }

  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <input type="text" value={user} onChange={handleUser} />
        <button type="submit">Search</button>
        <span className="requests">
          Requests: {rate.used}/{rate.limit}
        </span>
      </form>
      <div className={`error ${error.show ? "wrong" : ""}`}>
        {error.message}
      </div>
    </div>
  );
}

export default Search;
