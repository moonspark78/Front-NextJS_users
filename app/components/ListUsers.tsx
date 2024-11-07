import React from 'react'
import HeaderListUsers from './HeaderListUsers'
import TableUsers from './TableUsers'

const ListUsers = () => {
  return (
    <div className='pt-2 pb-12 flex items-center justify-center'>
        <div className=' w-4/5 border border-gray-300 p-8 rounded-md'>

            <HeaderListUsers/>
            <TableUsers/>
        </div>
    </div>
  )
}

export default ListUsers