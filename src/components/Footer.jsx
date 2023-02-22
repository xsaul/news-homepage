import React from 'react'
import TopNews from './TopNews'
import image1 from "../assets/images/image1.jpg"
import image2 from "../assets/images/image2.jpg"
import image3 from "../assets/images/image3.jpg"

function Footer() {
  return (
    <div className='flex max-[768px]:flex-col max-[425px]:w-[125%] mt-7 py-4'>
      <TopNews image={image1} top="01" title="Reviving Retro PCs" subtitle="What happens when old PCs are given modern upgrades?"/>
      <TopNews image={image2} top="02" title="Top 10 Laptops of 2022" subtitle="Our best picks for various needs and budgets."/>
      <TopNews image={image3} top="03" title="The Growth of Gaming" subtitle="How the pandemic has sparked fresh opportunities."/>
    </div>
  )
}

export default Footer