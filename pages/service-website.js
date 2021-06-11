import Head from "next/head";

import Navigation from "../components/Navigation";
import TextBanner from "../components/TextBanner";
import Footer from "../components/footer";
import GitFooter from "../components/GitFooter";
import TopServiceCard from "../components/TopServiceCard";
import OurProcessServicesWebDev from "../components/OurProcessServicesWebDev";
import TechStack from "../components/TechStack";


const techIcons = [{ imgSrc: "react_logo.svg" },{ imgSrc: "css_logo.svg" }, { imgSrc: "html_logo.svg" },{ imgSrc: "mui_logo.svg" },{ imgSrc: "tailwind_logo.svg" }, { imgSrc: "java_logo.svg" },{ imgSrc: "python_logo.svg" }, { imgSrc: "nodejs_logo.svg" }, { imgSrc: "mysql_logo.svg" }, { imgSrc: "postgresql_logo.svg" }];

export default function About() {
  return (
    <div>
        <Head>
        <title>Cyber Lily Software - Zimbabwe Web Development Agency</title>
        <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navigation />
        <TextBanner headerText={'Reliable and engaging web solutions for your business'}/>
        <TopServiceCard
        serviceTitle={'Website'}
        serviceImage={'./csdd_service@3x.png'}
        shortDesc={"Get more information about your company out there! A web presence allows people to find out everything they need to know about you without back and forth emails. Our website service is all about creating your online presence with the intention of using the website to passively bring you business and capture the interest of potential clients. We design and develop beautiful, modern and secure information based websites. "}
        />
        <OurProcessServicesWebDev />
        {/* <TechStack techStackItems={techIcons} /> */}
        <GitFooter />
        <Footer />
    </div>
  );
}