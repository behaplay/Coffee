import { Button } from '@material-tailwind/react'
import React, { useContext } from 'react'
import { Test } from '../Context/Export'

const Buyer = () => {
    const { theme } = useContext(Test)
    return (
        <>
            <section className={`open flex justify-center items-center flex-row ${theme === "light" ? "bg-white text-black" : "bg-black text-white"}`}>
                <div className='flex flex-col gap-7'>
                    <h2 className='text-[55px] xio w-[660px]'>COFFEE MACHINE,BUY
                        FOR HOME</h2>
                    <p className='w-[676px] text-[16px] text-gray-500'>Donec et nibh maximus, congue est eu, mattis nunc. Praesent ut quam quis quam
                        venenatis fringilla. Morbi vestibulum id tellus mmodo mattis. Aliquam erat volutpat.</p>
                    <p className='w-[641px]'>mattis nunc. Praesent ut quam quis quam venenatis fringilla. Morbi vestibulum
                        id tellus mmodo mattis.</p>
                    <Button variant='gradient' className='rounded-none w-[150px]'>Discover Now</Button>
                </div>
                <img src="/src/image/Group 12.png" className='w-[360px] h-[600px]' alt="" />
            </section>
            {/* <section className='hidden'>
                <textarea name="werty" className='border-2 border-black w-[400px]' id="" placeholder='ghbjnkm' cols="30"></textarea>
            </section> */}
        </>
    )
}

export default Buyer;
