import React, { useState, useRef, useEffect } from 'react'
import { cardsData, PeriodKey } from '../data/cardsData'
import './Cards.css'

type Props = {
  period: PeriodKey
}

const Cards: React.FC<Props> = ({ period }) => {
  const items = cardsData[period]
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const [visible, setVisible] = useState(true)
  const prevPeriod = useRef(period)

  useEffect(() => {
    if (prevPeriod.current !== period) {
      setVisible(false)
      setTimeout(() => {
        setVisible(true)
        prevPeriod.current = period
      }, 400) 
    }
  }, [period])

  const scrollBy = (distance: number) => {
    containerRef.current?.scrollBy({ left: distance, behavior: 'smooth' })
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    const container = containerRef.current
    if (!container) return
    setIsDragging(true)
    setStartX(e.pageX - container.offsetLeft)
    setScrollLeft(container.scrollLeft)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    const container = containerRef.current
    if (!isDragging || !container) return
    e.preventDefault()
    const x = e.pageX - container.offsetLeft
    const walk = (x - startX) * 0.7
    container.scrollLeft = scrollLeft - walk
  }

  const handleMouseUp = () => setIsDragging(false)
  const handleMouseLeave = () => setIsDragging(false)

  return (
    <div className="cards-wrapper">
      <button className="arrow left" onClick={() => scrollBy(-200)}>&lt;</button>

      <div
        className="cards"
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        {items.map((item) => (
          <div className={`card${!visible ? ' hide' : ''}`} key={item.id}>
            <h3 className='card-years'>{item.id}</h3>
            <p className='card-content'>{item.text}</p>
          </div>
        ))}
      </div>

      <button className="arrow right" onClick={() => scrollBy(200)}>&gt;</button>
    </div>
  )
}

export default Cards