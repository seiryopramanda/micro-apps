import React from "react";
import { useNavigate } from "react-router-dom";

const Register: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className=" flex justify-center">
        <form action="" className="flex flex-col">
          <h1 className="text-4xl text-bottomvote font-black text-center mt-16">
            REGISTER
          </h1>
          <label
            htmlFor="username"
            className="text-xl font-bold text-logincolor mt-16"
          >
            Fullname
          </label>
          <input
            type="text"
            className="w-96 h-14 border-logincolor border-2 rounded-2xl mt-3 px-6"
          />
          <label
            htmlFor="username"
            className="text-xl  font-bold text-logincolor mt-6"
          >
            Alamat
          </label>
          <input
            type="text"
            className="w-96 h-14 border-logincolor border-2 rounded-2xl mt-3 px-6"
          />
          <label
            htmlFor="username"
            className="text-xl font-bold text-logincolor mt-6"
          >
            Jenis Kelamin
          </label>
          <input
            type="text"
            className="w-96 h-14 border-logincolor border-2 rounded-2xl mt-3 px-6"
          />
          <label
            htmlFor="username"
            className="text-xl font-bold text-logincolor mt-6"
          >
            Username
          </label>
          <input
            type="text"
            className="w-96 h-14 border-logincolor border-2 rounded-2xl mt-3 px-6"
          />
          <label
            htmlFor="username"
            className="text-xl font-bold text-logincolor mt-6"
          >
            Password
          </label>
          <input
            type="password"
            className="w-96 h-14 border-logincolor border-2 rounded-2xl mt-3 px-6"
          />
          <button
            className="w-96 h-14 bg-bottomvote font-bold text-2xl text-white rounded-2xl mt-12"
            onClick={() => navigate("/login")}
          >
            SUBMIT
          </button>
          <div className="flex mt-6 mx-auto pb-20">
            <p className="text-lg text-logincolor italic">
              Sudah memiliki akun ?
            </p>
            <p
              className="text-lg text-blue-500 underline italic ml-3 cursor-pointer"
              onClick={() => navigate("/login")}
            >
              Login
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
