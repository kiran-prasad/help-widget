import LiveChatContainer from '../components/LiveChatContainer';
import MailUsContainer from '../components/MailUsContainer';
import FAQContainer from '../components/FAQContainer';

export const  TABS = [
  {
    id: 'MAILUS',
    label: 'Mail Us',
    icon: 'envelope',
    component: MailUsContainer
  },
  {
    id: 'FAQ',
    label: 'FAQ',
    icon: 'search',
    component: FAQContainer
  },
  {
    id: 'LIVE_CHAT',
    label: 'Live Chat',
    icon: 'comment',
    component: LiveChatContainer
  }
];