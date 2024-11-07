"use client";
import React, { useState } from "react";
import { TiPlus } from "react-icons/ti";
import ModalAddUser from "./ModalAddUser";
import {UserData} from "@/app/utils/Types"

const HeaderListUsers = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Fonction pour gérer la soumission du formulaire (action à effectuer lors de l'ajout d'un utilisateur)
  const handleAddUser = (userData: UserData) => {
    console.log("User Data:", userData); // Remplacez ceci par l'action à effectuer, ex. envoi à une API
    closeModal();
  };

  return (
    <div className=" pb-2">
      <div className="flex items-center justify-between w-4/5 mx-auto">
        <div>
          <h1 className="text-2xl lg:text-4xl font-bold">Users List</h1>
        </div>
        <div>
          <button className="btn btn-primary" onClick={openModal}>
            <span className="text-white">Add User</span>
            <TiPlus className="text-xl" />
          </button>
        </div>
      </div>
      {/* Affiche le modal si `isModalOpen` est vrai */}
      <ModalAddUser isOpen={isModalOpen} onClose={closeModal} onSubmit={handleAddUser} />
    </div>
  );
};

export default HeaderListUsers;
