import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Calendar,
  ChevronRight,
  Menu,
  X,
  MessageCircle,
} from "lucide-react";
import whatsAppicon from "./assets/whatsapp-brands-solid-full.svg";
import TextType from "./components/TextType";
import nithin from "./assets/nithin.png";
import stethoscopeIcon from "./assets/stethoscopeIcon.svg";
import verifiedIcon from "./assets/verified-check-svgrepo-com.svg";
import peopleIcon from "./assets/users-solid-full.svg";
import successIcon from "./assets/care-treatment-heart-svgrepo-com.svg";
import CountUp from "./components/countup/Countup.jsx";
import CircularText from "./components/circulartext/CircularText.jsx";
import { FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6"; // Using the latest Font Awesome version (Fa6)
export default function DentalPortfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedClinic, setSelectedClinic] = useState("stmarys");

  const experts = [
    {
      name: "Dr. Nithin Neeps",
      specialization: "General & Cosmetic Dentistry",
      qualification: "BDS, MDS (Prosthodontics)",
      experience: "15+ years",
      description:
        "Dr. Nithin Neeps is a highly skilled dentist specializing in general and cosmetic dentistry. With over 15 years of experience, he has transformed thousands of smiles with his expertise in dental implants, veneers, and smile makeovers.",
      image:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop",
    },
    {
      name: "Dr. Sarah Thomas",
      specialization: "Orthodontics",
      qualification: "BDS, MDS (Orthodontics)",
      experience: "10+ years",
      description:
        "Dr. Sarah Thomas is an expert orthodontist passionate about creating beautiful, healthy smiles. She specializes in traditional braces, clear aligners, and advanced orthodontic treatments for both children and adults.",
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop",
    },
    {
      name: "Dr. Rajesh Menon",
      specialization: "Oral & Maxillofacial Surgery",
      qualification: "BDS, MDS (Oral Surgery)",
      experience: "12+ years",
      description:
        "Dr. Rajesh Menon is a skilled oral surgeon with extensive experience in wisdom teeth extraction, dental implants, and corrective jaw surgery. His gentle approach and precision make even complex procedures comfortable for patients.",
      image:
        "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop",
    },
  ];

  const clinics = {
    stmarys: {
      name: "St Mary's Dental Clinic",
      address: "123 Healthcare Avenue, Medical District, City 682001",
      phone: "+91 98765 43210",
      email: "contact@stmarysdental.com",
      mapEmbed:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.142027938673!2d76.55862687502795!3d9.757645390335735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07d1c25edcc07d%3A0xcd6d07d33d7a510!2sClove%20Dental%20Clinic!5e1!3m2!1sen!2sin!4v1763362461401!5m2!1sen!2sin",
      doctors: [
        {
          name: "Dr. Nithin Neeps",
          specialization: "General & Cosmetic Dentistry",
          days: "Mon - Sat",
          timing: "9:00 AM - 1:00 PM, 4:00 PM - 8:00 PM",
        },
        {
          name: "Dr. Sarah Thomas",
          specialization: "Orthodontics",
          days: "Mon, Wed, Fri",
          timing: "10:00 AM - 2:00 PM, 5:00 PM - 7:00 PM",
        },
        {
          name: "Dr. Rajesh Menon",
          specialization: "Oral Surgery",
          days: "Tue, Thu, Sat",
          timing: "9:00 AM - 1:00 PM",
        },
      ],
    },
    clove: {
      name: "Dr. Nithin's Clove Clinic",
      address: "456 Wellness Road, Health Plaza, City 682002",
      phone: "+91 98765 43211",
      email: "contact@cloveclinic.com",
      mapEmbed:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.142027938673!2d76.55862687502795!3d9.757645390335735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07d1c25edcc07d%3A0xcd6d07d33d7a510!2sClove%20Dental%20Clinic!5e1!3m2!1sen!2sin!4v1763362461401!5m2!1sen!2sin",
      doctors: [
        {
          name: "Dr. Nithin Neeps",
          specialization: "General & Cosmetic Dentistry",
          days: "Mon - Sat",
          timing: "10:00 AM - 2:00 PM, 5:00 PM - 9:00 PM",
        },
        {
          name: "Dr. Priya Nair",
          specialization: "Pediatric Dentistry",
          days: "Mon - Fri",
          timing: "9:00 AM - 1:00 PM, 3:00 PM - 6:00 PM",
        },
        {
          name: "Dr. Arun Krishnan",
          specialization: "Periodontics",
          days: "Wed - Sat",
          timing: "11:00 AM - 3:00 PM",
        },
      ],
    },
  };

  const services = [
    {
      title: "General Dentistry",
      description:
        "Cleanings, exams, fillings, and preventative care for all ages.",
    },
    {
      title: "Cosmetic Dentistry",
      description: "Teeth whitening, veneers, and complete smile makeovers.",
    },
    {
      title: "Dental Implants",
      description:
        "Restore your smile with permanent, natural-looking implants.",
    },
    {
      title: "Root Canal Treatment",
      description: "Pain-free root canal therapy to save your natural teeth.",
    },
    {
      title: "Orthodontics (Braces)",
      description:
        "Traditional braces and clear aligners for perfect teeth alignment.",
    },
    {
      title: "Teeth Whitening",
      description:
        "Professional whitening for a brighter, more confident smile.",
    },
    {
      title: "Pediatric Dentistry",
      description: "Gentle and compassionate dental care for children.",
    },
    {
      title: "Oral Surgery",
      description:
        "Wisdom teeth extraction and surgical procedures with expert care.",
    },
    {
      title: "Periodontal Care",
      description: "Treatment for gum disease and maintenance of healthy gums.",
    },
    {
      title: "Emergency Dental Care",
      description: "Quick relief for dental emergencies and urgent care needs.",
    },
    {
      title: "Dental Crowns & Bridges",
      description: "Restore damaged teeth with custom crowns and bridges.",
    },
    {
      title: "Family Dentistry",
      description: "Comprehensive dental care for your entire family.",
    },
  ];

  const icons = [
    { title: "Dedicated Doctors", number: "10+", icon: stethoscopeIcon },
    { title: "Satisfied Patients", number: "5000+", icon: peopleIcon },
    { title: "Successful Treatments", number: "3000+", icon: successIcon },
    { title: "Years of Experience", number: "15+", icon: verifiedIcon },
  ];

  return (
    <div id="home" className="min-h-screen bg-[#f4f4f4]  scroll-smooth ">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-full px-4 sm:px-6 lg:px-12">
          <div className="flex justify-between items-center py-4">
            <div>
              <h1 className="lg:text-4xl md:text-2xl text-xl  font-bold text-[#2B2B25]">
                Dr. Nithin's Dental Care
              </h1>
              <p className="text-sm text-[#2B2B25]">
                Excellence in Dental Healthcare
              </p>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex md:space-x-4 lg:space-x-8">
              <a
                href="#home"
                className="font-semibold text-[#2B2B25] hover:text-[#5F5F55] transition-colors md:text-[.90rem] lg:text-[1rem]"
              >
                Home
              </a>
              <a
                href="#experts"
                className="font-semibold text-[#2B2B25]0 hover:text-[#5F5F55] transition md:text-[.90rem] lg:text-[1rem]"
              >
                Our Experts
              </a>
              <a
                href="#clinics"
                className="font-semibold text-[#2B2B25] hover:text-[#5F5F55] transition md:text-[.90rem] lg:text-[1rem]"
              >
                Clinics
              </a>
              <a
                href="#services"
                className="font-semibold text-[#2B2B25] hover:text-[#5F5F55] transition md:text-[.90rem] lg:text-[1rem]"
              >
                Services
              </a>
              <a
                href="#contact"
                className="font-semibold text-[#2B2B25] hover:text-[#5F5F55] transition md:text-[.90rem] lg:text-[1rem]"
              >
                Contact
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-[#5F5F55] bg-white p-2 rounded-lg shadow-md hover:bg-teal-50 transition"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Nav */}
          {mobileMenuOpen && (
            <nav className="md:hidden pb-4 space-y-2">
              <a
                href="#home"
                className="block text-[#2B2B25] hover:text-[#5F5F55] transition py-2  "
              >
                Home
              </a>
              <a
                href="#experts"
                className="block text-[#2B2B25] hover:text-[#5F5F55] transition py-2"
              >
                Our Experts
              </a>
              <a
                href="#clinics"
                className="block text-[#2B2B25] hover:text-[#5F5F55] transition py-2"
              >
                Clinics
              </a>
              <a
                href="#services"
                className="block text-[#2B2B25] hover:text-[#5F5F55] transition py-2"
              >
                Services
              </a>
              <a
                href="#contact"
                className="block text-[#2B2B25] hover:text-[#5F5F55] transition py-2"
              >
                Contact
              </a>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#5F5F55] to-[#2B2B25] text-white py-20 scroll-smooth">
        <div className="max-w-full px-4 sm:px-6 lg:px-12 text-right py-5">
          <TextType
            text={["Your Smile", "Our Priority", "Book appoinment now!"]}
            typingSpeed={100}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
            className="md:text-6xl text-[1.5rem] font-bold mb-4"
          />
          {/* <h2 className="text-4xl sm:text-5xl font-bold mb-4">Your Smile, Our Priority</h2> */}
          <p className="font-semibold text-[.9rem] md:text-xl  text-teal-50">
            Comprehensive dental care across two premium locations
         <br />
            Comprehensive dental care
          </p>
          <a
            href="#clinics"
            className="mt-5 inline-flex items-center bg-white text-[#5F5F55] px-8 py-3 rounded-full font-semibold hover:bg-[#e3e3e0] transition"
          >
            Book Appointment <ChevronRight className="ml-2 " size={20} />
          </a>
        </div>
      </section>

      {/* About Dr. Nithin */}
      {/* About Dr. Nithin */}
      <section className="py-16 bg-[#f4f4f4]">
        <div className="max-w-full px-4 sm:px-6 lg:px-12 ">
          <div className="flex flex-col md:flex-row items-center gap-20 max-w-6xl mx-auto ">
            {/* Portrait Image */}
            <div className="flex-shrink-0 ">
              <div className="w-80 h-106 ">
                <img
                  src={nithin}
                  alt="Dr. Nithin Neeps"
                  className="w-full h-full object-cover  "
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="flex-1 text-center md:text-left bg-gray-100 px-12 py-8 rounded-2xl shadow-lg">
              <h2 className="md:text-2xl sm:text-4xl font-bold  text-[#2B2B25] mb-1 leading-10 ">
                Meet Our Doctor, <br></br>
                <span className="text-[#5F5F55] text-5xl"> Nithin Neeps</span>
              </h2>
              <h3 className="text-lg font-bold text-[#464545] mb-4">
                Chief Dental Surgeon
              </h3>
              <p className="text-md font-semibold text-[#666666] leading-relaxed mb-4 text-justify">
                With over 15 years of experience in general and cosmetic
                dentistry, Dr. Nithin Neeps is committed to providing
                world-class dental care. Leading two state-of-the-art clinics,
                he brings expertise, compassion, and the latest dental
                technology to every patient.
              </p>
              <p className="text-md font-semibold text-[#666666] leading-relaxed text-justify">
                Dr. Neeps specializes in advanced dental procedures including
                smile makeovers, dental implants, and cosmetic restorations. His
                patient-centered approach and dedication to excellence have made
                him a trusted name in dental care.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 flex flex-col items-center py-5 ">
        <div className=" py-5 flex flex-col md:flex-row justify-evenly  border w-full  gap-5 ">
          {icons.map((iconObj, index) => (
            <div key={index} className="flex flex-row gap-4  justify-center ">
              <img src={iconObj.icon} alt="" className="w-18 h-18" />
              <div className="flex flex-col justify-between">
                {/* <h1 className='text-4xl font-bold text-[#2B2B25]'>{iconObj.number}</h1> */}

                <CountUp
                  from={0}
                  to={iconObj.number}
                  separator=","
                  direction="up"
                  duration={1}
                  className="count-up-text text-4xl font-bold text-[#2B2B25]"
                />
                <h3 className="text-lg font-medium text-[#2B2B25]">
                  {iconObj.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Experts Section */}
      <section id="experts" className="pt-30 pb-16 bg-gray-50">
        <div className="max-w-full px-4 sm:px-6 lg:px-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#2B2B25] mb-4">
            Our Experts
          </h2>
          <div className="w-24 h-1 bg-[#5F5F55] mx-auto mb-12"></div>

          <div className="space-y-16">
            {experts.map((expert, idx) => (
              <div
                key={idx}
                className={`flex flex-col ${
                  idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-center gap-8 bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300`}
              >
                {/* Image */}
                <div className="flex-shrink-0">
                  <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-[#5F5F55] shadow-xl">
                    <img
                      src={expert.image}
                      alt={expert.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Details */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#5F5F55] mb-2">
                    {expert.name}
                  </h3>
                  <p className="text-xl text-[#2B2B25] font-semibold mb-2">
                    {expert.specialization}
                  </p>
                  <p className="text-sm text-[#2B2B25] mb-1">
                    {expert.qualification}
                  </p>
                  <p className="text-sm text-[#2B2B25] font-semibold mb-4">
                    {expert.experience} of Experience
                  </p>
                  <p className="text-[#666666] leading-relaxed">
                    {expert.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinics Section */}
      <section id="clinics" className="pt-30 pb-16bg-[#f4f4f4] my-5">
        <div className="max-w-full px-4 sm:px-6 lg:px-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#2B2B25] mb-4">
            Our Clinics
          </h2>
          <div className="w-24 h-1 bg-[#5F5F55] mx-auto mb-12"></div>
          {/* Clinic Tabs */}
          <div className="flex justify-center mb-8 space-x-4">
            <button
              onClick={() => setSelectedClinic("stmarys")}
              className={`px-6 text:2xl  md:text-xl py-3 rounded-lg  transition ${
                selectedClinic === "stmarys"
                  ? "bg-[#5F5F55] text-white font-bold"
                  : "bg-white text-gray-700 hover:bg-gray-100 font-semibold"
              }`}
            >
              St Mary's Dental Clinic
            </button>
            <button
              onClick={() => setSelectedClinic("clove")}
              className={`px-6 md:text-xl py-3 rounded-lg transition ${
                selectedClinic === "clove"
                  ? "bg-[#5F5F55] text-white font-bold"
                  : "bg-white text-gray-700 hover:bg-gray-100 font-semibold"
              }`}
            >
              Clove Clinic
            </button>
          </div>

          {/* Clinic Details */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-3xl font-bold text-[#5F5F55] mb-6">
              {clinics[selectedClinic].name}
            </h3>

            {/* Contact Info */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-start space-x-3">
                <MapPin
                  className="text-[#5F5F55] mt-1 flex-shrink-0"
                  size={20}
                />
                <div>
                  <p className="font-bold text-[#2B2B25] text-lg">Address</p>
                  <p className="text-[#2B2B25] text-sm font-semibold">
                    {clinics[selectedClinic].address}
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone
                  className="text-[#5F5F55] mt-1 flex-shrink-0"
                  size={20}
                />
                <div>
                  <p className="font-bold text-[#2B2B25] text-lg">Phone</p>
                  <p className="text-[#2B2B25] text-sm font-semibold">
                    {clinics[selectedClinic].phone}
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="text-[#5F5F55] mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="font-bold text-[#2B2B25] text-lg">Email</p>
                  <p className="text-[#2B2B25] text-sm font-semibold">
                    {clinics[selectedClinic].email}
                  </p>
                </div>
              </div>
            </div>

            {/* Doctor Schedule */}
            <div>
              <h4 className="text-xl font-bold text-[#2B2B25] mb-4 flex items-center">
                <Calendar className="mr-2 text-[#5F5F55]" size={24} />
                Doctor's Schedule
              </h4>
              <div className="space-y-4">
                {clinics[selectedClinic].doctors.map((doctor, idx) => (
                  <div
                    key={idx}
                    className="border border-gray-200 rounded-lg p-4 hover:border-[#5F5F55] transition"
                  >
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                      <div className="mb-2 sm:mb-0">
                        <h5 className="font-bold text-[#2B2B25] text-lg">
                          {doctor.name}
                        </h5>
                        <p className="text-sm text-[#5F5F55]">
                          {doctor.specialization}
                        </p>
                      </div>
                      <div className="text-sm">
                        <p className="flex items-center text-[#2B2B25]">
                          <Calendar className="mr-1 text-[#3f3f38]" size={16} />
                          {doctor.days}
                        </p>
                        <p className="flex items-center text-[#2B2B25] mt-1">
                          <Clock className="mr-1 text-[#5F5F55]" size={16} />
                          {doctor.timing}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map Location */}
            <div className="mt-8">
              <h4 className="text-xl font-bold text-[#2B2B25] mb-4 flex items-center">
                <MapPin className="mr-2 text-[#5F5F55]" size={24} />
                Location
              </h4>
              <div className="rounded-lg overflow-hidden shadow-lg border text-[#2B2B25]">
                <iframe
                  src={clinics[selectedClinic].mapEmbed}
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${clinics[selectedClinic].name} Location`}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="pt-30 pb-16 bg-white rounded-3xl  ">
        <div className="max-w-full px-4 sm:px-6 lg:px-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#2B2B25] mb-4">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-[#5F5F55] mx-auto mb-12"></div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6  ">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="bg-white p-6  rounded-xl border border-[#2B2B25] hover:border-[#5F5F55] hover:shadow-2xl transition-all duration-300 group"
              >
                <h3 className="font-bold text-lg text-[#2B2B25] mb-3 group-hover:scale-105 transition-transform duration-300">
                  {service.title}
                </h3>
                <p className="text-sm text-[#2B2B25] leading-relaxed group-hover:scale-105 transition-transform duration-300">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      {/* <section id="contact" className="py-16 bg-gradient-to-r from-[#5F5F55] to-blue-600 text-white"> */}
      <section id="contact" className="py-16 bg-[#2B2B25] text-white">
       
        <div className=" max-w-full px-4 sm:px-6 lg:px-12 text-left">
         
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
           
            Ready to Transform Your Smile?
          </h2>
          <p className="text-xl mb-8 text-teal-50">
           
            Book your appointment at either of your convenient locations
          </p>
          <div className="flex  flex-col lg:flex-row justify-between ">
           
            <div className="flex flex-col lg:flex-row gap-20 xl:gap-60 justify-between ">
             
              <CircularText
                text="Dr Nithins Dental Clinincs - "
                onHover="speedUp"
                spinDuration={20}
                className="custom-class"
              />
              <div className="  flex flex-col justify-center mb-5 ">
               
                <div className="flex gap-4 ">
                 
                  <a
                    href="#"
                    className="flex h-10 w-10 lg:h-12 lg:w-12 xl:h-15 xl:w-15 items-center justify-center rounded-full border border-white text-white transition-colors duration-300 hover:bg-white hover:text-black"
                  >
                   
                    <FaInstagram size={20} />

                  </a>
                  <a
                    href="#"
                    className="flex h-10 w-10 lg:h-12 lg:w-12 xl:h-15 xl:w-15  items-center justify-center rounded-full border border-white text-white transition-colors duration-300 hover:bg-white hover:text-black"
                  >
                   
                    <FaFacebookF size={20} />
                  </a>
                  <a
                    href="#"
                    className="flex h-10 w-10 lg:h-12 lg:w-12 xl:h-15 xl:w-15  items-center justify-center rounded-full border border-white text-white transition-colors duration-300 hover:bg-white hover:text-black"
                  >
                   
                    <FaXTwitter size={20 } />
                  </a>
                </div>
              </div>
            </div>
            <div className="  flex flex-col md:flex-row justify-between ">
             
              {/* adress1 */}
              <div className="min-w-3xs mb-10">
               
                <h6 className="mb-5 px-3">
                 
                  St.Mary's Clinic <br /> First floor, <br /> PALACKTHADATHIL
                  BUILDING, <br /> CENTRAL JUNCTION, KURAVILANGAD, <br /> PIN :
                  686633. <br /> 9447650452 | 6238044429
                </h6>
                <a
                  href="tel:+919876543210"
                  className="bg-white text-[80%] text-[#2B2B25] px-6 py-3 rounded-full font-semibold hover:bg-[#e3e3e0] transition"
                >
                 
                  Call St Mary's: +91 98765 43210
                </a>
              </div>
              {/* adress 2 */}
              <div className="">
               
                <h6 className="mb-5 px-3  ">
                 
                  Clove clinic <br /> FIRST FLOOR, <br /> PALACKTHADATHIL
                  BUILDING, <br /> CENTRAL JUNCTION, KURAVILANGAD, <br /> PIN :
                  686633. <br /> 9447650452 | 6238044429
                </h6>
                <a
                  href="tel:+919876543211"
                  className="bg-white text-[80%] text-[#2B2B25] px-6 py-3 rounded-full font-semibold hover:bg-[#e3e3e0] transition"
                >
                 
                  Call Clove: +91 98765 43211
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
           
            {/* <a href="tel:+919876543210" className="bg-white text-[#2B2B25] px-8 py-3 rounded-full font-semibold hover:bg-[#e3e3e0] transition" > Call St Mary's: +91 98765 43210 </a> */}
            {/* <a href="tel:+919876543211" className="bg-white text-[#2B2B25] px-8 py-3 rounded-full font-semibold hover:bg-[#e3e3e0] transition" > Call Clove: +91 98765 43211 </a> */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1a18] text-white py-8">
        <div className="max-w-full px-4 sm:px-6 lg:px-12 text-center">
          <p>&copy; 2024 Dr. Nithin's Dental Care. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Providing exceptional dental care across two premium locations
          </p>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/916238322874?text=Hi%2C%20I%20am%20interested%20in%20your%20service"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-3 rounded-full shadow-2xl hover:bg-green-600 hover:scale-110 transition-all duration-300 z-50 flex items-center justify-center group"
        aria-label="Contact us on WhatsApp"
      >
        <img
          src={whatsAppicon}
          alt="WhatsApp"
          className="w-10 h-10 animate-pulse"
        />
        <span className="absolute right-full mr-3 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Chat on WhatsApp
        </span>
      </a>
    </div>
  );
}
