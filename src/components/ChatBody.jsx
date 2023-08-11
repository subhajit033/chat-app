import ChatMessage from "./ChatMessage";
import { useSelector } from "react-redux/es/hooks/useSelector";
const ChatBody = () => {
  const chatMessage = useSelector((store) => {
    return store.Chat.message;
  });
  
  return (
    <div className="border h-[90%] px-6 py-2 overflow-auto flex flex-col-reverse">
      {chatMessage?.map((message, i)=>{
          return <ChatMessage key={i} message = {message}/>
      })}
    </div>
  );
};

export default ChatBody;
