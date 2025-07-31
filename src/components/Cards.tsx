import React from 'react'
import {cardsData, PeriodKey} from '../data/cardsData'

type Props = {
    period: PeriodKey
}

const Cards: React.FC<Props> = ({period}) =>{
    const items = cardsData[period]

    return(
        <div>
            {items.map((item)=> (
                <div key={item.id}>{item.text}</div>
            ))}
        </div>
    )
}

export default Cards