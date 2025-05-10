import HomePage from "./homePage/page";
import Working from "./components/How";
import WhyUs from "./components/Why";
import Reviews from "./components/Review";
import Contact from "./components/Contact";

export default function Home() {
  return (
   <div>
    <HomePage/>
    <Working/>
    <WhyUs/>
    <Reviews/>
    <Contact/>

   </div>
  );
}
