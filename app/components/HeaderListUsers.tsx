"use client";
import React, { useState } from "react";
import { TiPlus } from "react-icons/ti";
import ModalAddUser from "./ModalAddUser";
import {UserData} from "@/app/utils/Types"
import axios from "axios";


const HeaderListUsers = ({onAddUser}: { onAddUser: (userData: UserData) => void }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Fonction pour gérer la soumission du formulaire (action à effectuer lors de l'ajout d'un utilisateur)
  const handleAddUser = async (userData: UserData) => {
    try {
      // Envoie des données au backend (en supposant que ton API est à l'URL suivante)
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/users`, userData);
      
      if (response.status === 201) {
        // Si l'utilisateur est ajouté avec succès, on l'ajoute au tableau local
        onAddUser(userData); // Ajouter l'utilisateur au tableau local
        console.log("Utilisateur ajouté avec succès :", response.data);
      }
      
    } catch (error) {
      console.error("Erreur lors de l'ajout de l'utilisateur :", error);
    }

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
