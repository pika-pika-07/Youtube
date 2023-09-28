import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    /**
     * SearchMap structure
     *
     * {
     *  "iphone" : [ 'iphone11', 'iphone12']
     * },
     * {
     *   'parth' ; [ 'Parth11', 'Parth12', 'Parth13']
     * }
     */
    searchMap: {},
  },
  reducers: {
    cacheSuggestions: (state, action) => {
      state.searchMap = { ...action.payload, ...state.searchMap };
      //   state.searchMap[action.payload.key] = action.payload.value;
    },
  },
});

export const { cacheSuggestions } = searchSlice.actions;
export default searchSlice.reducer;
