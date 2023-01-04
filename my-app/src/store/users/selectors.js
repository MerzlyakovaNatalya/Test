const getFromStoreUsers = (state) => state.users;
export const getUsersData = (state) => state.users.users;
export const getLoading = (state) => getFromStoreUsers(state).isLoading;
export const getError = (state) => getFromStoreUsers(state).isError;
export const geUserswithlike = (state) => getFromStoreUsers(state).usersWithLike;
export const geStatusLike = (state) => getFromStoreUsers(state).statusLike;