import Image from "next/image";
import Hero from "./hero/page";
import SideTable from '../components/side-table'
import TopPicks from '../components/TopPick'
import NewArrivals from "@/components/NewArrival";
import BlogSection from "@/components/BlogSection";
export default function Home() {
  return (
   <div>
    <Hero/>
    <SideTable/>
    <TopPicks/>
    <NewArrivals/>
    <BlogSection/>


   </div>
  );
}
