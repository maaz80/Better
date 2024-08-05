import React, { useState, useEffect } from 'react';
import { BiSolidPhone } from 'react-icons/bi';
import { FaArrowRight, FaChevronRight, FaTimes } from 'react-icons/fa';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { MdMenu } from 'react-icons/md';

const Navbar = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isSubMenuVisible, setIsSubMenuVisible] = useState(null);
  const [bgColor, setBgColor] = useState('bg-emerald-900');
  const [textColor, setTextColor] = useState('text-white');
  const [hoverBgColor, setHoverBgColor] = useState('hover:bg-white');
  const [BgForStart, setBgForStart] = useState('bgcolor');
  const [TextForStart, setTextForStart] = useState('text-emerald-900');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState(null);

  const handleTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleMouseEnterMenu = (index) => {
    setIsSubMenuVisible(index);
  };

  const handleMouseLeaveMenu = () => {
    setIsSubMenuVisible(null);
  };

  const handleMouseEnterItem = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeaveItem = () => {
    setHoveredIndex(null);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleMobileSubmenu = (index) => {
    if (activeMobileSubmenu === index) {
      setActiveMobileSubmenu(null);
    } else {
      setActiveMobileSubmenu(index);
    }
  };

  const menuItems = [
    { label: 'Buy', submenu: ['Apply now', 'Purchase rates', 'Affordability calculator', 'Mortgage calculator', 'Buy vs rent calculator', 'Find an agent', 'VA loans', 'Learning center'] },
    { label: 'Refinance', submenu: ['Apply Now', 'Refinance rates', 'Cash-out refinance calculator', 'Learning Center'] },
    { label: 'HELOC', submenu: ['Apply Now', 'Calculate your cash💸', 'HELOC vs. Cash-out Refinance', 'Learning Center'] },
    { label: 'Rates', submenu: ['Purchases mortgages rates', 'Refinance rates', 'Refinance Cash-out rates', 'HELOC rates', 'Purchase VA rates'] },
    { label: 'Better+', submenu: ['Get insurance', 'Title and closing', 'Better Attorney Match', 'Learning Center', 'Better Agent Match', 'Better Duo'] }
  ];

  useGSAP(() => {
    gsap.from('.Logo', {
      opacity: 0,
      scale: 0,
      duration: 1.5,
      ease: 'elastic.out'
    });
    gsap.from('.navlist', {
      x: 100,
      opacity: 0,
      scale: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: 'ease.in'
    });
  });

  useEffect(() => {
    const sections = document.querySelectorAll('.section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.id === 'home') {
              setBgColor('bg-emerald-900');
              setTextColor('text-white');
              setHoverBgColor('hover:bg-white border-white');
              setBgForStart('bgcolor');
              setTextForStart('text-emerald-900');
            } else if (entry.target.id === 'stories' || 'calculator') {
              setBgColor('bg-white');
              setTextColor('text-emerald-900');
              setHoverBgColor('hover:bg-gray-100 border-emerald-900');
              setBgForStart('bg-emerald-900');
              setTextForStart('text-white');
            }
            }
          
        });
      },
      {
        threshold: 0.7, 
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className={`${bgColor} ${textColor} flex py-2 md:py-6 justify-between items-center px-2 md:px-16 fixed z-50 w-full transition-colors duration-300`}>
      <div className={`gap-16 flex text-base font-sans items-center`}>
        <h1 className='righteous-regular text-2xl Logo' onClick={handleTop}>Better</h1>
        {menuItems.map((menuItem, index) => (
          <div
            key={index}
            className='relative hidden md:block'
            onMouseEnter={() => handleMouseEnterMenu(index)}
            onMouseLeave={handleMouseLeaveMenu}
          >
            <div className={`poppins-regular ${hoverBgColor} hover:text-emerald-900 cursor-pointer w-24 text-center py-3 rounded-full navlist`}>
              {menuItem.label}
            </div>
            <ul
              className={`absolute top-12 bg-white shadow-xl p-4 rounded-md  cursor-pointer text-black text-[17px] poppins-regular left-0 submenu ${isSubMenuVisible === index ? 'visible' : ''}`}
              onMouseEnter={() => setIsSubMenuVisible(index)}
              onMouseLeave={handleMouseLeaveMenu}
            >
              {menuItem.submenu.map((item, subIndex) => (
                <li
                  key={subIndex}
                  className='w-80 hover:bg-gray-100 rounded-md px-5 py-3 flex items-center justify-between  cursor-pointer'
                  onMouseEnter={() => handleMouseEnterItem(subIndex)}
                  onMouseLeave={handleMouseLeaveItem}
                >
                  {item} <span>{hoveredIndex === subIndex && <FaArrowRight />}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className='flex gap-3 md:gap-8 items-center'>
        <BiSolidPhone className={`text-3xl md:text-5xl  border p-1 md:p-3 hover:border-none ${hoverBgColor} hover:text-emerald-900 text-center rounded-full`} />
        <div className={`poppins-regular ${hoverBgColor} hidden md:block hover:text-emerald-900 w-20 text-center py-3 rounded-full`}>SignIn</div>
        <div className={`poppins-regular block md:hidden ${BgForStart} ${TextForStart} px-4  text-center py-2 rounded-full text-sm`}>Get Started</div>

        <div className={`poppins-regular ${hoverBgColor} block  md:hidden hover:text-emerald-900 text-center py-3 rounded-full text-3xl`} onClick={toggleMobileMenu}><MdMenu /></div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed top-0 left-0 h-full w-full text-emerald-900 bg-white transform ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-40`}>
        <div className='p-4'>
          <div className='flex justify-between items-center mb-8'>
            <h1 className='text-2xl font-bold'>Menu</h1>
            <FaTimes className='text-2xl cursor-pointer' onClick={toggleMobileMenu} />
          </div>
          {menuItems.map((menuItem, index) => (
            <div key={index} className='mb-4'>
              <div
                className='text-lg font-semibold cursor-pointer flex justify-between items-center'
                onClick={() => toggleMobileSubmenu(index)}
              >
                {menuItem.label}
                <FaChevronRight className={`transform transition-transform duration-300 ${activeMobileSubmenu === index ? 'rotate-90' : ''}`} />
              </div>
              {activeMobileSubmenu === index && (
                <ul className='pl-4 mt-2'>
                  {menuItem.submenu.map((item, subIndex) => (
                    <li key={subIndex} className='py-2 flex justify-between items-center'>
                      {item}
                      <FaArrowRight className='text-sm' />
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;