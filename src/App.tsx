import React from 'react'
import { useState } from 'react';
import {cardsData, PeriodKey} from './data/cardsData'
import Cards from './components/Cards'
import CircleButton from './components/CircleButton';

const App: React.FC = () => {
  const [historyButton, setHistoryButton] = useState<PeriodKey>('1')
  console.log('Текущий период:', historyButton);

  return (
   <div>
    <h1>исторические даты</h1>
    
    <CircleButton onSelect={(key) => setHistoryButton(key as PeriodKey)}/>

    <Cards period={historyButton}/>
   </div>
  )
}

export default App