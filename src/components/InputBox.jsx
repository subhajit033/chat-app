import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addMessge } from "../slices/chatSlice";
import { user_list } from "../helper/const";
const InputBox = () => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  const[isBtnDisabled, setIsBtnDisabled] = useState(true);
  useEffect(()=>{
    message? setIsBtnDisabled(false):setIsBtnDisabled(true);
  }, [message])
  const handleSubmit = (e) => {
    e.preventDefault();
    const date = new Date();
    const hours = date.getHours();
    const min = date.getMinutes();
    const user = document.getElementById("user").value;
    dispatch(addMessge({ user: user, msg: message, time: hours + ":" + min }));
    setMessage("");
  };
  return (
    <div className="absolute bottom-4">
      <form autoComplete="off" onSubmit={handleSubmit}>
        <select className="py-2 mr-4 rounded-lg px-4" name="user" id="user">
          <option>Select User</option>
          {user_list.map((user, i) => {
            return <option key={user + i}>{user}</option>;
          })}
        </select>
        <input
          onChange={(e) => setMessage(e.target.value)}
          className="w-[36rem] py-2 px-3 rounded-lg focus:border-2 focus:border-blue-500 focus:outline-none"
          type="text"
          name="message"
          value={message}
          placeholder="type your message here"
        />
        <button
          type="submit"
          className={`bg-green-300 py-2 px-4 mx-4 rounded-lg ${isBtnDisabled? "cursor-no-drop": "cursor-pointer"}`}
          disabled={isBtnDisabled}
        >
          send
        </button>
      </form>
    </div>
  );
};

export default InputBox;
