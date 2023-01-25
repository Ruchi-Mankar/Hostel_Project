import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';
import './UserList.css'
import {userRows} from './dummyData'
import { Link } from 'react-router-dom';
import { useState } from 'react';


export default function DataTable() {
    const [data,setData]=useState(userRows);

    const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 140 },
  { field: 'lastName', headerName: 'Last name', width: 140 },
  {
    field: 'regid',
    headerName: 'Reg ID',
    type: 'number',
    width: 140,
  },
  {
     field: 'email',
    headerName: 'Email',
    width: 300,
    
  },
  {
     field: 'action',
    headerName: 'Action',
    width: 300,
    renderCell:(params)=>{
      return(
      <>
      <Link to={'/user/'+params.row.id}>
            <button className='userListEdit'>Edit</button>
        </Link>
      <DeleteOutline className="userListDelete" onClick={()=>handleDelete(params.row.id)}/>
      </>
      )
    }
    
  },
];
 const handleDelete=(id)=>{setData(data.filter((item)=>item.id!==id))};


    
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={data} disableSelectionOnClick
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}

// import "./UserList.css";
// import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid'
// import { DeleteOutline } from "@mui/icons-material";
// import { userRows } from "./dummyData";
// import { Link } from "react-router-dom";
// import { useState } from "react";

// export default function UserList() {
//   const [data, setData] = useState(userRows);

//   const handleDelete = (id) => {
//     setData(data.filter((item) => item.id !== id));
//   };
  
//   const columns = [
//     { field: "id", headerName: "ID", width: 90 },
//     {
//       field: "user",
//       headerName: "User",
//       width: 200,
//       renderCell: (params) => {
//         return (
//           <div className="userListUser">
//             <img className="userListImg" src={params.row.avatar} alt="" />
//             {params.row.username}
//           </div>
//         );
//       },
//     },
//     { field: "email", headerName: "Email", width: 200 },
//     {
//       field: "status",
//       headerName: "Status",
//       width: 120,
//     },
//     {
//       field: "transaction",
//       headerName: "Transaction Volume",
//       width: 160,
//     },
//     {
//       field: "action",
//       headerName: "Action",
//       width: 150,
//       renderCell: (params) => {
//         return (
//           <>
//             <Link to={"/user/" + params.row.id}>
//               <button className="userListEdit">Edit</button>
//             </Link>
//             <DeleteOutline
//               className="userListDelete"
//               onClick={() => handleDelete(params.row.id)}
//             />
//           </>
//         );
//       },
//     },
//   ];

//   return (
//     <div className="userList">
//       <DataGrid
//         rows={data}
//         disableSelectionOnClick
//         columns={columns}
//         pageSize={8}
//         checkboxSelection
//       />
//     </div>
//   );
// }


