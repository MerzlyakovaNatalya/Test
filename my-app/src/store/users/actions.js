import axios from "axios";

export const ADD_USERS = "ADD_USERS";
export const DELETE_USER = "DELETE_USER";
export const SET_ERROR = "SET_ERROR";
export const SET_LOADING = "SET_LOADING";
export const ADD_LIKE = "ADD_LIKE";
export const USERS_WITH_LIKE = "USERS_WITH_LIKE";
export const STATUS_LIKE = "STATUS_LIKE";

export const addUsers = (users) => ({
  type: ADD_USERS,
  payload: users,
});

export const setError = (status) => ({
  type: SET_ERROR,
  payload: status,
});

export const setLoading = (status) => ({
  type: SET_LOADING,
  payload: status,
});

export const setStatusLike = (status) => ({
  type: STATUS_LIKE,
  payload: status,
});

export const getUsersWithLike = (userId) => ({
  type: USERS_WITH_LIKE,
  payload: userId,
});

export const addLike = (userId, status) => ({
  type: ADD_LIKE,
  payload: {
    userId,
    status,
  },
});

export const deleteUser = (userId) => ({
  type: DELETE_USER,
  payload: userId,
});

export const getUsers = async (dispatch) => {
  dispatch(setLoading(true));
  dispatch(setError(false));

  try {
    const response = await axios.get("https://reqres.in/api/users?page=2");
    const copyResponse = response.data.data;
    const editedeRsponse = copyResponse.map((item) => {
      return { ...item, like: false };
    });
    dispatch(addUsers(editedeRsponse));
  } catch (error) {
    dispatch(setError(true));
    console.error(error);
  }
  dispatch(setLoading(false));
};