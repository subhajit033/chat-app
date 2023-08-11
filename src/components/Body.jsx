import ChatBody from "./ChatBody";
import InputBox from "./InputBox";
import Alert from "./Alert";
const Body = () => {
  return (
    <div className="flex justify-center">
      <div className="bg-gray-100 h-screen relative w-10/12 p-6">      
        <ChatBody />        
        <InputBox />
      </div>
    </div>
  );
};

export default Body;
