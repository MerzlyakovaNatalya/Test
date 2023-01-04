import { useDispatch } from "react-redux";
import { addLike, deleteUser, getUsersWithLike } from "../store/users/actions";

export const useUsersCard = (id, like) => {
  const dispatch = useDispatch();

  const getLike = () => {
    dispatch(addLike(id, !like));
    dispatch(getUsersWithLike(id));
  };

  const removeUser = (id) => {
    dispatch(deleteUser(id));
  };

  return [getLike, removeUser];
};
