import { Button } from '@material-tailwind/react'
import React, { useContext } from 'react'
import { Test } from '../Context/Export'

const Product = () => {
    const { theme } = useContext(Test)

    return (
        <>
            <section className={`open pt-24 pb-28 ${theme === "light" ? "bg-infin text-black" : "bg-black text-white"}`}>
                <div className='flex justify-center items-center flex-col gap-4'>
                    <Button variant='gradient' className='rounded-none'>Popular Product</Button>
                    <h2 className='text-[55px] xio mb-20'>Cafena Popular Product</h2>
                </div>
                <div className='flex flex-row items-center justify-center gap-12'>
                    <div className='flex flex-row items-center'>
                        <img src="/src/image/Mask Group (3).png" className='w-[160px] z-50 absolute h-[160px]' alt="" />
                        <div className={`border-4 ${theme === "light" ? "border-black" : "border-orange-600"} w-[475px] ml-8 pl-36 pt-4 z-40 h-[114px`}>
                            <h3 className='text-[30px] xio'>Vicaragua Coffee Beans</h3>
                            <span className='text-[20px] font-semibold text-orange-600 ml-64'>$29</span>
                        </div>
                    </div>
                    <div className='flex flex-row items-center'>
                        <img src="/src/image/Mask Group (3).png" className='w-[160px] z-50 absolute h-[160px]' alt="" />
                        <div className={`border-4 ${theme === "light" ? "border-black" : "border-orange-600"} w-[475px] ml-8 pl-36 pt-4 z-40 h-[114px`}>
                            <h3 className='text-[30px] xio'>Vicaragua Coffee Beans</h3>
                            <span className='text-[20px] font-semibold text-orange-600 ml-64'>$29</span>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row items-center justify-center gap-12 mt-20'>
                    <div className='flex flex-row items-center'>
                        <img src="/src/image/Mask Group (4).png" className='w-[160px] z-50 absolute h-[160px]' alt="" />
                        <div className={`border-4 ${theme === "light" ? "border-black" : "border-orange-600"} w-[475px] ml-8 pl-36 pt-4 z-40 h-[114px`}>
                            <h3 className='text-[30px] xio'>Espresso Ristretto</h3>
                            <span className='text-[20px] font-semibold text-orange-600 ml-64'>$29</span>
                        </div>
                    </div>
                    <div className='flex flex-row items-center'>
                        <img src="/src/image/Mask Group (4).png" className='w-[160px] z-50 absolute h-[160px]' alt="" />
                        <div className={`border-4 ${theme === "light" ? "border-black" : "border-orange-600"} w-[475px] ml-8 pl-36 pt-4 z-40 h-[114px`}>
                            <h3 className='text-[30px] xio'>Espresso Ristretto</h3>
                            <span className='text-[20px] font-semibold text-orange-600 ml-64'>$29</span>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row items-center justify-center gap-12 mt-20'>
                    <div className='flex flex-row items-center'>
                        <img src="/src/image/Mask Group (5).png" className='w-[160px] z-50 absolute h-[160px]' alt="" />
                        <div className={`border-4 ${theme === "light" ? "border-black" : "border-orange-600"} w-[475px] ml-8 pl-36 pt-4 z-40 h-[114px`}>
                            <h3 className='text-[30px] xio'>Ethiopia Coffee</h3>
                            <span className='text-[20px] font-semibold text-orange-600 ml-64'>$29</span>
                        </div>
                    </div>
                    <div className='flex flex-row items-center'>
                        <img src="/src/image/Mask Group (5).png" className='w-[160px] z-50 absolute h-[160px]' alt="" />
                        <div className={`border-4 ${theme === "light" ? "border-black" : "border-orange-600"} w-[475px] ml-8 pl-36 pt-4 z-40 h-[114px`}>
                            <h3 className='text-[30px] xio'>Ethiopia Coffee</h3>
                            <span className='text-[20px] font-semibold text-orange-600 ml-64'>$29</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Product;