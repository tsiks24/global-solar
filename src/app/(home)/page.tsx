
import Hero from "@/components/home/Hero";
import CounterCard from "@/components/shared/CounterCard";
import About from "@/components/home/About";
import ProjectPost from "@/components/home/ProjectPost";
import FaqSec from "@/components/home/FaqSec";
import Banner from "@/components/home/Banner";



export default async function Home() {
  return (
   <div className="">
   
       <Hero />
       <CounterCard/>
       <About/>
       <ProjectPost/>
       <FaqSec/>
       <Banner/>
      
      
   </div>
    
  );
}
