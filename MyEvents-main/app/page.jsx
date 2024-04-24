import Container from "../layout/Container";
import {SiEventstore} from 'react-icons/si'
import GetStartedButton from "../components/GetStartedButton";
import Nav from '@/layout/Nav'
import FeaturedEvents from "./FeaturedEvents";
//import WaterWaveComponent from "@/components/WaterWaveComponent";
import Wave from "react-wavify";
import styles from './page.module.css'
//import { VideoBackground } from 'react-background-video-player'


export default async function Home(){

  return (
    <>
    <Nav hideLogo={true} />
    <main className="p-7 mb-20" >
      {/* <video src={require("../public/videoBg.mp4")}
      autoPlay
      muted
      loop
      className="absolute z-1 top-0 object-cover opacity: 0.8"
       /> */}
      <Container>
        <h1 className="flex items-center justify-center gap-3 text-6xl pt-10 font-bold text-center">
          <span><SiEventstore /></span>
          <span className="text-5xl sm:text-6xl text-blue-900">EventPulse</span>
        </h1>
        <h2 className="text-3xl  text-center pt-10 pr-16 sm:text-4xl">Streamline Your Event Management.</h2>
        <h2 className="text-center  text-lg mt-3 sm:text-xl pt-1 max-w-[43rem] pr-28 mx-auto">MyEvents provides you the tools you need to create memorable experiences.</h2>
        <div className="flex justify-center pt-10">
          <GetStartedButton />
        </div>
      </Container>
      
      {/* <Wave 
      fill="#1277b0"
      paused={false}
      options={{
        height: 80,
        amplitude: 40,
        speed: 0.20,
        points: 8
      }} /> */}
      <div className="flex justify-center">
        <FeaturedEvents />
      </div>

      {/* <Wave 
      fill="#1277b0"
      paused={false}
      options={{
        height: 80,
        amplitude: 40,
        speed: 0.20,
        points: 8
      }} />
       */}
    </main>
  
    </>
  )
}