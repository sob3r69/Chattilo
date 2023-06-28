import ChatBox from './ChatBox';

const ChatsField = () => {
  return (
    <div className="w-full h-full flex flex-row gap-2 p-2">
      <ChatBox />
      <ChatBox />
      <ChatBox />
      <ChatBox />
    </div>
  );
};

export default ChatsField;
