import { useState, useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useSelector } from "react-redux/es/hooks/useSelector";
const ChatBody = () => {
  const chatMessage = useSelector((store) => {
    return store.Chat.message;
  });
  // We can't send directly chatmessage as props because it is a local variable react will not track if the variablegot updated
  const [messages, setMessages] = useState(chatMessage);  
  useEffect(()=>{
    setMessages(chatMessage);
  }, [chatMessage])
  return (
    <div className="border h-[90%] px-6 py-2 overflow-auto flex flex-col-reverse">
      {messages?.map((message, i)=>{
          return <ChatMessage key={i} messages={messages}  message = {message}/>
      })}
    </div>
  );
};

export default ChatBody;
