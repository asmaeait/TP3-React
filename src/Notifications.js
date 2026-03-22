// Composant notifications conditionnel - Asma Ait Elmahjoub
import { useState } from 'react';

function Notifications() {
  const [notifications, setNotifications] = useState(3);

  return (
    <div>
      {notifications > 0 ? (
        <p>🔔 Vous avez <strong>{notifications}</strong> notification(s) non lues !</p>
      ) : (
        <p>✅ Aucune nouvelle notification.</p>
      )}
      <button onClick={() => setNotifications(notifications + 1)}>
        Ajouter une notification
      </button>
      <button onClick={() => setNotifications(0)}>
        Tout marquer comme lu
      </button>
    </div>
  );
}

export default Notifications;