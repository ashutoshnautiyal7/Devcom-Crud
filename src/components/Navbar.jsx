

// creating a function component

//this Navbar is imported from Material ui

import { AppBar, Toolbar, Typography, makeStyles} from '@material-ui/core';
import { fontSize } from '@mui/system';
import { NavLink } from 'react-router-dom';

// this object below is mainly for styling 
const useStyle = makeStyles({
    header: {
        background:'#1B4F72', 
        overflow: 'hidden',
        position: 'fixed',
        top: 0,
        width: '100%'
    }, 
    tabs:{
        color:"#ffffff",
        textDecoration:"none",
        marginRight:27,     //here by default unit is pixel so we don't need to give pixels
        fontSize:23, 
    }
})

const Navbar=()=>{

    const classes =useStyle();

                                          //we did position as static as by default is was fixed
    return(


<div class="container mx-auto my-2 ">

    <div class=" text-center  md:flex md:flex-row md:justify-between ">
        <div class="flex justify-center">
            <div class="bg-gradient-to-r from-purple-400 to-red-600 w-10 h-10 rounded-lg"></div>
            <h1 class="text-2xl text-gray-700 ml-2 my-1">Devcom</h1>
        </div>

        <div class=" my-1 text-xl text-black font-semibold ">
            <a href="/" class="hover:text-purple-700 p-4 mr-1">Home</a>
            <a href="/about" class="hover:text-purple-700 p-4 mr-1">About-us</a>
            <a href="/members" class="hover:text-purple-700 p-4 mr-1">Members</a>
            <a href="/join" class=" py-1 px-4  bg-purple-600 hover:bg-purple-700 text-gray-50 rounded-full">
            Join-us                   
            </a>
            
        
        </div>
    </div> 
</div>

        
        
    )
}

export default Navbar;