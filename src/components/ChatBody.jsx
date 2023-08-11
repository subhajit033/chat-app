import { useState, useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useSelector } from "react-redux/es/hooks/useSelector";
const ChatBody = () => {
  const chatMessage = useSelector((store) => {
    return store.Chat.message;
  });
  const [messages, setMessages] = useState(chatMessage);
  /* The `useEffect` hook is used to perform side effects in a functional component. In this case, it
  is used to update the `messages` state whenever the `chatMessage` value changes. */
  useEffect(()=>{
    setMessages(chatMessage);
  }, [chatMessage])
  return (
    <div className="border h-[90%] px-6 py-2 overflow-auto flex flex-col-reverse">
      {messages?.map((message, i)=>{
          return <ChatMessage key={i} messages={messages} setMessages={setMessages} message = {message}/>
      })}
    </div>
  );
};

export default ChatBody;
