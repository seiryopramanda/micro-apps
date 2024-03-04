import React from "react";
import monkeyking from "../../assets/images/monkeyking.png";
import { useNavigate } from "react-router-dom";

const AddPaslonForm: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1 className="text-bottomvote text-5xl font-black text-center mt-24">
        ADD PASLON
      </h1>
      <div className="lg:flex lg:justify-center lg:gap-12  ">
        <div className="flex justify-center ">
          <img
            src={monkeyking}
            alt=""
            className="lg:w-368 w-[345px] h-523 radius-xl mt-14"
          />
        </div>
        <div className="flex justify-center">
          <div className="flex flex-col">
            <label
              htmlFor="username"
              className="text-2xl font-bold text-logincolor mt-10"
            >
              Nama
            </label>
            <input
              type="text"
              className="lg:w-478 lg:h-70 w-[330px] h-[40px]  border-logincolor border-2 rounded-2xl mt-3"
            />
            <label
              htmlFor="username"
              className="text-2xl font-bold text-logincolor mt-5"
            >
              Nomor Urut
            </label>
            <input
              type="text"
              className="lg:w-478 lg:h-70 w-[330px] h-[40px] border-logincolor border-2 rounded-2xl mt-3"
            />
            <label
              htmlFor="username"
              className="text-2xl font-bold text-logincolor mt-5"
            >
              Visi & Misi
            </label>
            <input
              type="text"
              className="lg:w-478 lg:h-249 w-[330px] h-[150px] border-logincolor border-2 rounded-2xl mt-3"
            />
            <button
              className="lg:w-478 lg:h-68 w-[330px] h-[40px] bg-bottomvote font-bold lg:text-3xl text-2xl text-white rounded-2xl my-10"
              onClick={() => navigate("/paslon")}
            >
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPaslonForm;
