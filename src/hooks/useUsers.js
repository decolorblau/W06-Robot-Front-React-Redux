import { useDispatch, useSelector } from "react-redux";
import { userThunks } from "../redux/thunks/userThunks";
import { userLogoutAction } from "../redux/actions/actionCreator";

const useUsers = () => {
  const user = useSelector(({ user }) => user);
  const dispatch = useDispatch();

  const login = () => {
    dispatch(userThunks());
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
