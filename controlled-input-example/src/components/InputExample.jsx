import React, { useState } from 'react';

function InputExample() {
  const [text, setText] = useState('');

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  const resetInput = () => {
    setText(''); 
  };

  return (
    <div>
      <h2>Controlled vs Uncontrolled Input</h2>

      {/* Example WITHOUT value={text} */}
      <div>
        <h3>Without value:</h3>
        <input
          type="text"
          placeholder="Type here (uncontrolled)"
          onChange={handleInputChange}
        />
        <button onClick={resetInput}>Reset</button>
        <p>State: {text}</p>
      </div>

      <hr />

      {/* Example WITH value={text} */}
      <div>
        <h3>With value:</h3>
        <input
          type="text"
          placeholder="Type here (controlled)"
          value={text}
          onChange={handleInputChange}
        />
        <button onClick={resetInput}>Reset</button>
        <p>State: {text}</p>
      </div>
    </div>
  );
}

export default InputExample;
