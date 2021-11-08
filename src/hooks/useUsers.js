import { useDispatch, useSelector } from "react-redux";
import { userThunks } from "../redux/thunks/userThunks";

const useUsers = () => {
  const users = useSelector(({ users }) => users);
  const dispatch = useDispatch();

  const login = () => {
    dispatch(userThunks());
  };
  return {
    users,
    login,
  };
};

export default useUsers;
