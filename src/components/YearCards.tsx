import { useEffect, useState } from "react"
import { cardsData, PeriodKey } from "../data/cardsData"
import './YearCards.css'

type Card ={
    id: string 
    text: string
}

type Props ={
    selectedKey: PeriodKey
}

const AnimatedYearRange: React.FC<Props> = ({ selectedKey }) => {
  const items = cardsData[selectedKey]
  const years = items.map((item) => Number(item.id))
  const targetMin = Math.min(...years)
  const targetMax = Math.max(...years)

  const [displayMin, setDisplayMin] = useState(targetMin)
  const [displayMax, setDisplayMax] = useState(targetMax)

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayMin((prev) =>
        prev === targetMin ? prev : prev < targetMin ? prev + 1 : prev - 1
      )

      setDisplayMax((prev) =>
        prev === targetMax ? prev : prev < targetMax ? prev + 1 : prev - 1
      )
    }, 40)

    return () => clearInterval(interval)
  }, [targetMin, targetMax])

  return (
    <div className="year-range">
      <p className="year">
        <span className="year-min">{displayMin}</span>
        &nbsp;&nbsp;&nbsp;
        <span className="year-max">{displayMax}</span></p>
    </div>
  )
}

export default AnimatedYearRange