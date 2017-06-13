// Component to show the dummy live Chats window

import React from 'react';
import {USER_CHATS} from '../constants/userChat';
import '../styles/liveChatStyles.less';


const SupportInfo = () => {
  return (
    <div className="support-info-container clearfix">
      <img className="user-image lfloat" src="app/resources/default_user.jpg"/>
      <div className="lfloat">
        <div className="support-name">Mike Adams</div>
        <div className="support-text">Customer Support Rep</div>
      </div>
    </div>
  );
};

const UserChat = ({chat}) => {
  return (
    <div className="chat-info-container clearfix">
      <img className="user-image lfloat" src="app/resources/default_user.jpg"/>
      <div className="lfloat">
        <div className="support-name">{chat.name}</div>
        <div className="support-text">{chat.text}</div>
      </div>
    </div>
  );
};

const LiveChat = () => {
  return (
    <div className="live-chat-container">
      <SupportInfo />
      <div className="chats">
        {USER_CHATS.map(chat => <UserChat key={chat.id} chat={chat}/>)}
      </div>
      <textarea autoFocus className="live-message" placeholder="Enter Your message here..."/>
    </div>
  );
};

export default LiveChat;

