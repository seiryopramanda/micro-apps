import React from "react";
import { useNavigate } from "react-router-dom";

interface handleAuth {
  handle: (e: React.ChangeEvent<HTMLInputElement>) => void;
  login: (e: React.FormEvent<HTMLFormElement>) => void;
}

export default function Login(props: handleAuth) {
  const navigate = useNavigate();

  return (
    <div className="container flex justify-center items-center">
      <form
        action=""
        className="flex flex-col mx-auto"
        onSubmit={(e) => props.login(e)}
      >
        <h1 className="text-4xl text-bottomvote font-black text-center mt-16">
          LOGIN
        </h1>

        <label
          htmlFor="username"
          className="items-start text-xl font-bold text-logincolor mt-16"
        >
          Username
        </label>
        <input
          type="text"
          onChange={props.handle}
          name="username"
          id="username"
          className="w-96 h-14 border-logincolor border-2 rounded-2xl mt-3 px-6"
        />

        <label
          htmlFor="password"
          className="text-xl font-bold text-logincolor mt-6"
        >
          Password
        </label>
        <input
          type="password"
          onChange={props.handle}
          name="password"
          id="password"
          className="w-96 h-14 border-logincolor border-2 rounded-2xl mt-3 px-6 "
        />

        <button
          type="submit"
          className="w-96 h-14 bg-bottomvote font-bold text-2xl text-white rounded-2xl mt-12"
        >
          SUBMIT
        </button>

        <div className="flex mt-6 mx-auto">
          <p className="text-lg text-logincolor italic">
            Belum memiliki akun ?
          </p>
          <p
            className="text-lg text-blue-500 underline italic ml-3 cursor-pointer"
            onClick={() => navigate("/register")}
          >
            Register
          </p>
        </div>
      </form>
    </div>
  );
}
