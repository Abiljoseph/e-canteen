import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [formData, setformData] = useState({ store_id: "10" });

  const handleChange = (e) => {
    setformData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  console.log(formData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://api.denzo.io/api/cus/v1/login",
        formData
      );
      console.log(res);

      if (res.status === 200) {
        const token = res.data.token;
        localStorage.setItem("token", token);
        navigate("/product");
      } else {
        console.log("Login failed");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      className="p-3 max-w-lg mx-auto mt-24"
      style={{
        backgroundImage:
          'url("https://s3-alpha-sig.figma.com/img/bf10/fecd/29b9dcf39db187c681d3ea591c19fc4c?Expires=1700438400&Signature=kGapCyLyoAWj~zc1aRCuR-suEBBDNX5aROsnUMNNtzwN7EmxLPChMcNFCYJjub~-ClwJyzvg~SUrdpHB-TmLe53sT-lD8bio4FzTFG6xIw1sihxwwilhIYduBFKegq0Fm4Z3Q6malZqo~Doj-vLCESzjLqsUQaUqKRhZfpinczBhzcojv4mTS8VnSd7ATVgV0hBjfYHraTXj3TPtJgO57kcmX2wJJ9zw-EC-4DQTHCDhtEGWANkn~XWcG6D~3NIOmTMSktJxtvKze4xm5PY~oMz7oStZIe7mNW2pHegjBd7uI5tXIhHMjpA4-~omRNmawdbChOIieQmQD3j2w3zCNQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4")',
      }}
    >
      <h1 className="text-3xl text-center font-semibold my-7">welcome</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <input
          type="text"
          placeholder="Email"
          id="username"
          className="border p-3 rounded-lg"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          className="border p-3 rounded-lg"
          onChange={handleChange}
        />
        <button className="bg-lime-900 text-white p-3 w-1/2 mx-auto rounded-full uppercase hover:opacity-95 disabled:opacity-75">
          Login
        </button>
      </form>
      <div className="flex gap-2 mt-5 ">
        <p className=""></p>
      </div>
      {/* {error && <p className="text-red-500 mt-5">{error}</p>} */}
    </div>
  );
}
