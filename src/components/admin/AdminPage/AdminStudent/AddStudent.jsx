"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PropagateLoader } from "react-spinners";
import {
  clear,
  getAllParent,
} from "../../../../feature/admin/AdminActions/AdminParentSlice";

export default function AddStudent() {
  const { user } = useSelector((state) => state.adminAuth);
  const { data: parent, isLoading } = useSelector((state) => state.adminParent);
  const { token } = user;
  const dispatch = useDispatch();

  // useEffect(() => {
  //   // dispatch(getAllParent(token));
  //   dispatch(clear());
  // }, [dispatch, token]);

  console.log(parent);

  if (isLoading) {
    return (
      <div className="flex min-h-screen justify-center items-center">
        <PropagateLoader size={25} loading={isLoading} color="#6C3129" />
      </div>
    );
  }

  return (
    <div className="p-5">
      <h1 className="text-center text-2xl font-semibold">Add Student</h1>

      <form className="flex flex-col items-center gap-3 my-10">
        <div className="grid grid-cols-2 gap-5">
          <select name="parent" className="rounded-md bg-slate-300">
            <option value="">--Please select students parent--</option>
            {parent &&
              parent.map((item, index) => {
                return (
                  <option key={index} value={item.middleName}>
                    {item.firstName} {item.middleName}
                  </option>
                );
              })}
          </select>

          <input type="text" placeholder="First name" />
          <input type="text" placeholder="Middle name" />
          <input type="text" placeholder="Last name" />
          <input type="email" placeholder="Email" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="text" placeholder="Gender" />
          <input type="number" placeholder="Age" />
          <input type="number" placeholder="Phone" />
          <input type="text" placeholder="Date of birth" />
          <input type="text" placeholder="Date of Joined" />
        </div>
        <button
          type="submit"
          className="bg-[#6C3129] rounded-xl text-white p-2 w-1/2 hover:scale-105 duration-500 text-xl font-bold"
        >
          Register
        </button>
      </form>
    </div>
  );
}
