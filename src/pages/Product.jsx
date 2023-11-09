import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Product() {
  const [data, setData] = useState([]);
  const storedToken = localStorage.getItem("token");
  let config = {
    headers: {
      Authorization: "Bearer " + storedToken,
    },
  };
  console.log(data);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.denzo.io/api/cus/v1/products?page=1",
          config
        );
        console.log(response.data);
        setData(response.data.products.data);
        // This will log the data from the API
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div
      style={{
        backgroundImage:
          'url("https://s3-alpha-sig.figma.com/img/bf10/fecd/29b9dcf39db187c681d3ea591c19fc4c?Expires=1700438400&Signature=kGapCyLyoAWj~zc1aRCuR-suEBBDNX5aROsnUMNNtzwN7EmxLPChMcNFCYJjub~-ClwJyzvg~SUrdpHB-TmLe53sT-lD8bio4FzTFG6xIw1sihxwwilhIYduBFKegq0Fm4Z3Q6malZqo~Doj-vLCESzjLqsUQaUqKRhZfpinczBhzcojv4mTS8VnSd7ATVgV0hBjfYHraTXj3TPtJgO57kcmX2wJJ9zw-EC-4DQTHCDhtEGWANkn~XWcG6D~3NIOmTMSktJxtvKze4xm5PY~oMz7oStZIe7mNW2pHegjBd7uI5tXIhHMjpA4-~omRNmawdbChOIieQmQD3j2w3zCNQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4")',
      }}
    >
      <div className="flex">
        <div className="w-1/3"></div>

        <div className="w-1/3">
          <h2 className="uppercase font-bold text-2xl my-2">canteen</h2>
          {data.map((item) => (
            <div className="border border-b p-3 justify-between rounded-lg items-center flex mt-2 gap-2">
              <Link to={`/productDetails/${item.id}`}>
                <img className="w-16 h-16" src={item.cover_image} />
              </Link>
              <Link to={`/productDetails/${item.id}`} className="flex-1">
                <p className="hover:underline font-semibold text-slate-700">
                  {item.name}
                </p>
                <p>{item.price}</p>
              </Link>
              <div className="flex flex-col items-center">
                <input type="number" min={0} max={10} className="border w-10" />
              </div>
            </div>
          ))}

          <div className="w-1/3"></div>
        </div>
      </div>
      <footer className="bg-green-700 sticky ">
        <div className="flex justify-between">
          <h3 className="text-white">Total - $45</h3>
          <Link to={"/cart"}>
            <button className="rounded-full bg-white p-2">Place order</button>
          </Link>
        </div>
      </footer>
    </div>
  );
}
