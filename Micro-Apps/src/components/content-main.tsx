import React from "react";
import Brand from "../assets/images/brandred.png";
import Kotak from "../assets/images/kotak.png";
import Image from "../assets/images/images.png";

const ContentMain: React.FC = () => {
  return (
    <>
      <div className="pt-8 pb-16 bg-zinc-300 ">
        <div className="mb-20">
          <div className="mx-32 h-[516px] bg-gradient-to-r from-red-300 to-amber-950 flex rounded-xl">
            <div className="w-3/5">
              <img className="w-60 opacity-50" src={Brand} alt="Banner" />
              <p className="px-6 mt-48 text-white text-6xl font-bold">
                SELAMAT DATANG
              </p>
              <p className="px-6 text-white text-xl font-bold">
                PEMILU PRESIDEN DUMBWAYS.ID YANG JUJUR DIPILIH MELALUI SEBUAH
                ARTI NAMA
              </p>
            </div>
            <div className="px-10">
              <img
                className="w-[286px] h-[473px]"
                src={Kotak}
                alt="Kotak Suara"
              />
            </div>
          </div>
        </div>

        <div className="mx-32 grid grid-cols-3 gap-4 mb-4">
          <div className="col-span-2 relative">
            <img className="w-[666px] h-[362px]" src={Image} alt="" />
            <div className="bg-gradient-to-t to-transparent from-black w-[666px] h-[362px] absolute left-0 bottom-0 ">
              <div className="my-[10px] mx-[10px] absolute left-0 bottom-0">
                <p className="bg-red-600 w-48 px-3 py-2 my-3 text-lg text-white rounded-md">
                  SENIN, 03 JAN 2023
                </p>
                <p className="text-[32px] font-bold text-white leading-8 mt-[10px]">
                  KPU TETAPKAN 3 MENTOR TERBAIK
                </p>
                <p className="text-[24px] mt-[5px] text-white">Super Admin</p>
              </div>
            </div>
          </div>

          <div className="bg-white">
            <img src={Image} alt="Sample" />
            <div className="my-[10px] mx-[10px] ">
              <p className="bg-red-600 w-48 px-3 py-2 my-3 text-lg text-white rounded-md">
                SENIN, 03 JAN 2023
              </p>
              <h1 className="font-bold text-3xl">
                KPU TETAPKAN 3 MENTOR TERBAIK
              </h1>
              <h6 className="text-xl ">Super Admin</h6>
            </div>
          </div>
        </div>

        <div className="flex">
          <div className="bg-white ml-32 w-96">
            <img className="w-auto" src={Image} alt="Gambar KPU" />
            <div className="px-4 pb-4">
              <p className="bg-red-600 w-48 px-3 py-2 my-3 text-lg text-white rounded-md">
                SENIN, 03 JAN 2023
              </p>
              <h1 className="font-bold text-3xl">
                KPU TETAPKAN 3 MENTOR TERBAIK
              </h1>
              <h6 className="text-xl ">Super Admin</h6>
            </div>
          </div>

          <div className="bg-white ml-4 w-96">
            <img className="w-auto" src={Image} alt="Gambar KPU" />
            <div className="px-4 pb-4">
              <p className="bg-red-600 w-48 px-3 py-2 my-3 text-lg text-white rounded-md">
                SENIN, 03 JAN 2023
              </p>
              <h1 className="font-bold text-3xl">
                KPU TETAPKAN 3 MENTOR TERBAIK
              </h1>
              <h6 className="text-xl ">Super Admin</h6>
            </div>
          </div>

          <div className="bg-white ml-4 mr-32 w-96">
            <img className="w-auto" src={Image} alt="Gambar KPU" />
            <div className="px-4 pb-4">
              <p className="bg-red-600 w-48 px-3 py-2 my-3 text-lg text-white rounded-md">
                SENIN, 03 JAN 2023
              </p>
              <h1 className="font-bold text-3xl">
                KPU TETAPKAN 3 MENTOR TERBAIK
              </h1>
              <h6 className="text-xl ">Super Admin</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentMain;
