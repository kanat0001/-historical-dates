import { useState, useRef } from 'react';
import {cardsData, PeriodKey} from './data/cardsData'
import Cards from './components/Cards'
import CircleButton, { CircleButtonHandle } from './components/CircleButton';
import './App.css'

//icons
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";


const App: React.FC = () => {
  const [historyButton, setHistoryButton] = useState<PeriodKey>('1')
  const [selectedKey, setSelectedKey] = useState<PeriodKey>('1')
  const circleRef = useRef <CircleButtonHandle>(null)
  const activePeriodDot = parseInt(historyButton, 10) - 1;

  const handleSelect = (key: string) => {
    setSelectedKey(key as PeriodKey)
  }


 return (
  <div className='app'>
    <div className='page'>
      <div className='background'>
        <div className="vertical-line" />
        <div className="horizontal-line" />
        <div className='ring'></div>
      </div>
      <div className='content'>
        <h1>исторические <br /> даты</h1>
             <div>
                  <CircleButton 
                  onSelect={(key) => setHistoryButton(key as PeriodKey)}
                  selectedKey={historyButton}
                  ref={circleRef}
                />
             </div>
             <div className='last-content'>
                <div  className='circle-button'>
                    <div>
                      <p >0{historyButton}/ 06</p>
                      <button className='circle-button-next' onClick={()=> circleRef.current?.goToPrev()}><GrPrevious /></button>
                      <button className='circle-button-prev' onClick={()=> circleRef.current?.goToNext()}><GrNext /></button>
                    </div>
                    <div className="period-dots-wrapper">
                      {[...Array(6)].map((_, index) => (
                      <button
                      key={index}
                      className={`period-dot ${index === activePeriodDot ? "active" : ""}`}
                      ></button>
                      ))}
                    </div>

                </div>
                  <div className='app-cards'>
                    <Cards period={historyButton}/>
                  </div>
             </div>
        </div>


    </div>
  </div>

  );
}

export default App