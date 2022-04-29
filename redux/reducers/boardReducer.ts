import { createSlice } from "@reduxjs/toolkit";

export interface PostType {
  areaName: string;
  parkingName: string;
  divisionCount: string;
  charge: string;
  adressLotNumber: string;
  adressRoadName: string;
  operDay: string;
}

export interface PostState {
  loading: boolean;
  data: PostType[];
  error: any;
}

const initialState: PostState = {
  loading: false,
  data: [],
  error: null,
};

const boardSlice = createSlice({
  name: "boards",
  initialState,
  reducers: {
    postAddRequest(state: PostState, payload) {
      state.loading = true;
    },
    postAddSuccess(state: PostState, { payload }) {
      state.data = [...state.data, payload];
      state.loading = false;
    },
    postAddFailure(state: PostState, { payload }) {
      state.data = payload;
      state.loading = false;
    },
    postEditRequest(state: PostState, payload) {
      state.loading = true;
    },
    postEditSuccess(state: PostState, { payload }) {
      state.data = [...state.data, payload];
      state.loading = false;
    },
    postEditFailure(state: PostState, { payload }) {
      state.data = payload;
      state.loading = false;
    },
    postDelRequest(state: PostState, payload) {
      state.loading = true;
    },
    postDelSuccess(state: PostState, { payload }) {
      state.loading = false;
      localStorage.clear();
      window.location.href = "/";
    },
    postDelFailure(state: PostState, { payload }) {
      state.data = payload;
      state.loading = false;
    }
  },
});

const { reducer, actions } = boardSlice;
export const boardActions = actions;
export default reducer;
