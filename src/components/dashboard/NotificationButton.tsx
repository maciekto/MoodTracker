'use client';

import randomNotification from '@/lib/notifications';
import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button';
import { api } from '@/trpc/react';

// TODO: Get user every time the button is clicked

export default function NotificationButton() {
  const { data, refetch  } = api.user.getUser.useQuery();
  const { mutate: updateNotificationsSettings } = api.user.updateUserNotification.useMutation({
    onSuccess: () => {
      refetch();
      console.log('Notifications settings updated to ' + !data?.notifications)
      if(data?.notifications == false) { randomNotification()}
    }
  })

  function handleNotif() {
    if(data?.notifications == true) {
      updateNotificationsSettings({notifications: !data?.notifications}) 
    }

    if(data?.notifications == false ) {
      Notification.requestPermission().then((result) => {
        if(result === "granted") {
          updateNotificationsSettings({notifications: !data?.notifications}) 
        }
      })
    }
    

    
  }
  useEffect(() => {}, [data?.notifications])
  return (
    <Button type='button' size={'lg'} onClick={handleNotif}>Turn {data?.notifications ? 'off' : 'on'} notifications</Button>
  )
}
