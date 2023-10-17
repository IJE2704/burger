import React from 'react';
import homeBanner from '../assets/HomeBanner.png'

const HomeBanner = () => {
    return (
        <div className='container mx-auto flex items-center'>
            <div className='w-1/2'>
                <h1 className='text-[87px] font-bold'>Single Patty</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, quod. Ut ipsum voluptatum laudantium veniam. Asperiores magnam quos explicabo recusandae voluptate saepe officiis repudiandae tempore!</p>
                <button className='btn px-10 bg-red-600 text-white mt-4'> Order Now</button>
            </div>
            <div className='w-1/2 relative'>
                <img src={homeBanner} alt="" />
                <div className='absolute w-[150px] h-[150px] rounded-full bg-red-600 top-20 right-14'>
                    <div className='relative'>
                        <h1 className=' absolute text-white text-[50px] text-bold  top-10 start-2'>$7.99</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;