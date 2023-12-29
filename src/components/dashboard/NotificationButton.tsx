'use client';

import randomNotification from '@/lib/notifications';
import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button';
import { api } from '@/trpc/react';

// TODO: Get user every time the button is clicked

export default function NotificationButton() {
  const [notifications, setNotifications] = useState(false);
  const user = api.user.getUser.useQuery();
    if(typeof user.data?.notifications === 'boolean' && user.data?.notifications !== notifications ) {
      setNotifications(user.data?.notifications);
    }
    
  const { mutate: updateNotificationsSettings } = api.user.updateUserNotification.useMutation({
    onSuccess: () => {
      console.log('Notifications settings updated to ' + !notifications)
      setNotifications(!notifications)
    }
  })

  

  // if(notifications) {
  //   randomNotification();
  // }
  

  function handleNotif() {
    //setNotifications(!notifications);
    updateNotificationsSettings({notifications: !notifications}) 
    // Notification.requestPermission().then((result) => {
    //   if(result === "granted") {
    //     randomNotification();
    //   }
    // })
  }
  useEffect(() => {}, [notifications, user])
  return (
    <Button type='button' size={'lg'} onClick={handleNotif}>Turn {notifications ? 'off' : 'on'} notifications</Button>
  )
}
