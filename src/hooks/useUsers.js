import { useDispatch, useSelector } from "react-redux";
import { userLoginThunk } from "../redux/thunks/userThunks";
import { userLogoutAction } from "../redux/actions/actionCreator";

const useUsers = () => {
  const user = useSelector(({ user }) => user);
  const dispatch = useDispatch();

  const login = (user) => {
    dispatch(userLoginThunk(user));
  };
  const logout = () => {
    dispatch(userLogoutAction());
  };
  return {
    user,
    login,
    logout,
  };
};

export default useUsers;
