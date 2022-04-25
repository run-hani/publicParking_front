import { createSlice } from "@reduxjs/toolkit";

export interface UserType {
  userid: string;
  password: string;
  email: string;
  name: string;
  phone: string;
  birth: string;
  address: string;
}

export interface UserState {
  loading: boolean;
  data: UserType[];
  error: any;
}

const initialState: UserState = {
  loading: false,
  data: [],
  error: null,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    // joinRequest 이거 키값임 이게 액션이됨
    // 이렇게 하면 자동으로 reducer 생성됨
    joinRequest(state: UserState, payload) {
      // alert('진행 2: 리듀서 내부 ')
      state.loading = true;
    },
    joinSuccess(state: UserState, { payload }) {
      state.data = [...state.data, payload];
      state.loading = false;
      window.location.href = "/";
    },
    joinFailure(state: UserState, { payload }) {
      state.data = payload;
      state.loading = false;
    },
    loginRequest(state: UserState, payload) {
      // alert('진행 2: 리듀서 내부 ')
      state.loading = true;
    },
    loginSuccess(state: UserState, { payload }) {
      state.data = [...state.data, payload];
      state.loading = false;
    },
    loginFailure(state: UserState, { payload }) {
      state.data = payload;
      state.loading = false;
    },
    logoutRequest(state: UserState, payload) {
      // alert('진행 2: 로그아웃 리듀서 내부 ')
      state.loading = true;
    },
    logoutSuccess(state: UserState, { payload }) {
      state.loading = false;
      localStorage.clear();
      window.location.href = "/";
    },
    logoutFailure(state: UserState, { payload }) {
      state.data = payload;
      state.loading = false;
    },
    delUserRequest(state: UserState, payload) {
      // alert('진행 2: 회원탈퇴 리듀서 내부 ')
      state.loading = true;
    },
    delUserSuccess(state: UserState, { payload }) {
      state.loading = false;
      localStorage.clear();
      window.location.href = "/";
    },
    delUserFailure(state: UserState, { payload }) {
      state.data = payload;
      state.loading = false;
    },
  },
});
// joinRequest,joinSuccess, joinFailure는 actions로 들어감
// 리듀서 하나에 액션 여러개
// 리듀서는 루트로 버블링됨
// 액션은 사가로 넘어감
const { reducer, actions } = userSlice;
export const userActions = actions;
export default reducer;
