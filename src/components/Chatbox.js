import React, { useEffect } from 'react';
import { Widget, addResponseMessage } from 'react-chat-widget';

import 'react-chat-widget/lib/styles.css';
import logo from '../logo.svg';

export default function Chatbox() {
    useEffect(() => {
        addResponseMessage('Hi! How may I help you?');
      }, []);
    
      const handleNewUserMessage = (newMessage) => {
        console.log(`New message incoming! ${newMessage}`);
        // Now send the message throught the backend API
      };
    
        return (
            <>
            <Widget
              handleNewUserMessage={handleNewUserMessage}
              profileAvatar={logo}
              title="My new awesome title"
              subtitle="And my cool subtitle"
            />
          </>
        );
    }