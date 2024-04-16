import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchGitHubUserRepo = createAsyncThunk(
  "user/fetchGitHubUserRepo",
  async (username) => {
    const { data } = await axios.get(
      `https://api.github.com/users/${username}/repos`
    );
    return data;
  }
);

const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    isLoading: false,
    userRepoList: [],
  },
  reducers: {
    // getUserRepoList: (state) => {
    //   state.userRepoList = [];
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGitHubUserRepo.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(fetchGitHubUserRepo.fulfilled, (state, action) => {
      state.userRepoList = action.payload;
      state.isLoading = false;
    });

    builder.addCase(fetchGitHubUserRepo.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export default userSlice.reducer;
