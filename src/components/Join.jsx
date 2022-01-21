
import { useState} from "react";
import { adduser } from "../Service/api";



//as useState demands initial value
const initialvalue={
    id:"",
    name:"",
    role:"",
    email:"",
    linkedin:""

}
const Join=()=>{

    const [member, setMember] = useState(initialvalue);
    const {id, name, role, email, linkedin}= member;

    const onValueChange=(e)=>[
        setMember({ ...member, [e.target.name]: e.target.value})
    ]

    const addUserDetails =async () =>{
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

        await adduser(member);

    }


    return(
        <div class="flex items-center h-screen w-full bg-teal-lighter ">
  <div class="w-full  rounded shadow-lg bg-gradient-to-r from-purple-400 to-blue-400 p-8 m-4 md:max-w-sm md:mx-auto">
    <h1 class="block w-full text-xl  text-center text-grey-darkest mb-6">JOIN-CLUB</h1>
    <form class="mb-4 md:flex md:flex-wrap md:justify-between" action="/join" >

      <div class="flex flex-col mb-4 md:w-1/3">
        <label class="mb-2 uppercase tracking-wide font-bold text-lg text-grey-darkest" >Id</label>
        <input class="border-[3px] py-2 px-3 text-grey-darkest md:mr-2" type="number" onChange={(e)=> onValueChange(e)} value={id} name="id"/>
      </div>

      <div class="flex flex-col mb-4 md:w-2/3">
        <label class="mb-2 uppercase tracking-wide font-bold text-lg text-grey-darkest">Name</label>
        <input class="border-[3px] py-2 px-3 text-grey-darkest md:mr-2" type="text" onChange={(e)=> onValueChange(e)} value={name} name="name"/>
      </div>


      <div class="flex flex-col mb-4 md:w-full">
        <label class="mb-2 uppercase font-bold text-lg text-grey-darkest" >Role</label>
        <input class="border-[3px] py-2 px-3 text-grey-darkest" type="text" name="role" onChange={(e)=> onValueChange(e)} value={role} />
      </div>

      <div class="flex flex-col mb-4 md:w-full">
        <label class="mb-2 uppercase font-bold text-lg text-grey-darkest" >Email</label>
        <input class="border-[3px] py-2 px-3 text-grey-darkest" type="email" name="email" onChange={(e)=> onValueChange(e)} value={email} />
      </div>

      <div class="flex flex-col mb-6 md:w-full">
        <label class="mb-2 uppercase font-bold text-lg text-grey-darkest" >LinkedIN</label>
        <input class="border-[3px] py-2 px-3 text-grey-darkest" type="text" name="linkedin"  onChange={(e)=> onValueChange(e)} value={linkedin} />
      </div>
      <button class="block bg-teal text-black uppercase text-lg mx-auto p-4 rounded" onClick={()=>addUserDetails()}> <a href="/members">Join-Now</a>  </button>
    </form>
    <a class="block w-full text-center no-underline text-sm text-grey-dark hover:text-grey-darker" href="/members">Already have an account?</a>
  </div>
</div>

    )
}

export default Join;