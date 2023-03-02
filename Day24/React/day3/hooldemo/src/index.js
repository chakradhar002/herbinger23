import React, { useState } from "react";
import ReactDOM from "react-dom/client";

function FavColor() {
  const [color, setColor] = useState('red');
  const [textColor, setTextColor] = useState('white');
  return (
    <div>
      <body bgColor={color}>
        <h1>My favorite color is !</h1>
        <button style={{ background: color, color: textColor }}
          className='btn btn-primary'
          onClick={() => {
            setColor("black");
            setTextColor('red')
          }}>Click here</button>
      </body>

      </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FavColor />);