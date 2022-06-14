import { useGlobalContext } from "../../context/context";
import UserInfoItem from "./UserInfoItem";

function UserInfo() {
  const { mockUser } = useGlobalContext();
  const {
    public_repos: repos,
    followers,
    following,
    public_gists: gists,
  } = mockUser;
  const userInforData = [repos, followers, following, gists];
  const keyNames = ["Repos", "Fllowers", "Following", "Gists"];

  return (
    <div className="user-info">
      {userInforData.map((info, index) => (
        <UserInfoItem key={index} item={info} keyName={keyNames[index]} />
      ))}
    </div>
  );
}

export default UserInfo;
