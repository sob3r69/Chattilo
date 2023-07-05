import IconButton from './Buttons/IconButton';
import './ChatBox.css';
import { RxOpenInNewWindow } from 'react-icons/rx';
const ChatBox = () => {
  return (
    <div className="chat-box">
      <div className="chat-header">
        <IconButton Icon={RxOpenInNewWindow} />
        <h3>Channel Name</h3>
        <button>X</button>
      </div>
    </div>
  );
};

export default ChatBox;
