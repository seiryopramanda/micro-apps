import React from "react";
import ListPartai from "../../mocks/ListPartai.json";
import { useNavigate } from "react-router-dom";

const Partai: React.FC = () => {
  const navigate = useNavigate();

  const handleClickAddPartai = () => {
    navigate("/add-partai");
  };

  return (
    <div className="container overflow-x-auto">
      <div className="">
        <h1 className="text-bottomvote lg:text-5xl text-4xl font-black text-center mt-24">
          LIST PARTAI
        </h1>

        <div className="flex items-start ml-[150px] justify-start mt-4">
          <button
            onClick={handleClickAddPartai}
            className="bg-[#5E5400] text-white px-4 py-3 mr-32 rounded-md"
          >
            Add Partai
          </button>
        </div>

        <div className="flex justify-center items-center  overflow-x-auto ">
          <table className="table-auto border-collapse mt-6 lg:text-base text-xs">
            <thead>
              <tr>
                <th className="border lg:px-6 lg:py-3.5 border-gray-600 bg-table">
                  No.Urut
                </th>
                <th className="border lg:px-6 lg:py-3.5 border-gray-600 bg-table">
                  Logo
                </th>
                <th className="border lg:px-6 lg:py-3.5  border-gray-600 bg-table">
                  Ketua Umum
                </th>
                <th className="border lg:px-6 lg:py-3.5 border-gray-600 bg-table">
                  Visi & Misi
                </th>
                <th className="border lg:px-6 lg:py-3.5 border-gray-600 bg-table">
                  Alamat
                </th>
              </tr>
            </thead>

            {ListPartai &&
              ListPartai.map((listpartai, index) => {
                return (
                  <tbody key={index}>
                    <tr>
                      <td className="border lg:px-6 lg:py-3 text-center border-gray-600">
                        {listpartai.nomor}
                      </td>
                      <td className="border lg:px-6 lg:py-3  border-gray-600">
                        <img
                          src={listpartai.image}
                          className="w-78 h-94"
                          alt=""
                        />
                      </td>
                      <td className="border lg:px-6 lg:py-3  border-gray-600">
                        {listpartai.name}
                      </td>
                      <td className="border lg:px-6 lg:py-3  border-gray-600">
                        <ul className="list-disc">
                          <li>{listpartai.vismis[0]}</li>
                          <li>{listpartai.vismis[1]}</li>
                          <li>{listpartai.vismis[2]}</li>
                        </ul>
                      </td>
                      <td className="border lg:px-6 lg:py-3  border-gray-600">
                        {listpartai.alamat}
                      </td>
                    </tr>
                  </tbody>
                );
              })}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Partai;
