"use client"
import React, { useState } from 'react'
import HeaderListUsers from './HeaderListUsers'
import TableUsers from './TableUsers'
import { UserData } from '../utils/Types';

const ListUsers = () => {
  const [users, setUsers] = useState<UserData[]>([]);

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