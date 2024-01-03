'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react';
import { useForm } from 'react-hook-form'
import * as z from 'zod'


import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { api } from '@/trpc/react'

import IconWithText from '../ui/iconWithText';
import { Input } from '../ui/input'


const formSchema = z.object({
  mood: z.string().min(1).max(1),
  description: z.string().max(100).optional(),
})

export default function MoodDialog({setOpen}: {setOpen: React.Dispatch<React.SetStateAction<boolean>>}) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      mood: '0',
      description: '',
    },
  })
  const {mutate: addMood} = api.mood.createMood.useMutation({onSuccess: () => setOpen(false)})

  function onSubmit(values: z.infer<typeof formSchema>) {
    addMood({value: parseInt(values.mood), description: values.description || undefined})
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8 w-full h-full'>
        <FormField
          control={form.control}
          name='mood'
          render={({ field }) => (
            <FormItem className='h-[70%]'>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value.toString()}
                  className='grid grid-cols-2 grid-rows-5 space-y-1 justify-between flex-wrap justify-items-center h-full pt-10 pb-10'
                >
                  <FormItem className='flex items-center space-x-3 space-y-0 col-start-1 col-end-1 row-start-1 row-end-2'>
                    <FormControl>
                      <RadioGroupItem value='1'  className='hidden peer sr-only'/>
                    </FormControl>
                    <FormLabel className='text-center peer-aria-checked:scale-125 transition-all duration-300 ease-in-out'>
                      <IconWithText size='xl' type='sad' vertical>Sad</IconWithText>
                    </FormLabel>
                  </FormItem>
                  <FormItem className='flex items-center space-x-3 space-y-0 col-start-2 col-end-2 row-start-2 row-end-3'>
                    <FormControl>
                      <RadioGroupItem value='2' className='hidden peer sr-only'/>
                    </FormControl>
                    <FormLabel className='text-center peer-aria-checked:scale-125 transition-all duration-300 ease-in-out'>
                      <IconWithText size='xl' type='angry' vertical>Angry</IconWithText>
                    </FormLabel>
                  </FormItem>
                  <FormItem className='flex items-center space-x-3 space-y-0 col-start-1 col-end-1 row-start-3 row-end-4'>
                    <FormControl>
                      <RadioGroupItem value='3'  className='hidden peer sr-only'/>
                    </FormControl>
                    <FormLabel className='text-center peer-aria-checked:scale-125 transition-all duration-300 ease-in-out'>
                      <IconWithText size='xl' type='normal' vertical>Normal</IconWithText>
                    </FormLabel>
                  </FormItem>
                  <FormItem className='flex items-center space-x-3 space-y-0 col-start-2 col-end-2 row-start-4 row-end-5'>
                    <FormControl>
                      <RadioGroupItem value='4'  className='hidden peer sr-only'/>
                    </FormControl>
                    <FormLabel className='text-center peer-aria-checked:scale-125 transition-all duration-300 ease-in-out'>
                      <IconWithText size='xl' type='happy' vertical>Happy</IconWithText>
                    </FormLabel>
                  </FormItem>
                  <FormItem className='flex items-center space-x-3 space-y-0 col-start-1 col-end-1 row-start-5 row-end-6'>
                    <FormControl>
                      <RadioGroupItem value='5'  className='hidden peer sr-only'/>
                    </FormControl>
                    <FormLabel className='text-center peer-aria-checked:scale-125 transition-all duration-300 ease-in-out'>
                      <IconWithText size='xl' type='funny' vertical>Happy</IconWithText>
                    </FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
            
          )}
        />
        <FormField
          control={form.control}
          name='description'
          render={({ field }) => (  
            <FormItem className='flex flex-col items-center w-full flex-grow-5 pt-5 space-y-2' >
              <FormLabel htmlFor='description'>Enter description of your mood</FormLabel>
              <Input id='description' placeholder='...' {...field}/>
            </FormItem>)} />
        <Button type='submit' size='lg'>Submit</Button>
      </form>
    </Form>
  )
}
