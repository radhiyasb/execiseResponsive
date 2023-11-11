import React from 'react'

const Responsive = () => {
  return (
    <div className="p-2 space-y-2 w-full h-screen box-border">
        <div className="flex justify-end md:justify-center w-full h-1/4 ">
          <div className="bg-[#EB3838] w-1/3 md:w-full h-full flex justify-center items-center">
            <span className="text-white font-semibold text-xl">Merah</span>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-2 w-full h-5/6">
          <div className="justify-center items-center h-full w-1/3 bg-[#5C38EB] hidden lg:flex">
            <span className="text-white font-semibold text-xl">Ungu</span>
          </div>
          <div className="flex flex-col gap-2 md:flex-col-reverse w-full h-full">
            <div className="flex justify-center items-center h-2/6  w-full bg-[#5C38EB] lg:hidden">
              <span className="text-white font-semibold text-xl">Ungu</span>
            </div>
            <div className="flex justify-between gap-2 md:flex-row-reverse  items-center h-2/6 lg:h-3/6 w-full">
              <div className="flex justify-center items-center h-full w-full bg-[#EB38AE]">
                <span className="text-white font-semibold text-xl">Pink</span>
              </div>
              <div className="flex justify-center items-center h-full w-full bg-[#38C0EB] md:bg-[#EB38AE] lg:bg-[#38C0EB]">
                <span className="text-white font-semibold text-xl">Biru</span>
              </div>
            </div>
            <div className="flex justify-center items-center h-2/6 lg:h-3/6 w-full bg-[#38EB55]">
              <span className="text-white font-semibold text-xl">Hijau</span>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Responsive
