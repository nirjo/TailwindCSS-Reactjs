
import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import Users from "./Users";
import Pagination from "../components/Pagination";


const Home = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(1);

  const notify = () => toast.success("Successfully Deleted!");

  const loadUsers = async () => {
    setLoading(true);

    axios.get(`https:reqres.in/api/users?page=1`).then((response) => {
      setUsers(response.data.data);
      setLoading(false);

      console.log("response--*******...>", response.data.data);
    });
  };

  useEffect(() => {
    setLoading(true);

    loadUsers();
    setLoading(false);
  }, []);

  console.log("users------------->", users);


  if (!Array.isArray(users)) {
    return null; // or return an error message
  }


  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div>
      <Users users={users} />

      <Pagination onClick ={notify}
         postsPerPage={postsPerPage}
         totalPosts={users.length}
         paginate={paginate}
         currentPage={currentPage}
       /> 
       <Toaster />
    </div>
  );
};
export default Home;





// import React, { useEffect, useState ,useRef} from "react";
// import axios from "axios";
// import Users from '../components/Users';
// import Pagination from './Pagination';

// const Home = () => {
//   const [users, setUsers] = useState([]);

//   const [loading, setLoading] = useState(false);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [postsPerPage] = useState(10);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       setLoading(true);
//       const res = await axios.get('https://reqres.in/api/users?page=2');
//       setUsers(res.data);
//       setLoading(false);
//       console.log("res----->",res.data);
//     };

//     fetchPosts();
//   }, []);

//   if (!Array.isArray(users)) {
//     return null; // or return an error message
//   }
//   // Get current posts
//    const indexOfLastPost = currentPage * postsPerPage;
//  const indexOfFirstPost = indexOfLastPost - postsPerPage;
//    const currentPosts = users.slice(indexOfFirstPost, indexOfLastPost);

//   // // Change page
//   // const paginate = pageNumber => setCurrentPage(pageNumber);

//   return (
//     <div className="w-[100vw] h-full justify-center items-center flex flex-col px-10 py-8 mt-8">
//        <h1 className="text-3xl font-bold">Home-Page</h1>
//       <Users users={currentPosts} loading={loading} />
//       {/* <Pagination
//         postsPerPage={postsPerPage}
//         totalPosts={users.length}
//         paginate={paginate}
//       /> */}
//     </div>
//   );
// };

// export default Home;