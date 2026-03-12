import React from 'react'
import { Check, MoveRight , Star , ShieldCheck , Clock4 } from 'lucide-react';





function Home() {


  return (


    <>
      

 

<div className='text-center py-24 h-screen bg-gradient-to-br from-indigo-950 to-indigo-900'>


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


    </>
  )
}

export default Home
