import axios from "axios";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Product() {
  //   const [data, setData] = useEffect();
  const storedToken = localStorage.getItem("token");
  let config = {
    headers: {
      Authorization: "Bearer " + storedToken,
    },
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.denzo.io/api/cus/v1/products?page=1",
          config
        );
        console.log(response.data);
        // This will log the data from the API
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="flex">
        <div className="w-1/3"></div>
        <div className="w-1/3">
          <div className="border p-3 justify-between rounded-lg items-center flex mt-2 gap-2">
            <Link>
              <img className="w-16 h-16" />
            </Link>
            <Link className="flex-1">
              <p className="hover:underline font-semibold text-slate-700"></p>
            </Link>
            <div className="flex flex-col items-center">
              <button
                type="button"
                onClick
                className="rounded-lg uppercase text-red-700 font-semibold hover:opacity-70"
              >
                delete
              </button>
              <Link>
                <button className="rounded-lg uppercase text-green-700 font-semibold hover:opacity-70">
                  edit
                </button>
              </Link>
            </div>
          </div>
          <div className="w-1/3"></div>
        </div>
      </div>
    </div>
  );
}
