import React from 'react'

function TopNews({image, top, title, subtitle}) {
  return (
    <div>
        <div className='flex max-[768px]:mt-[1.5rem]'>
          <img className='w-[25%]' src={image} alt="image-top" />
          <div className='px-3 py-2'>
            <h2 className='text-[#C5C6CE] text-[2rem] font-bold'>{top}</h2>
            <h2 className='text-[#000019] font-bold text-[1.1rem] my-1'>{title}</h2>
            <p className='text-[#5D5F79]'>{subtitle}</p>
          </div>
        </div>
      </div>
  )
}

export default TopNews