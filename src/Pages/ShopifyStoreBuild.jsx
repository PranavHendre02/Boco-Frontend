import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { useEffect, useState } from 'react';
import API from '../api';
import { MdArrowOutward } from "react-icons/md";

const ShopifyStoreBuild = () => {
    const [data, setdata] = useState()
    useEffect(() => {
        const Setshopify = async () => {
            try {
                const res = await API.get('/store-page')
                console.log(res.data);
                setdata(res.data);
            } catch (error) {
                console.log("there is error" + error)
            }
        }

        Setshopify();
    }, [])

    if (!data) {
        return <h1 className='text-[0.25rem] text-gray-600 text-center' >loading....</h1>
    }
    const {
        Section1Head,
        Section1SubHead,
        Section3Head,
        Section3SubHead,
        Section3List,
        Section5Head,
        Section5SubHead,
        Section5LIst
    } = data.data;




    return (
        <>
            <Navbar />
            <div className='flex items-center justify-center'>
                <div className='w-[1440px] h-[922px] flex items-center text-center m-auto flex-col' >
                    <div>
                        <h1 className='mt-24 text-5xl font-bold font-[Plus Jakarta Sans] text-[#060237] ml-40 mr-40' >{Section1Head}</h1>
                    </div>
                    <div>
                        <p className='text-2xl font-normal font-[Plus Jakarta Sans] text-[#060237] ml-40 mr-40 mt-14 mb-14'>{Section1SubHead}</p>
                    </div>
                    <div className='flex flex-row mb-2'>
                        <button
                            className='flex items-center justify-center w-44 h-16 border-purple text-purple text-[1rem] font-medium rounded-[8rem] mr-6 border'
                        >
                            <p className='flex items-center justify-center '>Audit My Website</p>

                        </button>
                        <button
                            className='flex items-center justify-center w-40 h-16 bg-purple text-white text-[1rem] font-medium rounded-[8rem] ml-6'
                        >
                            <p className='flex items-center justify-center ml-4'>Talk To Us</p>
                            <div className='p-3 bg-white text-black rounded-[25px] ml-6 text-[1.3rem]'>
                                <MdArrowOutward />
                            </div>
                        </button>
                    </div>
                    <div >
                        <img src={'https://res.cloudinary.com/drtosngvu/image/upload/v1752578689/sample21_f8ae069185.png'} alt="img" />
                    </div>
                    <div className='w-[1440px] h-[560px] mb-14 bg-[#F6F3FF] flex gap-[26px] items-center justify-center' >
                        <div className='flex flex-row gap-[26px] justify-center h-[560px] items-center'>
                            <div className='w-[388px] h-[320px] rounded-xl bg-white' >
                                <img src={'https://res.cloudinary.com/drtosngvu/image/upload/v1752578682/sample22_45b81d1e20.png'} alt="img1" className='h-[321px] w-[312px]' />
                                <h1 className='text-2xl font-bold text-purple'>
                                    Built for High Conversion Rate
                                </h1>
                                <p className='text-[16px] font-light text-purple'>
                                    Our Core Focus for building any website is to ensure it reaches and outperforms Conversion Rate benchmarks
                                </p>
                            </div>
                            <div className='w-[388px] h-[320px] rounded-xl bg-white' >
                                <img src={'https://res.cloudinary.com/drtosngvu/image/upload/v1752578686/sample23_a23246c575.png'} alt="img2" className='h-[321px] w-[312px]' />
                                <h1 className='text-2xl font-bold text-purple'>
                                    Lightnight Fast
                                    & Visually Stable
                                </h1>
                                <p className='text-[16px] font-light text-purple'>
                                    All our websites follow market leading benchmarks for Speed and Stability, ensuring user engagement & enhanced conversions
                                </p>
                            </div>
                            <div className='w-[388px] h-[320px] rounded-xl bg-white' >
                                <img src={'https://res.cloudinary.com/drtosngvu/image/upload/v1752578685/sample24_e3ee45a075.png'} alt="img3" className='h-[321px] w-[312px]' />
                                <h1 className='text-2xl font-bold text-purple'>
                                    Timelines &
                                    Budgets On Track
                                </h1>
                                <p className='text-[16px] font-light text-purple'>
                                    We have a well structured process for Strategy, Design & Development, with phase-wise updates to ensure we reach our milestones in time
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}

export default ShopifyStoreBuild