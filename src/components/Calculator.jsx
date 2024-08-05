import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Math1 from "./images/Math1.jpg"
import Math2 from "./images/Math2.jpg"
import Math3 from "./images/Math3.jpg"
import Math4 from "./images/Math4.jpg"
import Page from "./images/page.svg"
import downtrend from "./images/downtrend.svg"
import calculator from "./images/calculator.svg"
import { BiDownArrow, BiDownArrowAlt, BiRightArrow, BiSolidRightArrow } from 'react-icons/bi';
import Footer from './Footer';

const Calculator = () => {
    const [isDown, setIsDown] = useState(false)
    const [homePrice, setHomePrice] = useState(700000);
    const [zipCode, setZipCode] = useState(226012);
    const [downPayment, setDownPayment] = useState(600000);
    const [interestRate, setInterestRate] = useState(6.500);
    const [loanLength, setLoanLength] = useState(30);
    const [monthlyPayment, setMonthlyPayment] = useState(0);
    const minPrice = 300000;
    const maxPrice = 3000000;

    // Function to calculate monthly payment
    const calculateMonthlyPayment = (principal, annualInterestRate, years) => {
        const monthlyInterestRate = annualInterestRate / 100 / 12;
        const numberOfPayments = years * 12;
        const monthlyPayment = (principal * -monthlyInterestRate) /
            (1 - Math.pow(1 + monthlyInterestRate, numberOfPayments));
        return monthlyPayment.toFixed(2);
    };

    // Update monthly payment whenever relevant inputs change
    useEffect(() => {
        const principal = homePrice - downPayment;
        const newMonthlyPayment = calculateMonthlyPayment(principal, interestRate, loanLength);
        setMonthlyPayment(newMonthlyPayment);
    }, [homePrice, downPayment, interestRate, loanLength]);

    const handleHomePriceChange = (e) => setHomePrice(e.target.value);
    const handleZipCodeChange = (e) => setZipCode(e.target.value);
    const handleDownPaymentChange = (e) => setDownPayment(e.target.value);
    const handleInterestRateChange = (e) => setInterestRate(e.target.value);
    const handleLoanLengthChange = (e) => setLoanLength(e.target.value);
    const handleSeekBarChange = (e) => setHomePrice(e.target.value);
    const handleDown = () => {
        setIsDown(!isDown)
    }


    return (
        <div className='w-[100%] bg-gray-100 section' id='calculator '>
            <Navbar />

            <div className='w-[100%] md:w-[86%] pt-40 m-auto poppins-regular pb-20'>
                <div className='flex flex-col gap-10 '>
                    <h1 className='text-3xl md:text-5xl text-gray-700 poppins-semibold ml-3 md:ml-0 text-center md:text-left'>Mortgage calculator</h1>
                    <p className='text-gray-600 w-[95%] md:w-[50%] ml-3 md:ml-0 text-center md:text-left'>
                        Use our mortgage calculator built directly into it! Get accurate estimates for your monthly mortgage payments if you will be required to have private mortgage insurance (PMI). Also learn why
                    </p>
                    <div className='flex justify-around md:justify-between items-center'>
                        <div className='flex flex-col gap-5'>
                            <div className='poppins-medium text-base'>Home price</div>
                            <div className='relative'>
                                <input
                                    type="number"
                                    className='border border-gray-500 rounded-md h-10 md:h-20 w-40 md:w-72 text-2xl md:text-5xl font-medium pl-7 md:pl-10'
                                    value={homePrice}
                                    onChange={handleHomePriceChange}
                                />
                                <span className='absolute text-2xl md:text-5xl font-medium left-2 top-[4px] md:top-3.5'>$</span>
                            </div>
                        </div>
                        <div className='flex flex-col gap-5'>
                            <div className='poppins-medium text-base'>Monthly payment</div>
                            <div className='text-2xl md:text-5xl font-medium'>${monthlyPayment}/mo</div>
                        </div>
                        <div className='hidden md:block'>
                            <button className='w-72 bg-emerald-900 hover:bg-emerald-700 py-5 text-white rounded-md'>Get pre approved</button>
                        </div>
                    </div>
                    <div className='mt-0 md:mt-5 '>
                        <input
                            type="range"
                            className='w-[95%] ml-2 md:ml-0 md:w-full h-1 md:h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer seekbar'
                            min={minPrice}
                            max={maxPrice}
                            value={homePrice}
                            onChange={handleSeekBarChange}
                        />
                          <div className='block md:hidden mt-8'>
                            <button className='w-80 ml-4 bg-emerald-900 hover:bg-emerald-700 py-5 text-white rounded-md'>Get pre approved</button>
                        </div>
                    </div>

                    <div className=' justify-between items-center hidden md:flex'>
                        <div className='relative'>
                            <input
                                type="number"
                                className='border border-gray-500 rounded-md h-16 w-72 text-xl font-medium pl-4 pt-5'
                                value={zipCode}
                                onChange={handleZipCodeChange}
                                style={{ outline: 'none' }}
                            />
                            <div className='text-gray-500 absolute text-[13px] left-4 top-2'>ZIP code</div>
                        </div>
                        <div className='relative h-16 w-72 border border-gray-500 rounded-md overflow-hidden'>
                            <input
                                type="number"
                                className='h-full w-full text-lg font-medium pl-7 pt-5 pr-20 box-border'
                                value={downPayment}
                                onChange={handleDownPaymentChange}
                                style={{ paddingRight: '4rem', outline: 'none' }}
                            />
                            <div className='absolute top-7 text-lg left-4'>$</div>
                            <div className='text-gray-500 absolute text-[13px] left-4 top-2'>Down payment</div>
                            <div className='bg-white border-l absolute right-0 top-0 p-5'>20%</div>
                        </div>
                        <div className='relative h-16 w-72 border border-gray-500 rounded-md overflow-hidden'>
                            <input
                                type="number"
                                className='h-full w-full text-lg font-medium pl-4 pt-5 pr-20 box-border'
                                value={interestRate}
                                onChange={handleInterestRateChange}
                                style={{ paddingRight: '4rem', outline: 'none' }}
                            />
                            <div className='text-gray-500 absolute text-[13px] left-4 top-2'>Interest rate</div>
                            <div className='bg-white border-l absolute right-0 top-0 p-5'>%</div>
                        </div>
                        <div className='relative h-16 w-72 border border-gray-500 rounded-md overflow-hidden'>
                            <input
                                type="number"
                                className='h-full w-full text-lg font-medium pl-4 pt-5 pr-20 box-border'
                                value={loanLength}
                                onChange={handleLoanLengthChange}
                                style={{ paddingRight: '4rem', outline: 'none' }}
                            />
                            <div className='text-gray-500 absolute text-[13px] left-4 top-2'>Length of load</div>
                            <div className='text-gray-500 absolute text-[13px] left-12 top-8'>Years</div>
                            <div className='bg-white border-l absolute right-0 top-0 p-5'><BiDownArrow /></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Graph */}
            <div className='w-[100%] bg-white'>
                <div className='w-[100%] md:w-[86%] pt-10 md:pt-40 m-auto poppins-regular flex flex-col md:flex-row justify-between items-start '>
                    <div className='w-[100%] md:w-[48%] flex flex-col gap-10 mt-10 ml-5'>
                        <div className='poppins-medium'>Monthly payment breakdown</div>
                        <div className='text-5xl font-semibold'>$15,799/mo</div>
                        <div className="graph">Graph</div>
                    </div>

                    <div className='w-[100%] md:w-[52%] flex flex-col gap-4 px-4'>

                        <div className='flex justify-between items-center'>
                            <div className='flex gap-2 items-center'><span className='w-1 h-5 bg-emerald-900 rounded-md'></span><span>Principle & interest</span></div>
                            <div>$15,170</div>
                        </div>

                        <div className='flex justify-between items-center'>
                            <div className='flex gap-2 items-center'><span className='w-1 h-5 bg-cyan-900 rounded-md'></span><span>Property taxes</span></div>
                            <div className='relative'><input type="number" value={265} className='hover:border-emerald-900 border hover:border-4 border-gray-700 rounded-md h-16 w-40 pl-24 font-semibold' />
                                <span className='absolute top-4 left-4 text-lg font-semibold'>$</span>
                            </div>
                        </div>
                        <div className='flex justify-between items-center'>
                            <div className='flex gap-2 items-center'><span className='w-1 h-5 bg-cyan-500 rounded-md'></span><span>Homeowners insurance</span></div>
                            <div className='relative'><input type="number" value={132} className='hover:border-emerald-900 border hover:border-4 border-gray-700 rounded-md h-16 w-40 pl-24 font-semibold' />
                                <span className='absolute top-4 left-4 text-lg font-semibold'>$</span>
                            </div>
                        </div>
                        <div className='flex justify-between items-center'>
                            <div className='flex gap-2 items-center'><span className='w-1 h-5 bg-yellow-600 rounded-md'></span><span>HOA feest</span></div>
                            <div className='relative'><input type="number" value={132} className='hover:border-emerald-900 border hover:border-4 border-gray-700 rounded-md h-16 w-40 pl-24 font-semibold' />
                                <span className='absolute top-4 left-4 text-lg font-semibold'>$</span>
                            </div>
                        </div>

                        <div className='flex justify-between items-center' onClick={handleDown}>
                            <div className='flex gap-2 items-center'><span className='w-1 h-5 bg-red-400 rounded-md'></span><span>Utilities</span></div>
                            <div className='flex justify-between w-[23%] items-center'>
                                <div className='font-semibold'>$100</div>
                                <div><BiDownArrowAlt /></div>
                            </div>
                        </div>

                        {isDown &&
                            <div className='flex flex-col gap-4'>
                                <div className='flex justify-between items-center'>
                                    <div className='flex gap-2 items-center'><span>Water/Sewer</span></div>
                                    <div className='relative'><input type="number" value={25} className='hover:border-emerald-900 border hover:border-4 border-gray-700 rounded-md h-16 w-40 pl-24 font-semibold' />
                                        <span className='absolute top-4 left-4 text-lg font-semibold'>$</span>
                                    </div>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <div className='flex gap-2 items-center'><span>Gas</span></div>
                                    <div className='relative'><input type="number" value={25} className='hover:border-emerald-900 border hover:border-4 border-gray-700 rounded-md h-16 w-40 pl-24 font-semibold' />
                                        <span className='absolute top-4 left-4 text-lg font-semibold'>$</span>
                                    </div>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <div className='flex gap-2 items-center'><span>Internet</span></div>
                                    <div className='relative'><input type="number" value={50} className='hover:border-emerald-900 border hover:border-4 border-gray-700 rounded-md h-16 w-40 pl-24 font-semibold' />
                                        <span className='absolute top-4 left-4 text-lg font-semibold'>$</span>
                                    </div>
                                </div>
                                <div className='flex gap-1 ml-[-30px]'>
                                    <input type="checkbox" className='w-20' />
                                    <div>Include utilities in payment</div>
                                </div>
                                <div>
                                    <button className='w-60 h-20 mt-10 rounded-md bg-gray-300'>Copy estimate link</button>
                                </div>
                            </div>

                        }

                    </div>
                </div>
            </div>

            {/* Questions */}
            <div className='w-[100%] bg-white pt-40'>
                <div className='w-[86%] m-auto border-t pt-10 border-gray-500'>
                    <div className='mb-10'>
                        <h1 className='poppins-semibold text-3xl mb-10'>How does a mortgage calculator help me?</h1>
                        <p className='text-base text-gray-500 poppins-regular'>When deciding how much house you can afford, one of the most important pieces to determine is whether a home will fit into your monthly budget. A mortgage calculator helps you understand the monthly cost of a home. And ours will allow you to enter different down payments and interest rates to help determine what is affordable for you.</p>
                    </div>
                    <div className='mb-10 border-t border-gray-500 pt-10'>
                        <h1 className='poppins-semibold text-3xl mb-10'>How much monthly mortgage payment can I afford?</h1>
                        <p className='text-base text-gray-500 poppins-regular mb-10'>Lenders determine how much you can afford on a monthly housing payment by calculating your debt-to-income ratio (DTI). The maximum DTI you can have in order to qualify for most mortgage loans is often between 45-50%, with your anticipated housing costs included.</p>
                        <p className='text-base text-gray-500 poppins-regular mb-10'>Your DTI is the balance between your income and your debt. It helps lenders understand how safe or risky it is for them to approve your loan. A DTI ratio represents how much of your gross monthly income is spoken for by creditors, and how much of it is left over to you as disposable income. It’s most commonly written as a percentage. For example, if you pay half your monthly income in debt payments, you would have a DTI of 50%.</p>
                        <p className='text-base text-gray-500 poppins-regular mb-10'>Formula for calculating your debt-to-income (DTI) ratio:</p>
                    </div>
                    <div className='w-[100%] md:w-[65%] m-auto pb-20'>
                        <img src={Math1} alt="" />
                        <p className='text-base text-gray-500 poppins-regular my-5'>Here’s an example of what calculating your DTI might look like:</p>
                        <img src={Math2} alt="" />

                    </div>
                    <div className=' border-t border-gray-500 pt-10'>
                        <h1 className='poppins-semibold text-3xl mb-10'>How to calculate monthly mortgage payments?</h1>
                        <p className='text-base text-gray-500 poppins-regular mb-10'>Your monthly mortgage payment includes loan principal and interest, property taxes, homeowners insurance, and mortgage insurance (PMI), if applicable. While not typically included in your mortgage payment, homeowners also pay monthly utilities and sometimes pay homeowners association (HOA) fees, so it’s a good idea to factor these into your monthly budget. This mortgage calculator factors in all these typical monthly costs so you can really crunch the numbers.</p>

                        <h1 className='poppins-semibold text-2xl mb-10'>Formula for calculating monthly mortgage payments</h1>
                        <p className='text-base text-gray-500 poppins-regular mb-10'>The easiest way to calculate your mortgage payment is to use a calculator, but for the curious or mathematically inclined, here’s the formula for calculating principal and interest yourself:</p>
                        <div className='w-[100%] md:w-[65%] m-auto pb-20 poppins-regular'>
                            <img src={Math3} alt="" />
                            <div className='mb-5'>Where:</div>
                            <ul className='list-disc ml-5 flex flex-col gap-4'>
                                <li className='flex text-base'><strong>M </strong>is monthly mortgage payments</li>
                                <li className='flex text-base'><strong>P </strong>is the principal loan amount (the amount you borrow)</li>
                                <li className='text-base'>r is the monthly interest rate
                                    <p className='text-[11px]'>(annual interest rate divided by 12 and expressed as a decimal)</p>
                                    <p className='text-[11px]'>For example:</p>
                                    <p className='text-[11px]'>if the annual interest rate is 5%,</p>
                                    <p>the monthly rate would be 0.05/12 = .00417, or .417%</p>
                                </li>
                                <li className='text-base'>n is the total number of payments in months
                                    <p className='text-[11px]'>For example:</p>
                                    <p className='text-[11px]'>for a 30-year loan, n = 30×12 = 360 months</p>
                                </li>
                            </ul>
                            <p className='text-base  poppins-regular mb-10 mt-10 '>Here's a simple example:</p>
                            <img src={Math4} alt="" className='rounded-md' />
                        </div>

                    </div>
                    <div className=' text-gray-500 mb-20'>This formula assumes a fixed-rate mortgage, where the interest rate remains constant throughout the loan term. And remember, you’ll still need to add on taxes, insurance, utilities, and HOA fees if applicable.</div>
                    <div className='mb-10 border-t border-gray-500 pt-10'>
                        <h1 className='poppins-semibold text-3xl mb-10'>How to use this mortgage calculator?</h1>
                        <p className='text-base text-gray-500 poppins-regular mb-10'>Play around with different home prices, locations, down payments, interest rates, and mortgage lengths to see how they impact your monthly mortgage payments.</p>
                        <p className='text-base text-gray-500 poppins-regular mb-10'>Increasing your down payment and decreasing your interest rate and mortgage term length will make your monthly payment go down. Taxes, insurance, and HOA fees will vary by location. If you enter a down payment amount that’s less than 20% of the home price, private mortgage insurance (PMI) costs will be added to your monthly mortgage payment. As the costs of utilities can vary from county to county, we’ve included a utilities estimate that you can break down by service. If you’re thinking about buying a condo or into a community with a Homeowners Association (HOA), you can add HOA fees.</p>
                        <p className='text-base text-gray-500 poppins-regular mb-10'>The only amounts we haven’t included are the money you’ll need to save for annual home maintenance/repairs or the costs of home improvements. To see how much home you can afford including these costs, take a look at the Better home affordability calculator.</p>
                        <p className='text-base text-gray-500 poppins-regular mb-10'>Fun fact: Property tax rates are extremely localized, so two homes of roughly the same size and quality on either side of a municipal border could have very different tax rates. Buying in an area with a lower property tax rate may make it easier for you to afford a higher-priced home.</p>

                        <h1 className='poppins-semibold text-3xl mb-10'>Do you know your property tax rate?</h1>
                        <p className='text-base text-gray-500 poppins-regular mb-10'>While exact property tax rates vary by county, it can be helpful to look at taxes on the state level to get an idea for taxes in your state. Here’s a helpful chart from Forbes breaking down the Census Bureau’s 2021 American Community Survey 5-year estimate:</p>
                    </div>
                    <div className="max-h-[280px] overflow-y-auto border border-gray-300 rounded-lg mb-20">
                        <table className="min-w-full divide-y divide-gray-200 ">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-100 border-r uppercase tracking-wider bg-emerald-900">State</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-100 border-r uppercase tracking-wider bg-emerald-900">Median Effective Property Tax Rate</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-100 border-r uppercase tracking-wider bg-emerald-900">Mean Effective Property Tax Rate</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-100 border-r uppercase tracking-wider bg-emerald-900">Median Home Value</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-100 border-r uppercase tracking-wider bg-emerald-900">Median Property Taxes Paid</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">AL</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">0.41%</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">0.40%</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">$157,100</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">$646</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">AK</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">1.23%</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">1.04%</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">$282,800</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">$3,464</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">AZ</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">0.62%</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">0.63%</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">$265,600</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">$1,648</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">AR</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">0.62%</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">0.64%</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">$142,100</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">$878</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">CA</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">0.75%</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">0.75%</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">$573,200</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">$4,279</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">CO</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">0.51%</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">0.55%</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">$397,500</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">$2,017</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">CT</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">2.15%</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">1.79%</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">$286,700</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">$6,153</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">DE</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">0.58%</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">0.61%</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">$269,700</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">$1,570</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">DC</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">0.57%</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">0.62%</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">$635,900</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">$3,641</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">FL</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">0.86%</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">0.91%</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">$248,700</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">$2,143</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">GA</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">0.90%</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">0.92%</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">$206,700</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">$1,850</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">HI</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">0.29%</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">0.32%</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">$662,100</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">$1,893</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">ID</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">0.63%</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">0.67%</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">$266,500</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">$1,682</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">IL</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">2.23%</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">2.08%</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">$212,600</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">$4,744</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">IN</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">0.83%</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">0.84%</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">$158,500</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">$1,308</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">IA</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">1.57%</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">1.52%</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">$160,700</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">$2,522</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">KS</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">1.43%</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">1.34%</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">$164,800</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">$2,355</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">KY</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">0.85%</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">0.83%</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">$155,100</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">$1,320</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">LA</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">0.57%</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">0.56%</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">$174,000</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">$983</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">ME</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">1.28%</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">1.24%</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">$212,100</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">$2,722</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">MD</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">1.07%</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">1.05%</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">$338,500</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">$3,633</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">MA</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">1.20%</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">1.14%</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">$424,700</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">$5,091</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">MI</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">1.48%</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">1.38%</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">$172,100</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">$2,551</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">MN</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">1.11%</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">1.11%</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">$250,200</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">$2,767</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">MS</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">0.79%</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">0.67%</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">$133,000</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">$1,052</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">MO</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">0.98%</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">1.01%</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">$171,800</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">$1,676</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">MT</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">0.83%</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">0.74%</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">$263,700</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">$2,189</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">NE</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">1.68%</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">1.63%</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">$174,100</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">$2,916</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">NV</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">0.55%</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">0.59%</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">$315,900</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">$1,736</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">NH</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">2.09%</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">1.93%</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">$288,700</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">$6,036</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">NJ</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">2.47%</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">2.24%</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">$355,700</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">$8,797</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">NM</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">0.80%</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">0.67%</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">$184,800</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">$1,470</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">NY</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">1.73%</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">1.40%</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">$340,600</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">$5,884</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">NC</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">0.80%</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">0.82%</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">$197,500</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">$1,583</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">ND</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">1.00%</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">0.98%</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">$209,900</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">$2,092</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">OH</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">1.53%</td>
                                    <td className="px-6-4 whitespace-nowrap border-r">1.59%</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">$159,900</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">$2,447</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">OK</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">0.90%</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">0.89%</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">$150,800</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">$1,351</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">OR</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">0.93%</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">0.93%</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">$362,200</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">$3,352</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">PA</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">1.53%</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">1.49%</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">$197,300</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">$3,022</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">RI</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">1.53%</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">1.40%</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">$292,600</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">$4,483</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">SC</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">0.56%</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">0.57%</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">$181,800</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">$1,024</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">SD</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">1.24%</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">1.17%</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">$187,800</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">$2,331</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">TN</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">0.66%</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">0.67%</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">$193,700</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">$1,270</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">TX</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">1.74%</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">1.68%</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">$202,600</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">$3,520</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">UT</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">0.58%</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">0.57%</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">$339,700</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">$1,967</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">VT</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">1.90%</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">1.83%</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">$240,600</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">$4,570</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">VA</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">0.82%</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">0.88%</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">$295,500</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">$2,420</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">WA</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">0.94%</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">0.87%</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">$397,600</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">$3,752</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">WV</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">0.59%</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">0.57%</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">$128,800</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">$756</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">WI</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">1.73%</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">1.61%</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">$200,400</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">$3,472</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">WY</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">0.61%</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">0.56%</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">$237,900</td>
                                    <td className="px-6 py-4 whitespace-nowrap border-r">$1,442</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className=' border-t border-gray-500 pt-10 mb-20'>
                        <h1 className='poppins-semibold text-3xl mb-10'>How is Better’s mortgage calculator different?</h1>
                        <h1 className='poppins-semibold text-2xl mb-10'>This mortgage calculator shows your payments with taxes and insurance</h1>
                        <p className='text-base text-gray-500 poppins-regular mb-10'>The property taxes you contribute are used to finance the services provided by your local government to the community. These services encompass schools, libraries, roads, parks, water treatment, police, and fire departments. Even after your mortgage has been fully paid, you will still need to pay property taxes. If you neglect your property taxes, you run the risk of losing your home to your local tax authority.</p>
                        <p className='text-base text-gray-500 poppins-regular mb-10'>Your lender will usually require you to have homeowners insurance while you're settling your mortgage. This is a common practice among lenders because they understand that nobody wants to continue paying a mortgage on a home that's been damaged or destroyed.</p>
                        <p className='text-base text-gray-500 poppins-regular mb-10'>Here's an interesting fact: Once you fully own your home, the choice to maintain homeowners insurance is entirely up to you. However, to ensure your home is protected against damages caused by fires, lightning strikes, and natural disasters that are common in your area, it is highly recommended to keep it. Therefore, always factor in these costs when using a Mortgage Calculator.</p>

                        <h1 className='poppins-semibold text-2xl mb-10'>This mortgage calculator shows your mortgage costs with PMI</h1>
                        <p className='text-base text-gray-500 poppins-regular mb-10'>PMI, an abbreviation for private mortgage insurance, aids potential homeowners in qualifying for a mortgage without the necessity of a 20% down payment. By opting for a lower down payment and choosing a mortgage with PMI, you can purchase a home sooner, begin accruing equity, and keep cash available for future needs. This can all be calculated using this Mortgage Calculator.</p>
                        <p className='text-base text-gray-500 poppins-regular mb-10'>Choosing a mortgage with PMI is a popular option: 71% of first-time homebuyers had a down payment of less than 20% in July 2021. In 2020, the median down payment for first-time homebuyers was just 7%, and it hasn’t risen above 10% since 1989.</p>
                        <p className='text-base text-gray-500 poppins-regular mb-10'>PMI is automatically removed from conventional mortgages once your home equity reaches 22%. Alternatively, you can request the removal of PMI once you've accumulated at least 20% home equity.</p>

                        <h1 className='poppins-semibold text-2xl mb-10'>This mortgage calculator includes HOA fees</h1>
                        <p className='text-base text-gray-500 poppins-regular mb-10'>Homeowners association (“HOA”) fees are typically charged directly by a homeowners association, but as HOA fees come part and parcel with condos, townhomes, and planned housing developments, they’re an essential factor to consider when calculating your mortgage costs.</p>
                        <p className='text-base text-gray-500 poppins-regular mb-10'>Homes that share structural elements, such as roofs and walls, or community amenities like landscaping, pools, or BBQ areas, often require homeowners to pay HOA fees for the maintenance of these shared features. It's important to factor in these costs during your budget planning stage, especially considering that HOA fees typically increase annually. HOAs may also charge additional fees known as ‘special assessments’ to cover unexpected expenses from time to time.</p>
                    </div>

                    <div className='mb-10 border-t border-gray-500 pt-10'>
                        <h1 className='poppins-semibold text-3xl mb-10'>How to reduce your monthly mortgage payments?</h1>
                        <p className='text-base text-gray-500 poppins-regular mb-10'>The lower the purchase price of the home, the lower your loan amount will be. But if the seller is less than willing to cut you a deal, you have other options.</p>
                        <h1 className='poppins-semibold text-2xl mb-10'>Extend the length of your mortgage</h1>
                        <p className='text-base text-gray-500 poppins-regular mb-10'>The more time you have to pay off the mortgage, the less each monthly mortgage payment will be. (In lender-speak, ‘extending the length of your mortgage’ is known as ‘increasing your loan term’.) This is why people often choose a 30-year fixed rate mortgage over one with a 15- or 20-year term.</p>
                        <h1 className='poppins-semibold text-2xl mb-10'>Increase your down payment</h1>
                        <p className='text-base text-gray-500 poppins-regular mb-10'>The smaller the amount of your mortgage, the smaller your monthly mortgage payments will be. If you’re able to put at least 20% of the home price towards your down payment, you’ll be able to avoid PMI (private mortgage insurance). Even if you can’t afford a complete 20% down payment, boosting your down payment will help you get PMI removed sooner. In fact, boosting your down payment by 5% can lower your monthly PMI fees.</p>

                        <h1 className='poppins-semibold text-2xl mb-10'>Get a lower interest rate</h1>
                        <p className='text-base text-gray-500 poppins-regular mb-10'>Increasing your down payment can be one way to help you qualify for a lower interest rate. The amount of your down payment compared to the total amount of the loan is called your loan-to-value ratio (LTV).</p>
                        <p className='text-base text-gray-500 poppins-regular mb-10'>Depending on your loan amount, a lower LTV may increase the likelihood of you being offered a low interest rate. If you intend on keeping your home for a while, you could consider buying points to reduce your interest rate. Buying points essentially means you agree to pay more upfront costs in exchange for a lower monthly payment.</p>
                        <p className='text-base text-gray-500 poppins-regular mb-10'>If you think you may sell or refinance the home in the first 5-10 years of the mortgage, you could consider an adjustable-rate mortgage (ARM). An ARM offers a lower fixed interest rate for a set introductory period—typically 5, 7, or 10 years. Once the set introductory period ends, the interest rate adjusts (interest rate may increase after consummation). The introductory interest rate for ARMs is typically lower than the interest rate for a conventional fixed-rate mortgage which could make it a great way to save on interest if you know you won’t keep the mortgage for long.</p>
                        <p className='text-base text-gray-500 poppins-regular mb-10'>If you’re not planning on buying a home for a while, improving your credit score is a tried and true way of increasing your chances of qualifying for a lower interest rate. By reducing your debt-to-income ratio (DTI), lenders will see that you comfortably afford your mortgage and may be more willing to offer a lower interest rate.</p>
                    </div>

                    <div className='mb-10 border-t border-gray-500 pt-10'>
                        <h1 className='poppins-semibold text-3xl mb-10'>How much home can I afford?</h1>
                        <p className='text-base text-gray-500 poppins-regular mb-10'>Once again, the easiest way to do this is with a calculator! To know if a home is in your budget, try out our home affordability calculator. This calculator will take a few inputs from you, like income and savings, and let you know the maximum amount of home you can afford.
                        </p>
                    </div>

                    <div className='mb-10 border-t border-gray-500 pt-10'>
                        <h1 className='poppins-semibold text-3xl mb-10'>Next steps to buying a house</h1>
                        <p className='text-base text-gray-500 poppins-regular mb-10'>There are 8 steps to buying a house and by using this calculator you’ve completed step 2 (calculating your home affordability) and maybe even step 1 (getting your finances in order).</p>
                        <p className='text-base text-gray-500 poppins-regular mb-10'>The next step is getting pre-approved. A mortgage pre-approval with Better Mortgage takes as little as 3-minutes and doesn’t impact your credit score. It’s a free, no-commitment way to see how much home you can buy, the mortgages you qualify for, and the range of interest rates you’ll be offered.</p>
                        <p className='text-base text-gray-500 poppins-regular mb-10'>If you’re ready to buy a home now, our definitive home buying checklist can walk you through everything you need to know to get the home you want. With your Better Mortgage pre-approval letter in hand, you’ll be able to show sellers and real estate agents that you mean business—giving you an edge over homebuyers that don’t have this kind of proof that they’re financially ready to purchase. And by working with an agent from Better Real Estate and funding with Better Mortgage, you’ll save $2,000 on closing costs, and save up to $8,200 on average over the life of your loan.**</p>
                    </div>

                    <div className='mb-10 border-t border-gray-500 pt-10'>
                        <h1 className='poppins-semibold text-3xl mb-10'>More resources</h1>
                        <div className='flex flex-col md:flex-row gap-3 md:gap-0 justify-between items-center poppins-regular'>
                            <div className='w-[95%] md:w-[30%] border border-gray-400 h-[250px] rounded-md p-8 flex justify-around items-start flex-col'>
                                <img src={Page} alt="" />
                                <h1 className='text-xl'>Get pre-approved to see how much you can borrow</h1>
                                <button className='flex items-center gap-2 text-emerald-700 hover:underline'>Get started <BiSolidRightArrow /></button>
                                <p className='text-[13px] text-gray-500 '>Won’t impact your credit</p>
                            </div>
                            <div className='w-[95%] md:w-[30%] border border-gray-400 h-[250px] rounded-md p-8 flex justify-around items-start flex-col'>
                                <img src={downtrend} alt="" />
                                <h1 className='text-xl'>See today’s rates in your area</h1>
                                <button className='flex items-center gap-2 text-emerald-700 hover:underline'>See rates <BiSolidRightArrow /></button>
                                <div className='h-[60px] bg-white '></div>
                            </div>
                            <div className='w-[95%] md:w-[30%] border border-gray-400 h-[250px] rounded-md p-8 flex justify-around items-start flex-col'>
                                <img src={calculator} alt="" />
                                <h1 className='text-xl'>Find out your max homebuying budget</h1>
                                <button className='flex items-center gap-2 text-emerald-700 hover:underline text-sm'>Try our Mortgage calculator <BiSolidRightArrow /></button>
                                <div className='h-[60px] bg-white '></div>
                            </div>
                        </div>
                        <p className='text-[11px] text-gray-400 mt-10'>*See Better Real Estate discount terms and conditions.

                            **The average lifetime savings estimate is based on a comparison of the Freddie Mac Primary Mortgage Market Survey’s (PMMS) 30-year fixed-rate mortgage product with Better Mortgage’s own offered rate for a comparable mortgage product between Jan ‘20 - Dec ‘20. PMMS is based on conventional, conforming fully-amortizing home purchase loans for borrowers with a loan-to-value of 80 percent and with excellent credit. Better Mortgage’s offered rate is based on pricing output for a 30-year fixed-rate mortgage product with a 30-day lock period for a single-family, owner-occupied residential property and a borrower with excellent (760 FICO) credit and a loan-to-value ratio of 80 percent. Individual savings could vary based on current market rates, property type, loan amount, loan-to-value, credit score, debt-to-income ratio and other variables.

                        </p>
                    </div>

                </div>
                <div>
                    <Footer />
                </div>
            </div>
        </div >
    );
}

export default Calculator;
