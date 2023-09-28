import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ChatMessage from "./ChatMessage";
import { addMessage } from "../utils/chatSlice";
import { generateRandomNames, makeRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const interval = setInterval(() => {
      //API Polling

      dispatch(
        addMessage({
          name: generateRandomNames(),
          message: makeRandomMessage(20),
        })
      );
      console.log("API Polling");
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="p-2 m-2 border border-black w-full h-[550px] bg-gray-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
      {chatMessages.map((message, index) => (
        <ChatMessage
          key={index}
          name={message.name}
          message={message.message}
        />
      ))}
    </div>
  );
};

export default LiveChat;
