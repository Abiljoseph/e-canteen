import React from "react";

export default function ProductDetails() {
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
          "https://api.denzo.io/api/v1/products/view/:productId",
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
      <div class="flex min-h-screen items-center justify-center bg-gray-100">
        <div class="mx-auto px-5">
          <div class="max-w-xs cursor-pointer rounded-lg bg-white p-2 shadow duration-150 hover:scale-105 hover:shadow-md">
            <img
              class="w-full rounded-lg object-cover object-center"
              src="https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
