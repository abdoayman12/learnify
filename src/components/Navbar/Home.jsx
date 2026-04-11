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
 
const features = [
  {
    icon: Star,
    text: "4.8 average rating",
    color: "text-yellow-400",
  },
  {
    icon: ShieldCheck,
    text: "30-day money-back guarantee",
    color: "text-green-500",
  },
  {
    icon: Clock4,
    text: "Lifetime access",
    color: "text-green-500",
  },
];



const stats = [
  {
    value: "50K+",
    label: "Active Students",
  },
  {
    value: "500+",
    label: "Expert Instructors",
  },
  {
    value: "2,500+",
    label: "Quality Courses",
  },
  {
    value: "95%",
    label: "Success Rate",
  },
];


const colorClasses = {
  blue: {
    bg: "bg-blue-100 dark:bg-blue-800/20",
    text: "text-blue-600 dark:text-blue-400",
  },
  purple: {
    bg: "bg-purple-100 dark:bg-purple-800/20",
    text: "text-purple-600 dark:text-purple-400",
  },
  pink: {
    bg: "bg-pink-100 dark:bg-pink-800/20",
    text: "text-pink-600 dark:text-pink-400",
  },
  amber: {
    bg: "bg-amber-100 dark:bg-amber-800/20",
    text: "text-amber-600 dark:text-amber-400",
  },
  green: {
    bg: "bg-green-100 dark:bg-green-800/20",
    text: "text-green-600 dark:text-green-400",
  },
  cyan: {
    bg: "bg-cyan-100 dark:bg-cyan-800/20",
    text: "text-cyan-600 dark:text-cyan-400",
  },
  indigo: {
    bg: "bg-indigo-100 dark:bg-indigo-800/20",
    text: "text-indigo-600 dark:text-indigo-400",
  },
  rose: {
    bg: "bg-rose-100 dark:bg-rose-800/20",
    text: "text-rose-600 dark:text-rose-400",
  },
};



const categories = [
  {
    title: "Web Development",
    desc: ["Build modern websites and web", "applications"],
    icon: CodeXml,
    color: "blue",
    courses: 156,
  },
  {
    title: "Data Science",
    desc: ["Analyze data and build ML models"],
    icon: BarChart3,
    color: "purple",
    courses: 98,
  },
  {
    title: "UI/UX Design",
    desc: ["Create beautiful user experiences"],
    icon: PenTool,
    color: "pink",
    courses: 124,
  },
  {
    title: "Business",
    desc: ["Grow your career and business"],
    icon: Briefcase,
    color: "amber",
    courses: 87,
  },
  {
    title: "Digital Marketing",
    desc: ["Master SEO, social media, and ads"],
    icon: Megaphone,
    color: "green",
    courses: 72,
  },
  {
    title: "Mobile Development",
    desc: ["Build iOS and Android apps"],
    icon: Smartphone,
    color: "cyan",
    courses: 64,
  },
  {
    title: "Cloud & DevOps",
    desc: ["AWS, Azure, Docker, Kubernetes"],
    icon: Cloud,
    color: "indigo",
    courses: 58,
  },
  {
    title: "Photography",
    desc: ["Capture stunning images"],
    icon: Camera,
    color: "rose",
    courses: 45,
  },
];








const courses = [
  {
    id: 1,
    title: "The Complete Web Development Bootcamp...",
    category: "Web Development",
    image: laptopImg,
    author: "Sarah Johnson",
    authorImg: girl1,
    rating: 4.8,
    reviews: "46K",
    students: "235K",
    level: "All Levels",
    lessons: 478,
    price: 89.99,
    oldPrice: 199.99,
    hours: 65,
    badge1: "BestSeller",
    badge2: "55% OFF",
  },
  {
    id: 2,
    title: "Machine Learning A-Z: AI, Python & R",
    category: "Data Science",
    image: codeImg,
    author: "Michael Chen",
    authorImg: boy1,
    rating: 4.7,
    reviews: "32K",
    students: "178K",
    level: "Intermediate",
    lessons: 312,
    price: 94.99,
    oldPrice: 189.99,
    hours: 44,
    badge1: "BestSeller",
    badge2: "50% OFF",
  },
  {
    id: 3,
    title: "UI/UX Design: The Complete Guide",
    category: "UI/UX Design",
    image: uxDesignImg,
    author: "Emily Rodriguez",
    authorImg: girl2,
    rating: 4.9,
    reviews: "19K",
    students: "89K",
    level: "Beginner",
    lessons: 245,
    price: 79.99,
    oldPrice: 159.99,
    hours: 38,
    badge1: "NEW",
    badge2: "50% OFF",
  },
  {
    id: 4,
    title: "AWS Certified Solutions Architect",
    category: "Cloud & DevOps",
    image: planetImg,
    author: "David Kim",
    authorImg: boy2,
    rating: 4.8,
    reviews: "25K",
    students: "157K",
    level: "Intermediate",
    lessons: 380,
    price: 84.99,
    oldPrice: 169.99,
    hours: 52,
    badge1: "BestSeller",
    badge2: "50% OFF",
  },
];




const instructors = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Senior Software Engineer at Google",
    image: girl1,
    rating: 4.9,
    reviews: "12K",
    students: "89K",
    courses: 8,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Data Science Lead at Netflix",
    image: boy1,
    rating: 4.8,
    reviews: "9K",
    students: "62K",
    courses: 6,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Principal Designer at Airbnb",
    image: girl2,
    rating: 4.9,
    reviews: "7K",
    students: "45K",
    courses: 5,
  },
  {
    id: 4,
    name: "David Kim",
    role: "AWS Solutions Architect",
    image: boy2,
    rating: 4.7,
    reviews: "5K",
    students: "38K",
    courses: 7,
  },
];




const testimonials = [
  {
    name: "Alex Thompson",
    role: "Software Engineer at Stripe",
    text: "Learnify helped me transition from marketing to software engineering in just 6 months. The web development bootcamp was incredibly comprehensive and practical.",
    course: "Web Development Bootcamp",
    img: boy1,
  },
  {
    name: "Maria Garcia",
    role: "Data Scientist at Meta",
    text: "The machine learning courses are top-notch. I went from knowing basic Python to building production ML models. Now I work as a data scientist at a top tech company.",
    course: "Machine Learning A-Z",
    img: girl1,
  },
  {
    name: "James Wilson",
    role: "Product Designer at Figma",
    text: "As a self-taught designer, Learnify filled all the gaps in my knowledge. The UI/UX courses taught me professional workflows and helped me land my dream job.",
    course: "UI/UX Design Complete Guide",
    img: boy2,
  },
];



const pricingPlans = [
  {
    type: "Free",
    desc: "Get started with free courses",
    price: "Free",
    features: [
      "Access to 50+ free courses",
      "Basic course completion certificates",
      "Community forum access",
      "Mobile app access",
    ],
    button: "Start Free",
    highlight: false,
  },
  {
    type: "Pro",
    desc: "Perfect for serious learners",
    price: { month: 29, year: 290, save: "Save $58/year" },
    features: [
      "Unlimited access to all courses",
      "Verified certificates",
      "Offline viewing",
      "Priority support",
      "Course downloads",
      "Ad-free experience",
    ],
    button: "Start Pro Trial",
    highlight: true,
  },
  {
    type: "Team",
    desc: "For teams and organizations",
    price: { month: 49, year: 470, save: "Save $118/year" },
    features: [
      "Everything in Pro",
      "Team management dashboard",
      "Progress tracking & analytics",
      "Custom learning paths",
      "SSO integration",
      "Dedicated account manager",
    ],
    button: "Contact Sales",
    highlight: false,
  },
];




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

 {features.map((item, i) => {
    const Icon = item.icon;

    return (
      <div key={i} className="flex items-center gap-2">
        <Icon className={item.color} />
        <p className="text-primary-200">{item.text}</p>
      </div>
    );
  })}


</div>





<div className='container max-w-5xl mx-auto w-full grid grid-cols-2 gap-7 md:gap-0 md:flex items-center justify-between'>



{stats.map((item, i) => (
    <div key={i}>
      <p className="text-white font-extrabold text-4xl md:text-5xl">
        {item.value}
      </p>
      <p className="text-primary-300 text-[18px] mt-1">
        {item.label}
      </p>
    </div>
  ))}



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



{categories.map((cat, i) => {
  const Icon = cat.icon;
  const styles = colorClasses[cat.color];

  return (
    <Link to="/courses" key={i}>
      <div className="dark:bg-gray-900 w-full ps-7 py-7 h-full rounded-2xl group border hover:shadow-lg border-gray-200 dark:border-gray-800 hover:border-primary-300 dark:hover:border-primary-800 cursor-pointer">

        <div className={`${styles.bg} inline-flex items-center justify-center p-3 rounded-xl`}>
          <Icon className={`${styles.text}`} size={27} />
        </div>

        <p className="dark:text-white font-bold text-xl pt-4 pb-2 group-hover:text-indigo-600">
          {cat.title}
        </p>

        {cat.desc.map((line, idx) => (
          <span
            key={idx}
            className="dark:text-gray-400 text-gray-600 text-[15px] block leading-none"
          >
            {line}
          </span>
        ))}

        <div className="flex items-center gap-1.5 text-indigo-600 mt-3">
          <p>{cat.courses} courses</p>
          <MoveRight size={10} />
        </div>

      </div>
    </Link>
  );
})}



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




{courses.map((course) => (
    <div
      key={course.id}
      className="rounded-2xl overflow-hidden border border-gray-200 shadow hover:shadow-lg dark:border-gray-800 dark:bg-slate-900 cursor-pointer group hover:-translate-y-2 transition-all duration-300"
    >
      <div className="relative">
        <img
          src={course.image}
          alt="course"
          className="w-full group-hover:scale-[1.03] transition-all duration-300"
        />

        <div className="absolute inset-0">
          <div className="inline-flex flex-col gap-2 p-3">
            <div className="uppercase bg-amber-500 text-white text-xs rounded-full font-extrabold px-2.5 py-1">
              {course.badge1}
            </div>
            <div className="uppercase bg-red-500 text-white text-xs rounded-full font-extrabold px-2.5 py-1">
              {course.badge2}
            </div>
          </div>
        </div>

        <div className="absolute bottom-3 right-3 text-white text-xs rounded-full font-extrabold bg-slate-800 px-2.5 py-1">
          {course.hours} hours
        </div>
      </div>

      <div className="px-5 pt-5">
        <p className="uppercase text-indigo-600 dark:text-indigo-400 text-sm font-semibold">
          {course.category}
        </p>

        <div className="dark:text-white font-semibold text-xl pt-3 pb-4 group-hover:text-indigo-600">
          {course.title}
        </div>

        <div className="flex items-center gap-2 pb-2">
          <img
            src={course.authorImg}
            className="rounded-full w-6 h-6"
            alt="author"
          />
          <span className="text-gray-600 dark:text-gray-400 text-sm">
            {course.author}
          </span>
        </div>

        <div className="flex items-center gap-4 pb-2">
          <span className="dark:text-white font-bold">{course.rating}</span>
          <span className="text-gray-500">({course.reviews})</span>
          <span className="text-gray-500">{course.students} students</span>
        </div>

        <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400">
          <span className="text-sm">{course.level}</span>
          <span className="text-sm">{course.lessons} lessons</span>
        </div>

        <div className="border-t dark:border-gray-800 py-3 flex items-center gap-2 mt-4">
          <span className="dark:text-white font-bold text-[22px]">
            ${course.price}
          </span>
          <span className="text-gray-600">
            <del>${course.oldPrice}</del>
          </span>
        </div>
      </div>
    </div>
  ))}





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





  {instructors.map((inst) => (
    <div
      key={inst.id}
      className="bg-white shadow border dark:border-gray-800 border-gray-100 dark:bg-gray-800 rounded-2xl cursor-pointer text-center py-6 px-6 group min-w-[280px]"
    >
      <img
        src={inst.image}
        alt={inst.name}
        className="w-24 h-24 rounded-full ring-4 ring-gray-100 dark:ring-gray-700 mx-auto"
      />

      <p className="dark:text-white text-lg font-semibold mt-4 group-hover:text-indigo-600">
        {inst.name}
      </p>

      <span className="text-gray-600 dark:text-gray-400 text-sm block">
        {inst.role}
      </span>

      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center gap-1.5 mt-2">
          <Star stroke="#eab308" fill="#eab308" size={14} />

          <div className="flex items-center gap-1.5">
            <span className="dark:text-white font-bold">{inst.rating}</span>
            <span className="text-gray-500">({inst.reviews})</span>
          </div>
        </div>

        <div className="flex items-center gap-5 border-t w-full justify-center dark:border-gray-700 mt-3 pt-3">
          <div>
            <p className="dark:text-white font-bold text-lg">
              {inst.students}
            </p>
            <p className="text-sm text-gray-500">Students</p>
          </div>

          <div>
            <p className="dark:text-white font-bold text-lg">
              {inst.courses}
            </p>
            <p className="text-sm text-gray-500">Courses</p>
          </div>
        </div>
      </div>
    </div>
  ))}




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



   {testimonials.map((item, i) => (
        <div key={i} className="bg-gray-900 rounded-2xl p-8">

          <div className="flex items-center gap-1.5">
            {Array(5).fill(0).map((idx) => (
              <Star key={idx} stroke="#eab308" fill="#eab308" size={16} />
            ))}
          </div>

          <p className="text-gray-300 pt-4 text-[17px] leading-relaxed">
            "{item.text}"
          </p>

          <p className="text-indigo-400 text-sm pt-3 pb-5">
            Course: {item.course}
          </p>

          <div className="flex items-center gap-4">
            <img src={item.img} alt={item.name} className="rounded-full w-12 h-12" />

            <div className="flex flex-col">
              <p className="text-white font-bold">{item.name}</p>
              <p className="text-gray-400 text-sm">{item.role}</p>
            </div>
          </div>

        </div>
      ))}








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
<button
  onClick={() => setIsOn(!isOn)}
  className={`relative inline-flex h-7 w-14 shrink-0 cursor-pointer items-center rounded-full transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
    ${isOn ? "bg-blue-600" : "bg-gray-200 dark:bg-gray-700"}`}
>
  <span
    className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out
      ${isOn ? "translate-x-8" : "translate-x-1"}`}
  ></span>
</button>
</div>


<div className='flex items-center gap-4'>
<span className='font-semibold text-gray-500 dark:text-gray-400 text-sm'>Yearly</span>
<div className='rounded-full px-2 py-0.5 font-semibold text-green-700 dark:text-green-400 text-sm bg-teal-400 dark:bg-emerald-900 bg-opacity-20'>Save 17%</div>
</div>

</div>




</div>





<div className='max-w-[1290px] mx-auto container w-full'>

<div className='grid grid-cols-1 md:mx-0 mx-4 md:grid-cols-3 mt-12 gap-12'>








  {pricingPlans.map((plan, i) => (
    <div
      key={i}
      className={`
        p-8 rounded-3xl text-center transition-all duration-300 hover:-translate-y-2 border
        ${plan.highlight
          ? "bg-indigo-50 shadow-xl dark:bg-indigo-950 border-indigo-400"
          : "dark:bg-gray-900 dark:border-gray-800"
        }
      `}
    >

      {plan.highlight && (
        <div className="bg-indigo-600 text-white rounded-full py-1 px-3 absolute left-1/2 -translate-x-1/2 -translate-y-[calc(50%+32px)]">
          <p className="font-semibold text-[15px]">Most Popular</p>
        </div>
      )}

      <p className="dark:text-white text-2xl font-semibold">
        {plan.type}
      </p>

      <p className="text-gray-600 dark:text-gray-400 mt-2 mb-5">
        {plan.desc}
      </p>

      <div className="mb-5">
        {typeof plan.price === "string" ? (
          <p className="dark:text-white text-5xl font-semibold">
            {plan.price}
          </p>
        ) : (
          <>
            <p className="dark:text-white text-5xl font-semibold">
              ${isOn ? plan.price.year : plan.price.month}
              <sub className="text-gray-600 dark:text-gray-400 text-lg font-medium">
                /{isOn ? "year" : "month"}
              </sub>
            </p>

            {isOn && (
              <p className="text-emerald-600 dark:text-emerald-400 text-sm mt-2">
                {plan.price.save}
              </p>
            )}
          </>
        )}
      </div>

      <div className="flex flex-col gap-3 mb-8">
        {plan.features.map((feat, idx) => (
          <div key={idx} className="flex items-center gap-2.5">
            <Check size={16} className="text-green-500 dark:text-green-400" />
            <p className="text-gray-600 dark:text-gray-300">{feat}</p>
          </div>
        ))}
      </div>

      <div
        className={`
          w-full rounded-full py-4 inline-flex justify-center cursor-pointer
          ${plan.highlight
            ? "bg-primary-600 text-white"
            : "border-2 dark:border-white/30"
          }
        `}
      >
        <button className="font-semibold">{plan.button}</button>
      </div>

    </div>
  ))}











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
