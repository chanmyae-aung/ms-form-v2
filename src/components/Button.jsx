import React from 'react'

export default function Button({text, onclick, createHandler}) {
  const ConfirmHandle = () => {
    // onclick,
    createHandler
  }
  return (
    <button onClick={ConfirmHandle} className='px-5 py-3 rounded bg-slate-800 text-white'>
       {text} 
    </button>
  )
}
