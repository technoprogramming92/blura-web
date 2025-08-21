import Image from "next/image";
import Hero from "./component/Hero";
import Benefits from "./component/Benifits";
import ShapeResp from "./component/ShapeResp";
import Reason from "./component/Reason";
import Can from "./component/Can";
import Faq from "./component/Faq";
import Contact from "./component/Contact";
export default function Home() {
  return (
    <>
      <Hero />
      <Benefits />
      <ShapeResp />
      <Reason />
      <Can />
      <Faq />
      <Contact />
    </>
  );
}
