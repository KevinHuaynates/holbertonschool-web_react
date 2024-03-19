// task_2/dashboard/src/Notifications.js
import React from 'react';
import './Notifications.css';
import { getLatestNotification } from './utils';

function Notifications() {
  const handleClick = () => {
    console.log("Close button has been clicked");
  };

  return (
    <div className="Notifications">
      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li className="latest-notification" dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
      </ul>
      <button
        style={{
          float: 'right',
          position: 'absolute',
        }}
        aria-label="Close"
        onClick={handleClick}
      >
        <img src= "close-icon.png" alt="Close icon" />
      </button>
    </div>
  );
}

export default Notifications;

