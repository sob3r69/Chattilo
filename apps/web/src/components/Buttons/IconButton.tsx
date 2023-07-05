import { IconType } from 'react-icons';

type IconButtonProps = {
  Icon: IconType;
};

const IconButton = ({ Icon }: IconButtonProps) => {
  return (
    <button className="icon-button">
      <Icon size="1em" />
    </button>
  );
};

export default IconButton;
