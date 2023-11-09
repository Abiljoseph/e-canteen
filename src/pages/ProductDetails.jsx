import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetails() {
  const params = useParams();

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
          `https://api.denzo.io/api/v1/products/view/${params.productId}`,
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
    <div
      style={{
        backgroundImage:
          'url("https://s3-alpha-sig.figma.com/img/bf10/fecd/29b9dcf39db187c681d3ea591c19fc4c?Expires=1700438400&Signature=kGapCyLyoAWj~zc1aRCuR-suEBBDNX5aROsnUMNNtzwN7EmxLPChMcNFCYJjub~-ClwJyzvg~SUrdpHB-TmLe53sT-lD8bio4FzTFG6xIw1sihxwwilhIYduBFKegq0Fm4Z3Q6malZqo~Doj-vLCESzjLqsUQaUqKRhZfpinczBhzcojv4mTS8VnSd7ATVgV0hBjfYHraTXj3TPtJgO57kcmX2wJJ9zw-EC-4DQTHCDhtEGWANkn~XWcG6D~3NIOmTMSktJxtvKze4xm5PY~oMz7oStZIe7mNW2pHegjBd7uI5tXIhHMjpA4-~omRNmawdbChOIieQmQD3j2w3zCNQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4")',
      }}
    >
      <h2 className="font-bold text-4xl">Details</h2>
      <div
        style={{
          backgroundImage:
            'url("https://s3-alpha-sig.figma.com/img/bf10/fecd/29b9dcf39db187c681d3ea591c19fc4c?Expires=1700438400&Signature=kGapCyLyoAWj~zc1aRCuR-suEBBDNX5aROsnUMNNtzwN7EmxLPChMcNFCYJjub~-ClwJyzvg~SUrdpHB-TmLe53sT-lD8bio4FzTFG6xIw1sihxwwilhIYduBFKegq0Fm4Z3Q6malZqo~Doj-vLCESzjLqsUQaUqKRhZfpinczBhzcojv4mTS8VnSd7ATVgV0hBjfYHraTXj3TPtJgO57kcmX2wJJ9zw-EC-4DQTHCDhtEGWANkn~XWcG6D~3NIOmTMSktJxtvKze4xm5PY~oMz7oStZIe7mNW2pHegjBd7uI5tXIhHMjpA4-~omRNmawdbChOIieQmQD3j2w3zCNQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4")',
        }}
        class="flex min-h-screen items-center justify-center bg-gray-100"
      >
        <div class="mx-auto px-5">
          <div class="max-w-xs cursor-pointer rounded-lg bg-white p-2 shadow duration-150 hover:scale-105 hover:shadow-md">
            <img
              class="w-full rounded-lg object-cover object-center"
              src="https://img.freepik.com/free-photo/tasty-burger-isolated-white-background-fresh-hamburger-fastfood-with-beef-cheese_90220-1063.jpg?w=740&t=st=1699523115~exp=1699523715~hmac=d4f0b0da70d75ee1d72b709bb0b57d490a1df725b75e599c1325c73aa1d3c571"
              alt="product"
            />
            <p class="my-4 pl-4 font-bold text-gray-500">Product Name</p>
            <p class="mb-4 ml-4 text-xl font-semibold text-gray-800">$399</p>
          </div>
        </div>
      </div>
    </div>
  );
}
