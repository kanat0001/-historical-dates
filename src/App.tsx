import React from 'react'
import { useState } from 'react';

function App() {
  const data = {
    '1': [
      {id: 1, text: 'Запуск спутника'},
      {id: 2, text: 'Запуск второго спутника'},
      {id: 3, text: 'Запуск третьего спутника'},
      {id: 4, text: 'Запуск четвертого спутника'},
    ],
    '2':[
      {id: 5, text: 'запуск пятого спутника'},
      {id: 6, text: 'запуск шестого спутника'},
      {id: 7, text: 'запуск седьмого спутника'},
      {id: 8, text: 'запуск восьмого спутника'},
    ],
    '3': [
      {id: 1, text: 'Запуск спутника'},
      {id: 2, text: 'Запуск второго спутника'},
      {id: 3, text: 'Запуск третьего спутника'},
      {id: 4, text: 'Запуск четвертого спутника'},
    ],
    '4': [
      {id: 1, text: 'Запуск спутника'},
      {id: 2, text: 'Запуск второго спутника'},
      {id: 3, text: 'Запуск третьего спутника'},
      {id: 4, text: 'Запуск четвертого спутника'},
    ],
    '5': [
      {id: 1, text: 'Запуск спутника'},
      {id: 2, text: 'Запуск второго спутника'},
      {id: 3, text: 'Запуск третьего спутника'},
      {id: 4, text: 'Запуск четвертого спутника'},
    ],
    '6': [
      {id: 1, text: 'Запуск спутника'},
      {id: 2, text: 'Запуск второго спутника'},
      {id: 3, text: 'Запуск третьего спутника'},
      {id: 4, text: 'Запуск четвертого спутника'},
    ] as const,
  };
  type PeriodKey = keyof typeof data;

  const [historyButton, setHistoryButton] = useState<PeriodKey>('1')
  

  




  

  return (
   <div>
    <h1>исторические даты</h1>
    <div>
      {Object.keys(data).map((key)=> (
        <button
        key={key}
        onClick={()=> setHistoryButton(key as PeriodKey)}>
          Период {key}
        </button>
      ))}
    </div>

    <div>
      {data[historyButton].map((item) => (
        <div key={item.id}>{item.text}</div>
      ))}
    </div>
   </div>
  )
}

export default App