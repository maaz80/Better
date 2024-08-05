import React, { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import FirstHome from "./images/first-home.webp"
import OneDay from "./images/one-day.webp"
import People1 from "./images/People1.webp"
import People2 from "./images/People2.webp"
import M1 from "./images/M1.webp"
import M2 from "./images/M2.webp"
import M3 from "./images/M3.webp"
import M4 from "./images/M4.webp"
import G1 from "./images/G1.webp"
import G2 from "./images/G2.webp"
import G3 from "./images/G3.webp"
import G4 from "./images/G4.webp"

const Questions = () => {
    const [isProducts, setIsProducts] = useState(true)
    const [isCalculator, setIsCalculator] = useState(false)
    const [isGuide, setIsGuide] = useState(false)

    const handleProducts = () => {
        setIsProducts(true)
        setIsCalculator(false)
        setIsGuide(false)
    }
    const handleCalculator = () => {
        setIsProducts(false)
        setIsCalculator(true)
        setIsGuide(false)
    }
    const handleGuide = () => {
        setIsProducts(false)
        setIsCalculator(false)
        setIsGuide(true)
    }
    return (
        <div className='w-[100vw]   mt-20 poppins-regular'>

            <div className=' flex flex-col md:flex-row w-[100vw] md:w-[86vw] m-auto justify-between items-center '>
                <div className='text-gray-800 text-4xl md:text-5xl font-semibold'>
                    <div >Got questions?
                    </div>
                    <div>
                        We've got answers
                    </div>
                </div>
                <div className='flex gap-1 md:gap-3 mt-10 md:mt-0'>
                    <button className={`${isProducts && 'border-emerald-800 border-4 text-emerald-700'} hover:border-emerald-800   hover:border-4  poppins-regular hover:text-emerald-700 px-3 md:px-4 py-1.5 rounded-full cursor-pointer text-sm md:text-xl`} onClick={handleProducts}>Our products</button>
                    <button className={`${isCalculator && 'border-emerald-800 border-4 text-emerald-700'} hover:border-emerald-800  hover:border-4 poppins-regular hover:text-emerald-700 px-3 md:px-4 py-1.5 cursor-pointer rounded-full text-sm md:text-xl`} onClick={handleCalculator}>Calculator</button>
                    <button className={`${isGuide && 'border-emerald-800 border-4 text-emerald-700'} hover:border-emerald-800  hover:border-4 poppins-regular hover:text-emerald-700 px-3 md:px-4 py-1.5 rounded-full cursor-pointer text-sm md:text-xl`} onClick={handleGuide}>Guide & FAQ's</button>
                </div>
            </div>

            {/* Our Product */}
            {isProducts &&
                <div>
                    <div className='w-[100vw] flex flex-col md:flex-row justify-center  items-center gap-12 mt-20 cursor-pointer left'>
                        <div className='bg-gray-100 w-[95%] md:w-[30%] px-5 py-10 rounded-md gap-4 flex flex-col poppins-regular'>
                            <h1 className='text-xl '>Buying your first home with Better</h1>
                            <div className=' text-emerald-900 border-emerald-900 border-2 rounded-full p-2 w-[12%] md:w-[9%] hover:bg-emerald-900 hover:text-white'><FaArrowRight /></div>
                            <img src={FirstHome} alt="" className='rounded-md' />
                        </div>
                        <div className='bg-gray-100 w-[95%] md:w-[53%] h-[40%] flex flex-col md:flex-row pl-5 py-10 rounded-md gap-4'>
                            <div className='flex flex-col gap-4'>
                                <h1 className='text-xl '>One Day Mortgage</h1>
                                <div className='text-[13px] hidden md:block'>Kick your home loan into hyperdrive. Going from locked rate to Commitment Letter takes weeks for traditional lenders. We do it in a single day. Traditional lenders deliver a Commitment Letter in a few weeks.</div>
                                <div className=' text-emerald-900 border-emerald-900 border-2 rounded-full p-2 w-[11%] md:w-[9%] hover:bg-emerald-900 hover:text-white'><FaArrowRight /></div>
                            </div>
                            <div><img src={OneDay} alt="" className='w-[95%] md:w-[79%]' /></div>
                        </div>
                    </div>

                    <div className='w-[100vw] flex flex-col md:flex-row justify-center  items-center gap-12 mt-12 cursor-pointer right'>

                        <div className='bg-gray-100 w-[95%] md:w-[53%] h-[40%] flex flex-col-reverse md:flex-row px-5 py-10 rounded-md gap-4'>
                            <div><img src={People1} alt="" className='w-[100%] rounded-md md:w-[76%]' /></div>
                            <div className='flex flex-col gap-4'>
                                <h1 className='text-xl '>Better HELOC</h1>
                                <div className='text-[13px] hidden md:block'>Introducing One Day HELOC™—your express lane to getting cash from your home with our Home Equity Line of Credit. Access up to 90% of your home equity as cash in as little as 7 days.</div>
                                <div className=' text-emerald-900 border-emerald-900 border-2 rounded-full p-2 w-[12%] md:w-[9%] hover:bg-emerald-900 hover:text-white'><FaArrowRight /></div>
                            </div>
                        </div>
                        <div className='bg-gray-100 w-[95%] md:w-[30%] px-5 py-10 rounded-md gap-4 flex flex-col poppins-regular'>
                            <h1 className='text-xl '>Insurance</h1>
                            <div className=' text-emerald-900 border-emerald-900 border-2 rounded-full p-2 w-[12%] md:w-[9%] hover:bg-emerald-900 hover:text-white'><FaArrowRight /></div>
                            <img src={People2} alt="" className='rounded-md' />
                        </div>
                    </div>
                </div>
            }

            {/* Calculators */}
            {isCalculator &&
                <div>
                    <div className='w-[100vw] flex flex-col md:flex-row justify-center  items-center gap-12 mt-20 cursor-pointer left'>
                        <div className='bg-gray-100 w-[95%] md:w-[30%] px-5 py-10 rounded-md gap-4 flex flex-col poppins-regular'>
                            <h1 className='text-xl '>Mortgage calculator</h1>
                            <div className=' text-emerald-900 border-emerald-900 border-2 rounded-full p-2 w-[12%] md:w-[9%] hover:bg-emerald-900 hover:text-white'><FaArrowRight /></div>
                            <img src={M1} alt="" className='rounded-md' />
                        </div>
                        <div className='bg-gray-100 w-[95%] md:w-[53%] h-[40%] flex flex-col md:flex-row pl-5 py-10 rounded-md gap-4'>
                            <div className='flex flex-col gap-4'>
                                <h1 className='text-xl '>Affordability calculator</h1>
                                <div className='text-[13px] hidden md:block'>Got homeownership dreams? Let's put some numbers behind them. Our affordability calculator estimates the maximum home you can afford.</div>
                                <div className=' text-emerald-900 border-emerald-900 border-2 rounded-full p-2 w-[11%] md:w-[10%] hover:bg-emerald-900 hover:text-white'><FaArrowRight /></div>
                            </div>
                            <div><img src={M2} alt="" className='w-[95%] md:w-[67%]' /></div>
                        </div>
                    </div>

                    <div className='w-[100vw] flex flex-col md:flex-row justify-center  items-center gap-12 mt-12 cursor-pointer right'>

                        <div className='bg-gray-100 w-[95%] md:w-[53%] h-[40%] flex flex-col-reverse md:flex-row px-5 py-10 rounded-md gap-2'>
                            <div><img src={M3} alt="" className='w-[95%] md:w-[60%]' /></div>
                            <div className='flex flex-col gap-4'>
                                <h1 className='text-xl '>HELOC calculator</h1>
                                <div className='text-[13px] hidden md:block'>Need cash? Quickly see how much equity you can borrow from your home and what your monthly payments might be.</div>
                                <div className=' text-emerald-900 border-emerald-900 border-2 rounded-full p-2 w-[12%] md:w-[11%] hover:bg-emerald-900 hover:text-white'><FaArrowRight /></div>
                            </div>
                        </div>
                        <div className='bg-gray-100 w-[95%] md:w-[30%] px-5 py-10 rounded-md gap-4 flex flex-col poppins-regular'>
                            <h1 className='text-xl '>Fixed-rate load comparison calculator</h1>
                            <div className=' text-emerald-900 border-emerald-900 border-2 rounded-full p-2 w-[12%] md:w-[8%] hover:bg-emerald-900 hover:text-white'><FaArrowRight /></div>
                            <img src={M4} alt="" className='rounded-md' />
                        </div>
                    </div>
                </div>
            }

            {/* Paul */}
            {isGuide &&
                <div>
                    <div className='w-[100vw] flex flex-col md:flex-row justify-center  items-center gap-12 mt-20 cursor-pointer left'>
                        <div className='bg-gray-100 e-[95%] md:w-[30%] px-5 py-10 rounded-md gap-4 flex flex-col poppins-regular'>
                            <h1 className='text-xl '>What is a good debt-to-income ratio for a home loan?</h1>
                            <div className=' text-emerald-900 border-emerald-900 border-2 rounded-full p-2 w-[11%] md:w-[9%] hover:bg-emerald-900 hover:text-white'><FaArrowRight /></div>
                            <img src={G1} alt="" className='rounded-md' />
                        </div>
                        <div className='bg-gray-100 w-[95%] md:w-[53%] h-[40%] flex flex-col md:flex-row  px-5 py-10 rounded-md gap-4'>
                            <div className='flex flex-col gap-4 w-[100%] md:w-[50vw]'>
                                <h1 className='text-xl '>Buying a house without realtor</h1>
                                <div className='text-[13px] hidden md:block'>Thinking about buying a house without a real estate agent? Read this first.</div>
                                <div className=' text-emerald-900 border-emerald-900 border-2 rounded-full p-2 w-[12%] md:w-[10%] hover:bg-emerald-900 hover:text-white'><FaArrowRight /></div>
                            </div>
                            <div className='w-[100%] md:w-[64vw]'><img src={G2} alt="" className='w-[100%] rounded-md' /></div>
                        </div>
                    </div>
                    <div className='w-[100vw] flex flex-col md:flex-row justify-center  items-center gap-12 mt-12 cursor-pointer right'>

                        <div className='bg-gray-100 w-[95%] md:w-[53%] h-[40%] flex flex-col-reverse md:flex-row px-5 py-10 rounded-md '>
                            <div><img src={G3} alt="" className='w-[100%] md:w-[60%]' /></div>
                            <div className='flex flex-col gap-4'>
                                <h1 className='text-xl '>Timeline for home buying process</h1>
                                <div className='text-[13px] hidden md:block'>Does the process of buying a home seem daunting? Don't stress, we broke it down into 8 easy steps.</div>
                                <div className=' text-emerald-900 border-emerald-900 border-2 rounded-full p-2 w-[11%] hover:bg-emerald-900 hover:text-white mb-2 md:mb-0'><FaArrowRight /></div>
                            </div>
                        </div>
                        <div className='bg-gray-100 w-[95%] md:w-[30%] px-5 py-10 rounded-md gap-4 flex flex-col poppins-regular'>
                            <h1 className='text-xl '>Conventional loan requirement</h1>
                            <div className=' text-emerald-900 border-emerald-900 border-2 rounded-full p-2 w-[12%] md:last:w-[8%] hover:bg-emerald-900 hover:text-white'><FaArrowRight /></div>
                            <img src={G4} alt="" className='rounded-md h-44' />
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Questions
