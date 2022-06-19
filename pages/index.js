import Comments from "../components/Comments";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/sections/Hero";
import PopulerJobs from "../components/sections/PopulerJobs";


export default function Home({data}) {
  return (
    <>
   <Navbar />
   <Hero />
   <PopulerJobs />
   <Comments data={data}/>
    </>
  );  
}

export const getServerSideProps = async () => {

  const res = await fetch("https://jobbss.vercel.app/api/comments" )
  const data = await res.json()
  return { props: { data } }
}