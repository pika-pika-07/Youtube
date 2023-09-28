import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_LIVE_CHAT } from "./constants";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      if (state.messages.length) {
        // It will restrict the messages to 10 only, it will remove the message if it goes above 10
        // This way we optimise the UI
        // Otherwise UI will break if we keep appending 100's of messages
        // So to optimise we need to delete older messages
        state.messages.splice(OFFSET_LIVE_CHAT, 1);
      }
      state.messages.unshift(action.payload);
    },
  },
});

export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;
