import Image from "next/image";
import Hero from "./component/Hero";
import Benefits from "./component/Benifits";
import ShapeResp from "./component/ShapeResp";
import Reason from "./component/Reason";
import Can from "./component/Can";
import CanBefore from "./component/CanBefore";
import Can3 from "./component/Can3";
import Can4 from "./component/Can4";
import Faq from "./component/Faq";
import Contact from "./component/Contact";
export default function Home() {
  return (
    <>
      <Hero />
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
