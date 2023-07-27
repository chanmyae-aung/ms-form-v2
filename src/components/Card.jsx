import React from 'react'
import { useGetPlanQuery } from '../api/planApi'

export default function Card({icon, text, priceString, promotion, selectedCard}) {
  // console.log(selectedCard)
  return (
    <div className={`${selectedCard && "selected"} border p-3 flex lg:flex-col items-start gap-5 w-full h-fit card rounded-lg lg:w-[33.333%]`}>
        <img src={icon} alt="" className='lg:mb-10 w-10 h-10'/>
        <div className='text-slate-500'>
            <h4>{text}</h4>
            <p>{priceString}</p>
            <p>{promotion}</p>
        </div>
    </div>
  )
}
