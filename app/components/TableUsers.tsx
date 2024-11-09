import React from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaPenToSquare } from "react-icons/fa6";
import { UserData } from "../utils/Types";

const TableUsers = ({ users }: { users: UserData[] }) => {
  return (
    <div className="pt-2 flex justify-center items-center">
      <div className="w-[98%] border rounded-md mx-auto">
        <table className="w-full ">
          <thead>
            <tr>
              <th scope="col" className="border px-4 py-2">
                Avatar
              </th>
              <th scope="col" className="border px-4 py-2">
                FullName
              </th>
              <th scope="col" className="border px-4 py-2">
                Email
              </th>
              <th scope="col" className="border px-4 py-2">
                Age
              </th>
              <th scope="col" className="border px-4 py-2">
                Country
              </th>
              <th scope="col" className="border px-4 py-2">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td className="border px-4 py-2 text-center">Avatar {index + 1}</td>
                <td className="border px-4 py-2 text-center">{user.fullName}</td>
                <td className="border px-4 py-2 text-center">{user.email}</td>
                <td className="border px-4 py-2 text-center">{user.age}</td>
                <td className="border px-4 py-2 text-center">{user.country}</td>
                <td className="border px-4 py-2 flex gap-4 justify-center">
                  <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700 transition-colors">
                    <FaPenToSquare size={20} />
                  </button>
                  <button className="bg-red-500 text-white p-2 rounded hover:bg-red-700 transition-colors">
                    <RiDeleteBin5Line size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableUsers;
