'use client'
 
import { CalendarIcon } from '@radix-ui/react-icons'
import { format } from 'date-fns'
import * as React from 'react'
import { DateRange } from 'react-day-picker'
 
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { cn } from '@/lib/utils'
 
type DatePickerProps = {
    dateRange: DateRange
    setDateRange: React.Dispatch<React.SetStateAction<DateRange>>
    }
export default function DatePicker({
  className,
  dateRange,
  setDateRange
}: DatePickerProps & React.HTMLAttributes<HTMLDivElement>) {

  React.useEffect(() => {
    setDateRange(dateRange)
  }, [dateRange])
  return (
    <div className={cn('grid gap-2', className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id='date'
            variant={'outline'}
            className={cn(
              'w-[300px] justify-start text-left font-normal',
              !dateRange && 'text-muted-foreground'
            )}
          >
            <CalendarIcon className='mr-2 h-4 w-4' />
            {dateRange?.from ? (
              dateRange.to ? (
                <>
                  {format(dateRange.from, 'LLL dd, y')} -{' '}
                  {format(dateRange.to, 'LLL dd, y')}
                </>
              ) : (
                format(dateRange.from, 'LLL dd, y')
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className='w-auto p-0' align='start'>
          <Calendar
            initialFocus
            mode='range'
            defaultMonth={dateRange?.from}
            selected={dateRange}
            onSelect={(range) => setDateRange(range as DateRange)}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}