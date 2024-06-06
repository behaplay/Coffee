import { Button } from '@material-tailwind/react'
import React, { useContext } from 'react'
import { Test } from '../Context/Export'
import { FaMoon, FaSun } from 'react-icons/fa'
import { Translate } from '../Context/Translater'
import Perevod from '../utils/Helpertranslate'

const Header = () => {
    const { theme, toggleTheme } = useContext(Test)
    const { translatelanguages, setTranslatelanguages } = useContext(Translate)
    const giting = theme === "light" ? "bg-infin text-black" : "bg-black text-white"
    
    return (
        <>
            <header className={`flex flex-row items-center justify-center pt-6 open ${giting}`}>
                <div className='flex flex-row gap-4 items-center'>
                    <select className={`${giting} p-2`} defaultValue="Uzb" onClick={(e) => setTranslatelanguages(e.target.value)}>
                        <option value="Rus">Rus</option>
                        <option value="Eng">Eng</option>
                        <option value="Uzb">Uzb</option>
                    </select>
                    <button onClick={toggleTheme}>
                        {theme === "light" ? <FaMoon /> : <FaSun />}
                    </button>
                    <Button variant='text' className={`${giting}`}>{Perevod("Дом", "Home", "Uy")}</Button>
                    <Button variant='text' className={`${giting}`}>{Perevod("Главное", "About", "Boshliq")}</Button>
                    <Button variant='text' className={`${giting}`}>Manu</Button>
                    <Button variant='text' className={`${giting}`}>Reservation</Button>
                </div>
                <img className='pl-[76px] pr-[76px]' src="/src/image/Group 8.png" alt="" />
                <div className='flex flex-row gap-4 items-center'>
                    <Button variant='text' className={`${giting}`}>Pages</Button>
                    <Button variant='text' className={`${giting}`}>Shop</Button>
                    <Button variant='text' className={`${giting}`}>Contact</Button>
                    <img className='pl-7 cursor-pointer' src="/src/image/Group (2).png" alt="" />
                    <img className='pl-10 cursor-pointer' src="/src/image/Group (3).png" alt="" />
                </div>
            </header>
        </>
    )
}

export default Header;