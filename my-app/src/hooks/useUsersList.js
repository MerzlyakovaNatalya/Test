import { useDispatch, useSelector } from "react-redux";
import { getUsers, setStatusLike } from "../store/users/actions";
import {
  getUsersData,
  getError,
  getLoading,
  geUserswithlike,
  geStatusLike,
} from "../store/users/selectors";
import { useEffect } from "react";

export const useUsersList = () => {
  const statusLike = useSelector(geStatusLike);
  const usersWithLike = useSelector(geUserswithlike);
  const users = useSelector(getUsersData);
  const error = useSelector(getError);
  const loading = useSelector(getLoading);
  const dispatch = useDispatch();

  const getStatusLike = (status) => {
    dispatch(setStatusLike(status));
  };

  useEffect(() => {
    dispatch(getUsers);
  }, []);

  return [
    loading, 
    error, 
    users, 
    usersWithLike, 
    statusLike, 
    getStatusLike];
};
