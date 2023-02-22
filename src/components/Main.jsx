import React from 'react'
import hero from "../assets/images/image-desktop.jpg"
import New from './New'

function Main() {
  return (
    <div className='main mt-[2rem]'>
      <div className='flex max-[768px]:flex-col'>
        <div>
        <img className='w-[88%] max-[425px]:w-[150%] max-[425px]:ml-[4rem]' src={hero} alt="hero-image" />
          <div className='flex max-[768px]:flex-col mt-[1.5rem]'>
          <h1 className='text-[4rem] max-[768px]:text-[3rem] max-[768px]:px-5 text-[#000019] max-[425px]:w-[125%] font-bold leading-[4.5rem]'>The Bright Future of Web 3.0?</h1>
          <div className='ml-[-1.5rem] px-[8rem]'>
            <p className='text-[#5D5F79] max-[768px]:ml-[-5rem] max-[425px]:w-[300%] leading-[2rem]'> We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. 
  But is it really fulfilling its promise?</p>
            <button className='mt-[2.5rem] hover:bg-[#000030] bg-[#000019] text-white tracking-widest py-2 px-5 max-[768px]:ml-[-5rem] uppercase text-[15px]'>Read more</button>
            </div>
          </div>
        </div>
      
      <div className='px-7 max-[425px]:w-[135%] py-4 bg-[#000019] ml-[-5rem] max-[768px]:mt-[1.5rem] max-[768px]:ml-[-1rem]'>
        <h2 className='text-[#E9AB53] text-[2rem] font-bold mb-[1rem]'>New</h2>
        <New title="Hydrogen VS Electric Cars" description="Will hydrogen-fueled cars ever catch up to EVs?" />
        <New title="The Downsides of AI Artistry" description="What are the possible adverse effects of on-demand AI image generation?" />
         <New title="Is VC Funding Drying Up?" description="Private funding by VC firms is down 50% YOY. We take a look at what that means." /> 
         <New title="Hydrogen VS Electric Cars" description="Will hydrogen-fueled cars ever catch up to EVs?" />
      </div>
    </div>
    </div>
  )
}

export default Main