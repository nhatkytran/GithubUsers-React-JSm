import { useGlobalContext } from "../../context/context";

function Followers() {
  const { mockFollowers } = useGlobalContext();
  const followers = mockFollowers.slice(0, 4);

  return (
    <div className="followers">
      <h3>Followers</h3>
      {followers.length === 0 && <div>Have no follower</div>}
      {followers.map((follower, index) => {
        const { avatar_url, html_url, login } = follower;

        return (
          <div key={index} className="follower">
            <img className="follower-image" src={avatar_url} alt="Follower" />
            <div className="follower-name">
              <b>{login}</b>
            </div>
            <a className="follower-link" href={html_url}>
              Check
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default Followers;
