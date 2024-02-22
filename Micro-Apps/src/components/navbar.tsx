import React from "react";
import Logo from "../assets/images/logo.png";

const Navbar: React.FC = () => {
  const [isLogin, setIsLogin] = React.useState<boolean>(false);

  const loggedIn = (): void => {
    setIsLogin(!isLogin);
  };
  return (
    <>
      <div className="flex justify-between items-center bg-black text-white px-32 py-2">
        <div className="flex items-center">
          <div className="h-9 mr-4">
            <img className="h-full" src={Logo} alt="Logo dumbways.id" />
          </div>
          <p className="font-bold">PEMILU PRESIDEN DUMBWAYS.ID</p>
        </div>

        <div className="flex">
          <ul className="flex items-center justify-center">
            <li>Partai</li>
            <li className="mx-6">|</li>
            <li>Paslon</li>
            <li className="mx-6">|</li>
            <li>Voting</li>
          </ul>

          <div>
            {isLogin ? (
              <p className="bg-white text-black ms-10 h-9 w-9 rounded-full flex items-center justify-center">
                D
              </p>
            ) : (
              <button
                className="ms-10 px-4 py-1 bg-white text-black rounded"
                onClick={loggedIn}
              >
                LOGIN
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
