import React from 'react'
import { Check, MoveRight , Star , ShieldCheck , Clock4, CodeXml ,BarChart3,
PenTool,Briefcase,Megaphone,Smartphone,Cloud,Camera, 
Play} from 'lucide-react';
import laptopImg from "../../assets/laptop.jpg"
import girl1 from "../../assets/girl1.jpg"
import girl2 from "../../assets/girl2.jpg"
import boy1 from "../../assets/boy1.jpg"
import boy2 from "../../assets/boy2.jpg"
import codeImg from "../../assets/code.jpg"
import planetImg from "../../assets/planet.jpg"
import uxDesignImg from "../../assets/uxdesign.jpg"

function Home() {


  return (


    <>
      
  
 
<div className='relative text-center py-24 h-[120vh] md:h-screen bg-gradient-to-br from-blue-950 via-indigo-900 to-blue-950'>

<div className="absolute pointer-events-none inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:44px_44px]"></div>

<div className='items-center gap-1.5 border border-primary-400/30 bg-primary-500/10 inline-flex rounded-full py-2 px-4 mb-6'>
<div className='rounded-full w-4 h-4 bg-primary-300 flex items-center justify-center'><Check size={10}/></div>
<p className='font-medium text-sm text-primary-300'>Trusted by 50,000+ learners worldwide</p>
</div>



<p className='text-4xl md:text-6xl font-extrabold tracking-tighter text-white'>Learn Without Limits</p>
<p className='text-4xl md:text-6xl font-extrabold tracking-tighter text-cyan-600 mt-1 mb-4'>Learnify</p>




<div className='font-medium text-xl text-primary-200 mb-8'>
<span>Master new skills with world-class instructors. Access thousands of courses in </span>
<span className='inline md:block'>technology, business, design, and more.</span>
</div>




<div className='flex flex-col md:flex-row gap-4 items-center justify-center mb-9 px-4 md:px-0'>

<div className='hover:shadow-2xl bg-white rounded-full py-4 px-7 inline-flex items-center justify-center text-primary-600 gap-2 cursor-pointer w-full md:w-fit'>
<button className='font-medium text-[19px]'>Explore Courses</button>
<MoveRight size={18}/>
</div>



<div className='border-2 hover:border-white hover:bg-white/10 w-full md:w-fit border-white/30 rounded-full py-4 px-7 items-center justify-center inline-flex text-white cursor-pointer'>
<button className='font-medium text-xl'>View Pricing</button>
</div>


</div>





<div className='flex flex-wrap items-center gap-5 md:gap-7 justify-center mb-14 px-5 md:px-0'>



<div className='flex items-center gap-2'>
<Star stroke='#eab308' fill='#eab308' />    
<p className='text-primary-200'>4.8 average rating</p>
</div>



<div className='flex items-center gap-0 md:gap-2'>
<ShieldCheck className='text-green-500'/>     
<p className='text-primary-200'>30-day money-back guarantee</p>
</div>   



<div className='flex items-center gap-2'>
<Clock4 className='text-green-500'/> 
<p className='text-primary-200'>Lifetime access</p>
</div>   




</div>





<div className='container max-w-5xl mx-auto w-full grid grid-cols-2 gap-7 md:gap-0 md:flex items-center justify-between'>




<div>
<p className='text-white font-extrabold text-4xl md:text-5xl'>50K+</p>
<p className='text-primary-300 text-[18px] mt-1'>Active Students</p>
</div>



<div>
<p className='text-white font-extrabold text-4xl md:text-5xl'>500+</p>
<p className='text-primary-300 text-[18px] mt-1'>Expert Instructors</p>
</div>







<div>
<p className='text-white font-extrabold text-4xl md:text-5xl'>2,500+</p>
<p className='text-primary-300 text-[18px] mt-1'>Quality Courses</p>
</div>



<div>
<p className='text-white font-extrabold text-4xl md:text-5xl'>95%</p>
<p className='text-primary-300 text-[18px] mt-1'>Success Rate</p>
</div>




</div>



    </div>





<div className='bg-gray-950 py-28'>







<div className='text-center mx-4 md:mx-0'>
  <p className='uppercase text-primary-600 font-semibold tracking-wider text-sm'>Browse Categories</p>
<p className='text-white font-bold text-3xl md:text-4xl pb-2 pt-3'>Explore Our Top Categories</p>
<p className='text-gray-400 font-medium pb-12'>Find the perfect course from our wide selection of categories taught by industry experts.</p>

</div>






 	
	
	
 	



<div className='max-w-[1290px] mx-auto container w-full'>
<div className=' md:grid md:grid-cols-4 flex flex-col gap-6 mx-4 md:mx-0'>


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














<div className='bg-gray-900 py-20'>

<div className='max-w-[1290px] mx-auto container w-full'>






<div className='mx-4 md:mx-0'>
 

<div className='flex flex-col md:flex-row md:items-center gap-4 md:gap-0 justify-between'>


<div>
<p className='uppercase text-primary-600 font-semibold tracking-wider text-sm'>Featured Courses</p>
<p className='text-white font-bold text-3xl md:text-4xl py-2.5'>Most Popular Courses</p>
<span className='text-gray-400 font-medium'>Start learning from the highest-rated courses chosen by thousands of students </span>
<span className='text-gray-400 font-medium pb-12 inline md:block leading-none'>worldwide.</span>
</div>




<div className='items-center gap-2 text-primary-400 hover:text-indigo-800 inline-flex cursor-pointer pb-8 md:pb-8'>
<span className='font-semibold'>View All Courses</span>
<MoveRight size={18}/>
</div>


</div>
</div>











<div className='flex flex-col md:flex-row px-4 md:px-0 items-center gap-6'>
<div className='rounded-2xl overflow-hidden border border-gray-800 bg-slate-900 cursor-pointer group hover:-translate-y-1 transition-all duration-300'>







<div className='relative '>
<img src={laptopImg} alt="laptop" className='w-full group-hover:scale-[1.03] transition-all duration-300'/>
<div className='absolute inset-0 '>
<div className='inline-flex flex-col gap-2 p-3'>
<div className='uppercase bg-amber-500 text-white text-xs rounded-full font-extrabold inline-flex justify-center items-center px-2.5 py-1 tracking-tight'>
BestSeller
</div>
<div className='uppercase bg-red-500 text-white text-xs rounded-full font-extrabold inline-flex justify-center items-center ps-2.5 pe-7 py-1 tracking-tight'>
55% OFF
</div>
</div>
</div>
<div className='absolute bottom-3 right-3 text-white text-xs rounded-full font-extrabold bg-slate-800 inline-flex justify-center items-center px-2.5 py-1 tracking-tight'>
65 hours
</div>
</div>











<div className='px-5 pt-5'>

<p className='uppercase text-indigo-400 text-sm font-semibold'>Web Development</p>


<div className='text-white font-semibold text-xl pt-3 pb-4 group-hover:text-indigo-400'>
<span className=''>The Complete Web </span>
<span className='inline md:block leading-none'>Development Bootcamp 2032</span>
</div>



<div className='flex items-center gap-2 pb-2'>
<img src={girl1} alt="girl" className='rounded-full w-6 h-6'/>
<span className='text-gray-400 font-medium text-sm'>Sarah Johnson</span>
</div>







<div className='flex items-center gap-4 pb-2'>
<div className='flex items-center gap-1'>
<Star stroke='#eab308' fill='#eab308' size={14}/>    
<div className='flex items-center gap-1'>
<span className='text-white font-bold'>4.8</span>
<span className='text-gray-500'>(46K)</span>
</div>
</div>
<span className='text-gray-500'>235K students</span>
</div>







<div className='flex items-center gap-4'>
<div className='flex items-center gap-1 text-gray-400'>
<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chart-no-axes-column-increasing-icon lucide-chart-no-axes-column-increasing"><path d="M5 21v-6"/><path d="M12 21V9"/><path d="M19 21V3"/></svg>
<span className='text-[15px] font-medium'>All Levels</span>
</div>




<div className='flex items-center gap-1 text-gray-400'>
<Play size={12}/>
<span className='text-[15px] font-medium'>478 lessons</span>
</div>
</div>



<div className='border-t border-gray-800 py-3 flex items-center gap-2 mt-4'>

<span className='text-white font-bold text-[22px]'>$89.99</span>
<span className='text-gray-600'><del>$199.99</del></span>

</div>







































</div>



</div>




<div className='rounded-2xl overflow-hidden border border-gray-800 bg-slate-900 cursor-pointer group hover:-translate-y-2 transition-all duration-300'>

<div className='relative '>
<img src={codeImg} alt="laptop" className='w-full group-hover:scale-[1.03] transition-all duration-300'/>
<div className='absolute inset-0 '>
<div className='inline-flex flex-col gap-2 p-3'>
<div className='uppercase bg-amber-500 text-white text-xs rounded-full font-extrabold inline-flex justify-center items-center px-2.5 py-1 tracking-tight'>
BestSeller
</div>
<div className='uppercase bg-red-500 text-white text-xs rounded-full font-extrabold inline-flex justify-center items-center ps-2.5 pe-7 py-1 tracking-tight'>
50% OFF
</div>
</div>
</div>
<div className='absolute bottom-3 right-3 text-white text-xs rounded-full font-extrabold bg-slate-800 inline-flex justify-center items-center px-2.5 py-1 tracking-tight'>
44 hours
</div>
</div>


<div className='px-5 pt-5'>

<p className='uppercase text-indigo-400 text-sm font-semibold'>data science</p>


<div className='text-white font-semibold text-xl pt-3 pb-4 group-hover:text-indigo-400'>
<span className=''>Machine Learning A-Z: AI, </span>
<span className='inline md:block leading-none '>Python & R</span>
</div>



<div className='flex items-center gap-2 pb-2'>
<img src={boy1} alt="girl" className='rounded-full w-6 h-6'/>
<span className='text-gray-400 font-medium text-sm'>Michael Chen</span>
</div>







<div className='flex items-center gap-4 pb-2'>
<div className='flex items-center gap-1'>
<Star stroke='#eab308' fill='#eab308' size={14}/>    
<div className='flex items-center gap-1'>
<span className='text-white font-bold'>4.7</span>
<span className='text-gray-500'>(32K)</span>
</div>
</div>
<span className='text-gray-500'>178K students</span>
</div>







<div className='flex items-center gap-4'>
<div className='flex items-center gap-1 text-gray-400'>
<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chart-no-axes-column-increasing-icon lucide-chart-no-axes-column-increasing"><path d="M5 21v-6"/><path d="M12 21V9"/><path d="M19 21V3"/></svg>
<span className='text-[15px] font-medium'>Intermediate</span>
</div>




<div className='flex items-center gap-1 text-gray-400'>
<Play size={12}/>
<span className='text-[15px] font-medium'>312 lessons</span>
</div>
</div>



<div className='border-t border-gray-800 py-3 flex items-center gap-2 mt-4'>
<span className='text-white font-bold text-[22px]'>$94.99</span>
<span className='text-gray-600'><del>$189.99</del></span>

</div>







































</div>



</div>




<div className='rounded-2xl overflow-hidden border border-gray-800 bg-slate-900 cursor-pointer group hover:-translate-y-2 transition-all duration-300'>


<div className='relative '>
<img src={uxDesignImg} alt="laptop" className='w-full group-hover:scale-[1.03] transition-all duration-300'/>
<div className='absolute inset-0 '>
<div className='inline-flex flex-col gap-2 p-3'>
<div className='uppercase bg-green-500 text-white text-xs rounded-full font-extrabold inline-flex justify-center items-center py-1 tracking-tight'>
NEW
</div>
<div className='uppercase bg-red-500 text-white text-xs rounded-full font-extrabold inline-flex justify-center items-center ps-2.5 pe-7 py-1 tracking-tight'>
50% OFF
</div>
</div>
</div>
<div className='absolute bottom-3 right-3 text-white text-xs rounded-full font-extrabold bg-slate-800 inline-flex justify-center items-center px-2.5 py-1 tracking-tight'>
38 hours
</div>
</div>


<div className='px-5 pt-5'>

<p className='uppercase text-indigo-400 text-sm font-semibold'>UI/UX Design</p>


<div className='text-white font-semibold text-xl pt-3 pb-4 group-hover:text-indigo-400'>
<span className=''>UI/UX Design: The </span>
<span className='inline md:block leading-none '>Complete Guide</span>
</div>



<div className='flex items-center gap-2 pb-2'>
<img src={girl2} alt="girl" className='rounded-full w-6 h-6'/>
<span className='text-gray-400 font-medium text-sm'>Emily Rodriguez</span>
</div>







<div className='flex items-center gap-4 pb-2'>
<div className='flex items-center gap-1'>
<Star stroke='#eab308' fill='#eab308' size={14}/>    
<div className='flex items-center gap-1'>
<span className='text-white font-bold'>4.9</span>
<span className='text-gray-500'>(19K)</span>
</div>
</div>
<span className='text-gray-500'>89K students</span>
</div>







<div className='flex items-center gap-4'>
<div className='flex items-center gap-1 text-gray-400'>
<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chart-no-axes-column-increasing-icon lucide-chart-no-axes-column-increasing"><path d="M5 21v-6"/><path d="M12 21V9"/><path d="M19 21V3"/></svg>
<span className='text-[15px] font-medium'>Beginner</span>
</div>




<div className='flex items-center gap-1 text-gray-400'>
<Play size={12}/>
<span className='text-[15px] font-medium'>245 lessons</span>
</div>
</div>



<div className='border-t border-gray-800 py-3 flex items-center gap-2 mt-4'>

<span className='text-white font-bold text-[22px]'>$79.99</span>
<span className='text-gray-600'><del>$159.99</del></span>

</div>







































</div>



</div>




<div className='rounded-2xl overflow-hidden border border-gray-800 bg-slate-900 cursor-pointer group hover:-translate-y-2 transition-all duration-300'>


<div className='relative '>
<img src={planetImg} alt="laptop" className='w-full group-hover:scale-[1.03] transition-all duration-300'/>
<div className='absolute inset-0 '>
<div className='inline-flex flex-col gap-2 p-3'>
<div className='uppercase bg-amber-500 text-white text-xs rounded-full font-extrabold inline-flex justify-center items-center px-2.5 py-1 tracking-tight'>
BestSeller
</div>
<div className='uppercase bg-red-500 text-white text-xs rounded-full font-extrabold inline-flex justify-center items-center ps-2.5 pe-7 py-1 tracking-tight'>
50% OFF
</div>
</div>
</div>
<div className='absolute bottom-3 right-3 text-white text-xs rounded-full font-extrabold bg-slate-800 inline-flex justify-center items-center px-2.5 py-1 tracking-tight'>
52 hours
</div>
</div>


 

<div className='px-5 pt-5'>

<p className='uppercase text-indigo-400 text-sm font-semibold'>Cloud & DevOps</p>


<div className='text-white font-semibold text-xl pt-3 pb-4 group-hover:text-indigo-400'>
<span className=''>AWS Certified Solutions </span>
<span className='inline md:block leading-none '>Architect 2032</span>
</div>



<div className='flex items-center gap-2 pb-2'>
<img src={boy2} alt="girl" className='rounded-full w-6 h-6'/>
<span className='text-gray-400 font-medium text-sm'>David Kim</span>
</div>







<div className='flex items-center gap-4 pb-2'>
<div className='flex items-center gap-1'>
<Star stroke='#eab308' fill='#eab308' size={14}/>    
<div className='flex items-center gap-1'>
<span className='text-white font-bold'>4.8</span>
<span className='text-gray-500'>(25K)</span>
</div>
</div>
<span className='text-gray-500'>157K students</span>
</div>







<div className='flex items-center gap-4'>
<div className='flex items-center gap-1 text-gray-400'>
<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chart-no-axes-column-increasing-icon lucide-chart-no-axes-column-increasing"><path d="M5 21v-6"/><path d="M12 21V9"/><path d="M19 21V3"/></svg>
<span className='text-[15px] font-medium'>Intermediate</span>
</div>




<div className='flex items-center gap-1 text-gray-400'>
<Play size={12}/>
<span className='text-[15px] font-medium'>380 lessons</span>
</div>
</div>



<div className='border-t border-gray-800 py-3 flex items-center gap-2 mt-4'>

<span className='text-white font-bold text-[22px]'>$84.99</span>
<span className='text-gray-600'><del>$169.99</del></span>

</div>







































</div>



</div>


</div>






























</div>
</div>





























    </>
  )
}

export default Home
