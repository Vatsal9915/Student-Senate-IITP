import React from 'react'
import Link from 'next/link'

const WingsSection = () => {
  return (
    <div className=' bg-blue-50 p-8 lg:p-16 pt-20 rounded-lg shadow-lg flex flex-col items-center justify-center'>
        <div>
            <h2 className="text-xl font-bold text-blue-900 mb-4 text-center">OUR WINGS</h2>
            <p className="text-5xl  text-gray-800 font-semibold mb-8 leading-normal text-center">EXPLORE THE VARIOUS WINGS OF OUR ORGANIZATION <br/> THAT DRIVE OUR MISSION FORWARD.</p>
        </div>
        <div className='flex gap-10 mt-20'>
            {/* DISHA */}
            <div className="relative w-96 h-96 max-w-xs mx-auto group border-b-4 border-violet-600 overflow-hidden">
            {/* front */}
            <div className="bg-white shadow-lg p-10 flex flex-col items-center justify-between transition-all duration-500 z-10 w-full h-full">
                <h1 className="text-lg tracking-widest font-semibold text-violet-700 mb-4">COUNCIL</h1>
                <h2 className="text-4xl font-semibold text-gray-800">DISHA</h2>
            </div>
            {/* back */}
            <div className="absolute left-0 bottom-0 w-full h-full bg-violet-600 shadow-lg p-10 flex flex-col items-center transition-all duration-500 scale-y-0 origin-bottom opacity-0 group-hover:scale-y-100 group-hover:opacity-100 z-20">
                <h1 className="text-lg tracking-widest font-semibold text-white mb-4">COUNCIL</h1>
                <h1 className="text-2xl font-bold text-white mb-4">ABOUT DISHA</h1>
                <h2 className="text-md text-white">
                DISHA EMPOWERS STUDENTS WITH SKILLS, EXPOSURE, AND SUPPORT FOR THEIR PROFESSIONAL GROWTH.
                </h2>
                <Link href='/wings/disha' className='underline mt-10 text-white'>READ MORE</Link>
            </div>
            </div>
            {/* ARTHNITI */}
            <div className="relative w-96 h-96 max-w-xs mx-auto group border-b-4 border-violet-600 overflow-hidden">
            {/* front */}
            <div className="bg-white shadow-lg p-10 flex flex-col items-center justify-between transition-all duration-500 z-10 w-full h-full">
                <h1 className="text-lg tracking-widest font-semibold text-violet-700 mb-4">COUNCIL</h1>
                <h2 className="text-4xl font-semibold text-gray-800">ARTHNITI</h2>
            </div>
            {/* back */}
            <div className="absolute left-0 bottom-0 w-full h-full bg-violet-600 shadow-lg p-10 flex flex-col items-center transition-all duration-500 scale-y-0 origin-bottom opacity-0 group-hover:scale-y-100 group-hover:opacity-100 z-20">
                <h1 className="text-lg tracking-widest font-semibold text-white mb-4">COUNCIL</h1>
                <h1 className="text-2xl font-bold text-white mb-4">ABOUT ARTHNITI</h1>
                <h2 className="text-sm text-white">
                ARTHNITI PROMOTES ENTREPRENEURSHIP AND BUSINESS SKILLS, OFFERING MENTORSHIP, WORKSHOPS, AND NETWORKING FOR STUDENTS TO DEVELOP THEIR IDEAS.
                </h2>
                <Link href='/wings/arthniti' className='underline mt-10 text-white'>READ MORE</Link>
            </div>
            </div>
            {/* TATVA */}
            <div className="relative w-96 h-96 max-w-xs mx-auto group border-b-4 border-violet-600 overflow-hidden">
            {/* front */}
            <div className="bg-white shadow-lg p-10 flex flex-col items-center justify-between transition-all duration-500 z-10 w-full h-full">
                <h1 className="text-lg tracking-widest font-semibold text-violet-700 mb-4">COUNCIL</h1>
                <h2 className="text-4xl font-semibold text-gray-800">TATVA</h2>
            </div>
            {/* back */}
            <div className="absolute left-0 bottom-0 w-full h-full bg-violet-600 shadow-lg p-10 flex flex-col items-center transition-all duration-500 scale-y-0 origin-bottom opacity-0 group-hover:scale-y-100 group-hover:opacity-100 z-20">
                <h1 className="text-lg tracking-widest font-semibold text-white mb-4">COUNCIL</h1>
                <h1 className="text-2xl font-bold text-white mb-4">ABOUT TATVA</h1>
                <h2 className="text-sm text-white">
                TATVA IS THE DEDICATED WING OF THE STUDENT TECHNICAL COUNCIL THAT AIMS TO NURTURE TECHNICAL EXPERTISE AND PROMOTE A RESEARCH-ORIENTED MINDSET AMONG STUDENTS.
                </h2>
                <Link href='/wings/tatva' className='underline mt-10 text-white'>READ MORE</Link>
            </div>
            </div>
        </div>
    </div>
  )
}
  

export default WingsSection