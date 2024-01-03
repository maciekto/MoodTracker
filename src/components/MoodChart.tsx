
'use client'
import { BubbleDataPoint, ChartData, ChartTypeRegistry, Point } from 'chart.js';
import React from 'react';
import {useState} from 'react'
import { DateRange } from 'react-day-picker'

import { chartData } from '@/helpers/chart';
import {api } from '@/trpc/react'

import DataChart from './DataChart';
import DatePicker from './DatePicker';


const MoodChart: React.FC = () => {

  const [dateRange, setDateRange] = useState<DateRange>({from: new Date(2021, 6, 1), to: new Date(2023, 12, 8)})

  const { data: moods, isLoading } = api.mood.getMoodsByDate.useQuery({
    from: dateRange?.from ?? new Date(),
    to: dateRange?.to ?? new Date(),
  })
  console.log(moods)
  let lineChartData = {}  as ChartData<keyof ChartTypeRegistry, (number | Point | [number, number] | BubbleDataPoint | null)[], unknown>
  if(moods !== undefined) {
    lineChartData = chartData(moods)
    console.log('linechartdata')
    console.log(lineChartData)
  }

  return (
    
    <div className='grow flex flex-col justify-center items-center'>
      <DatePicker dateRange={dateRange} setDateRange={setDateRange}/>
      <DataChart type='line' data={lineChartData} options={{responsive: true}}/>
    </div>
  )
}

export default MoodChart
