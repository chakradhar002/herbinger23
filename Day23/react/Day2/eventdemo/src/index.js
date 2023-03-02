import React from 'react';
import ReactDOM from 'react-dom/client';

import MessageWithEvent from './MessageWithEvent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MessageWithEvent name = "Hi"/>
 
  </React.StrictMode>
);

