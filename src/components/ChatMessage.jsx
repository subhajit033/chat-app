import { useState } from "react";
import { useDispatch } from "react-redux";
import { removeMessage } from "../slices/chatSlice";
const ChatMessage = ({message, setMessages, messages}) => {
  const dispatch = useDispatch();
  //Every message is mauntain ing their own state
  const[count, setCount] = useState(0);
  const handleMsgDelete = ()=>{
    const arr = messages?.filter((msg, i)=>{
        return msg.msg != message.msg;
    })
    dispatch(removeMessage(arr));
  }
  return (
    <div className="flex  items-start gap-3 my-4">
      <img
        className="w-10 rounded-full"
        src="https://w7.pngwing.com/pngs/831/88/png-transparent-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design-smile-thumbnail.png"
        alt="user-img"
      />
      <div>
        <div className="flex gap-3">
          <p className="font-semibold">{message.user}</p>
          <p>{message.time}</p>
        </div>
        <div className="relative">
          <p className="min-w-fit max-w-[36rem] border px-2 py-2 bg-white rounded-tr-xl rounded-br-xl rounded-bl-xl">
            {message.msg}
          </p>
          <div onClick={()=>setCount(count+1)} className="absolute right-0 px-1.5 rounded-md space-x-1 cursor-pointer bg-red-300 my-1">
            {count>0 && <span>{count}</span>}
            <i className={`fa-regular fa-heart ${count>0? 'text-red-600': 'text-black'}`}></i>
            
          </div>
          <button onClick={handleMsgDelete} className="bg-red-300 ">Dele</button>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
