import React from 'react'
import Tabs from './Tabs'

const Sidebar = () => {
  return (
    <div className='lg:w-[30%] h-[96] flex lg:block bg-green-300 bg-img bg-mobile justify-center lg:justify-start gap-5 lg:rounded-xl p-8'>
        <Tabs classes={'sub-title'} step={"1"} text={"YOUR INFO"}/>
        <Tabs classes={'sub-title'} step={"2"} text={"SELECT PLAN"}/>
        <Tabs classes={'sub-title'} step={"3"} text={"ADD-ONS"}/>
        <Tabs classes={'sub-title'} step={"4"} text={"SUMMARY"}/>
    </div>
  )
}

export default Sidebar