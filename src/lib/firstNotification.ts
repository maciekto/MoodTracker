import happyIcon from './../assets/icons/happyIcon.svg'

export default function firstNotification() {
  const randomItem = 'randomItem';
  const notifTitle = 'Grettings!';
  const notifBody = `Hey, thanks for enabling the notifications! Now u can track your mood even better!`;
  const notifImg = happyIcon;
  const options = {
    title: notifTitle,
    body: notifBody,
    icon: notifImg,
  };
  new Notification(notifTitle, options);
  // setTimeout(randomNotification, 10000);
}

