import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ChatMessage from "./ChatMessage";
import { addMessage } from "../utils/chatSlice";
import { generateRandomNames, makeRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const [liveMessage, setLiveMessage] = useState("");

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
    }, 1500);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <>
      <div className="p-2 m-2 border border-black w-full h-[550px] bg-gray-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
          {chatMessages.map((message, index) => (
            <ChatMessage
              key={index}
              name={message.name}
              message={message.message}
            />
          ))}
        </div>
      </div>

      <form
        className="w-full p-2 ml-2 border border-black"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Parth",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
          className="border border-black w-96 p-2"
          type="text"
        />
        <button className="px-2 mx-2 bg-green-400 text-white rounded-md">
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
