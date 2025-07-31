import React from "react";
import { useState } from "react";
import {cardsData} from '../data/cardsData'


import './CircleButton.css'
type Props ={
    onSelect: (periodKey: string) => void;
}

const keys = Object.keys(cardsData)

const CircleButton: React.FC<Props> = ({onSelect}) => {

  const buttonCount = keys.length;
  const radius = 200;
  const [rotation, setRotation] = useState(0);

  const handleClick = (index: number) => {
    const anglePerButton = 360 / buttonCount;
    const targetAngle = index * anglePerButton; 
    setRotation(-targetAngle)

    const periodKey = keys[index]
    onSelect(periodKey)
    console.log('🔘 Выбранный ключ:', periodKey);

  };
  return (
    <div className="circle-wrapper">
      <div
        className="circle"
        style={{
          transform: `rotate(${rotation}deg)`,
          transition: 'transform 1s ease-in-out',
        }}
      >
        {keys.map((key, i) => {
          const angle = (360 / buttonCount) * i - 60;
          const rad = (angle * Math.PI) / 180;
          const x = Math.cos(rad) * radius;
          const y = Math.sin(rad) * radius;

          return (
            <button
              key={i}
              className="circle-btn"
              style={{
                transform: `translate(${x}px, ${y}px) rotate(${-rotation}deg)`,
              }}
              onClick={() => handleClick(i)}
            >
              {key}
            </button>
          );
        })}
      </div>
    </div>
  );

} 

export default CircleButton