import React, { useState } from 'react'
import { BiStar } from 'react-icons/bi'
import Human1 from "./images/Human1.webp"
import Human2 from "./images/Human2.webp"
import Human3 from "./images/Human3.webp"

const Stories = () => {
    const [isHuman1, setIsHuman1] = useState(true)
    const [isHuman2, setIsHuman2] = useState(false)
    const [isHuman3, setIsHuman3] = useState(false)

    const handleHuman1 = () => {
        setIsHuman1(true)
        setIsHuman2(false)
        setIsHuman3(false)
    }
    const handleHuman2 = () => {
        setIsHuman1(false)
        setIsHuman2(true)
        setIsHuman3(false)
    }
    const handleHuman3 = () => {
        setIsHuman1(false)
        setIsHuman2(false)
        setIsHuman3(true)
    }
    return (
        <div className='w-[100vw] h-[100vh] flex flex-col-reverse md:flex-row mt-52 md:mt-0'>
            <div className='w-[100%} md:w-[40%] flex flex-col-reverse md:flex-col gap-3 justify-center items-center'>
                {isHuman1 &&
                    <img src={Human1} alt="Human1" className='w-80 rounded-lg' />
                }
                {isHuman2 &&
                    <img src={Human2} alt="Human1" className='w-80 rounded-lg ' />
                }
                {isHuman3 &&
                    <img src={Human3} alt="Human1" className='w-80 rounded-lg ' />
                }
                <div className='flex gap-3 mt-10 md:mt-3'>
                    <button className={`${isHuman1 && ' border-emerald-800 border-4'} 'hover:border hover:border-emerald-800 border hover:border-4 poppins-regular hover:text-emerald-700 px-4 py-1.5 rounded-full`} onClick={handleHuman1}>Arian</button>
                    <button className={`${isHuman2 && ' border-emerald-800 border-4'} 'hover:border hover:border-emerald-800 border hover:border-4 poppins-regular hover:text-emerald-700 px-4 py-1.5 rounded-full`} onClick={handleHuman2}>Amanda</button>
                    <button className={`${isHuman3 && ' border-emerald-800 border-4'} 'hover:border hover:border-emerald-800 border hover:border-4 poppins-regular hover:text-emerald-700 px-4 py-1.5 rounded-full`} onClick={handleHuman3}>Paul</button>
                </div>
            </div>

            <div className='w-[100%] md:w-[60%] poppins-medium  gap-5 flex flex-col m-auto pl-1 md:pl-40 pt-0 justify-center items-center '>
                <div className='text-5xl md:text-8xl w-[100%] md:w-[80%] text-gray-700 ml-14 md:ml-0'>Find out why we’re better.</div>
                <button className='bg-emerald-900 hover:bg-emerald-600 w-72 md:w-[30%] py-4 rounded-full text-white'>See all our stories</button>
                <div className='flex items-center'>
                    <BiStar />
                    <strong className='mr-5'>Trustpilot</strong>
                    <span>Excellent
                        4.3 out of 5</span>
                </div>
            </div>
        </div>
    )
}

export default Stories
