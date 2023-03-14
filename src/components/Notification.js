import React from 'react';

function Notification({showNotification}) {
  return (
<div className={`notification-container ${showNotification ? 'show' : ''}`}>
      <p>Вы уже вводили эту букву</p>
    </div>
  )
}

export default Notification;



