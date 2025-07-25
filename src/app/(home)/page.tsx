
import Hero from "@/components/home/Hero";
import CounterCard from "@/components/shared/CounterCard";
import About from "@/components/home/About";
import ProjectPost from "@/components/home/ProjectPost";
import CallToAction from "@/components/about/CallToAction";
import Insights from "@/components/home/Insights";




export default async function Home() {
  return (
   <div className="">
   
       <Hero />
       <CounterCard/>
       <About/>
       <ProjectPost/>
       <CallToAction/>
       <Insights/>
      
      
   </div>
    
  );
}
