import React, { useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import './ChatWidget.css';

const ChatWidget = () => {
  useEffect(() => {
    // 3CX Chat Widget Script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://1103.3cx.cloud/ttt/javascript.aspx';
    script.onload = () => {
      // 3CX widget will initialize automatically
      console.log('3CX Chat Widget loaded');
    };
    document.body.appendChild(script);

    return () => {
      // Optional: Cleanup if widget supports it
      if (window._3cxChat) {
        // Chat widget cleanup (if needed)
      }
    };
  }, []);

  return (
    <div className="chat-widget-container">
      {/* 3CX Chat Widget will render here */}
      {/* The script above will inject the chat interface */}
    </div>
  );
};

export default ChatWidget;
