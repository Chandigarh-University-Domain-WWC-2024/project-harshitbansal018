import React, { useState } from 'react';
import './Community.css';

const Community = ({ addPoints }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [image, setImage] = useState(null);

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, image }]);
      addPoints(input.trim().toLowerCase()); // Award points based on input
      setInput('');
      setImage(null); // Reset image after sending
    }
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <section id="community" className="community">
      <h1>Community Engagement</h1>

      {/* Eco-friendly Tourism Information Section */}
      <div className="eco-tourism-info">
        <h4>About Eco-friendly Tourism</h4>
        <p>
          Eco-friendly tourism, also known as sustainable tourism, focuses on
          preserving the natural environment and minimizing the negative
          impacts of tourism. It promotes cultural awareness, conserves natural
          resources, and ensures local communities benefit economically.
        </p>
        <h4>Benefits of Eco-friendly Tourism:</h4>
        <ul>
          <li>
            <strong>Environmental Protection:</strong> Reduces pollution and
            waste while conserving biodiversity and ecosystems.
          </li>
          <li>
            <strong>Economic Growth:</strong> Supports local businesses and
            provides employment opportunities.
          </li>
          <li>
            <strong>Cultural Preservation:</strong> Encourages respect for
            local traditions and heritage.
          </li>
          <li>
            <strong>Health Benefits:</strong> Promotes outdoor activities,
            reducing stress and improving well-being.
          </li>
        </ul>
      </div>

      {/* Chat Section */}
      <div className="chat-box">
        {messages.map((msg, index) => (
          <div key={index} className="message">
            <p>{msg.text}</p>
            {msg.image && (
              <img src={msg.image} alt="Proof" className="proof-image" />
            )}
          </div>
        ))}
      </div>

      {/* Input Section */}
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Share your eco-friendly tips..."
      />
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      <button onClick={handleSend}>Send</button>
    </section>
  );
};

export default Community;
