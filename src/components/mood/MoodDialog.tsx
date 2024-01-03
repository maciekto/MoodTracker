'use client'
import React from 'react'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

import MoodForm from './MoodForm'

export default function MoodDialog () {

  const [open, setOpen] = React.useState(false)
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant='homePageCTA' size='lg'>Submit mood</Button>
      </DialogTrigger>
      <DialogContent className='max-h-screen h-[95vh] flex flex-col sm:rounded-[50px] rounded-[50px] p-8'>
        <DialogHeader className=''>
          <DialogTitle>How are you feeling today?</DialogTitle>
          <DialogDescription>
            Select one of the following moods and add optional description
          </DialogDescription>
        </DialogHeader>
        <div className='flex items-center justify-center w-full h-full'>
          <MoodForm setOpen={setOpen}/>
        </div>
      </DialogContent>
    </Dialog>
  )
}

