import { Button } from '@material-tailwind/react'
import React, { useContext } from 'react'
import { Test } from '../Context/Export'

const Register = () => {
    const { theme } = useContext(Test)

  return (
    <>
    <section className={`open flex flex-row justify-center pt-14 ${theme === "light" ? "bg-infin text-black" : "bg-black text-white"} `}>
        <img src="/src/image/map.png" className='w-[587px]' alt="" />
        <div className='flex flex-col gap-2 items-center bg-white w-[523px] justify-center'>
            <span className='text-[14px] text-orange-600'>RESERVATION</span>
            <h3 className='text-[29px] xio'>BOOKING A TABLE</h3>
            <input type="text" placeholder='4 Person' className='w-[362px] h-[50px] bg-gray-300 p-4' />
            <input type="date" placeholder='12/06/2022' className='w-[362px] h-[50px] bg-gray-300 p-4'/>
            <input type="email" placeholder='Email' className='w-[362px] h-[50px] bg-gray-300 p-4'/>
            <Button variant='gradient' className='rounded-none mt-3'>Book a Table</Button>
        </div>

    </section>
    </>
  )
}

export default Register;