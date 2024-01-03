import happyIcon from './../assets/icons/happyIcon.svg'


export default function everyDayNotification() {
  const notifTitle = 'Daily reminder!';
  const notifBody = `It's time to track your mood!`;
  const notifImg = happyIcon;
  const options = {
    title: notifTitle,
    body: notifBody,
    icon: notifImg,
  };

  // const everyDayInterval = setInterval(() => {
  //   if(new Date().getHours() === 1) {
  //     new Notification(notifTitle, options);
  //   }
  // }, 3600000)
  // return everyDayInterval


  const everyDayInterval = setInterval(() => {
    console.log('siemano')
  }, 1000)
  return everyDayInterval
}



