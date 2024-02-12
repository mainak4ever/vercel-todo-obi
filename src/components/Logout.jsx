import { useDispatch } from "react-redux";
import { logout } from "../store/authSlice";
import { logoutUser } from "../fetchApi/userApi";

function LogoutBtn() {
  const dispatch = useDispatch();
  const token = localStorage.getItem("accessToken");
  const logoutHandler = async () => {
    try {
      const response = await logoutUser(token);
      console.log(response);
      if (response.success) {
        localStorage.setItem("accessToken", null);
        dispatch(logout());
      }
      // console.log(response);
    } catch (error) {
      console.error("Failed to logout", error);
    }
  };

  return (
    <button
      className="inline-bock px-6 py-2 font-bold text-white bg-red-700 duration-200 hover:bg-red-400 rounded-md"
      onClick={logoutHandler}
    >
      Logout
    </button>
  );
}

export default LogoutBtn;
