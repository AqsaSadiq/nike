import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SignIn from "@/components/SignIn";


export default function Login() {
  return(
    <>
    <Banner />
    <Navbar />
    <div className="flex flex-col items-center justify-center py-2">
        <SignIn />
    </div>
    <Footer />
    </>
  )
}