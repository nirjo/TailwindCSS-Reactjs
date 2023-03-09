import React from 'react'
import axios from 'axios';

const UserList = () => {
    const users = new UserList();
    axios.post('https://reqres.in/api/users/2')
    .then(function (response) {
      // handle success
      console.log(response);
    })
const renderCard = () =>users.map()
  return (
    <div className="grid gap-5 md:grip-cols-2">
    {users.length ? renderCard(): <p className="text-center col-span-2 text-gray-700 font-semibold" >No User </p>}
    
     </div>
  )
}

export default UserList