// import { Table, TableBody, TableCell, TableHead, TableRow } from "@material-ui/core";


import {useEffect, useState} from "react";
import { Table, TableBody, TableCell, TableHead, TableRow, makeStyles, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

import { getusers } from "../Service/api";
import {deleteuser} from "../Service/api";
//lets do some styling in the table
const useStyle= makeStyles({
    table:{
        width: "90%",
        margin:"170px 0 50px 50px"
    },
    thead:{
        '& > *':{
            background: '#1B4F72',
            color: 'white'
        }
    }
})

const Members=()=>{

    const [members, setMembers]= useState([]);

    const classes= useStyle();



    //if we want that as soon as we click members button it'll show all the data of mmember then we'll have to use useEffect

    // declaring getAllUsers function- in useEffect---for showing data of all the members
    useEffect(() => {    
       getAllUsers();
    }, [])


//   note: getAllUsers is a function which is calling getusers api 
    const getAllUsers =async() =>{
        const response=await getusers();     //calling api in response variable
        console.log(response.data);
        setMembers(response.data);
    }

    

    // function to delete user data          ----------calling deleteuser api//with params id
    const deleteUserData=async(id) =>{
        await deleteuser(id);
        getAllUsers(); //to get data from db after deletion 
    }

  



    return(
        <Table className={classes.table}>
            <TableHead>
                <TableRow className={classes.thead}>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Role</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>LinkedIn</TableCell>
                </TableRow>
            </TableHead>

            <TableBody>
                {
                    // note : members is the variable used in use state 
                    //mapping is done here so that  the value gets fit  in its position only
                    members.map(member =>(
                        <TableRow>
                            <TableCell>{member.id}</TableCell>
                            <TableCell>{member.name}</TableCell>
                            <TableCell>{member.role}</TableCell>
                            <TableCell>{member.email}</TableCell>
                            <TableCell>{member.linkedin}</TableCell>
                            <TableCell>
                                <Button variant="contained" style={{color:"white", background: '#1B4F72', marginRight:"8px" }} component={Link} to={`/edit/${member.id}` }>Edit</Button>
                                <Button variant="contained" style={{color:"white", background: '#1B4F72'}} onClick={()=>deleteUserData(member.id)}>Delete</Button>
                            </TableCell>
                        </TableRow>
                            

                    ))
                }
            </TableBody>
        </Table>
    )
}

export default Members;

