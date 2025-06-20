import { useState, useRef, useEffect } from 'react';
import { SendHorizontal } from 'lucide-react';
import { format } from 'date-fns';
import MessageCard from '../MessageCard';
import { messages as dummyMessages } from '../ChatSection/messages_data';

function ChatSection() {
  const [messageText, setMessageText] = useState('');
  const [messages, setMessages] = useState(dummyMessages);
  const chatContainerRef = useRef(null);

  useEffect(() => {
    requestAnimationFrame(() => {
      if (chatContainerRef.current) {
        chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
      }
    });
  }, [messages]);

  const handleMsgSubmit = e => {
    e.preventDefault();
    if (messageText.trim()) {
      const newMessage = {
        msgId: messages.length + 1,
        msgSenderName: 'Cristiano Ronaldo',
        msgContent: messageText,
        msgTime: format(new Date(), 'h:mm a'),
        isSendingMsg: true,
        colorKey: 'green',
      };
      setMessages(prev => [...prev, newMessage]);
      setMessageText('');
    }
  };

  return (
    <section className='px-2 py-1 border border-gray-300 rounded-md mb-10'>
      {/* <p className='text-center text-xs'>Today - {format(new Date(), 'dd/MM/yyyy')}</p> */}
      <div ref={chatContainerRef} className='flex flex-col border-gray-300 text-sm h-40 overflow-scroll'>
        {messages.map(message => (
          <MessageCard key={message.msgId} {...message} />
        ))}
      </div>
      <form className='flex justify-center items-center py-0.5 mt-1'>
        <input
          type='text'
          value={messageText}
          placeholder='Send a message'
          className='w-full outline-none text-sm border p-1 rounded-lg border-gray-300 mb-1 placeholder:text-xs'
          onChange={e => setMessageText(e.target.value)}
        />
        <button type='submit' onClick={handleMsgSubmit} className='ml-2'>
          <SendHorizontal />
        </button>
      </form>
    </section>
  );
}

export default ChatSection;
