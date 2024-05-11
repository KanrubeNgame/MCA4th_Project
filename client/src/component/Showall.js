import axios from "axios";
import { useState } from "react";
import { Paper,Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

function Showall(){
    const [res,setRes] = useState([]);

    if(res===''){
        axios.get('http://localhost:8081/showall',{
            headers:{
                "authorization":`Bearer ${localStorage.getItem("token")}`,
                "Accept": "application/json",
                "Content-Type": "application/json", 
            }
        }).then((response)=>{
            console.log(response.data);
            setRes(response.data);
        })
        }  
        console.log(res)
    return(  
        <TableContainer component={Paper}>
            <Table style={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell style={{ textAlign: 'center', fontWeight: 'bold' }}>ID</TableCell>
                        <TableCell style={{ textAlign: 'center', fontWeight: 'bold' }}>Name</TableCell>
                        <TableCell style={{ textAlign: 'center', fontWeight: 'bold' }}>Email</TableCell>
                        <TableCell style={{ textAlign: 'center', fontWeight: 'bold' }}>Password</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {res.map((user) => (
                        <TableRow key={user._id}>
                        <TableCell component="th" scope="row" style={{ textAlign: 'center' }}>{user._id}</TableCell>
                        <TableCell style={{ textAlign: 'center' }}>{user.name}</TableCell>
                        <TableCell style={{ textAlign: 'center' }}>{user.email}</TableCell>
                        <TableCell style={{ textAlign: 'center' }}>{user.password}</TableCell>
                    </TableRow>
                    ))}       
                </TableBody>
            </Table>
        </TableContainer>
        /**<div>
            {JSON.stringify(res)}
        </div>*/
    )
}
export default Showall;