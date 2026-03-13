import React from 'react'
import { Check, MoveRight , Star , ShieldCheck , Clock4, CodeXml ,BarChart3,PenTool,Briefcase,Megaphone,Smartphone,Cloud,Camera } from 'lucide-react';





function Home() {


  return (


    <>
      
  
 
<div className='relative text-center py-24 h-screen bg-gradient-to-br from-blue-950 via-indigo-900 to-blue-950'>

<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:44px_44px]"></div>

<div className='items-center gap-1.5 border border-primary-400/30 bg-primary-500/10 inline-flex rounded-full py-2 px-4 mb-6'>
<div className='rounded-full w-4 h-4 bg-primary-300 flex items-center justify-center'><Check size={10}/></div>
<p className='font-medium text-sm text-primary-300'>Trusted by 50,000+ learners worldwide</p>
</div>



<p className='text-6xl font-extrabold tracking-tighter text-white'>Learn Without Limits</p>
<p className='text-6xl font-extrabold tracking-tighter text-cyan-600 mt-1 mb-4'>Learnify</p>




<div className='font-medium text-xl text-primary-200 mb-8'>
<span>Master new skills with world-class instructors. Access thousands of courses in</span>
<span className='block'>technology, business, design, and more.</span>
</div>




<div className='flex gap-4 items-center justify-center mb-9'>

<div className='hover:shadow-md bg-white rounded-full py-4 px-7 inline-flex items-center text-primary-600 gap-2 cursor-pointer'>
<button className='font-medium text-[19px]'>Explore Courses</button>
<MoveRight size={18}/>
</div>



<div className='border-2 hover:border-white hover:bg-white/10 border-white/30 rounded-full py-4 px-7 inline-flex text-white cursor-pointer'>
<button className='font-medium text-xl'>View Pricing</button>
</div>


</div>





<div className='flex items-center gap-7 justify-center mb-14'>



<div className='flex items-center gap-2'>
<Star stroke='#eab308' fill='#eab308' />    
<p className='text-primary-200'>4.8 average rating</p>
</div>



<div className='flex items-center gap-2'>
<ShieldCheck className='text-green-500'/>     
<p className='text-primary-200'>30-day money-back guarantee</p>
</div>   



<div className='flex items-center gap-2'>
<Clock4 className='text-green-500'/> 
<p className='text-primary-200'>Lifetime access</p>
</div>   




</div>





<div className='container max-w-5xl mx-auto w-full flex items-center justify-between'>




<div>
<p className='text-white font-extrabold text-5xl'>50K+</p>
<p className='text-primary-300 text-[18px]'>Active Students</p>
</div>



<div>
<p className='text-white font-extrabold text-5xl'>500+</p>
<p className='text-primary-300 text-[18px]'>Expert Instructors</p>
</div>







<div>
<p className='text-white font-extrabold text-5xl'>2,500+</p>
<p className='text-primary-300 text-[18px]'>Quality Courses</p>
</div>



<div>
<p className='text-white font-extrabold text-5xl'>95%</p>
<p className='text-primary-300 text-[18px]'>Success Rate</p>
</div>




</div>



    </div>





<div className='bg-gray-950 py-28'>







<div className='text-center'>
  <p className='uppercase text-primary-600 font-semibold tracking-wider text-sm'>Browse Categories</p>
<p className='text-white font-bold text-4xl pb-2 pt-3'>Explore Our Top Categories</p>
<p className='text-gray-400 font-medium pb-12'>Find the perfect course from our wide selection of categories taught by industry experts.</p>

</div>






 	
	
	
 	



<div className='max-w-[1290px] mx-auto container w-full'>
<div className='grid grid-cols-4 gap-6'>


<div className='bg-gray-900 w-full ps-7 py-7 rounded-2xl group border border-gray-800 hover:border-primary-800 cursor-pointer'>
<div className='bg-blue-800/20 inline-flex items-center justify-center p-3 rounded-xl '>
<CodeXml className='text-blue-400	' size={27}/> 
</div>
<p className='text-white font-bold text-xl pt-4 pb-2 group-hover:text-indigo-400'>Web Development</p>
<span className='text-gray-400 text-[15px]'>Build modern websites and web </span>
<span className='text-gray-400 block text-[15px] leading-none pb-3'>applications</span>
<div className='flex items-center gap-1.5 text-primary-400'>
<p>156 courses</p>
<MoveRight size={10}/>
</div>
</div>





<div className='bg-gray-900 w-full ps-7 py-7 rounded-2xl group border border-gray-800 hover:border-primary-800 cursor-pointer'>
<div className='bg-purple-800/20 inline-flex items-center justify-center p-3 rounded-xl '>
<BarChart3 className='text-purple-400	' size={27}/> 
</div>
<p className='text-white font-bold text-xl pt-4 pb-2 group-hover:text-indigo-400'>Data Science</p>
<span className='text-gray-400 text-[15px]'>Analyze data and build ML models</span>
<div className='flex items-center gap-1.5 text-primary-400 mt-3'>
<p>98 courses</p>
<MoveRight size={10}/>
</div>
</div>









<div className='bg-gray-900 w-full ps-7 py-7 rounded-2xl group border border-gray-800 hover:border-primary-800 cursor-pointer'>
<div className='bg-pink-800/20 inline-flex items-center justify-center p-3 rounded-xl '>
<PenTool className='text-pink-400	' size={27}/> 
</div>
<p className='text-white font-bold text-xl pt-4 pb-2 group-hover:text-indigo-400'>UI/UX Design</p>
<span className='text-gray-400 text-[15px]'>Create beautiful user experiences</span>
<div className='flex items-center gap-1.5 text-primary-400 mt-3'>
<p>124 courses</p>
<MoveRight size={10}/>
</div>
</div>





<div className='bg-gray-900 w-full ps-7 py-7 rounded-2xl group border border-gray-800 hover:border-primary-800 cursor-pointer'>
<div className='bg-amber-800/20 inline-flex items-center justify-center p-3 rounded-xl '>
<Briefcase className='text-amber-400	' size={27}/> 
</div>
<p className='text-white font-bold text-xl pt-4 pb-2 group-hover:text-indigo-400'>Business</p>
<span className='text-gray-400 text-[15px]'>Grow your career and business</span>
<div className='flex items-center gap-1.5 text-primary-400 mt-3'>
<p>87 courses</p>
<MoveRight size={10}/>
</div>
</div>










<div className='bg-gray-900 w-full ps-7 py-7 rounded-2xl group border border-gray-800 hover:border-primary-800 cursor-pointer'>
<div className='bg-green-800/20 inline-flex items-center justify-center p-3 rounded-xl '>
<Megaphone className='text-green-400	' size={27}/> 
</div>
<p className='text-white font-bold text-xl pt-4 pb-2 group-hover:text-indigo-400'>Digital Marketing</p>
<span className='text-gray-400 text-[15px]'>Master SEO, social media, and ads</span>
<div className='flex items-center gap-1.5 text-primary-400 mt-3'>
<p>72 courses</p>
<MoveRight size={10}/>
</div>
</div>



 	
 












<div className='bg-gray-900 w-full ps-7 py-7 rounded-2xl group border border-gray-800 hover:border-primary-800 cursor-pointer'>
<div className='bg-cyan-800/20 inline-flex items-center justify-center p-3 rounded-xl '>
<Smartphone className='text-cyan-400	' size={27}/> 
</div>
<p className='text-white font-bold text-xl pt-4 pb-2 group-hover:text-indigo-400'>Mobile Development</p>
<span className='text-gray-400 text-[15px]'>Build iOS and Android apps</span>
<div className='flex items-center gap-1.5 text-primary-400 mt-3'>
<p>64 courses</p>
<MoveRight size={10}/>
</div>
</div>








<div className='bg-gray-900 w-full ps-7 py-7 rounded-2xl group border border-gray-800 hover:border-primary-800 cursor-pointer'>
<div className='bg-indigo-800/20 inline-flex items-center justify-center p-3 rounded-xl '>
<Cloud className='text-indigo-400	' size={27}/> 
</div>
<p className='text-white font-bold text-xl pt-4 pb-2 group-hover:text-indigo-400'>Cloud & DevOps</p>
<span className='text-gray-400 text-[15px]'>AWS, Azure, Docker, Kubernetes</span>
<div className='flex items-center gap-1.5 text-primary-400 mt-3'>
<p>58 courses</p>
<MoveRight size={10}/>
</div>
</div>




	






<div className='bg-gray-900 w-full ps-7 py-7 rounded-2xl group border border-gray-800 hover:border-primary-800 cursor-pointer'>
<div className='bg-rose-700/20 inline-flex items-center justify-center p-3 rounded-xl '>
<Camera className='text-rose-400	' size={27}/> 
</div>
<p className='text-white font-bold text-xl pt-4 pb-2 group-hover:text-indigo-400'>Photography</p>
<span className='text-gray-400 text-[15px]'>Capture stunning images</span>
<div className='flex items-center gap-1.5 text-primary-400 mt-3'>
<p>45 courses</p>
<MoveRight size={10}/>
</div>
</div>


</div>


</div>







</div>






























    </>
  )
}

export default Home
