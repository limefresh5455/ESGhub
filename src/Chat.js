// import React from 'react';

// const Chat = () => (
//   <div>
//     <h3>Chat Component</h3>
//     <p>This is where the chat will be displayed.</p>
//   </div>
// );

// export default Chat;
// Chat.js
import React, { useState } from 'react';

const Chat = () => {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'User', text: 'Hello! How are you?' },
    { id: 2, sender: 'Assistant', text: 'I’m good, thank you! How can I assist you?' },
  ]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { id: messages.length + 1, sender: 'User', text: input }]);
      setInput('');
    }
  };

  return (
    <div className="flex flex-col h-full p-4 bg-gray-50 rounded">
      <h3 className="font-bold mb-2">Chat</h3>
      <div className="flex-1 overflow-y-auto bg-white p-2 mb-2 rounded shadow-inner">
        {messages.map(message => (
          <div key={message.id} className="mb-1">
            <strong>{message.sender}:</strong> <span>{message.text}</span>
          </div>
        ))}
      </div>
      <div className="flex">
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Type a message"
          className="flex-1 p-2 border rounded-l"
        />
        <button onClick={sendMessage} className="bg-blue-500 text-white p-2 rounded-r">
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
