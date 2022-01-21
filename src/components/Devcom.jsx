
// importing image
import img1 from '../Assets/images/img4.jpg';
import days from '../Assets/images/7days.jpeg';
import heroine from '../Assets/images/heroine.jpg';
// import pubdom from '../Assets/images/publicdomainq-0006911zkosju.svg'
import { textAlign } from '@mui/system';
import { makeStyles, Button} from '@material-ui/core';


const newStyle= makeStyles({
    image:{
        width: "40%",
        height: "50%"
    },
    modify:{
        margin:"90px 50px 50px 50px"
    }
})
const Devcom =()=>{

    const classes= newStyle();




    return(
      <>

      <div>

<div class=" md:flex md:flex-row mt-28 items-center ml-[180px]  ">

    <div class="md:w-3/5 flex flex-col justify-center items-center text-black mr-[204px]">
        <h2 class="font-serif text-4xl  mb-2  text-center md:self-start md:text-left">Welcome to the Student developers club GBPIET Pauri</h2>
        <p class="tracking-wide text-center md:self-start md:text-left md:text-2xl">Start your learning journey right here.</p>
        <p class="tracking-wide  text-center md:self-start md:text-left md:text-2xl">Get connected to the most amazing community.</p>

        <a href="/about" class="bg-gradient-to-r from-red-600 to-pink-500 rounded-full py-3 my-4 px-8 text-gray-50 text-xl md:self-start">LEARN MORE</a>
    </div>

    <div class="w-3/5">
        <img src={heroine} class="w-[596px] h-[333px]" alt="" />
    </div>

</div>



        

            

            <div style={{display:"flex" ,flexDirection:"row"}}>
                <img className={classes.image} src={days} />

                

                <div class="md:w-2/5 flex flex-col justify-center items-center text-gray-900 ml-[100px]">
                  <h1 class="text-4xl text-black font-medium mt-0 mb-[76px]">Ongoing-Event</h1>
                  <h2 class="font-serif text-4xl  mb-2  text-center md:self-start md:text-left">The Seven days of dev.</h2>
                  <p class="tracking-wide text-center md:self-start md:text-left md:text-2xl md:mb-4">An Event organised to get started with our learning journey.</p>
                  <p class="tracking-wide  text-center md:self-start md:text-left md:text-2xl leading-3">Show your Skills by building amazing project regarding Web and Android Development within Seven Days.</p>
                  <p class="tracking-wide  text-center md:self-start md:text-left md:text-2xl leading-3">Mentors are there to help you build the same.</p>

                </div>
            </div>


            {/* adding from tailblocks */}
            <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap w-full mb-20">
      <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Pitchfork Kickstarter Taxidermy</h1>
        <div class="h-1 w-36 bg-[#1B4F72] rounded"></div>
      </div>
      <p class="lg:w-1/2 w-full leading-relaxed text-gray-800 text-xl">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies.</p>
    </div>
    <div class="flex flex-wrap -m-4">
      <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-100 p-6 rounded-lg">
          <img class="h-40 rounded w-full object-cover object-center mb-6" src="https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="content" />
          <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Chichen Itza</h2>
          <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        </div>
      </div>
      <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-100 p-6 rounded-lg">
          <img class="h-40 rounded w-full object-cover object-center mb-6" src="https://images.pexels.com/photos/247819/pexels-photo-247819.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="content" />
          <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Colosseum Roma</h2>
          <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        </div>
      </div>
      <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-100 p-6 rounded-lg">
          <img class="h-40 rounded w-full object-cover object-center mb-6" src="https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="content"   />
          <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Great Pyramid of Giza</h2>
          <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        </div>
      </div>
      <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-100 p-6 rounded-lg">
          <img class="h-40 rounded w-full object-cover object-center mb-6" src="https://images.pexels.com/photos/4960464/pexels-photo-4960464.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="content" />
          <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">San Francisco</h2>
          <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        </div>
      </div>
    </div>
  </div>
</section>

        </div>
        
      
        </>
        
    );
}
export default Devcom;