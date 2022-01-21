import axios from 'axios';

//this url contains our json file database
const url='http://localhost:3003/members';

//this is the get request ------using async await -----and axios

// this getusers is called from 2 that is join and edit -----join isn't calling id while id is calling with id
// so we'll modify this function in an optimised way 
//this api will only select which user to edit
export const getusers=async(id)=>{
    id=id || "";                    //if the api is called via id that go then fine else it can also go blank;
    return await axios.get(`${url}/${id}`);
}

// this is the post request
export const adduser = async(member) => {
    return await axios.post(url, member);
}

//this api to put the edited data there
export const edituser= async(id, member)=>{
    return await axios.put(`${url}/${id}`, member);
}

// api to delete user data 
export const deleteuser=async(id)=>{
    return await axios.delete(`${url}/${id}`);
}
