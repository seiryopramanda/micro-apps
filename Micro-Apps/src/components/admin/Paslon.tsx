import React from "react";
import ListPaslon from "../../mocks/ListPaslon.json";
import { useNavigate } from "react-router-dom";

const ListTablePaslon: React.FC = () => {
  const navigate = useNavigate();

  const handleCLickAddPaslon = () => {
    navigate("/add-paslon");
  };

  return (
    <div className="container overflow-x-auto">
      <div className="">
        <h1 className="text-bottomvote lg:text-5xl text-4xl font-black text-center mt-24">
          LIST PASLON
        </h1>

        <div className="flex items-start ml-[160px] justify-start mt-4">
          <button
            onClick={handleCLickAddPaslon}
            className="bg-[#5E5400] text-white px-4 py-3 mr-32 rounded-md"
          >
            Add Paslon
          </button>
        </div>

        <div className="flex justify-center items-center  overflow-x-auto ">
          <table className="table-auto border-collapse mt-6 lg:text-base text-xs">
            <thead>
              <tr>
                <th className="border lg:px-6 lg:py-3.5 border-gray-600 bg-table">
                  No
                </th>
                <th className="border lg:px-6 lg:py-3.5 border-gray-600 bg-table">
                  Image
                </th>
                <th className="border lg:px-6 lg:py-3.5  border-gray-600 bg-table">
                  Nama
                </th>
                <th className="border lg:px-6 lg:py-3.5 border-gray-600 bg-table">
                  Visi & Misi
                </th>
                <th className="border lg:px-6 lg:py-3.5 border-gray-600 bg-table">
                  Koalisi
                </th>
              </tr>
            </thead>

            {ListPaslon &&
              ListPaslon.map((listpaslon, index) => {
                return (
                  <tbody key={index}>
                    <tr>
                      <td className="border lg:px-6 lg:py-3  border-gray-600">
                        1
                      </td>
                      <td className="border px-6 py-3  border-gray-600">
                        <img
                          src={listpaslon.image}
                          className="w-78 h-94"
                          alt=""
                        />
                      </td>
                      <td className="border lg:px-6 lg:py-3  border-gray-600">
                        {listpaslon.name}
                      </td>
                      <td className="border lg:px-6 lg:py-3  border-gray-600">
                        <ul className="list-disc">
                          <li>{listpaslon.vismis[0]}</li>
                          <li>{listpaslon.vismis[1]}</li>
                          <li>{listpaslon.vismis[2]}</li>
                        </ul>
                      </td>
                      <td className="border lg:px-6 lg:py-3  border-gray-600">
                        <ul className="list-disc">
                          <li>{listpaslon.Koalisi[0]}</li>
                          <li>{listpaslon.Koalisi[1]}</li>
                          <li>{listpaslon.Koalisi[2]}</li>
                        </ul>
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

export default ListTablePaslon;
