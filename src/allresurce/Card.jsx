import { Button } from '@material-tailwind/react'
import React, { useContext } from 'react'
import { Test } from '../Context/Export'

const Card = () => {
    const { theme } = useContext(Test)

    return (
        <>
            <section className={`open ${theme === "light" ? "bg-infin text-black" : "bg-black text-white"} pt-28 pb-20`}>
                <div className='flex justify-center items-center flex-col'>
                    <Button variant='gradient' className='rounded-none'>FROM OUR BLOG</Button>
                    <h2 className='text-[55px] xio mb-8'>OUR NEWS & ARTICLES</h2>
                </div>
                <div className='flex flex-row items-center gap-9 justify-center'>
                    <div className='w-[350px] h-[454px] bg-black text-white'>
                        <img src="/src/image/restaurant-interior 1.png" alt="" />
                        <div className='flex flex-col px-5 mt-3 gap-2'>
                            <span>BY: Cafena / Burger / Apr 30, 2022</span>
                            <h4 className='W-[251px] xio text-[20px]'>Build A Cool Morning With
                                Cafena Coffee</h4>
                            <a href="" className='text-[14px] text-orange-600'>READ MORE&#x2192;</a>
                        </div>
                    </div>
                    <div className='w-[350px] h-[454px] bg-black text-white'>
                        <img src="/src/image/ter.png" alt="" />
                        <div className='flex flex-col px-5 mt-3 gap-2'>
                            <span>BY: Cafena / Burger / Apr 30, 2022</span>
                            <h4 className='W-[251px] xio text-[20px]'>Build A Cool Morning With
                                Cafena Coffee</h4>
                            <a href="" className='text-[14px] text-orange-600'>READ MORE&#x2192;</a>
                        </div>
                    </div>
                    <div className='w-[350px] h-[454px] bg-black text-white'>
                        <img src="/src/image/Mask Group (6).png" alt="" />
                        <div className='flex flex-col px-5 mt-3 gap-2'>
                            <span>BY: Cafena / Burger / Apr 30, 2022</span>
                            <h4 className='W-[251px] xio text-[20px]'>Build A Cool Morning With
                                Cafena Coffee</h4>
                            <a href="" className='text-[14px] text-orange-600'>READ MORE&#x2192;</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Card;