"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { MdGTranslate } from 'react-icons/md';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import { translations } from './translations';

const Navbar = () => {
  const [menuIcon, setMenuIcon] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [language, setLanguage] = useState('en'); // Default language

  const handleSmallerScreensNavigation = () => setMenuIcon(!menuIcon);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const changeLanguage = (lng) => {
    setLanguage(lng);
    setDropdownOpen(false);
  };

  const t = (key) => translations[language][key];

  return (
    <div>
      <header className='bg-black text-white w-full ease-in duration-300 top-0 left-0 z-10 lg:mt-12'>
        <nav className='max-w-[1366px] mx-auto h-[100px] flex items-center lg:justify-center justify-between p-4'>
          <div className='lg:mr-3'>
            <Link href='/' onClick={handleSmallerScreensNavigation}>
              <img src='Logo.png' alt='logo' className='w-auto max-h-[100px]' />
            </Link>
          </div>

          {/* Large screen navigation */}
          <ul className='hidden md:flex font-semibold text-white items-center justify-center cursor-pointer'>
            <li className='mr-5 lg:mr-8 hover:text-[#E0E21C] sm:text-[11px] lg:text-[14px] text-center'>
              <Link href=''>{t('home')}</Link>
            </li>
            <li className='mr-5 lg:mr-8 hover:text-[#E0E21C] sm:text-[11px] md:text-[11px] lg:text-[14px] text-center'>
              <Link href='/talk-to-my-government'>{t('talkToMyGovernment')}</Link>
            </li>
            <li className='mr-5 lg:mr-8 hover:text-[#E0E21C] sm:text-[11px] lg:text-[14px] text-center'>
              <Link href='/talk-to-my-organisation'>{t('talkToMyOrganisation')}</Link>
            </li>
            <li className='mr-5 lg:mr-8 hover:text-[#E0E21C] sm:text-[11px] lg:text-[14px] text-center'>
              <Link href='/Get Legal Assistance'>{t('getLegalAssistance')}</Link>
            </li>
            <li className='mr-5 lg:mr-8 hover:text-[#E0E21C] sm:text-[11px] lg:text-[14px] text-center'>
              <Link href='/Educate'>{t('educate')}</Link>
            </li>
            <li className='mr-5 lg:mr-8 hover:text-[#E0E21C] sm:text-[11px] lg:text-[14px] text-center'>
              <Link href='/about'>{t('about')}</Link>
            </li>
            <li className='relative hover:text-[#E0E21C] sm:text-[11px] text-center flex flex-col items-center'>
              <button onClick={toggleDropdown} className="flex items-center gap-2">
                <MdGTranslate className="hover:font-bold lg:bg-red lg:text-black lg:bg-white lg:p-1 lg:mb-1 font-bold sm:p-1 sm:w-7 p-2 w-8 h-8" />
                <span className='sm:text-[7px] lg:text-[10px] text-center'>{t('translate')}: {t(language)}</span>
              </button>
              {dropdownOpen && (
                <div className="absolute top-full right-0 mt-2 bg-black text-white rounded shadow-lg w-32 z-10">
                  <ul className="list-none p-2">
                    <li onClick={() => changeLanguage('en')} className={`px-4 py-2 hover:bg-[#E0E21C] cursor-pointer ${language === 'en' ? 'bg-[#E0E21C] text-black' : ''}`}>English</li>
                    <li onClick={() => changeLanguage('es')} className={`px-4 py-2 hover:bg-[#E0E21C] cursor-pointer ${language === 'es' ? 'bg-[#E0E21C] text-black' : ''}`}>Spanish</li>
                    <li onClick={() => changeLanguage('fr')} className={`px-4 py-2 hover:bg-[#E0E21C] cursor-pointer ${language === 'fr' ? 'bg-[#E0E21C] text-black' : ''}`}>French</li>
                    <li onClick={() => changeLanguage('de')} className={`px-4 py-2 hover:bg-[#E0E21C] cursor-pointer ${language === 'de' ? 'bg-[#E0E21C] text-black' : ''}`}>German</li>
                  </ul>
                </div>
              )}
            </li>
          </ul>

          <div className="hidden text-white gap-3 md:flex lg:mx-6">
            <HiOutlineDotsVertical />
          </div>

          <div className="hidden md:flex">
            <div className='flex'>
              <Link href='/login'>
                <button className="mr-5 md:mr-2 lg:mr-8 border-2 border-[#E0E21C] text-[#E0E21C] sm:text-[11px] sm:px-2 lg:text-[13px] rounded lg:px-4 lg:py-2 sm:py-1 sm:px-1">Login</button>
              </Link>
              <Link href='/signup'>
                <button className="bg-[#E0E21C] text-black hover:bg-white hover:text-[#E0E21C] sm:text-[11px] sm:px-2 lg:text-[13px] rounded lg:px-2 lg:py-2.5 sm:py-1.5">Sign Up</button>
              </Link>
            </div>
          </div>

          {/* Smaller screens: Navigation icons */}
          <div onClick={handleSmallerScreensNavigation} className='flex md:hidden'>
            {menuIcon ? (<AiOutlineClose size={25} className='text-[#E0E21C]' />)
              : (<AiOutlineMenu size={25} className='text-[#E0E21C]' />)}
          </div>

          {/* Small screen navbar */}
          <div className={menuIcon ?
            'md:hidden absolute top-[100px] right-0 left-0 flex w-full h-screen bg-black text-white text-center ease-in duration-300' :
            'md:hidden absolute top-[100px] right-[-100%] left-0 flex w-full h-screen bg-black text-white text-center ease-in duration-300'}>

            <div className='w-full'>
              <ul className='uppercase font-bold text-[12px]'>
                <li onClick={handleSmallerScreensNavigation} className='py-5 hover:text-[#E0E21C] cursor-pointer'>
                  <Link href='/'>{t('home')}</Link>
                </li>
                <li onClick={handleSmallerScreensNavigation} className='py-5 hover:text-[#E0E21C] cursor-pointer'>
                  <Link href='/talk-to-my-government'>{t('talkToMyGovernment')}</Link>
                </li>
                <li onClick={handleSmallerScreensNavigation} className='py-5 hover:text-[#E0E21C] cursor-pointer'>
                  <Link href='/talk-to-my-organisation'>{t('talkToMyOrganisation')}</Link>
                </li>
                <li onClick={handleSmallerScreensNavigation} className='py-5 hover:text-[#E0E21C] cursor-pointer'>
                  <Link href='/Get Legal Assistance'>{t('getLegalAssistance')}</Link>
                </li>
                <li onClick={handleSmallerScreensNavigation} className='py-5 hover:text-[#E0E21C] cursor-pointer'>
                  <Link href='/Educate'>{t('educate')}</Link>
                </li>
                <li onClick={handleSmallerScreensNavigation} className='py-5 hover:text-[#E0E21C] cursor-pointer'>
                  <Link href='/about'>{t('about')}</Link>
                </li>
              </ul>

              <div className='flex flex-col justify-center items-center mt-8'>
                <Link href='/login' onClick={handleSmallerScreensNavigation} className='w-[200px] mb-5'>
                  <button className='bg-[#E0E21C] text-slate-800 rounded uppercase py-1 w-full'>Login</button>
                </Link>

                <Link href='/signup' onClick={handleSmallerScreensNavigation} className='w-[200px] mb-5'>
                  <button className='bg-[#E0E21C] text-slate-800 rounded uppercase py-1 w-full'>Sign Up</button>
                </Link>
              </div>
            </div>

          </div>

        </nav>
      </header>
    </div>
  );
};

export default Navbar;
