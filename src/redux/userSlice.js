import { createSlice } from "@reduxjs/toolkit";

import * as api from "../axios";

export const usersSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    error: "",
  },
  reducers: {
    userAuthenticated(state, action) {
      state.user = { fullName: action.payload.fullName };
      state.error = "";
    },
    userLogout(state, action) {
      state.user = null;
    },
    authFailed(state, action) {
      state.error = action.payload;
    },
  },
});

export const { userAuthenticated, authFailed, userLogout } = usersSlice.actions;

export const register = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.register(formData);
    dispatch(userAuthenticated(data));
    navigate("/home");
  } catch (error) {
    console.log(error);
    error.response && error.response.data?.message
      ? dispatch(authFailed(error.response.data.message))
      : dispatch(authFailed(error.message));
  }
};

export const login = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.login(formData);
    dispatch(userAuthenticated(data));
    navigate("/home");
  } catch (error) {
    console.log(error);
    error.response && error.response.data?.message
      ? dispatch(authFailed(error.response.data.message))
      : dispatch(authFailed(error.message));
  }
};

export const logout = (navigate) => async (dispatch) => {
  try {
    await api.logout();
    dispatch(userLogout());
    navigate("/home");
  } catch (error) {
    console.log(error);
    error.response && error.response.data?.message
      ? dispatch(authFailed(error.response.data.message))
      : dispatch(authFailed(error.message));
  }
};

export default usersSlice.reducer;
