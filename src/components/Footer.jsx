import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='w-[100vw] mt-20 border-t-2 pt-20'>
            <div className='w-[86vw]  m-auto flex flex-col md:flex-row justify-between gap-10 md:gap-0 items-start'>
                <div className='flex flex-col gap-4 w-[100%] md:w-[26vw]'>
                    <div>
                        <h1 className='text-emerald-900 righteous-regular text-3xl  font-bold mb-4'>Better</h1>
                        <p className='text-[14px] poppins-regular'>Better is a family of companies serving all your homeownership needs.</p>
                    </div>
                    <div>
                        <h1 className='text-emerald-900 righteous-regular font-bold text-2xl'>Better <span className='text-gray-300 poppins-regular text-lg'>Mortgage</span></h1>
                        <p className='text-[14px] poppins-regular'>We can’t wait to say “Welcome home.” Apply 100% online, with expert customer support.</p>
                    </div>
                    <div>
                        <h1 className='text-emerald-900 righteous-regular font-bold text-2xl'>Better <span className='text-gray-300 poppins-regular text-lg'>Real Estate</span></h1>
                        <p className='text-[14px] poppins-regular'>Connect with a local Better Real Estate Partner Agent to find out all the ways you can save.</p>
                    </div>
                    <div>
                        <h1 className='text-emerald-900 righteous-regular font-bold text-2xl'>Better <span className='text-gray-300 poppins-regular text-lg'>Cover</span></h1>
                        <p className='text-[14px] poppins-regular'>Shop, bundle, and save on insurance coverage for home, auto, life, and more.</p>
                    </div>
                    <div>
                        <h1 className='text-emerald-900 righteous-regular font-bold text-2xl'>Better <span className='text-gray-300 poppins-regular text-lg'>Inspect</span></h1>
                        <p className='text-[14px] poppins-regular'>Get free repair estimates, 24-hour turnarounds on reports, and rest easy with our 100-day inspection guarantee.</p>
                    </div>
                    <div>
                        <h1 className='text-emerald-900 righteous-regular font-bold text-2xl'>Better <span className='text-gray-300 poppins-regular text-lg'>Settlement Services</span></h1>
                        <p className='text-[14px] poppins-regular'>Get transparent rates when you shop for title insurance all in one convenient place.</p>
                    </div>
                </div>
                <ul className='poppins-regular w-[100%] md:w-[15vw] gap-4 flex flex-col'>
                    <li className='font-semibold text-xl'>Resources</li>
                    <li className='cursor-pointer hover:underline-animation text-nowrap'>Home affordability calculator</li>
                    <li className='cursor-pointer hover:underline-animation'>Mortgage calculator</li>
                    <li className='cursor-pointer hover:underline-animation'>Free mortgage calculator</li>
                    <li className='cursor-pointer hover:underline-animation text-nowrap'>Mortgage calculator with taxes</li>
                    <li className='cursor-pointer hover:underline-animation text-nowrap'>Mortgage calculator with PMI</li>
                    <li className='cursor-pointer hover:underline-animation'>Rent vs buy calculator</li>
                    <li className='cursor-pointer hover:underline-animation'>HELOC payment calculator</li>
                    <li className='cursor-pointer hover:underline-animation text-nowrap'>HELOC vs cash-out refinance calculator</li>
                    <li className='cursor-pointer hover:underline-animation'>Buy a home</li>
                    <li className='cursor-pointer hover:underline-animation'>Sell a home</li>
                    <li className='cursor-pointer hover:underline-animation'>Get home inspection</li>
                </ul>
                <ul className='poppins-regular w-[100%] md:w-[15vw] gap-4 flex flex-col'>
                    <li className='font-semibold text-xl'>Company</li>
                    <li className="cursor-pointer hover:underline-animation">About Us</li>
                    <li className="cursor-pointer hover:underline-animation">Careers</li>
                    <li className="cursor-pointer hover:underline-animation">Media</li>
                    <li className="cursor-pointer hover:underline-animation">Partner With Us</li>
                    <li className="cursor-pointer hover:underline-animation">Learning center</li>
                    <li className="cursor-pointer hover:underline-animation">FAQs</li>
                    <li className="cursor-pointer hover:underline-animation">Investor Relations</li>
                </ul>
                <ul className='poppins-regular w-[100%] md:w-[15vw] gap-4 flex flex-col'>
                    <li className='font-semibold text-xl '>Contact Us</li>
                    <li className="cursor-pointer hover:underline-animation">hello@better.com</li>
                    <li className="cursor-pointer hover:underline-animation">415-523-8837</li>
                    <li className="cursor-pointer hover:underline-animation">FAQ</li>
                    <li className="cursor-pointer hover:underline-animation">Glossary</li>
                    <li className="font-semibold text-xl">Legal</li>
                    <li className="cursor-pointer hover:underline-animation">NMLS Consumer Access</li>
                    <li className="cursor-pointer hover:underline-animation ">Privacy Policy</li>
                    <li className="cursor-pointer hover:underline-animation">Terms of Use</li>
                    <li className="cursor-pointer hover:underline-animation">Disclosures & Licensing</li>
                    <li className="cursor-pointer hover:underline-animation">Affiliated Business</li>
                    <li className="cursor-pointer hover:underline-animation">Browser Disclaimer</li>
                </ul>
            </div>

            <div className='mt-40 flex gap-2 w-[86vw] m-auto mb-5'><a href=""><FaFacebook className='text-3xl text-gray-600' /></a>
                <a href=""><FaInstagram className='text-3xl text-gray-600' /></a>
                <a href=""><FaLinkedin className='text-3xl text-gray-600' /></a>
            </div>
            <div className='w-[86vw] m-auto  flex flex-col gap-4'>
                <p className='text-[13px]'>1 Better Mortgage’s One Day Mortgage™ promotion offers qualified customers who provide certain required financial information/documentation to Better Mortgage within 4 hours of locking a rate on a mortgage loan the opportunity to receive an underwriting determination from Better Mortgage within 24 hours of their rate lock. The underwriting determination is subject to customary terms, including fraud and anti-money laundering checks, that take place pre-closing and which may trigger additional required documentation from the customer. Better Mortgage does not guarantee that initial underwriting approval will result in a final underwriting approval. See One Day Mortgage™ Terms and Conditions.</p>
                <p className='text-[13px]'>2Better Mortgage’s One Day HELOC™ promotion offers qualified customers who provide certain required financial information/documentation to Better Mortgage within 4 hours of locking a rate on a HELOC loan the opportunity to receive an underwriting determination from Better Mortgage within 24 hours of their rate lock. The underwriting determination is subject to customary terms, including fraud and anti-money laundering checks, that take place pre-closing and which may trigger additional required documentation from the customer. Better Mortgage does not guarantee that initial underwriting approval will result in final underwriting approval. See One Day Heloc™ Terms and Conditions.</p>
                <p className='text-[13px]'>3Assumes borrowers are eligible for the Automated Valuation Model (AVM) to calculate their home value, their loan amount is less than $400,000, all required documents are uploaded to their Better Mortgage online account within 24 hours of application, closing is scheduled for the earliest available date and time, and a notary is readily available. Funding timelines may vary and may be longer if an appraisal is required to calculate a borrower’s home value.</p>
            </div>
            <div className='w-[86vw] m-auto mt-10 border-t-2 pt-10 flex flex-col gap-4'>
                <p className='text-[13px]'>© 2024 Better Home & Finance Holding Company and/or its affiliates. Better is a family of companies. Better Mortgage Corporation provides home loans; Better Real Estate, LLC and Better Real Estate California Inc License # 02164055 provides real estate services; Better Cover, LLC sells insurance products; and Better Settlement Services provides title insurance services; and Better Inspect, LLC provides home inspection services. All rights reserved.</p>
                <p className='text-[13px]'>Home lending products offered by Better Mortgage Corporation. Better Mortgage Corporation is a direct lender. NMLS #330511. 3 World Trade Center, 175 Greenwich Street, 57th Floor, New York, NY 10007. Loans made or arranged pursuant to a California Finance Lenders Law License. Not available in all states. Equal Housing Lender. NMLS Consumer Access</p>
                <p className='text-[13px]'>Better Real Estate, LLC dba BRE, Better Home Services, BRE Services, LLC and Better Real Estate, and operating in the State of California through its wholly owned subsidiary Better Real Estate California Inc., is a licensed real estate brokerage and maintains its corporate headquarters at 325-41 Chestnut Street, Suite 826, Philadelphia, PA 19106. Here is a full listing of Better Real Estate, LLC’s license numbers. Better Real Estate, LLC provides access to real estate brokerage services via its nationwide network of partner brokerages and real estate agents (“Better Real Estate Partner Agents”). Equal Housing Opportunity. All rights reserved.</p>
                <p className='text-[13px]'>New York State Fair Housing Notice</p>
                <p className='text-[13px]'>New York Standard Operating Procedures</p>
                <p className='text-[13px]'>Texas Real Estate Commission: Information About Brokerage Services | Consumer Protection Notice</p>
                <p className='text-[13px]'>Better Settlement Services, LLC. 325-41 Chestnut Street, Suite 803, Philadelphia, PA 19106.</p>
                <p className='text-[13px]'>Homeowners insurance policies are offered through Better Cover, LLC, a Pennsylvania Resident Producer Agency. License #881593. 325-41 Chestnut Street, Suite 807, Philadelphia, PA 19106.</p>
                <p className='text-[13px]'>Insurance quotes and policies are offered through Better Cover, LLC. A Pennsylvania Resident Producer Agency. License #881593. Here is a full listing of Better Cover, LLC’s license numbers.</p>
                <p className='text-[13px]'>Better Inspect, LLC maintains its corporate headquarters at 325-41 Chestnut Street, Suite 846, Philadelphia, PA 19106.</p>
                <p className='text-[13px]'>Better Mortgage Corporation, Better Real Estate, LLC, Better Settlement Services, LLC, Better Cover, LLC, Better Connect, and Better Inspect, LLC are separate operating subsidiaries of Better Home & Finance Holding Company. Each company is a separate legal entity operated and managed through its own management and governance structure as required by its state of incorporation, and applicable and legal and regulatory requirements. Products not available in all states.</p>
                <p className='text-[13px]'>Any unauthorized use of any proprietary or intellectual property is strictly prohibited. All trademarks, service marks, trade names, logos, icons, and domain names are proprietary to Better Home & Finance Holding Company. Better Home & Finance Holding Company trademarks are federally registered with the U. S. Patent and Trademark Office. Better Cover is a registered trademark with the U.S. Patent and Trademark Office and is owned by Better Cover, LLC.</p>
            </div>
        </div>
    )
}

export default Footer
