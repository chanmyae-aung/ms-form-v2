import React from 'react'
import thank from '../assets/images/icon-thank-you.svg'

export default function ThankYou() {
  return (
    <div className='flex flex-col items-center justify-center text-center gap-7'>
        <img src={thank} alt="" />
        <div>
            <h1 className='text-2xl font-bold'>Thank You!</h1>
            <p>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support,please feel free to email us at support@lorem.com</p>
        </div>
    </div>
  )
}
