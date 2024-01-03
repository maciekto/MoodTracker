import { groupBy } from 'lodash';

import { Mood } from '@/types/moodTypes';

import { months } from './Utils';

export const chartData = (moods: Mood[]) => {

  const sortedMoods = moods.sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime());      
  const moodsYears = sortedMoods.map((mood) => mood.createdAt.getFullYear());

  const getAverageValue = (processedData: Record<string, Mood[]>) => {
    const averageValues: number[] = [];

    for (const year of Object.keys(processedData)) {
      const yearMoods = processedData[year];
      if (yearMoods) {
        const totalValue = yearMoods.reduce((sum, mood) => sum + mood.value, 0);
        const averageValue = totalValue / yearMoods.length;
        averageValues.push(Math.round(averageValue));
      }
    }

    return averageValues;
  };


  if(new Set(moodsYears).size > 1) {
    const processedData = groupBy(sortedMoods, (mood) => mood.createdAt.getFullYear());
    const chartDataYears = {
      labels: Object.keys(processedData),
      datasets: [
        {
          label: 'Average mood by year',
          data: getAverageValue(processedData),
          fill: false,
          backgroundColor: '#FF6384',
          borderColor: '#FF6384',
        },
      ],
    }
    return chartDataYears;
  }

  const moodsMonths = sortedMoods.map((mood) => mood.createdAt.getMonth());
  if(new Set(moodsMonths).size > 1) {
    const processedData = groupBy(sortedMoods, (mood) => mood.createdAt.getMonth());
    const chartDataMonths = {
      labels: months({ months: Object.keys(processedData).map((key) => Number(key))}),
      datasets: [
        {
          label: 'Average mood by month',
          data: getAverageValue(processedData),
          fill: false,
          backgroundColor: '#FF6384',
          borderColor: '#FF6384',
        },
      ],
    }
    return chartDataMonths;
  }

  const moodsDays = sortedMoods.map((mood) => mood.createdAt.getDate());
  if(new Set(moodsDays).size > 1) {
    console.log('siema')
    const processedData = groupBy(sortedMoods, (mood) => mood.createdAt.getDate());
    const chartDataDays = {
      labels: Object.keys(processedData),
      datasets: [
        {
          label: 'Average mood by day',
          data: getAverageValue(processedData),
          fill: false,
          backgroundColor: '#FF6384',
          borderColor: '#FF6384',
        },
      ],
    }
    return chartDataDays;
  }
  const data = {
    labels: months({ count: 12, section: 3 }),
    datasets: [
      {
        label: 'Moods',
        data: moods.map((mood) => mood.value),
        fill: false,
        backgroundColor: '#FF6384',
        borderColor: '#FF6384',
      },
    ],
  };
  return data;
}