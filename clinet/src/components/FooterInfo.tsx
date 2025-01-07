import React from 'react'

const FooterInfo = () => {
  return (
    <div className='bg-[#fff] h-[105px] text-[14px] flex justify-between px-[2.5rem] py-[1.5rem] text-[#00193F]'>
        <div>
            <div className='font-bold mb-[5px] '>TRANSFERMARKET COMPANY PROJECTS</div>
            <div className='flex text-[10px] gap-[40px]'><div>Wahretabelle</div>
            <div>Soccerdonna.de</div>
            <div>Scoutastic.com</div>
            </div>
        </div>
        <div>
            <div className='font-bold flex justify-end mb-[5px]'>© TRANSFERMARKET 2025</div>
            <div className='flex text-[10px] gap-[40px]'><div>Legal notice</div>
            <div>Data protection</div>
            <div>Privacy</div>
            <div>Site policy</div>
            </div>
        </div>
    </div>
  )
}

export default FooterInfo