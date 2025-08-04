import React, { useRef } from 'react'
import { useState } from 'react';
import {cardsData, PeriodKey} from './data/cardsData'
import Cards from './components/Cards'
import CircleButton, { CircleButtonHandle } from './components/CircleButton';
import AnimatedYearRange from './components/YearCards';
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import './App.css'


const App: React.FC = () => {
  const [historyButton, setHistoryButton] = useState<PeriodKey>('1')
  const [selectedKey, setSelectedKey] = useState<PeriodKey>('1')
  const circleRef = useRef <CircleButtonHandle>(null)

  const handleSelect = (key: string) => {
    setSelectedKey(key as PeriodKey)
  }
  console.log(`${historyButton} активная кнопка`)
 return (
    <div className="page">
      <div className="background">
        <div className="line vertical" />
        <div className="line horizontal" />
        <div className="ring" />
      </div>


        <div className='content'>

          <h1>исторические <br /> даты</h1>

          <CircleButton 
          onSelect={(key) => setHistoryButton(key as PeriodKey)}
          selectedKey={historyButton}
          ref={circleRef}
          />

          <div  className='circle-button'>

            <p>0{historyButton}/ 06</p>
            <div>
              <button className='circle-button-prev' onClick={()=> circleRef.current?.goToPrev()}><GrPrevious /></button>
              <button className='circle-button-next' onClick={()=> circleRef.current?.goToNext()}><GrNext /></button></div>              
          </div>

          <Cards period={historyButton}/>
        </div>
    </div>
  );
}

export default App
