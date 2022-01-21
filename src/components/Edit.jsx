
import { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { edituser, getusers } from "../Service/api";

// useparams is used to etract url  




//as useState demands initial value
const initialvalue={
    id:"",
    name:"",
    role:"",
    email:"",
    linkedin:""

}
const Edit=()=>{

    const [member, setMember] = useState(initialvalue);
    const {name, role, email, linkedin}= member;

    const {id} = useParams();

    
    useEffect(() => {
      loadUserData();
    },[]);
    
    // this is for extracting previous data via id
    const loadUserData =async() =>{
      const response =await getusers(id);
      setMember(response.data)
    }
    
    const onValueChange=(e)=>[
        setMember({ ...member, [e.target.name]: e.target.value})
    ]

    const editUserDetails =async () =>{
        // console.log(member);
        if(member.email==="" || member.email===" "){
            alert("fill in some details ")
            return 
        }else if(
            member.id==="" || member.id===" " || member.name==="" || member.name===" " || member.role==="" || member.role===" "
        ){
            alert("fill in some details")
            return
        }

        await edituser(id, member);

    }

    
    return(
        <div class="flex items-center h-screen w-full bg-teal-lighter ">
  <div class="w-full  rounded shadow-lg bg-gradient-to-r from-purple-500 to-blue-400 p-8 m-4 md:max-w-sm md:mx-auto">
    <h1 class="block w-full text-xl font-bold text-center text-grey-darkest mb-6">Edit-member</h1>
    <form class="mb-4 md:flex md:flex-wrap md:justify-between" action="/join" >

      <div class="flex flex-col mb-4 md:w-1/2">
        <label class="mb-2 uppercase tracking-wide font-bold text-lg text-grey-darkest" >Id</label>
        <input class="border-[3px] py-2 px-3 text-grey-darkest md:mr-2" type="number" onChange={(e)=> onValueChange(e)} value={id} name="id"/>
      </div>

      <div class="flex flex-col mb-4 md:w-1/2">
        <label class="mb-2 uppercase tracking-wide font-bold text-lg text-grey-darkest">Name</label>
        <input class="border-[3px] py-2 px-3 text-grey-darkest md:mr-2" type="text" onChange={(e)=> onValueChange(e)} value={name} name="name"/>
      </div>


      <div class="flex flex-col mb-4 md:w-1/2">
        <label class="mb-2 uppercase font-bold text-lg text-grey-darkest md:ml-2" >Role</label>
        <input class="border-[3px] py-2 px-3 text-grey-darkest md:ml-2" type="text" name="role" onChange={(e)=> onValueChange(e)} value={role} />
      </div>

      <div class="flex flex-col mb-4 md:w-full">
        <label class="mb-2 uppercase font-bold text-lg text-grey-darkest" >Email</label>
        <input class="border-[3px] py-2 px-3 text-grey-darkest" type="email" name="email" onChange={(e)=> onValueChange(e)} value={email} />
      </div>

      <div class="flex flex-col mb-6 md:w-full">
        <label class="mb-2 uppercase font-bold text-lg text-grey-darkest" >LinkedIN</label>
        <input class="border-[3px] py-2 px-3 text-grey-darkest" type="text" name="linkedin"  onChange={(e)=> onValueChange(e)} value={linkedin} />
      </div>
      <button class="block bg-teal text-black uppercase text-lg mx-auto p-4 rounded" onClick={()=>editUserDetails()}> <a href="/members">Submit</a>  </button>
    </form>
    <a class="block w-full text-center no-underline text-sm text-grey-dark hover:text-grey-darker" href="/members">Already have an account?</a>
  </div>
</div>

    )
}

export default Edit;