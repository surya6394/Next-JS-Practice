import Image from 'next/image';
import React from 'react';
import img from '../public/self-2.jpg';

const Cards = () => {

    const data = [
        {
            image: '/rating.jpg',
            name: "Surya Pratap",
            description: "This is the data I was collected from my organization, If you want to use you ca use it."
        },
        {
            image: '/rating.jpg',
            name: "Surya Pratap",
            description: "This is the data I was collected from my organization, If you want to use you ca use it."
        },
        {
            image: '/rating.jpg',
            name: "Surya Pratap",
            description: "This is the data I was collected from my organization, If you want to use you ca use it."
        },
    ]

    return (
        <>
            <div className='grid grid-cols-3 mx-10 gap-10 mt-16'>
                {data.map((item, index) => (
                    <div key={index} className='bg-amber-100 text-black border-[1.5px] rounded p-10 text-center'>
                        <div className='flex justify-center items-center'>
                            <Image src={item.image} height={100} width={100} alt='Profile picture is not available' />
                        </div>
                        <div>
                            <h1>{item.name}</h1>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>


            <div className='grid grid-cols-3 mx-10 gap-10 my-16'>
                {data.map((item, index) => (
                    <div key={index} className='relative bg-amber-100 text-black border-[1.5px] rounded p-10 text-center'>
                        <div className='flex justify-center items-center'>
                            <Image quality={100} priority={true} fill='true' src={item.image} alt='Profile picture is not available' className='absolute' />
                        </div>
                        <div>
                            <h1>{item.name}</h1>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className='grid grid-cols-3 mx-10 gap-10 my-16'>
                {data.map((item, index) => (
                    <div key={index} className='relative bg-amber-100 text-black border-[1.5px] rounded p-10 text-center'>
                        <div className='flex justify-center items-center'>
                            <Image quality={100} loading='lazy' fill='true' src={item.image} alt='Profile picture is not available' className='absolute' />
                        </div>
                        <div>
                            <h1>{item.name}</h1>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className='grid grid-cols-3 mx-10 gap-10 my-16'>
                {data.map((item, index) => (
                    <div key={index} className='relative bg-amber-100 text-black border-[1.5px] rounded p-10 text-center'>
                        <div className='flex justify-center items-center'>
                            <Image quality={100} placeholder='blur' blurDataURL='...' fill='true' src={item.image} alt='Profile picture is not available' className='absolute' />
                        </div>
                        <div>
                            <h1>{item.name}</h1>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
                <h1 className='text-center text-6xl'>Image Blur methods.</h1>
            <div className='grid grid-cols-3 mx-10 gap-10 my-16'>
                {data.map((item, index) => (
                    <div key={index} className='relative bg-amber-100 text-black border-[1.5px] rounded p-10 text-center'>
                        <div className='flex justify-center items-center'>
                            <Image quality={100} placeholder='blur' blurDataURL='' fill='true' src={img} alt='Profile picture is not available' className='absolute' />
                        </div>
                        <div>
                            <h1>{item.name}</h1>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Cards;