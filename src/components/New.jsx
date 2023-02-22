import React from 'react'

function New({title, description}) {
  return (
    <div className='mb-9 border-b-zinc-400 border-b-2'>
          <a className='hover:text-[#E9AB53] cursor-pointer text-white font-bold'>{title}</a>
          <p className='text-[#C5C6CE] mt-[0.8rem]'>{description}</p>
          {/* <span className='border-b-zinc-400 border-b-[1px] mt-3 content-none'></span> */}
        </div>
  )
}

export default New