import { Button } from '@material-tailwind/react'
import React, { useContext } from 'react'
import { Test } from '../Context/Export'

const Reyting = () => {
    const { theme } = useContext(Test)
    return (
        <>
            <section className={`open pt-32 pb-20  ${theme === "light" ? "bg-infin text-black" : "bg-black text-white"}`}>
                <div className='flex justify-between px-[204px] mb-14 items-center'>
                    <h2 className='text-[55px] xio'>Cafena Best Product</h2>
                    <Button variant='gradient' className='rounded-none'>Cafena Best Product</Button>
                </div>
                <div className='flex justify-center flex-row gap-8 items-centerx'>

                    <div className='bg-white text-gray-900 w-[350px] p-5 h-[454px]'>
                        <img src="/src/image/Group 18.png" className='w-[303px] h-[267px]' alt="" />
                        <div className='flex flex-col gap-3'>
                            <img src="/src/image/Group 22.png" className='w-[155px] h-[20px] mt-9' alt="" />
                            <h3 className='xio text-[24px]'>Vicaragua Coffee Beans</h3>
                            <span className='text-[16px] font-semibold'>Price:<a className='text-orange-600 text-[16px] font-semibold'>$25</a></span>
                        </div>
                    </div>
                    <div className='bg-white w-[350px] text-gray-900 p-5 h-[454px]'>
                        <img src="/src/image/Group 19.png" className='w-[303px] h-[267px]' alt="" />
                        <div className='flex flex-col gap-3'>
                            <img src="/src/image/Group 22.png" className='w-[155px] h-[20px] mt-9' alt="" />
                            <h3 className='xio text-[24px]'>Americano Coffee</h3>
                            <span className='text-[16px] font-semibold'>Price:<a className='text-orange-600 text-[16px] font-semibold'>$25</a></span>
                        </div>
                    </div>
                    <div className='bg-white w-[350px] p-5 text-gray-900 h-[454px]'>
                        <img src="/src/image/Group 20.png" className='w-[303px] h-[267px]' alt="" />
                        <div className='flex flex-col gap-3'>
                            <img src="/src/image/Group 22.png" className='w-[155px] h-[20px] mt-9' alt="" />
                            <h3 className='xio text-[24px]'>Virgin Coffee Gred</h3>
                            <span className='text-[16px] font-semibold'>Price:<a className='text-orange-600 text-[16px] font-semibold'>$25</a></span>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-center flex-col mt-28'>
                    <Button variant='gradient' className='rounded-none'>Cafena Best Product</Button>
                    <div className='flex flex-row items-center'>
                        <img src="/src/image/ret (1).png" className='cursor-pointer' alt="" />
                        <div className='flex flex-col items-center gap-3 px-[200px]'>
                            <h2 className='text-[55px] xio'>OUR CUSTOMER REVIEW</h2>
                            <p className='w-[562px] text-center'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem opposed to using 'Content here, content here..</p>
                            <img src="/src/image/beeen.png" className='rounded-full' alt="" />
                            <span className='xio text-[16px]'>Rasalida Williamson</span>
                        </div>
                        <img src="/src/image/ret (2).png"  className='cursor-pointer' alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Reyting;