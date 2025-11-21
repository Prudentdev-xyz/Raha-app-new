import React from 'react'
import FaqAccoedium from './layouts/FaqAccordium'
import FaqAccordium from './layouts/FaqAccordium'
import BoyRight from "/BoyRight.svg"

export const FaqPage = () => {
  return (
    <div className='py-10 md:py-15 px-5 md:px-15 '>
        <div>
            <h1 className='font-semibold mx-auto text-center md:text-left text-xl md:text-2xl tracking-widest text-primary'>FREQUENTLY ASKED QUESTION (FAQ)</h1>
            <p className='font-semibold mx-auto text-center  md:text-left text-2xl md:text-3xl pt-3'>Have any question For Us?</p>
        </div>
        <div className='pt-10 flex flex-col gap-7 md:flex-row justify-between w-full items-center'>
        <div className='md:w-1/2 w-full'>
         <FaqAccordium />
         </div>
         <div className='md:w-1/2 w-full'>
              <img src={BoyRight}  />
         </div>
     
        </div>
    </div>
  )
}
