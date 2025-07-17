'use client';

import { useState, useEffect } from "react";
// import '@/styles/global.css';
// import '../styles/global.css';


import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import About from "@/Components/About";
import Resume from "@/Components/Resume";
import Contact from "@/Components/Contact";
import Navbar from "@/Components/Navbar";
import Portfolio from "@/Components/Portfolio";
import Testimonials from "@/Components/Testimonials";

export default function Home() {
  const [resumeData, setResumeData] = useState({});

  useEffect(() => {
    fetch("/resumeData.json")
      .then((response) => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.json();
      })
      .then((data) => setResumeData(data))
      .catch((error) => {
        console.error("Fetch error:", error);
        alert(error);
      });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Header data={resumeData.main} />
      <hr />
      <About data={resumeData.main} />
      <hr />
      <Resume data={resumeData.resume} />
      <hr />
      <Portfolio data={resumeData.portfolio} />
      <hr />
      <Testimonials data={resumeData.testimonials} />
      <Contact data={resumeData.main} />
      <hr />
      <Footer data={resumeData.main} />
    </div>
  );
}
