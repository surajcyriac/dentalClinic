import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Calendar, ChevronRight, Menu, X } from 'lucide-react';

export default function DentalPortfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedClinic, setSelectedClinic] = useState('stmarys');

  const clinics = {
    stmarys: {
      name: "St Mary's Dental Clinic",
      address: "123 Healthcare Avenue, Medical District, City 682001",
      phone: "+91 98765 43210",
      email: "contact@stmarysdental.com",
      doctors: [
        { name: "Dr. Nithin Kumar", specialization: "General & Cosmetic Dentistry", days: "Mon - Sat", timing: "9:00 AM - 1:00 PM, 4:00 PM - 8:00 PM" },
        { name: "Dr. Sarah Thomas", specialization: "Orthodontics", days: "Mon, Wed, Fri", timing: "10:00 AM - 2:00 PM, 5:00 PM - 7:00 PM" },
        { name: "Dr. Rajesh Menon", specialization: "Oral Surgery", days: "Tue, Thu, Sat", timing: "9:00 AM - 1:00 PM" }
      ]
    },
    clove: {
      name: "Dr. Nithin's Clove Clinic",
      address: "456 Wellness Road, Health Plaza, City 682002",
      phone: "+91 98765 43211",
      email: "contact@cloveclinic.com",
      doctors: [
        { name: "Dr. Nithin Kumar", specialization: "General & Cosmetic Dentistry", days: "Mon - Sat", timing: "10:00 AM - 2:00 PM, 5:00 PM - 9:00 PM" },
        { name: "Dr. Priya Nair", specialization: "Pediatric Dentistry", days: "Mon - Fri", timing: "9:00 AM - 1:00 PM, 3:00 PM - 6:00 PM" },
        { name: "Dr. Arun Krishnan", specialization: "Periodontics", days: "Wed - Sat", timing: "11:00 AM - 3:00 PM" }
      ]
    }
  };

  const services = [
    "General Dentistry",
    "Cosmetic Dentistry",
    "Teeth Whitening",
    "Dental Implants",
    "Root Canal Treatment",
    "Orthodontics (Braces)",
    "Pediatric Dentistry",
    "Oral Surgery",
    "Periodontal Care",
    "Emergency Dental Care"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-teal-700">Dr. Nithin's Dental Care</h1>
              <p className="text-sm text-gray-600">Excellence in Dental Healthcare</p>
            </div>
            
            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-teal-600 transition">Home</a>
              <a href="#clinics" className="text-gray-700 hover:text-teal-600 transition">Clinics</a>
              <a href="#services" className="text-gray-700 hover:text-teal-600 transition">Services</a>
              <a href="#contact" className="text-gray-700 hover:text-teal-600 transition">Contact</a>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Nav */}
          {mobileMenuOpen && (
            <nav className="md:hidden pb-4 space-y-2">
              <a href="#home" className="block text-gray-700 hover:text-teal-600 transition py-2">Home</a>
              <a href="#clinics" className="block text-gray-700 hover:text-teal-600 transition py-2">Clinics</a>
              <a href="#services" className="block text-gray-700 hover:text-teal-600 transition py-2">Services</a>
              <a href="#contact" className="block text-gray-700 hover:text-teal-600 transition py-2">Contact</a>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-r from-teal-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Your Smile, Our Priority</h2>
          <p className="text-xl mb-8 text-teal-50">Comprehensive dental care across two premium locations</p>
          <a href="#clinics" className="inline-flex items-center bg-white text-teal-600 px-8 py-3 rounded-full font-semibold hover:bg-teal-50 transition">
            Book Appointment <ChevronRight className="ml-2" size={20} />
          </a>
        </div>
      </section>
<a href="https://wa.me/916238322874?text=Hi%2C%20I%20am%20interested%20in%20your%20service" target="_blank">
  Whatsapp
</a>
      {/* About Dr. Nithin */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Meet Dr. Nithin Kumar</h2>
            <div className="w-24 h-1 bg-teal-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              With over 15 years of experience in general and cosmetic dentistry, Dr. Nithin Kumar is committed to 
              providing world-class dental care. Leading two state-of-the-art clinics, he brings expertise, 
              compassion, and the latest dental technology to every patient.
            </p>
          </div>
        </div>
      </section>

      {/* Clinics Section */}
      <section id="clinics" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-12">Our Clinics</h2>
          
          {/* Clinic Tabs */}
          <div className="flex justify-center mb-8 space-x-4">
            <button
              onClick={() => setSelectedClinic('stmarys')}
              className={`px-6 py-3 rounded-lg font-semibold transition ${
                selectedClinic === 'stmarys'
                  ? 'bg-teal-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              St Mary's Dental Clinic
            </button>
            <button
              onClick={() => setSelectedClinic('clove')}
              className={`px-6 py-3 rounded-lg font-semibold transition ${
                selectedClinic === 'clove'
                  ? 'bg-teal-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Clove Clinic
            </button>
          </div>

          {/* Clinic Details */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-teal-700 mb-6">{clinics[selectedClinic].name}</h3>
            
            {/* Contact Info */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-start space-x-3">
                <MapPin className="text-teal-600 mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="font-semibold text-gray-800">Address</p>
                  <p className="text-gray-600 text-sm">{clinics[selectedClinic].address}</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="text-teal-600 mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="font-semibold text-gray-800">Phone</p>
                  <p className="text-gray-600 text-sm">{clinics[selectedClinic].phone}</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="text-teal-600 mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="font-semibold text-gray-800">Email</p>
                  <p className="text-gray-600 text-sm">{clinics[selectedClinic].email}</p>
                </div>
              </div>
            </div>

            {/* Doctor Schedule */}
            <div>
              <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <Calendar className="mr-2 text-teal-600" size={24} />
                Doctor's Schedule
              </h4>
              <div className="space-y-4">
                {clinics[selectedClinic].doctors.map((doctor, idx) => (
                  <div key={idx} className="border border-gray-200 rounded-lg p-4 hover:border-teal-300 transition">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                      <div className="mb-2 sm:mb-0">
                        <h5 className="font-bold text-gray-800">{doctor.name}</h5>
                        <p className="text-sm text-teal-600">{doctor.specialization}</p>
                      </div>
                      <div className="text-sm">
                        <p className="flex items-center text-gray-700">
                          <Calendar className="mr-1 text-teal-600" size={16} />
                          {doctor.days}
                        </p>
                        <p className="flex items-center text-gray-700 mt-1">
                          <Clock className="mr-1 text-teal-600" size={16} />
                          {doctor.timing}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-12">Our Services</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <div key={idx} className="bg-gradient-to-br from-teal-50 to-blue-50 p-6 rounded-xl hover:shadow-lg transition">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                  <h3 className="font-semibold text-gray-800">{service}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gradient-to-r from-teal-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Transform Your Smile?</h2>
          <p className="text-xl mb-8 text-teal-50">Book your appointment at either of our convenient locations</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a href="tel:+919876543210" className="bg-white text-teal-600 px-8 py-3 rounded-full font-semibold hover:bg-teal-50 transition">
              Call St Mary's: +91 98765 43210
            </a>
            <a href="tel:+919876543211" className="bg-white text-teal-600 px-8 py-3 rounded-full font-semibold hover:bg-teal-50 transition">
              Call Clove: +91 98765 43211
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 Dr. Nithin's Dental Care. All rights reserved.</p>
          <p className="mt-2 text-sm">Providing exceptional dental care across two premium locations</p>
        </div>
      </footer>
    </div>
  );
}