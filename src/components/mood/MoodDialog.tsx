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
        <Button variant='outline'>Submit mood</Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-md'>
        <DialogHeader>
          <DialogTitle>Add your current mood</DialogTitle>
          <DialogDescription>
            Select one of the following moods and add optional description
          </DialogDescription>
        </DialogHeader>
        <div className='flex items-center space-x-2'>
          <MoodForm setOpen={setOpen}/>
        </div>
    
      </DialogContent>
    </Dialog>
  )
}

