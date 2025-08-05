import { useState, forwardRef, useImperativeHandle } from "react";
import { cardsData, PeriodKey } from "../data/cardsData";
import AnimatedYearRange from "./YearCards";
import "./CircleButton.css";

type Props = {
  onSelect: (periodKey: string) => void;
  selectedKey: PeriodKey;
};

export type CircleButtonHandle = {
  goToNext: () => void;
  goToPrev: () => void;
};

const keys = Object.keys(cardsData);

const keyTitles: Record<string, string> = {
  "1": "Наука",
  "2": "Образование",
  "3": "История",
  "4": "Кино",
  "5": "Технологии",
  "6": "Литература"
}

const CircleButton = forwardRef<CircleButtonHandle, Props>(
  ({ onSelect, selectedKey }, ref) => {
    const buttonCount = keys.length;
    const radius = 280;
    const [rotation, setRotation] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleClick = (index: number) => {
      const anglePerButton = 360 / buttonCount;
      const targetAngle = index * anglePerButton;
      setRotation(-targetAngle);
      setCurrentIndex(index);
      const periodKey = keys[index];
      onSelect(periodKey);
    };

    const goToNextButton = () => {
      const nextIndex = (currentIndex + 1) % buttonCount;
      handleClick(nextIndex);
    };

    const goToPrevious = () => {
      const previousIndex = (currentIndex - 1 + buttonCount) % buttonCount;
      handleClick(previousIndex);
    };

    useImperativeHandle(ref, () => ({
      goToNext: goToNextButton,
      goToPrev: goToPrevious
    }));

    return (
        <div className="circle-wrapper">
          <div className="button-name" key={selectedKey}>{keyTitles[selectedKey]}</div>
        <div
          className="circle"
          style={{
            transform: `rotate(${rotation}deg)`,
            transition: "transform 1s ease-in-out"
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
                className={`circle-btn ${selectedKey === key ? 'active' : ''}`}
                style={{
                  transform: `translate(${x}px, ${y}px) rotate(${-rotation}deg)`
                }}
                onClick={() => handleClick(i)}
              >
                <span className="circle-btn-text">{key}</span>
              </button>
            );
          })}
        </div>
        <AnimatedYearRange selectedKey={selectedKey} />
      </div>
    );
  }
);

export default CircleButton;
