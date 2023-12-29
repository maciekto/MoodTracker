import happyIcon from './../assets/icons/happyIcon.svg'

export default function randomNotification() {
  const randomItem = 'randomItem';
  const notifTitle = 'Daily reminder';
  const notifBody = `Remember to check in your mood!`;
  const notifImg = happyIcon;
  const options = {
    title: notifTitle,
    body: notifBody,
    icon: notifImg,
  };
  new Notification(notifTitle, options);
  // setTimeout(randomNotification, 10000);
}