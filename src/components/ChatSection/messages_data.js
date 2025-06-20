import { format } from 'date-fns';

export const messages = [
  {
    msgId: 1,
    msgSenderName: 'Gareth Bale',
    msgContent: 'Bwoys! Khane mein kya banwana h?',
    msgTime: format(new Date(), 'h:mm a'),
    colorKey: 'blue',
  },
  {
    msgId: 2,
    msgSenderName: 'Karim Benzema',
    msgContent: 'Didi ka Poha? 😜',
    msgTime: format(new Date(), 'h:mm a'),
    colorKey: 'orange',
  },
  {
    msgId: 3,
    msgSenderName: 'Cristiano Ronaldo',
    msgContent: 'Haha! Meghana se order kare? 😉',
    msgTime: format(new Date(), 'h:mm a'),
    isSendingMsg: true,
    colorKey: 'green',
  },
  {
    msgId: 4,
    msgSenderName: 'Gareth Bale',
    msgContent: 'Body kaise banega bhai? 😒',
    msgTime: format(new Date(), 'h:mm a'),
    colorKey: 'blue',
  },
  {
    msgId: 5,
    msgSenderName: 'Karim Benzema',
    msgContent: 'Monday se start karenge BBC! 💪🏻',
    msgTime: format(new Date(), 'h:mm a'),
    colorKey: 'orange',
  },
];
