import React, { useState, useRef, useEffect } from "react";
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
import SEO from "./components/Seoo.jsx";
import whatsAppicon from "./assets/whatsapp-brands-solid-full.svg";
import TextType from "./components/TextType";
import nithin from "./assets/nithin.png";
import CountUp from "./components/countup/Countup.jsx";
import CircularText from "./components/circulartext/CircularText.jsx";
import { FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6"; // Using the latest Font Awesome version (Fa6)
import clovelogo from "./assets/clovelogo.svg";
import data from "./assets/data/data.js";
export default function DentalPortfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedClinic, setSelectedClinic] = useState("clove");
  const [visibleServices, setVisibleServices] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  // Ref array for service cards
  const serviceRefs = useRef([]);

  useEffect(() => {
    // Only run on mobile screens
    const isMobile = window.innerWidth < 640;
    if (!isMobile) return;

    const handleScroll = () => {
      serviceRefs.current.forEach((ref, idx) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          if (
            rect.top < window.innerHeight - 40 && // 40px threshold
            rect.bottom > 40
          ) {
            setVisibleServices((prev) =>
              prev.includes(idx) ? prev : [...prev, idx]
            );
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const experts = data.experts;

  const CheifSurgeon = data.CheifSurgeon;

  const clinics = data.clinics;

  const services = data.services;

  const icons = data.icons;

  return (
    <div id="home" className="min-h-screen bg-[#f4f4f4]  scroll-smooth ">
      <SEO></SEO>
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-full px-4 sm:px-6 lg:px-12">
          <div className="flex justify-between items-center py-4">
            <div className=" flex">
              <img
                src={clovelogo}
                alt=""
                className=" w-[15%] lg:w-[12%] xl:w-[8%] "
                loading="lazy"
              />

              <div className="ms-2">
                <h1 className="lg:text-4xl md:text-2xl text-xl   font-bold text-[#2B2B25]">
                  Dr. Nithin's Dental Care
                </h1>
                <p className="text-sm text-[#2B2B25]">
                  Excellence in Dental Healthcare
                </p>
              </div>
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
                className="font-semibold text-[#2B2B25] hover:text-[#5F5F55] transition md:text-[.90rem] lg:text-[1rem]"
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
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#experts"
                className="block text-[#2B2B25] hover:text-[#5F5F55] transition py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Our Experts
              </a>
              <a
                href="#clinics"
                className="block text-[#2B2B25] hover:text-[#5F5F55] transition py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Clinics
              </a>
              <a
                href="#services"
                className="block text-[#2B2B25] hover:text-[#5F5F55] transition py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="#contact"
                className="block text-[#2B2B25] hover:text-[#5F5F55] transition py-2"
                onClick={() => setMobileMenuOpen(false)}
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
            className="md:text-6xl text-[1.7rem] font-bold md:mb-4 md:2"
          />
          {/* <h2 className="text-4xl sm:text-5xl font-bold mb-4">Your Smile, Our Priority</h2> */}
          <p className="font-semibold text-[.8rem] md:text-xl  text-teal-50">
            Comprehensive dental care across two premium locations
            <br />
            Comprehensive dental care
          </p>
          <a
            href="#clinics"
            className="md:mt-5 mt-8 inline-flex items-center bg-white text-[#5F5F55] md:px-8 md:py-3 px-4 py-2 rounded-full font-semibold md:text-lg text-sm hover:bg-[#e3e3e0] transition"
          >
            Book Appointment <ChevronRight className="ml-2 " size={20} />
          </a>
        </div>
      </section>

      {/* About Dr. Nithin */}
      {/* About Dr. Nithin */}
      <section className="py-16 bg-[#f4f4f4]">
        <div className="max-w-full px-4 sm:px-6 lg:px-12 ">
          <div className="flex flex-col md:flex-row items-center md:gap-20 gap-5 max-w-6xl mx-auto ">
            {/* Portrait Image */}
            <div className="flex-shrink-0 ">
              <div className="w-80 h-106 ">
                <img
                  src={nithin}
                  alt="Dr. Nithin Neeps"
                  className="w-full h-full object-cover  "
                  loading="lazy"
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="flex-1 text-center md:text-left bg-gray-100 px-12 py-8 rounded-2xl shadow-lg">
              <h2 className="md:text-2xl sm:text-4xl font-bold  text-[#2B2B25] mb-1 leading-10 ">
                Meet Our Doctor, <br></br>
                <span className="text-[#5F5F55] text-5xl">
                  {" "}
                  {CheifSurgeon.name}
                </span>
              </h2>
              <h3 className="text-lg font-bold text-[#464545] mb-4">
                {CheifSurgeon.specialization}
              </h3>
              <p className="text-md font-semibold text-[#666666] leading-relaxed mb-4 text-justify">
                {CheifSurgeon.description1}
              </p>
              <p className="text-md font-semibold text-[#666666] leading-relaxed text-justify">
                {CheifSurgeon.description2}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 flex flex-col items-center py-5 ">
        <div className=" py-5 flex flex-col md:flex-row justify-evenly   w-full  gap-5 ">
          {icons.map((iconObj, index) => (
            <div
              key={index}
              className="flex flex-row gap-4  md:justify-center justify-center mx-4  items-center bg-white p-5 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 "
            >
              <img
                src={iconObj.icon}
                alt=""
                className="lg:w-18 lg:h-18 w-12 h-12"
                loading="lazy"
              />
              <div className="flex flex-col justify-between">
                {/* <h1 className='text-4xl font-bold text-[#2B2B25]'>{iconObj.number}</h1> */}

                <CountUp
                  from={0}
                  to={iconObj.number}
                  separator=","
                  direction="up"
                  duration={1}
                  className="count-up-text lg:text-4xl text-2xl font-bold text-[#2B2B25]"
                />
                <h3 className="lg:text-lg text-md font-medium text-[#2B2B25]">
                  {iconObj.title}
                </h3>
              </div>
            </div>
          ))}
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
            <div className="flex flex-wrap mb-5 md:mb-0 justify-between">
              <h3 className="text-3xl font-bold text-[#5F5F55] mb-6 ">
                {clinics[selectedClinic].name}
              </h3>
              <div className="text-sm">
                <p className="flex items-center font-semibold text-[#2B2B25]">
                  <Calendar className="mr-1 text-[#3f3f38] " size={16} />
                  {clinics[selectedClinic].workingDays}
                </p>
                <p className="flex items-center font-semibold text-[#2B2B25] mt-1">
                  <Clock className="mr-1 text-[#5F5F55]" size={16} />
                  {clinics[selectedClinic].workingHours}
                </p>
              </div>
            </div>
            <div className="w-full h-1 bg-[#5F5F55] mx-auto mb-12"></div>

            {/* Contact Info */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-start space-x-3">
                <MapPin className="text-[#5F5F55] mt-1 shrink-0" size={20} />
                <div>
                  <p className="font-bold text-[#2B2B25] text-lg">Address</p>
                  <p className="text-[#2B2B25] text-sm font-semibold">
                    {clinics[selectedClinic].address}
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="text-[#5F5F55] mt-1 shrink-0" size={20} />
                <div>
                  <p className="font-bold text-[#2B2B25] text-lg">Phone</p>
                  <p className="text-[#2B2B25] text-sm font-semibold">
                    {clinics[selectedClinic].phone}
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="text-[#5F5F55] mt-1 shrink-0" size={20} />
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
              <div className="space-y-4 vertical-scroll max-h-72 overflow-y-scroll ">
                {/* {clinics[selectedClinic].doctors.map((doctor, idx) => ( */}
                {experts.map((expert, idx) => (
                  <div
                    key={idx}
                    className="border border-gray-200  rounded-lg p-4 hover:border-[#5F5F55] transition"
                  >
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                      <div className="mb-2 sm:mb-0">
                        <h5 className="font-bold text-[#2B2B25] text-lg">
                          {expert.name}
                        </h5>
                        <p className="text-sm text-[#5F5F55]">
                          {expert.specialization}
                        </p>
                      </div>
                      {/* <div className="text-sm">
                        <p className="flex items-center text-[#2B2B25]">
                          <Calendar className="mr-1 text-[#3f3f38]" size={16} />
                          {doctor.days}
                        </p>
                        <p className="flex items-center text-[#2B2B25] mt-1">
                          <Clock className="mr-1 text-[#5F5F55]" size={16} />
                          {doctor.timing}
                        </p>
                      </div> */}
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

      {/* Our Experts Section */}
      <section id="experts" className="pt-30 pb-16 bg-gray-50">
        <div className="max-w-full px-4 sm:px-6 lg:px-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#2B2B25] mb-4">
            Our Experts
          </h2>
          <div className="w-24 h-1 bg-[#5F5F55] mx-auto mb-12"></div>

          {/* <div className="space-y-16">
            {experts.map((expert, idx) => (
              <div
                key={idx}
                className={`flex flex-col ${
                  idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-center gap-8 bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300`}
              >
                <div className="flex-shrink-0">
                  <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-[#5F5F55] shadow-xl">
                    <img
                      src={expert.image}
                      alt={expert.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#5F5F55] mb-2">
                    {expert.name}
                  </h3>
                  <h4 className="text-xl text-[#2B2B25] font-semibold mb-2">
                    {expert.specialization}
                  </h4>
                  <h5 className="text-sm text-[#2B2B25] mb-1">
                    {expert.qualification}
                  </h5>
                  <p className="text-sm text-[#2B2B25] font-semibold mb-4">
                    {expert.experience} of Experience
                  </p>
                  <h3 className="text-[#666666] leading-relaxed">
                    {expert.description}
                  </h3>
                </div>
              </div>
            ))}
          </div> */}

          {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"> */}
          <div className="flex flex-wrap justify-around gap-10">
            {experts.map((expert, idx) => (
              <div
                key={idx}
                className="bg-white p-6 w-65 grow  rounded-2xl shadow-lg hover:shadow-2xl transition-all cursor-pointer flex flex-col items-center text-center"
                onClick={() => setSelectedDoctor(expert)}
              >
                <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-[#5F5F55] shadow-md mb-4">
                  <img
                    src={expert.image}
                    alt={expert.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                <h3 className="text-xl font-bold text-[#5F5F55]">
                  {expert.name}
                </h3>
                <p className="text-sm text-[#2B2B25] font-semibold">
                  {expert.specialization}
                </p>
              </div>
            ))}
          </div>
          {selectedDoctor && (
            <div className="fixed inset-0  bg-opacity-20 backdrop-blur-sm flex items-center justify-center z-50">
              <div className="bg-white animate-modalPop rounded-2xl p-8 w-[90%] md:w-[600px] shadow-xl relative">
                <button
                  className="absolute top-4 right-4 text-gray-600 text-2xl"
                  onClick={() => setSelectedDoctor(null)}
                >
                  &times;
                </button>

                <div className="flex flex-col items-center gap-4">
                  <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-[#5F5F55]">
                    <img
                      src={selectedDoctor.image}
                      alt={`${selectedDoctor.name} – ${selectedDoctor.specialization} at St Mary's Dental Clinic & Dr. Nithin's Clove Clinic, Kottayam`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  <h3 className="text-2xl font-bold text-[#5F5F55]">
                    {selectedDoctor.name}
                  </h3>
                  <h4 className="font-semibold text-[#2B2B25]">
                    {selectedDoctor.specialization}
                  </h4>
                  <p className="text-sm text-[#2B2B25]">
                    {selectedDoctor.qualification}
                  </p>
                  <p className="text-sm font-semibold text-[#2B2B25]">
                    {selectedDoctor.experience} of Experience
                  </p>

                  <p className="text-gray-700 text-center leading-relaxed">
                    {selectedDoctor.description}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="pt-30 pb-16 bg-white rounded-3xl">
        <div className="max-w-full px-4 sm:px-6 lg:px-12">
          <h2 className="text-3xl sm:text-4xl font-bold  text-[#2B2B25] mb-4 leading-10.5 mb-12">
            Get Best Dental Services <br /> From The Best Dentist at{" "}
            <span className=" text-[#ed003b]">Kuravilangad and Kottayam </span>{" "}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
            {services.map((service, idx) => {
              // Determine if hovered (desktop) or visible (mobile)
              const [hovered, setHovered] = useState(false);
              const isMobile =
                typeof window !== "undefined" && window.innerWidth < 640;
              const showEffect = isMobile
                ? visibleServices.includes(idx)
                : hovered;

              // Use a longer duration for mobile (viewport) animation
              const transitionDuration =
                showEffect && isMobile ? "700ms" : "300ms";

              return (
                <div
                  key={idx}
                  ref={(el) => (serviceRefs.current[idx] = el)}
                  className="relative bg-white  rounded-xl border border-[#2B2B25] hover:border-[#5F5F55] hover:shadow-2xl transition-all group flex flex-col items-center justify-center min-h-[180px] overflow-hidden"
                  style={{
                    minHeight: "200px",
                    transitionDuration: transitionDuration,
                  }}
                  onMouseEnter={() => !isMobile && setHovered(true)}
                  onMouseLeave={() => !isMobile && setHovered(false)}
                >
                  {/* Icon (visible by default, fades out on hover/visible) */}
                  <img
                    src={service.icon}
                    alt=""
                    width={60}
                    height={60}
                    className={`z-10 transition-all ${
                      showEffect
                        ? "opacity-0 scale-75"
                        : "opacity-100 scale-100"
                    }`}
                    style={{ transitionDuration }}
                    loading="lazy"
                  />

                  {/* Background image (hidden by default, appears on hover/visible) */}
                  <div
                    className={`absolute inset-0  flex items-center justify-center transition-all pointer-events-none ${
                      showEffect ? "opacity-60" : "opacity-0"
                    }`}
                    style={{
                      backgroundImage: `url(${service.icon})`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      backgroundSize: "80px",
                      backgroundColor: "#000",
                      transitionDuration,
                    }}
                  />

                  {/* Heading (slides in from top on hover/visible) */}
                  <h3
                    className={`absolute top-8 left-0 right-0 text-center font-bold text-lg text-white mb-3 transition-all z-20  ${
                      showEffect
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 -translate-y-8"
                    }`}
                    style={{ transitionDuration }}
                  >
                    {service.title}
                  </h3>

                  {/* Description (slides in from bottom on hover/visible) */}
                  <p
                    className={`absolute bottom-8 left-0 right-0 text-center text-sm text-white leading-relaxed transition-all z-20 px-5 ${
                      showEffect
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-8"
                    }`}
                    style={{ transitionDuration }}
                  >
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      {/* <section id="contact" className="py-16 bg-gradient-to-r from-[#5F5F55] to-blue-600 text-white"> */}
      <section id="contact" className="py-16 bg-[#2B2B25] text-white">
        <div className=" max-w-full px-4 sm:px-6 lg:px-12 text-left">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to <span className="text-[#feba0c]">Transform</span> Your
            Smile?
          </h2>
          <p className="md:text-xl text-lg mb-8 text-teal-50">
            Book your appointment at either of your convenient locations
          </p>
          <div className="flex  flex-col lg:flex-row justify-between ">
            <div className="flex flex-col lg:flex-row gap-10 xl:gap-60 justify-between ">
              <div className="relative flex  justify-center  items-center">
                <img
                  src={clovelogo}
                  alt=""
                  className="absolute w-[30%] md:w-[15%] lg:w-[60%]"
                  loading="lazy"
                />
                <CircularText
                  text="Dr Nithins Dental Care - "
                  onHover="speedUp"
                  spinDuration={20}
                  className="custom-class"
                />
              </div>
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
                    <FaXTwitter size={20} />
                  </a>
                </div>
              </div>
            </div>
            <div className="  flex flex-col md:flex-row justify-between  ">
              {/* adress1 */}
              <div className="min-w-3xs mb-10  h-full ">
                <h6 className="mb-11 px-3 ">
                  Clove Dental Clinic
                  <br /> First floor, <br /> Palachthadathil Building <br />{" "}
                  Central junction , Kuravilangad, <br /> Pin: 686633. <br />{" "}
                  8075464246 ,9605149854
                </h6>
                <a
                  href="tel:+919876543210"
                  className="bg-white text-[80%] text-[#2B2B25] px-6 py-3 rounded-full font-semibold hover:bg-[#e3e3e0] transition "
                >
                  Call Clove: +91 8075464246 
                </a>
              </div>
              {/* adress 2 */}
              <div className="">
                <h6 className="mb-5 px-3  ">
                  {/* First Floor St. Mary's Biulding, Oppo : Indian Oil Petrol Pump, Ayarkunnam, Kottayam-686564, Kerala */}
                  St.Mary'S Dental Care And <br />
                  Root Canal Treatment Zone <br />
                  First Floor, <br />
                  St. Mary's Biulding, Oppo : Indian Oil Petrol Pump, <br />
                  Ayarkunnam, Kottayam-686564, Kerala <br />
                  Pin : 686564. <br />
                  07947418044
                </h6>
                <a
                  href="tel:+919876543211"
                  className="bg-white text-[80%] text-[#2B2B25] px-6 py-3 rounded-full font-semibold hover:bg-[#e3e3e0] transition"
                >
                  Call St Mary's: +91 07947418044
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
      <footer className="bg-[#1a1a18] text-white md:py-8 py-4">
        <div className="max-w-full px-4 sm:px-6 lg:px-12 text-center">
          <p className="md:text-lg text-[.9rem] text-gray-400">
            &copy; 2024 Dr. Nithin's Dental Care. All rights reserved.
          </p>
          <p className="mt-2 md:text-xs text-[.7rem] text-gray-400">
            Providing exceptional dental care at two premium locations
          </p>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919605149854?text=Hi%2C%20I%20am%20interested%20in%20your%20service"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-3 rounded-full shadow-2xl hover:bg-green-600 hover:scale-110 transition-all duration-300 z-50 flex items-center justify-center group"
        aria-label="Contact us on WhatsApp"
      >
        <img
          src={whatsAppicon}
          alt="WhatsApp"
          className="w-10 h-10 animate-pulse"
          loading="lazy"
        />
        <span className="absolute right-full mr-3 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Chat on WhatsApp
        </span>
      </a>
    </div>
  );
}
