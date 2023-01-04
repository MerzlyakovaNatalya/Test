import {
    SET_ERROR,
    SET_LOADING,
    ADD_USERS,
    USERS_WITH_LIKE,
    ADD_LIKE,
    DELETE_USER,
    STATUS_LIKE
  } from "./actions";

  const initialState = {
    isError: false,
    isLoading: false,
    users: [],
    usersWithLike: [],
    statusLike: false
  };

  export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_LOADING: {
        return { ...state, isLoading: action.payload };
      }
  
      case SET_ERROR: {
        return { ...state, isError: action.payload };
      }
  
      case ADD_USERS: {
        return { ...state, users: action.payload };
      }

      case USERS_WITH_LIKE: {

        const prevUsers = state.users;
        const prevUsersWithLike = state.usersWithLike;

        const targetIndexUser = prevUsers.findIndex((item) => item.id === action.payload)

        if(targetIndexUser === -1) {
          return state;
          }

        const targetIndexUserWithLike = prevUsersWithLike.findIndex((item) => item.id === action.payload)

        if(targetIndexUserWithLike !== -1) {
          return {
            ...state,
            usersWithLike: state.usersWithLike.filter((item) => item.id !== action.payload)
        };
          }

        const userWithLike = prevUsers.filter((item) => item.id === action.payload)
         
        return {
            ...state,
            usersWithLike: [
              ...state.usersWithLike,
              ...userWithLike,
            ]
           }
        }

      case ADD_LIKE: {
       const prevUser = state.users;

          const targetIndex = prevUser.findIndex((item) => item.id === action.payload.userId)

          if(targetIndex === -1) {
            return state;
          }

          const copyUsers = [...state.users]
          copyUsers[targetIndex] = {
            ...copyUsers[targetIndex],
            like: action.payload.status,
          }

          return {
            ...state,
            users: copyUsers
          }
      }

      case DELETE_USER: {
        const prevUser = state.users;

        const targetIndex = prevUser.findIndex((item) => item.id === action.payload)

        if(targetIndex === -1) {
            return state;
        }

        return {
            ...state,
            users: state.users.filter((item) => item.id !== action.payload)
        }

    }

    case STATUS_LIKE: {
      return { ...state, statusLike: action.payload };
    }
  
      default: {
        return state;
      }
    }
  };