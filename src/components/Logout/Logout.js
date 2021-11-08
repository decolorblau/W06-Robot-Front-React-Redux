import useUsers from "../../hooks/useUsers";
import("./Logout.css");

const Logout = () => {
  const { logout } = useUsers();

  const sendLogout = (event) => {
    event.preventDefault();
    localStorage.removeItem("user");
    logout();
  };

  return (
    <button className="logout btn btn-close pb-3 ps-5" onClick={sendLogout}>
      Logout
    </button>
  );
};

export default Logout;
