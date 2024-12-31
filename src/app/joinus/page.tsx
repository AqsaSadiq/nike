import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import JoinUsForm from "@/components/JoinUsForm";
import Join from "@/components/JoinUsForm";
import Navbar from "@/components/Navbar";


export default function JoinUs() {
  return(
    <>
    <Banner />
    <Navbar />
    <div className="flex flex-col items-center justify-center py-2">
        <JoinUsForm />
    </div>
    <Footer />
    </>
  )
}