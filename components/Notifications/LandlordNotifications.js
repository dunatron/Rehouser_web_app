const LandLordNotifications = () => {
  const randomNotification = () => {
    const notifTitle = 'Notification Title';
    const notifBody = `Here is the Notification Body`;
    const notifImg = `/icons/favicon-32x32.png`;
    const options = {
      body: notifBody,
      icon: notifImg,
    };
    new Notification(notifTitle, options);
    setTimeout(randomNotification, 30000);
  };
  const _getNotificationsPermissions = () => {
    Notification.requestPermission().then(result => {
      if (result === 'granted') {
        randomNotification();
      }
    });
  };
  return (
    <div>
      <button onClick={_getNotificationsPermissions}>
        Ask For notifications
      </button>
    </div>
  );
};

export default LandLordNotifications;
