import React, { useEffect, useState } from "react";
import axios from "axios";

const Carditem = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    let url = "https://randomuser.me/api/?page=1&results=1&seed=abc";
    try {
      let response = await axios.get(url);
      setData(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="bg-gradient-to-r from-teal-500 to-emerald-400 min-h-screen flex items-center justify-center p-4">
      <div className="w-full md:w-2/3 lg:w-1/2 xl:w-1/3  bg-white p-8 rounded-lg shadow-lg ">
        <div className="border-2 border-cyan-500 p-4 rounded-lg">
          {data.map((item, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-4">
              <div className="w-full md:w-1/2">
                <img
                  src={item.picture.large}
                  alt="error"
                  className="w-full h-full rounded-lg "
                />
              </div>
              <div className="w-full md:w-1/2">
                <ul className="text-sm md:text-lg lg:text-xl font-medium text-left">
                  <li className="mb-2">
                    <span className="text-gray-600">First Name:</span>{" "}
                    {item.name.first}
                  </li>
                  <li className="mb-2">
                    <span className="text-gray-600">Last Name:</span>{" "}
                    {item.name.last}
                  </li>
                  <li className="mb-2">
                    <span className="text-gray-600">Gender:</span> {item.gender}
                  </li>
                  <li className="mb-2">
                    <span className="text-gray-600">Number:</span> {item.phone}
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carditem;
