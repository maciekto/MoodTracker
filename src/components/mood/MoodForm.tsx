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
    console.log(values)
    addMood({value: parseInt(values.mood), description: values.description || undefined})

  }


  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8 w-full'>
        <FormField
          control={form.control}
          name='mood'
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value.toString()}
                  className='flex flex-row space-y-1 justify-between flex-wrap '
                >
                  <FormItem className='flex items-center space-x-3 space-y-0'>
                    <FormControl>
                      <RadioGroupItem value='1'  className='hidden'/>
                    </FormControl>
                    <FormLabel className='font-normal'>
                    😥
                    </FormLabel>
                  </FormItem>
                  <FormItem className='flex items-center space-x-3 space-y-0'>
                    <FormControl>
                      <RadioGroupItem value='2' className='hidden'/>
                    </FormControl>
                    <FormLabel>
                    😡
                    </FormLabel>
                  </FormItem>
                  <FormItem className='flex items-center space-x-3 space-y-0'>
                    <FormControl>
                      <RadioGroupItem value='3'  className='hidden'/>
                    </FormControl>
                    <FormLabel className='font-normal'>😐</FormLabel>
                  </FormItem>
                  <FormItem className='flex items-center space-x-3 space-y-0'>
                    <FormControl>
                      <RadioGroupItem value='4'  className='hidden'/>
                    </FormControl>
                    <FormLabel className='font-normal'>😀</FormLabel>
                  </FormItem>
                  <FormItem className='flex items-center space-x-3 space-y-0'>
                    <FormControl>
                      <RadioGroupItem value='5'  className='hidden'/>
                    </FormControl>
                    <FormLabel className='font-normal'>🤣</FormLabel>
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
        <Button type='submit'>Submit</Button>
      </form>
    </Form>
  )
}
