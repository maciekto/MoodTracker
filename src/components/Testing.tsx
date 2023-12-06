'use client'

import React from 'react'

import { api } from '@/trpc/react'

function Testing() {

  const utils = api.useContext();
  const {mutate: addMood1} = api.mood.createMood.useMutation({onSuccess: () => {utils.mood.getMoods.invalidate()}});
  const {mutate: addMood2} = api.mood.createMood.useMutation({onSuccess: () => {utils.mood.getMoods.invalidate()}});
  const { data: moods, isLoading } = api.mood.getMoods.useQuery();
  return (
    <div> <div>
      <button onClick={() => addMood1({value: 5})}>Add Mood</button>
      <button onClick={() => addMood2({value: 5, description: 'siema'})}>Add Mood2</button>
      <div>
        <form>
          <label>
            Mood:
            <input type='number' name='name' />
          </label>
          <input type='submit' value='Submit' />
        </form>
      </div>
      <div>
        {isLoading && <div>Loading...</div>}
        {isLoading === false && moods?.map((mood) => (
          <div key={mood.id}>
            <div>{mood.value}</div>
            <div>{mood.description}</div>
          </div>
        ))}
      </div>

    </div></div>
  )
}

export default Testing