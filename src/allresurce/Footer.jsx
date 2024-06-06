import React, { useContext } from 'react'
import { Test } from '../Context/Export'

const Footer = () => {
    const { theme } = useContext(Test)

  return (
    <>
    <footer className={`open ${theme === "light" ? "bg-infin text-black" : "bg-black text-white"} pt-20`}>
        <div className='flex flex-row justify-between w-[1110px] mx-[200px]'>
            <p className='flex flex-row text-[14px] items-center'><img src="/src/image/phon.png" alt="" />Phone: +88019 339 702 520</p>
            <p className='flex flex-row text-[14px] items-center'><img src="/src/image/metka.png" alt="" />Adress: 30 North Wes New</p>
            <input type="email" placeholder='Enter your email' className='w-[350px] p-2 bg-infin' />
        </div>
        <div className='flex flex-row items-center justify-between w-[1110px] mt-20 mx-[200px]'>
            <div>
                <img src="/src/image/Group 8.png" alt="" />
                <p className='text-[14px] w-[444px]'>Donec et nibh maximus, congue est eu, mattis nunc. Praesent ut quam quis quam venenatis fringilla. Morbi vestibulum</p>
            </div>
            <div className='flex flex-row gap-2 mt-16'>
                <div className='w-[46px] h-[46px] flex justify-center items-center border-2 cursor-pointer border-black rounded-lg'><img src="/src/image/Vector (1).png" alt="" /></div>
                <div className='w-[46px] h-[46px] flex justify-center items-center border-2 cursor-pointer border-black rounded-lg'><img src="/src/image/Vector (2).png" alt="" /></div>
                <div className='w-[46px] h-[46px] flex justify-center items-center border-2 cursor-pointer border-black rounded-lg'><img src="/src/image/Vector (3).png" alt="" /></div>
            </div>
        </div>
        <div className='flex border-t-2 border-orange-500  justify-center py-4 mt-24'>
            <p className='text-[14px] text-gray-500'>ALL RIGHT RESERVED © 2022</p>
        </div>
    </footer>
    </>
  )
}

export default Footer;