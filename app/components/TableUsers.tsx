import React, { useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaPenToSquare } from "react-icons/fa6";
import { UserData } from "../utils/Types";
import ModalUpdateUser from "./ModalUpdateUser";

const TableUsers = ({ users, setUsers }: { users: UserData[] ; setUsers: React.Dispatch<React.SetStateAction<UserData[]>>  }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<UserData | null>(null);

  const openModal = (user: UserData) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };


  // Dans TableUsers.tsx

const handleUpdateUser = async (updatedUser: UserData) => {
  try {
    // Appel à l'API pour mettre à jour l'utilisateur
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/${updatedUser._id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedUser),
    });

    if (response.ok) {
      const updatedData = await response.json();

      // Met à jour l'état pour refléter la modification dans l'interface
      setUsers((prevUsers) =>
        prevUsers.map((user) => (user._id === updatedUser._id ? updatedData : user))
      );
      closeModal(); // Ferme la modal une fois la mise à jour effectuée
    } else {
      console.error('Erreur lors de la mise à jour de l’utilisateur:', response.status);
    }
  } catch (error) {
    console.error('Erreur réseau lors de la mise à jour de l’utilisateur:', error);
  }
};

const handleDeleteUser= async (deleteUser: UserData)=>{
  try {
    // Appel à l'API pour mettre à jour l'utilisateur
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/${deleteUser._id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(deleteUser),
    });

    if (response.ok) {
      // Met à jour l'état pour refléter la modification dans l'interface
      setUsers((prevUsers) =>
        prevUsers.filter((user) => user._id !== deleteUser._id)
      );
      closeModal(); // Ferme la modal une fois la mise à jour effectuée
    } else {
      console.error('Erreur lors de la suppression de l’utilisateur:', response.status);
    }
  } catch (error) {
    console.error('Erreur réseau lors de la suppression de l’utilisateur:', error);
  }
}


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
                  <button 
                      className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700 transition-colors"  
                      onClick={() => openModal(user)}>
                    <FaPenToSquare size={20}/>
                  </button>
                  <button 
                      className="bg-red-500 text-white p-2 rounded hover:bg-red-700 transition-colors"
                      onClick={() => handleDeleteUser(user)}>
                    <RiDeleteBin5Line size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ModalUpdateUser
        isOpen={isModalOpen}
        onClose={closeModal}
        userData={selectedUser} // Passer l'utilisateur sélectionné au modal
        onSubmit={handleUpdateUser} // Passer la fonction de mise à jour
      />
    </div>
  );
};

export default TableUsers;
