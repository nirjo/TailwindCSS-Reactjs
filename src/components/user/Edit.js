import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

function Add() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "all",
  });
  const onSubmit = (data) => console.log("datasssssss----->", data);

  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const { id } = useParams();

  useEffect(() => {
    axios.get(`https://reqres.in/api/users?page=2/${id}`).then((res) => {
      setEmail(res.data.email);
      setFirstName(res.data.first_name);
      setLastName(res.data.last_name);
    });
  }, []);

  const navigate = useNavigate();

  const data = {
    email: email,
    firstname: first_name,
    lastname: last_name,
  };

  console.log("data fetched ------------------>", data);

  function Update(e) {
    e.preventDefault();
    axios
      .put(`https://reqres.in/api/users?page=2/${id}`, data)
      .then(navigate("/"));
  }
  return (
    <div className="w-screen h-full flex flex-col justify-center items-center mt-16">
      <h2 className="text-2xl font-bold">User Details</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[50%] h-full flex flex-col mt-2"
      >
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="email"
          placeholder="Enter your email"
          {...register("email", {
            required: true,
            pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
          })}
        />
        <error>
          {errors.email?.type === "required" && "Email is required"}
          {errors.email?.type === "pattern" &&
            "Entered email is in wrong format"}
        </error>
        <input
          value={first_name}
          onChange={(e) => setFirstName(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="text"
          placeholder="Enter your Firstname"
          {...register("firstname", { required: true })}
        />
        <error>
          {errors.firstname?.type === "required" && "Name is required"}
        </error>

        <input
          value={last_name}
          onChange={(e) => setLastName(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="text"
          placeholder="Enter your Lastname"
          {...register("lastname", { required: true })}
        />
        <error>
          {errors.lastname?.type === "required" && "Name is required"}
        </error>

        <button
          className="bg-teal-600 outline-none font-bold border text-white border-zinc-400 py-4 pl-4 mt-4"
          type="submit"
          // onClick={Update}
        >
          UPDATE USER
        </button>
      </form>
    </div>
  );
}

export default Add;
