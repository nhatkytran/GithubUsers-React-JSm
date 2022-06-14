import { useGlobalContext } from "../../context/context";

function User() {
  const { mockUser } = useGlobalContext();
  const { avatar_url: avatar, name, html_url: followUrl } = mockUser;

  return (
    <div className="user">
      <img src={avatar} alt="User avatar" className="user-image" />
      <div className="user-name">
        <b>{name}</b>
      </div>
      <a href={followUrl} className="user-follow">
        Follow
      </a>
    </div>
  );
}

export default User;
