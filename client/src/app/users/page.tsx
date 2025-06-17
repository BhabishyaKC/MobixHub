import axios from 'axios'
import React from 'react'

type User = {
  id: number
  fastName: string
  lastName: string
  email: string
}

const Users = async () => {
  const { data } = await axios.get<User[]>('http://localhost:8080/users')
  return (
    <div>
      {data.map((item) => {
        return (
          <div key={item.id} className="p-4 border rounded-lg mb-4">
            <h2 className="text-lg font-bold">{item.fastName}</h2>
            <h2 className="text-lg font-bold">{item.lastName}</h2>
            <p>Email: {item.email}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Users

