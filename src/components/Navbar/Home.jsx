import { useState } from 'react'
import { Check, MoveRight , Star , ShieldCheck , Clock4, CodeXml ,BarChart3, PenTool , Briefcase ,
Megaphone , Smartphone , Cloud , Camera , Play , Users , BadgeCheck } from 'lucide-react';
import laptopImg from "../../assets/laptop.jpg"
import girl1 from "../../assets/girl1.jpg"
import girl2 from "../../assets/girl2.jpg"
import boy1 from "../../assets/boy1.jpg"
import boy2 from "../../assets/boy2.jpg"
import codeImg from "../../assets/code.jpg"
import planetImg from "../../assets/planet.jpg"
import uxDesignImg from "../../assets/uxdesign.jpg"
import videoImg from "../../assets/videoImg.jpg"
import { motion, AnimatePresence } from "framer-motion";
import { Link } from 'react-router-dom';

function Home() {

const [isOn , setIsOn] = useState(false)
 

  return (


  




    <>
      
      

 
<div className='relative text-center pb-20 pt-[calc(var(--navbar-height))] md:pt-[calc(var(--navbar-height)+4rem)] md:pb-28 bg-gradient-to-br from-blue-950 via-indigo-900 to-blue-950'>

<div className="absolute pointer-events-none inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:44px_44px]"></div>

<div className='items-center gap-1.5 border border-primary-400/30 bg-primary-500/10 inline-flex rounded-full py-2 px-4 mb-6'>
<div className='rounded-full w-4 h-4 bg-primary-300 flex items-center justify-center'><Check size={10}/></div>
<p className='font-medium text-sm text-primary-300'>Trusted by 50,000+ learners worldwide</p>
</div>



<p className='text-4xl md:text-6xl font-extrabold tracking-tighter text-white'>Learn Without Limits</p>
<p className='text-4xl md:text-6xl font-extrabold tracking-tighter text-cyan-600 mt-1 mb-4'>Learnify</p>




<div className='font-medium md:text-xl text-[18px] text-primary-200 mb-8 md:px-0 px-3'>
<span>Master new skills with world-class instructors. Access thousands of courses in </span>
<span className='inline md:block'>technology, business, design, and more.</span>
</div>




<div className='flex flex-col md:flex-row gap-4 items-center justify-center mb-9 px-4 md:px-0'>

<div className='hover:shadow-2xl bg-white rounded-full py-4 px-7 inline-flex items-center justify-center text-primary-600 gap-2 cursor-pointer w-full md:w-fit'>
<Link to={"/courses"}><button className='font-medium text-[19px]'>Explore Courses</button></Link>
<MoveRight size={18}/>
</div>



<div className='border-2 hover:border-white hover:bg-white/10 w-full md:w-fit border-white/30 rounded-full py-4 px-7 items-center justify-center inline-flex text-white cursor-pointer'>
<a href="#pricing">
<button className='font-medium text-xl'>View Pricing</button>
</a>
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





<div className='dark:bg-gray-950 py-28'>







<div className='text-center mx-4 md:mx-0'>
  <p className='uppercase text-primary-600 font-semibold tracking-wider text-sm'>Browse Categories</p>
<p className='dark:text-white font-bold text-3xl md:text-4xl pb-2 pt-3'>Explore Our Top Categories</p>
<p className='text-gray-500 dark:text-gray-400 font-medium pb-12'>Find the perfect course from our wide selection of categories taught by industry experts.</p>

</div>






 	
	
	
 	



<div className='max-w-[1290px] mx-auto container w-full'>
<div className='md:grid md:grid-cols-4 flex flex-col gap-6 mx-4 md:mx-0'>


<Link to={"/courses"}>
<div className='dark:bg-gray-900 w-full ps-7 py-7 h-full rounded-2xl group border hover:shadow-lg border-gray-200 dark:border-gray-800 hover:border-primary-300 dark:hover:border-primary-800 cursor-pointer'>
<div className='bg-blue-100 dark:bg-blue-800/20 inline-flex items-center justify-center p-3 rounded-xl'>
<CodeXml className='text-blue-600 dark:text-blue-400	' size={27}/> 
</div>
<p className='dark:text-white font-bold text-xl pt-4 pb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400'>Web Development</p>
<span className='dark:text-gray-400 text-gray-600 text-[15px]'>Build modern websites and web </span>
<span className='dark:text-gray-400 text-gray-600 block text-[15px] leading-none pb-3'>applications</span>
<div className='flex items-center gap-1.5 dark:text-primary-400 text-indigo-600'>
<p>156 courses</p>
<MoveRight size={10}/>
</div>
</div>
</Link>




<Link to={"/courses"}>
<div className='dark:bg-gray-900 w-full ps-7 py-7 h-full rounded-2xl group border hover:shadow-lg border-gray-200 dark:border-gray-800 hover:border-primary-300 dark:hover:border-primary-800 cursor-pointer'>
<div className='bg-purple-100 dark:bg-purple-800/20 inline-flex items-center justify-center p-3 rounded-xl '>
<BarChart3 className='text-purple-600 dark:text-purple-400	' size={27}/> 
</div>
<p className='dark:text-white font-bold text-xl pt-4 pb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400'>Data Science</p>
<span className='dark:text-gray-400 text-gray-600 text-[15px]'>Analyze data and build ML models</span>
<div className='flex items-center gap-1.5 dark:text-primary-400 text-indigo-600 mt-3'>
<p>98 courses</p>
<MoveRight size={10}/>
</div>
</div>
</Link>








<Link to={"/courses"}>
<div className='dark:bg-gray-900 w-full ps-7 py-7 h-full rounded-2xl group border hover:shadow-lg border-gray-200 dark:border-gray-800 hover:border-primary-300 dark:hover:border-primary-800 cursor-pointer'>
<div className='bg-pink-100 dark:bg-pink-800/20 inline-flex items-center justify-center p-3 rounded-xl '>
<PenTool className='text-pink-600 dark:text-pink-400	' size={27}/> 
</div>
<p className='dark:text-white font-bold text-xl pt-4 pb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400'>UI/UX Design</p>
<span className='dark:text-gray-400 text-gray-600 text-[15px]'>Create beautiful user experiences</span>
<div className='flex items-center gap-1.5 dark:text-primary-400 text-indigo-600 mt-3'>
<p>124 courses</p>
<MoveRight size={10}/>
</div>
</div>
</Link>




<Link to={"/courses"}>
<div className='dark:bg-gray-900 w-full ps-7 py-7 h-full rounded-2xl group border hover:shadow-lg border-gray-200 dark:border-gray-800 hover:border-primary-300 dark:hover:border-primary-800 cursor-pointer'>
<div className='bg-amber-100 dark:bg-amber-800/20 inline-flex items-center justify-center p-3 rounded-xl '>
<Briefcase className='text-amber-600 dark:text-amber-400	' size={27}/> 
</div>
<p className='dark:text-white font-bold text-xl pt-4 pb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400'>Business</p>
<span className='dark:text-gray-400 text-gray-600 text-[15px]'>Grow your career and business</span>
<div className='flex items-center gap-1.5 dark:text-primary-400 text-indigo-600 mt-3'>
<p>87 courses</p>
<MoveRight size={10}/>
</div>
</div>
</Link>









<Link to={"/courses"}>
<div className='dark:bg-gray-900 w-full ps-7 py-7 h-full rounded-2xl group border hover:shadow-lg border-gray-200 dark:border-gray-800 hover:border-primary-300 dark:hover:border-primary-800 cursor-pointer'>
<div className='bg-green-100 dark:bg-green-800/20 inline-flex items-center justify-center p-3 rounded-xl '>
<Megaphone className='text-green-600 dark:text-green-400	' size={27}/> 
</div>
<p className='dark:text-white font-bold text-xl pt-4 pb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400'>Digital Marketing</p>
<span className='dark:text-gray-400 text-gray-600 text-[15px]'>Master SEO, social media, and ads</span>
<div className='flex items-center gap-1.5 dark:text-primary-400 text-indigo-600 mt-3'>
<p>72 courses</p>
<MoveRight size={10}/>
</div>
</div>
</Link>



 	
 











<Link to={"/courses"}>
<div className='dark:bg-gray-900 w-full ps-7 py-7 h-full rounded-2xl group border hover:shadow-lg border-gray-200 dark:border-gray-800 hover:border-primary-300 dark:hover:border-primary-800 cursor-pointer'>
<div className='bg-cyan-100 dark:bg-cyan-800/20 inline-flex items-center justify-center p-3 rounded-xl '>
<Smartphone className='text-cyan-600 dark:text-cyan-400	' size={27}/> 
</div>
<p className='dark:text-white font-bold text-xl pt-4 pb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400'>Mobile Development</p>
<span className='dark:text-gray-400 text-gray-600 text-[15px]'>Build iOS and Android apps</span>
<div className='flex items-center gap-1.5 dark:text-primary-400 text-indigo-600 mt-3'>
<p>64 courses</p>
<MoveRight size={10}/>
</div>
</div>
</Link>







<Link to={"/courses"}>
<div className='dark:bg-gray-900 w-full ps-7 py-7 h-full rounded-2xl group border hover:shadow-lg border-gray-200 dark:border-gray-800 hover:border-primary-300 dark:hover:border-primary-800 cursor-pointer'>
<div className='bg-indigo-100 dark:bg-indigo-800/20 inline-flex items-center justify-center p-3 rounded-xl '>
<Cloud className='text-indigo-600 dark:text-indigo-400	' size={27}/> 
</div>
<p className='dark:text-white font-bold text-xl pt-4 pb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400'>Cloud & DevOps</p>
<span className='dark:text-gray-400 text-gray-600 text-[15px]'>AWS, Azure, Docker, Kubernetes</span>
<div className='flex items-center gap-1.5 dark:text-primary-400 text-indigo-600 mt-3'>
<p>58 courses</p>
<MoveRight size={10}/>
</div>
</div>
</Link>




	





<Link to={"/courses"}>
<div className='dark:bg-gray-900 w-full ps-7 py-7 h-full rounded-2xl group border hover:shadow-lg border-gray-200 dark:border-gray-800 hover:border-primary-300 dark:hover:border-primary-800 cursor-pointer'>
<div className='bg-rose-100 dark:bg-rose-700/20 inline-flex items-center justify-center p-3 rounded-xl '>
<Camera className='text-rose-600 dark:text-rose-400	' size={27}/> 
</div>
<p className='dark:text-white font-bold text-xl pt-4 pb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400'>Photography</p>
<span className='dark:text-gray-400 text-gray-600 text-[15px]'>Capture stunning images</span>
<div className='flex items-center gap-1.5 dark:text-primary-400 text-indigo-600 mt-3'>
<p>45 courses</p>
<MoveRight size={10}/>
</div>
</div>
</Link>


</div>


</div>




</div>














<div className='bg-gray-50 dark:bg-gray-900 py-20'>

<div className='max-w-[1290px] mx-auto container w-full'>






<div className='mx-4 md:mx-0'>
 

<div className='flex flex-col md:flex-row md:items-center gap-4 md:gap-0 justify-between'>


<div>
<p className='uppercase text-primary-600 font-semibold tracking-wider text-sm'>Featured Courses</p>
<p className='dark:text-white font-bold text-3xl md:text-4xl py-2.5'>Most Popular Courses</p>
<span className='text-gray-500 dark:text-gray-400 font-medium'>Start learning from the highest-rated courses chosen by thousands of students </span>
<span className='text-gray-500 dark:text-gray-400 font-medium pb-12 inline md:block leading-none'>worldwide.</span>
</div>




<Link to={"/courses"}>
<div className='items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-indigo-800 inline-flex cursor-pointer pb-8 md:pb-8'>
<span className='font-semibold'>View All Courses</span>
<MoveRight size={18}/>
</div>
</Link>


</div>
</div>











<div className='flex flex-col md:flex-row px-4 md:px-0 items-center gap-6'>
<div className='rounded-2xl overflow-hidden border border-gray-200 shadow hover:shadow-lg dark:border-gray-800 dark:bg-slate-900 cursor-pointer group hover:-translate-y-1 transition-all duration-300'>







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

<p className='uppercase text-indigo-600 dark:text-indigo-400 text-sm font-semibold'>Web Development</p>


<div className='dark:text-white font-semibold text-xl pt-3 pb-4 group-hover:text-indigo-600 dark:group-hover:text-indigo-400'>
<span className=''>The Complete Web </span>
<span className='inline md:block leading-none'>Development Bootcamp...</span>
</div>



<div className='flex items-center gap-2 pb-2'>
<img src={girl1} alt="girl" className='rounded-full w-6 h-6'/>
<span className='text-gray-600 dark:text-gray-400 font-medium text-sm'>Sarah Johnson</span>
</div>







<div className='flex items-center gap-4 pb-2'>
<div className='flex items-center gap-1'>
<Star stroke='#eab308' fill='#eab308' size={14}/>    
<div className='flex items-center gap-1'>
<span className='dark:text-white font-bold'>4.8</span>
<span className='text-gray-500'>(46K)</span>
</div>
</div>
<span className='text-gray-500'>235K students</span>
</div>







<div className='flex items-center gap-4'>
<div className='flex items-center gap-1 text-gray-600 dark:text-gray-400'>
<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chart-no-axes-column-increasing-icon lucide-chart-no-axes-column-increasing"><path d="M5 21v-6"/><path d="M12 21V9"/><path d="M19 21V3"/></svg>
<span className='text-[15px] font-medium'>All Levels</span>
</div>




<div className='flex items-center gap-1 text-gray-600 dark:text-gray-400'>
<Play size={12}/>
<span className='text-[15px] font-medium'>478 lessons</span>
</div>
</div>



<div className='border-t dark:border-gray-800 py-3 flex items-center gap-2 mt-4'>

<span className='dark:text-white font-bold text-[22px]'>$89.99</span>
<span className='text-gray-600'><del>$199.99</del></span>

</div>











</div>



</div>




<div className='rounded-2xl overflow-hidden border border-gray-200 shadow hover:shadow-lg dark:border-gray-800 dark:bg-slate-900 cursor-pointer group hover:-translate-y-2 transition-all duration-300'>

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

<p className='uppercase text-indigo-600 dark:text-indigo-400 text-sm font-semibold'>data science</p>


<div className='dark:text-white font-semibold text-xl pt-3 pb-4 group-hover:text-indigo-600 dark:group-hover:text-indigo-400'>
<span className=''>Machine Learning A-Z: AI, </span>
<span className='inline md:block leading-none '>Python & R</span>
</div>



<div className='flex items-center gap-2 pb-2'>
<img src={boy1} alt="girl" className='rounded-full w-6 h-6'/>
<span className='text-gray-600 dark:text-gray-400 font-medium text-sm'>Michael Chen</span>
</div>







<div className='flex items-center gap-4 pb-2'>
<div className='flex items-center gap-1'>
<Star stroke='#eab308' fill='#eab308' size={14}/>    
<div className='flex items-center gap-1'>
<span className='dark:text-white font-bold'>4.7</span>
<span className='text-gray-500'>(32K)</span>
</div>
</div>
<span className='text-gray-500'>178K students</span>
</div>







<div className='flex items-center gap-4'>
<div className='flex items-center gap-1 text-gray-600 dark:text-gray-400'>
<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chart-no-axes-column-increasing-icon lucide-chart-no-axes-column-increasing"><path d="M5 21v-6"/><path d="M12 21V9"/><path d="M19 21V3"/></svg>
<span className='text-[15px] font-medium'>Intermediate</span>
</div>




<div className='flex items-center gap-1 text-gray-600 dark:text-gray-400'>
<Play size={12}/>
<span className='text-[15px] font-medium'>312 lessons</span>
</div>
</div>



<div className='border-t dark:border-gray-800 py-3 flex items-center gap-2 mt-4'>
<span className='dark:text-white font-bold text-[22px]'>$94.99</span>
<span className='text-gray-600'><del>$189.99</del></span>

</div>



















</div>



</div>




<div className='rounded-2xl overflow-hidden border border-gray-200 shadow hover:shadow-lg dark:border-gray-800 dark:bg-slate-900 cursor-pointer group hover:-translate-y-2 transition-all duration-300'>


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

<p className='uppercase text-indigo-600 dark:text-indigo-400 text-sm font-semibold'>UI/UX Design</p>


<div className='dark:text-white font-semibold text-xl pt-3 pb-4 group-hover:text-indigo-600 dark:group-hover:text-indigo-400'>
<span className=''>UI/UX Design: The </span>
<span className='inline md:block leading-none '>Complete Guide</span>
</div>



<div className='flex items-center gap-2 pb-2'>
<img src={girl2} alt="girl" className='rounded-full w-6 h-6'/>
<span className='text-gray-600 dark:text-gray-400 font-medium text-sm'>Emily Rodriguez</span>
</div>







<div className='flex items-center gap-4 pb-2'>
<div className='flex items-center gap-1'>
<Star stroke='#eab308' fill='#eab308' size={14}/>    
<div className='flex items-center gap-1'>
<span className='dark:text-white font-bold'>4.9</span>
<span className='text-gray-500'>(19K)</span>
</div>
</div>
<span className='text-gray-500'>89K students</span>
</div>







<div className='flex items-center gap-4'>
<div className='flex items-center gap-1 text-gray-600 dark:text-gray-400'>
<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chart-no-axes-column-increasing-icon lucide-chart-no-axes-column-increasing"><path d="M5 21v-6"/><path d="M12 21V9"/><path d="M19 21V3"/></svg>
<span className='text-[15px] font-medium'>Beginner</span>
</div>




<div className='flex items-center gap-1 text-gray-600 dark:text-gray-400'>
<Play size={12}/>
<span className='text-[15px] font-medium'>245 lessons</span>
</div>
</div>



<div className='border-t dark:border-gray-800 py-3 flex items-center gap-2 mt-4'>

<span className='dark:text-white font-bold text-[22px]'>$79.99</span>
<span className='text-gray-600'><del>$159.99</del></span>

</div>







































</div>



</div>




<div className='rounded-2xl overflow-hidden border border-gray-200 shadow hover:shadow-lg dark:border-gray-800 dark:bg-slate-900 cursor-pointer group hover:-translate-y-2 transition-all duration-300'>


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

<p className='uppercase text-indigo-600 dark:text-indigo-400 text-sm font-semibold'>Cloud & DevOps</p>


<div className='dark:text-white font-semibold text-xl pt-3 pb-4 group-hover:text-indigo-600 dark:group-hover:text-indigo-400'>
<span className=''>AWS Certified Solutions </span>
<span className='inline md:block leading-none '>Architect 2032</span>
</div>



<div className='flex items-center gap-2 pb-2'>
<img src={boy2} alt="girl" className='rounded-full w-6 h-6'/>
<span className='text-gray-600 dark:text-gray-400 font-medium text-sm'>David Kim</span>
</div>







<div className='flex items-center gap-4 pb-2'>
<div className='flex items-center gap-1'>
<Star stroke='#eab308' fill='#eab308' size={14}/>    
<div className='flex items-center gap-1'>
<span className='dark:text-white font-bold'>4.8</span>
<span className='text-gray-500'>(25K)</span>
</div>
</div>
<span className='text-gray-500'>157K students</span>
</div>







<div className='flex items-center gap-4'>
<div className='flex items-center gap-1 text-gray-600 dark:text-gray-400'>
<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chart-no-axes-column-increasing-icon lucide-chart-no-axes-column-increasing"><path d="M5 21v-6"/><path d="M12 21V9"/><path d="M19 21V3"/></svg>
<span className='text-[15px] font-medium'>Intermediate</span>
</div>




<div className='flex items-center gap-1 text-gray-600 dark:text-gray-400'>
<Play size={12}/>
<span className='text-[15px] font-medium'>380 lessons</span>
</div>
</div>



<div className='border-t dark:border-gray-800 py-3 flex items-center gap-2 mt-4'>

<span className='dark:text-white font-bold text-[22px]'>$84.99</span>
<span className='text-gray-600'><del>$169.99</del></span>

</div>

</div>

</div>
</div>



</div>
</div>















<div className='bg-white dark:bg-gray-950 py-24 px-4 md:px-0'>


<div className='max-w-[1290px] mx-auto container w-full'>



<div className='flex flex-col md:grid md:grid-cols-2 items-center gap-14'>
<div className='flex flex-col'>
<div>
<p className='uppercase text-primary-600 font-semibold tracking-wider text-sm'>Why Choose Us</p>
<p className='dark:text-white font-bold text-3xl md:text-4xl py-2.5'>The Best Platform to Learn New Skills</p>
<span className='text-gray-600 dark:text-gray-400 text-[18px] font-medium'>We provide everything you need to succeed in your learning </span>
<span className='text-gray-600 dark:text-gray-400 text-[18px] font-medium pb-12 inline md:block '>journey. Our platform is designed to make learning effective and enjoyable.</span>
</div>




 
<div className='flex flex-col md:grid md:grid-cols-2 gap-6 mt-12 md:mt-0'>

<div className='flex gap-4 items-start'>
<div className='bg-primary-100 dark:bg-blue-800/20 flex items-center justify-center p-3 rounded-xl'>
<Clock4 className='text-indigo-600 dark:text-indigo-400' size={24}/> 
</div>
<div className='flex flex-col'>
<p className='font-semibold text-[18px] dark:text-white'>Learn at Your Pace</p>
<p className='text-gray-600 dark:text-gray-400 text-[15px]'>Access courses anytime, anywhere. Learn on your schedule with lifetime access to all purchased courses.</p>
</div>
</div>

 


<div className='flex gap-4 items-start'>
<div className='bg-primary-100 dark:bg-blue-800/20 inline-flex items-center justify-center p-3 rounded-xl '>
<Users className='text-indigo-600 dark:text-indigo-400	' size={24}/> 
</div>
<div className='flex flex-col'>
<p className='font-semibold text-[18px] dark:text-white'>Expert Instructors</p>
<p className='text-gray-600 dark:text-gray-400 text-[15px]'>Learn from industry professionals working at top companies like Google, Meta, and Amazon.</p>
</div>
</div>





<div className='flex gap-4 items-start'>
<div className='bg-primary-100 dark:bg-blue-800/20 inline-flex items-center justify-center p-3 rounded-xl '>
<CodeXml className='text-indigo-600 dark:text-indigo-400	' size={24}/> 
</div>
<div className='flex flex-col'>
<p className='font-semibold text-[18px] dark:text-white'>Hands-on Projects</p>
<p className='text-gray-600 dark:text-gray-400 text-[15px]'>Build real-world projects and add them to your portfolio. Practice what you learn with coding exercises.</p>
</div>
</div>




<div className='flex gap-4 items-start'>
<div className='bg-primary-100 dark:bg-blue-800/20 inline-flex items-center justify-center p-3 rounded-xl '>
<BadgeCheck className='text-indigo-600 dark:text-indigo-400	' size={24}/> 
</div>
<div className='flex flex-col'>
<p className='font-semibold text-[18px] dark:text-white'>Certificates</p>
<p className='text-gray-600 dark:text-gray-400 text-[15px]'>Earn verified certificates upon completion. Share your achievements on LinkedIn and your resume.</p>
</div>
</div>



</div>
</div>










<div className='relative'>
<img src={videoImg} alt="video image" className='dark:opacity-70 rounded-3xl'/>

<div className='absolute inset-0 flex items-center justify-center'>
<div className='rounded-full bg-white p-6 inline-flex items-center justify-center shadow-md hover:shadow-xl transition-shadow duration-500 ease-in-out hover:bg-blue-50'>
<Play size={19} stroke='#2563eb' fill='#2563eb'/>
</div>
</div>




<div className='absolute -bottom-6 -left-6'>


<div className='bg-white shadow-lg dark:bg-gray-800 p-6 rounded-2xl flex items-center gap-3'>


<div className='flex -space-x-2'>
<img src={girl1} alt="girl1" className='rounded-full w-10 h-10 border-2 border-white'/>
<img src={boy1} alt="boy1" className='rounded-full w-10 border-2 h-10 border-white'/>
<img src={girl2} alt="girl2" className='rounded-full w-10 border-2 h-10 border-white'/>
</div>
<div>
<p className='dark:text-white font-bold'>50K+</p>
<p className='text-gray-600 dark:text-gray-500 text-sm'>Happy Students</p>
</div>


</div>


</div>




</div>
</div>



</div>
</div>















<div className='bg-gray-50 dark:bg-gray-900 pb-16 pt-20 md:py-24'>





<div className='text-center'>
<p className='uppercase text-primary-600 font-semibold tracking-wider text-sm'>Expert Instructors</p>
<p className='dark:text-white font-bold text-3xl md:text-4xl py-2.5'>Learn From the Best</p>
<div className='mx-5 md:mx-0 pb-12'>
<span className='text-gray-600 dark:text-gray-400 font-medium'>Our instructors are industry professionals from top companies, passionate about sharing </span>
<span className='text-gray-600 dark:text-gray-400 font-medium inline md:block leading-none'>their knowledge.</span>
</div>
</div>








 





<div className='max-w-[1290px] mx-auto container w-full'>

<div className='flex flex-col md:flex-row gap-7 justify-center mx-5 md:mx-0'>







<div className='bg-white shadow border dark:border-gray-800 border-gray-100 dark:bg-gray-800 rounded-2xl cursor-pointer text-center py-6 px-6 group min-w-[280px]'>
<img src={girl1} alt="girl1" className='w-24 h-24 rounded-full ring-4 ring-gray-100 dark:ring-gray-700 mx-auto'/>
<p className='dark:text-white text-lg font-semibold mt-4 group-hover:text-indigo-600 dark:group-hover:text-indigo-400'>Sarah Johnson</p>
<span className='text-gray-600 dark:text-gray-400 text-sm'>Senior Software Engineer at </span>
<span className='text-gray-600 dark:text-gray-400 text-sm inline leading-none md:block mb-2.5'>Google</span>
<div className='flex flex-col items-center justify-center'>
<div className='flex items-center gap-1.5 mt-2 md:mt-0'>
<Star stroke='#eab308' fill='#eab308' size={14}/>    
<div className='flex items-center gap-1.5'>
<span className='dark:text-white font-bold'>4.9</span>
<span className='text-gray-500'>(12K)</span>
</div>
</div>
<div className='flex items-center gap-5 border-t w-full justify-center dark:border-gray-700 mt-3 pt-3'>
<div>
<p className='dark:text-white font-bold text-lg'>89K</p>
<p className='text-sm text-gray-500'>Students</p>
</div>
<div>
<p className='dark:text-white font-bold text-lg'>8</p>
<p className='text-sm text-gray-500'>Courses</p>
</div>
</div>
</div>
</div>












<div className='bg-white shadow border dark:border-gray-800 border-gray-100 dark:bg-gray-800 rounded-2xl cursor-pointer text-center py-6 px-6 group min-w-[280px]'>
<img src={boy1} alt="girl1" className='w-24 h-24 rounded-full ring-4 ring-gray-100 dark:ring-gray-700 mx-auto'/>
<p className='dark:text-white text-lg font-semibold mt-4 mb-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400'>Michael Chen</p>
<span className='text-gray-600 dark:text-gray-400 text-sm mb-2.5 block'>Data Science Lead at Netflix</span>
<div className='flex flex-col items-center justify-center'>
<div className='flex items-center gap-1.5 md:mt-0'>
<Star stroke='#eab308' fill='#eab308' size={14}/>    
<div className='flex items-center gap-1.5'>
<span className='dark:text-white font-bold'>4.8</span>
<span className='text-gray-500'>(9K)</span>
</div>
</div>
<div className='flex items-center gap-5 border-t w-full justify-center dark:border-gray-700 mt-3 pt-3'>
<div>
<p className='dark:text-white font-bold text-lg'>62K</p>
<p className='text-sm text-gray-500'>Students</p>
</div>
<div>
<p className='dark:text-white font-bold text-lg'>6</p>
<p className='text-sm text-gray-500'>Courses</p>
</div>
</div>
</div>
</div>














<div className='bg-white shadow border dark:border-gray-800 border-gray-100 dark:bg-gray-800 rounded-2xl cursor-pointer text-center py-6 px-6 group min-w-[280px]'>
<img src={girl2} alt="girl1" className='w-24 h-24 rounded-full ring-4 ring-gray-100 dark:ring-gray-700 mx-auto'/>
<p className='dark:text-white text-lg font-semibold mt-4 mb-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400'>Emily Rodriguez</p>
<span className='text-gray-600 dark:text-gray-400 text-sm mb-2.5 block'>Principal Designer at Airbnb</span>
<div className='flex flex-col items-center justify-center'>
<div className='flex items-center gap-1.5 md:mt-0'>
<Star stroke='#eab308' fill='#eab308' size={14}/>    
<div className='flex items-center gap-1.5'>
<span className='dark:text-white font-bold'>4.9</span>
<span className='text-gray-500'>(7K)</span>
</div>
</div>
<div className='flex items-center gap-5 border-t w-full justify-center dark:border-gray-700 mt-3 pt-3'>
<div>
<p className='dark:text-white font-bold text-lg'>45K</p>
<p className='text-sm text-gray-500'>Students</p>
</div>
<div>
<p className='dark:text-white font-bold text-lg'>5</p>
<p className='text-sm text-gray-500'>Courses</p>
</div>
</div>
</div>
</div>















<div className='bg-white shadow border dark:border-gray-800 border-gray-100 dark:bg-gray-800 rounded-2xl cursor-pointer text-center py-6 px-6 group min-w-[280px]'>
<img src={boy2} alt="girl1" className='w-24 h-24 rounded-full ring-4 ring-gray-100 dark:ring-gray-700 mx-auto'/>
<p className='dark:text-white text-lg font-semibold mt-4 mb-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400'>David Kim</p>
<span className='text-gray-600 dark:text-gray-400 text-sm mb-2.5 block'>AWS Solutions Architect</span>
<div className='flex flex-col items-center justify-center'>
<div className='flex items-center gap-1.5 md:mt-0'>
<Star stroke='#eab308' fill='#eab308' size={14}/>    
<div className='flex items-center gap-1.5'>
<span className='dark:text-white font-bold'>4.7</span>
<span className='text-gray-500'>(5K)</span>
</div>
</div>
<div className='flex items-center gap-5 border-t w-full justify-center dark:border-gray-700 mt-3 pt-3'>
<div>
<p className='dark:text-white font-bold text-lg'>38K</p>
<p className='text-sm text-gray-500'>Students</p>
</div>
<div>
<p className='dark:text-white font-bold text-lg'>7</p>
<p className='text-sm text-gray-500'>Courses</p>
</div>
</div>
</div>
</div>




</div>
</div>









<Link to={"/Instructors"}>
<div className='flex justify-center'>
<div className='items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-700 inline-flex cursor-pointer mt-12'>
<span className='font-semibold'>View All Instructors</span>
<MoveRight size={18}/>
</div>
</div>
</Link>


</div>


















<div className='bg-slate-800 py-24'>








<div className='text-center px-6 md:px-0'>
<p className='uppercase text-indigo-400 font-semibold tracking-wider text-sm'>Success Stories</p>
<p className='text-white font-bold text-3xl md:text-4xl py-3'>What Our Students Say</p>
<span className='text-gray-400 font-medium leading-normal pb-10 inline-block'>Join thousands of students who have transformed their careers with our courses.</span>
</div>






<div className='max-w-[1290px] mx-auto container w-full'>
<div className='flex flex-col md:flex-row gap-8 px-5 md:px-0'>
<div className='bg-gray-900 rounded-2xl p-8'>
<div className='flex items-center gap-1.5'>
<Star stroke='#eab308' fill='#eab308' size={16}/>    
<Star stroke='#eab308' fill='#eab308' size={16}/>    
<Star stroke='#eab308' fill='#eab308' size={16}/>    
<Star stroke='#eab308' fill='#eab308' size={16}/>    
<Star stroke='#eab308' fill='#eab308' size={16}/>   
</div> 
<p className='text-gray-300 pt-4 text-[17px] leading-relaxed mx-0 md:mx-2'>"Learnify helped me transition from marketing to software engineering in just 6 months. The web development bootcamp was incredibly comprehensive and practical."</p>
<p className='text-indigo-400 text-sm pt-3 pb-5'>Course: Web Development Bootcamp</p>
<div className='flex items-center gap-4'>
<img src={boy1} alt="boy1" className='rounded-full w-12 h-12'/>
<div className='flex flex-col'>
<p className='text-white font-bold'>Alex Thompson</p>
<p className='text-gray-400 text-sm'>Software Engineer at Stripe</p>
</div>
</div>
</div>













<div className='bg-gray-900 rounded-2xl p-8'>
<div className='flex items-center gap-1.5'>
<Star stroke='#eab308' fill='#eab308' size={16}/>    
<Star stroke='#eab308' fill='#eab308' size={16}/>    
<Star stroke='#eab308' fill='#eab308' size={16}/>    
<Star stroke='#eab308' fill='#eab308' size={16}/>    
<Star stroke='#eab308' fill='#eab308' size={16}/>   
</div> 
<p className='text-gray-300 pt-4 text-[17px] leading-relaxed mx-0 md:mx-2'>"The machine learning courses are top-notch. I went from knowing basic Python to building production ML models. Now I work as a data scientist at a top tech company."</p>
<p className='text-indigo-400 text-sm pt-3 pb-5'>Course: Machine Learning A-Z</p>
<div className='flex items-center gap-4'>
<img src={girl1} alt="girl1" className='rounded-full w-12 h-12'/>
<div className='flex flex-col'>
<p className='text-white font-bold'>Maria Garcia</p>
<p className='text-gray-400 text-sm'>Data Scientist at Meta</p>
</div>
</div>
</div>





















<div className='bg-gray-900 rounded-2xl p-8'>
<div className='flex items-center gap-1.5'>
<Star stroke='#eab308' fill='#eab308' size={16}/>    
<Star stroke='#eab308' fill='#eab308' size={16}/>    
<Star stroke='#eab308' fill='#eab308' size={16}/>    
<Star stroke='#eab308' fill='#eab308' size={16}/>    
<Star stroke='#eab308' fill='#eab308' size={16}/>   
</div> 
<p className='text-gray-300 pt-4 text-[17px] leading-relaxed mx-0 md:mx-2'>"As a self-taught designer, Learnify filled all the gaps in my knowledge. The UI/UX courses taught me professional workflows and helped me land my dream job."</p>
<p className='text-indigo-400 text-sm pt-3 pb-5'>Course: UI/UX Design Complete Guide</p>
<div className='flex items-center gap-4'>
<img src={boy2} alt="boy2" className='rounded-full w-12 h-12'/>
<div className='flex flex-col'>
<p className='text-white font-bold'>James Wilson</p>
<p className='text-gray-400 text-sm'>Product Designer at Figma</p>
</div>
</div>
</div>
</div>
</div>

</div>




















<div className='dark:bg-gray-950 py-24' id='pricing'>












<div className='text-center'>
<p className='uppercase text-primary-600 font-semibold tracking-wider text-sm'>Pricing Plans</p>
<p className='dark:text-white font-bold text-3xl md:text-4xl py-2.5'>Choose Your Learning Path</p>
<div className='mx-5 md:mx-0 pb-5'>
<span className='text-gray-600 dark:text-gray-400 font-medium'>Start free and upgrade when you're ready. All plans include a 30-day money-back </span>
<span className='text-gray-600 dark:text-gray-400 font-medium inline md:block leading-normal'>guarantee.</span>
</div>


<div className='flex items-center justify-center gap-4'>

<div className='flex items-center gap-4'>
<span className='font-semibold dark:text-white text-sm'>Monthly</span>
<div onClick={ () => setIsOn(!isOn)}>
<svg className='cursor-pointer rounded-full ' width="60" height="30" viewBox="0 0 60 30" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="60" height="30" rx="15" fill={isOn ? "#1D4ED8" : "#9CA3AF"}/>
  <circle  
  className='transition-all duration-200'
  cx={isOn ? "45" : "15"} cy="15" r="11" fill="#ffffff"/>
</svg>
</div>
</div>


<div className='flex items-center gap-4'>
<span className='font-semibold text-gray-500 dark:text-gray-400 text-sm'>Yearly</span>
<div className='rounded-full px-2 py-0.5 font-semibold text-green-700 dark:text-green-400 text-sm bg-teal-400 dark:bg-emerald-900 bg-opacity-20'>Save 17%</div>
</div>

</div>




</div>





<div className='max-w-[1290px] mx-auto container w-full'>

<div className='grid grid-cols-1 md:mx-0 mx-4 md:grid-cols-3 mt-12 gap-12'>





<div className='dark:bg-gray-900 border dark:border-gray-800 p-8 rounded-3xl text-center transition-all duration-300 hover:-translate-y-2'>


<p className='dark:text-white text-2xl font-semibold'>Free</p>
<p className='text-gray-600 dark:text-gray-400 mt-2 mb-5'>Get started with free courses</p>
<p className='dark:text-white text-5xl font-semibold mb-5'>Free</p>



<div className='flex flex-col gap-3 mb-8'>

<div className='flex items-center gap-2.5'>
<Check size={16} className='text-green-500 dark:text-green-400'/>
<p className='text-gray-600 dark:text-gray-300'>Access to 50+ free courses</p>
</div>

<div className='flex items-center gap-2.5'>
<Check size={16} className='text-green-500 dark:text-green-400'/>
<p className='text-gray-600 dark:text-gray-300'>Basic course completion certificates</p>
</div>

<div className='flex items-center gap-2.5'>
<Check size={16} className='text-green-500 dark:text-green-400'/>
<p className='text-gray-600 dark:text-gray-300'>Community forum access</p>
</div>

<div className='flex items-center gap-2.5'>
<Check size={16} className='text-green-500 dark:text-green-400'/>
<p className='text-gray-600 dark:text-gray-300'>Mobile app access</p>
</div>

</div>



<div className='border-2 hover:bg-gray-50 hover:border-gray-400 dark:hover:bg-white/10 w-full dark:border-white/30 rounded-full py-4 items-center justify-center inline-flex dark:text-white cursor-pointer'>
<button className='font-semibold'>Start Free</button>
</div>




</div>

























<div className='bg-indigo-50 shadow-xl dark:bg-indigo-950 relative border border-indigo-400 p-8 rounded-3xl text-center transition-all duration-300 hover:-translate-y-2'>


<div className='bg-indigo-600 text-white rounded-full py-1 px-3 absolute -translate-x-1/2 left-1/2 -translate-y-[calc(50%+32px)]'>
<p className='font-semibold text-[15px]'>Most Popular</p>
</div>


<p className='dark:text-white text-2xl font-semibold'>Pro</p>
<p className='text-gray-600 dark:text-gray-400 mt-2 mb-5'>Perfect for serious learners</p>


<AnimatePresence mode="wait">
  <motion.p
    key={isOn ? "year" : "month"}
    initial={{ opacity: 0, y: 5 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -5 }}
    transition={{ duration: 0.3 }}
    className={`dark:text-white text-5xl font-semibold ${isOn ? "mb-2" : "mb-5"}`}
  >
    ${isOn ? "290" : "29"}{" "}
    <sub className='text-gray-600 dark:text-gray-400 text-lg font-medium'>
      /{isOn ? "year" : "month"}
    </sub>
  </motion.p>
</AnimatePresence>



<AnimatePresence>
  {isOn && (
    <motion.p
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="text-emerald-600 dark:text-emerald-400 text-sm mb-5"
    >
      Save $58/year
    </motion.p>
  )}
</AnimatePresence>




<div className='flex flex-col gap-3 mb-8'>

<div className='flex items-center gap-2.5'>
<Check size={16} className='text-green-500 dark:text-green-400'/>
<p className='text-gray-600 dark:text-gray-300'>Unlimited access to all courses</p>
</div>

<div className='flex items-center gap-2.5'>
<Check size={16} className='text-green-500 dark:text-green-400'/>
<p className='text-gray-600 dark:text-gray-300'>Verified certificates</p>
</div>

<div className='flex items-center gap-2.5'>
<Check size={16} className='text-green-500 dark:text-green-400'/>
<p className='text-gray-600 dark:text-gray-300'>Offline viewing</p>
</div>

<div className='flex items-center gap-2.5'>
<Check size={16} className='text-green-500 dark:text-green-400'/>
<p className='text-gray-600 dark:text-gray-300'>Priority support</p>
</div>


<div className='flex items-center gap-2.5'>
<Check size={16} className='text-green-500 dark:text-green-400'/>
<p className='text-gray-600 dark:text-gray-300'>Course downloads</p>
</div>


<div className='flex items-center gap-2.5'>
<Check size={16} className='text-green-500 dark:text-green-400'/>
<p className='text-gray-600 dark:text-gray-300'>Ad-free experience</p>
</div>


</div>



<div className='w-full bg-primary-600 hover:bg-primary-700 shadow-lg hover:shadow-xl hover:shadow-primary-500/20 shadow-primary-500/40 rounded-full py-4 items-center justify-center inline-flex text-white cursor-pointer'>
<button className='font-semibold'>Start Pro Trial</button>
</div>




</div>

























<div className='dark:bg-gray-900 border dark:border-gray-800 p-8 rounded-3xl text-center transition-all duration-300 hover:-translate-y-2'>
 

<p className='dark:text-white text-2xl font-semibold'>Team</p>
<p className='text-gray-600 dark:text-gray-400 mt-2 mb-5'>For teams and organizations</p>


<AnimatePresence mode="wait">
  <motion.p
    key={isOn ? "year" : "month"}
    initial={{ opacity: 0, y: 5 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -5 }}
    transition={{ duration: 0.3 }}
    className={`dark:text-white text-5xl font-semibold ${isOn ? "mb-2" : "mb-5"}`}
  >
    ${isOn ? "470" : "49"}{" "}
    <sub className='text-gray-600 dark:text-gray-400 text-lg font-medium'>
      /{isOn ? "year" : "month"}
    </sub>
  </motion.p>
</AnimatePresence>



<AnimatePresence>
  {isOn && (
    <motion.p
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="text-emerald-600 dark:text-emerald-400 text-sm mb-5"
    >
      Save $118/year
    </motion.p>
  )}
</AnimatePresence>



<div className='flex flex-col gap-3 mb-8'>

<div className='flex items-center gap-2.5'>
<Check size={16} className='text-green-500 dark:text-green-400'/>
<p className='text-gray-600 dark:text-gray-300'>Everything in Pro</p>
</div>

<div className='flex items-center gap-2.5'>
<Check size={16} className='text-green-500 dark:text-green-400'/>
<p className='text-gray-600 dark:text-gray-300'>Team management dashboard</p>
</div>

<div className='flex items-center gap-2.5'>
<Check size={16} className='text-green-500 dark:text-green-400'/>
<p className='text-gray-600 dark:text-gray-300'>Progress tracking & analytics</p>
</div>

<div className='flex items-center gap-2.5'>
<Check size={16} className='text-green-500 dark:text-green-400'/>
<p className='text-gray-600 dark:text-gray-300'>Custom learning paths</p>
</div>


<div className='flex items-center gap-2.5'>
<Check size={16} className='text-green-500 dark:text-green-400'/>
<p className='text-gray-600 dark:text-gray-300'>SSO integration</p>
</div>


<div className='flex items-center gap-2.5'>
<Check size={16} className='text-green-500 dark:text-green-400'/>
<p className='text-gray-600 dark:text-gray-300'>Dedicated account manager</p>
</div>


</div>



<div className='border-2 hover:bg-gray-50 hover:border-gray-400 dark:hover:bg-white/10 w-full dark:border-white/30 rounded-full py-4 items-center justify-center inline-flex dark:text-white cursor-pointer'>
<button className='font-semibold'>Contact Sales</button>
</div>




</div>




</div>
</div>





<p className='text-gray-600 dark:text-gray-400 text-center text-sm mt-8 mx-4 md:mx-0'>All plans include a 30-day money-back guarantee. No questions asked.</p>



</div>

















<div className='bg-indigo-700 py-20 md:py-24 text-center bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:32px_32px]'>










<p className='text-4xl md:text-5xl font-extrabold tracking-tighter text-white mb-4'>Ready to Start Learning?</p>




<div className='font-medium md:text-xl text-[18px] text-primary-200 mb-8 md:px-0 px-3'>
<span className='text-[18px]'>Join over 50,000 students already learning on Learnify. Get unlimited access </span>
<span className='inline md:block text-[18px]'>to all courses with our Pro plan.</span>
</div>




<div className='flex flex-col md:flex-row gap-4 items-center justify-center mb-9 px-4 md:px-0'>


<Link to={"/signup"}
onClick={() => window.scrollTo(0,0)}
>
<div className='hover:shadow-2xl bg-white rounded-full py-4 px-7 inline-flex items-center justify-center text-primary-600 gap-2 cursor-pointer w-full md:w-fit'>
<button className='font-medium text-[19px]'>Start Learning Free</button>
<MoveRight size={18}/>
</div>

</Link>


<Link to={"/courses"}>
<div className='border-2 hover:border-white hover:bg-white/10 w-full md:w-fit border-white/30 rounded-full py-4 px-7 items-center justify-center inline-flex text-white cursor-pointer'>
<button className='font-medium text-xl'>Browse Courses</button>
</div>
</Link>


</div>






<div className='flex flex-wrap items-center gap-6 md:gap-7 justify-center px-5 md:px-0'>



<div className='flex items-center gap-2'>
<Check size={17}/>    
<p className='text-primary-200 text-[15px]'>No credit card required</p>
</div>



<div className='flex items-center gap-2'>
<Check size={17}/>     
<p className='text-primary-200 text-[15px]'>7-day free Pro trial</p>
</div>   



<div className='flex items-center gap-2'>
<Check size={17}/> 
<p className='text-primary-200 text-[15px]'>Cancel anytime</p>
</div>   




</div>


</div>








    </>
  )
}

export default Home
