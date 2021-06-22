import LandlordNotifications from './LandlordNotifications';

// https://stackoverflow.com/questions/64048718/how-to-integrate-pwa-with-next-js-to-allow-for-notifications-and-push-notificati
function notifyMe() {
  // Let's check if the browser supports notifications
  if (!('Notification' in window)) {
    alert('This browser does not support desktop notification');
  }

  // Let's check whether notification permissions have already been granted
  else if (Notification.permission === 'granted') {
    // If it's okay let's create a notification
    var notification = new Notification('Hi there!');
  }

  // Otherwise, we need to ask the user for permission
  else if (Notification.permission !== 'denied') {
    Notification.requestPermission().then(function(permission) {
      // If the user accepts, let's create a notification
      if (permission === 'granted') {
        var notification = new Notification('Hi there!');
      }
    });
  }

  // At last, if the user has denied notifications, and you
  // want to be respectful there is no need to bother them any more.
}

//https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Re-engageable_Notifications_Push
const Notifications = () => {
  const _getNotificationPermission = () => {
    // return <div>Must be a NoSSR thing</div>;
    return Notification.permission;
  };
  return (
    <div>
      Iam all Notification settings
      {_getNotificationPermission()}
      <button onClick={() => notifyMe()}>Allow Notifications</button>
      <LandlordNotifications />
    </div>
  );
};

export default Notifications;
