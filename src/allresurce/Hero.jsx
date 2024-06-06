import { Button } from '@material-tailwind/react'
import React, { useContext } from 'react'
import { Test } from '../Context/Export'

const Hero = () => {
    const { theme } = useContext(Test)

    return (
        <>
            <section className={`open flex flex-row items-center justify-center pt-14 ${theme === "light" ? "bg-infin text-black" : "bg-black text-white"}`}>
                <div className='flex flex-col gap-10'>
                    <h1 className='xio text-[45px] font-normal w-[646px]'>ONE OF THE BEST COFFEE HOUSE IN YOUR HOME TOWN</h1>
                    <p className='w-[500px] text-[18px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit do eiusmod veniam, quis nostrud exercitation
                        laboris nisi ut aliquip ex ea commodo consequat.    </p>
                    <div className='flex flex-row gap-3'>
                        <Button variant='gradient' className='rounded-none'>Explore More</Button>
                        <Button variant='outlined' className={`border-orange-600 border-2 rounded-none ${theme === "light" ? "bg-infin text-black" : "bg-black text-white"}`}>Read More</Button>
                    </div>
                </div>
                <img src="/src/image/terr.png" alt="" />
            </section>
        </>
    )
}

export default Hero;