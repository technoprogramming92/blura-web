import Image from "next/image";
import Header from "./component/Header";
import HeaderResp from "./component/HeaderResp";
import Hero from "./component/Hero";
import Hero2 from "./component/Hero2";
import Benefits from "./component/Benifits";
import ShapeResp from "./component/ShapeResp";
import Reason from "./component/Reason";
import Can from "./component/Can";
import CanBefore from "./component/CanBefore";
import Can3 from "./component/Can3";
import Can4 from "./component/Can4";
import Faq from "./component/Faq";
import Contact from "./component/Contact";
import Hero3 from "./component/Hero3";
import Hero3Resp from "./component/Hero3Resp";
import Hero4 from "./component/Hero4";
export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <HeaderResp />
      {/* <Hero /> */}
      {/* <Hero2 /> */}
      {/* <Hero3 /> */}
      <Hero4 />
      {/* <Hero3Resp /> */}
      <Benefits />
      <ShapeResp />
      <Reason />
      {/* can after final responsive  */}
      <Can />
      {/* <CanBefore /> */}
      {/* <Can3 /> */}

      {/* can before final responsive */}
      <Can4 />
      <Faq />
      <Contact />
    </>
  );
}
