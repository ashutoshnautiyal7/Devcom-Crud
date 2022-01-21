

import hero from '../Assets/images/heroimg.jpg';



const About=()=>{
    return(
        <>


<section class="text-gray-600 body-font my-[85px]">
        <div class="flex-grow text-center ">
          {/* <h1 class="text-gray-900  font-bold text-[34px] mb-2">Devcom</h1> */}
          <p class="leading-relaxed text-center font-semibold text-2xl">Devcom is the Student Developers club of Gbpiet Pauri. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, quos perferendis, qui tempore consectetur blanditiis soluta quia eum quam iste error omnis maiores architecto aperiam dolorem mollitia maxime incidunt nostrum!</p>
        </div>
       
  <div class="container px-5 py-24 mx-auto flex flex-wrap ">
    <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
      <img  alt="feature" class="object-cover object-center h-[85%] w-[80%] rounded-md" src={hero} />
    </div>
    <div class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
      <div class="flex flex-col mb-10 lg:items-start items-center">
        <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </div>
        <div class="flex-grow">
          <h2 class="text-black text-xl title-font font-medium mb-3 font-bold">Web Development</h2>
          <p class="leading-relaxed text-base text-[28px]">Here, we organise events that will help one with real world development projects and maintain consistency</p>
        
        </div>
      </div>
      <div class="flex flex-col mb-10 lg:items-start items-center">
        <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </div>
        <div class="flex-grow">
          <h2 class="text-black text-xl title-font font-medium mb-3 font-bold">Android Development</h2>
          <p class="leading-relaxed text-base text-[28px]"> As per the trend in modern development, events are organised to help folks build some amazing android applications.</p>
          
        </div>
      </div>
      <div class="flex flex-col mb-10 lg:items-start items-center">
        <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </div>
        <div class="flex-grow">
          <h2 class="text-black text-xl title-font font-medium mb-3 font-bold">Events</h2>
          <p class="leading-relaxed text-base text-[28px]">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
          
        </div>
      </div>
    </div>
  </div>
</section>


</>

    )

}

export default About;