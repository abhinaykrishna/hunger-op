import { useSelector } from 'react-redux';

const MessageCard = ({ msgSenderName, msgContent, msgTime, isSendingMsg, colorKey }) => {
  const theme = useSelector(state => state.theme.appTheme);

  const msgSenderColor = {
    blue: {
      light: 'text-blue-600',
      dark: 'text-blue-400',
    },
    orange: {
      light: 'text-orange-600',
      dark: 'text-orange-400',
    },
    green: {
      light: 'text-green-600',
      dark: 'text-green-400',
    },
  };

  return (
    <div className={`w-4/5 bg-gray-100 px-2 py-1 rounded-lg my-1 dark:bg-slate-800 ${isSendingMsg ? 'self-end' : ''}`}>
      <span className={msgSenderColor[colorKey][theme]}>{msgSenderName}</span>
      <p className='flex justify-between items-center'>
        <span>{msgContent}</span>
        <span className='text-xs'>{msgTime}</span>
      </p>
    </div>
  );
};

export default MessageCard;
