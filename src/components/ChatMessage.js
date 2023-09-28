import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center shadow-sm p-2">
      <img src="https://yt4.ggpht.com/IgA2X5gGRFBXTEwVIEKVtvTQTcdSyeQDZpXvZ7KCJ1RZTevPRAsLEsl2kwHoMCjXF2W6rzNC9ug=s32-c-k-c0x00ffffff-no-rj" />
      <span className="font-bold px-2">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
