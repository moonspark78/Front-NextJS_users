"use client"
import React, { useEffect, useState } from 'react'
import HeaderListUsers from './HeaderListUsers'
import TableUsers from './TableUsers'
import { UserData } from '../utils/Types';

const ListUsers = () => {
  const [users, setUsers] = useState<UserData[]>([]);


   // Fonction pour récupérer les utilisateurs depuis le backend
   useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`);
        if (response.ok) {
          const data = await response.json();
          setUsers(data);
        } else {
          console.error("Erreur lors de la récupération des utilisateurs:", response.status);
        }
      } catch (error) {
        console.error("Erreur de réseau :", error);
      }
    };

    fetchUsers(); // Appelle la fonction pour récupérer les utilisateurs
  }, []);


  

  const handleAddUser = (newUser: UserData) => {
    setUsers((prevUsers) => [...prevUsers, newUser]);
  };
  
  return (
    <div className='pt-2 pb-12 flex items-center justify-center'>
        <div className=' w-4/5 border border-gray-300 p-8 rounded-md'>

            <HeaderListUsers onAddUser={handleAddUser}/>
            <TableUsers users={users}/>
        </div>
    </div>
  )
}

export default ListUsers