const ChatBox = () => {
  return (
    <div className="flex-grow bg-black text-white rounded">
      <div className="flex flex-row justify-between w-full bg-purple-800 text-center p-1 rounded-t">
        <button>O</button>
        <p>Channel Name</p>
        <button>X</button>
      </div>
    </div>
  );
};

export default ChatBox;
