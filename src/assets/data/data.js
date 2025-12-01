import React from "react";
import successicon from "../../assets/care-treatment-heart-svgrepo-com.svg";
import clearaligners from "../../assets/clearaligners.png";
import cosmeticdentistry from "../../assets/cosmeticdentistry.png";
import dentalcrown from "../../assets/dental-crown.png";
import dentalimplant from "../../assets/dentalimplant.png";
import emergency from "../../assets/emergency.png";
import familydentistry from "../../assets/family-dentistry.png";
import generaldentristy from "../../assets/generaldentistry.png";
import oralsurgery from "../../assets/oral-surgery.png";
import orthodontics from "../../assets/orthodontics.png";
import pediatricdentistry from "../../assets/pediatric-dentistry.png";
import peridontalcare from "../../assets/peridontal-care.png";
import prosthodontics from "../../assets/prosthodontics.png";
import rootcanal from "../../assets/rootcanal.png";
import stethoscopeicon from "../../assets/stethoscopeicon.svg";
import toothwhitening from "../../assets/tooth-whitening.png";
import peopleicon from "../../assets/users-solid-full.svg";
import verifiedicon from "../../assets/verified-check-svgrepo-com.svg";
const json = {
  "experts" : [
    {
      "name": "Dr. Nithin Neeps",
      "specialization": "Cheif Dental Surgeon",
      "qualification": "BDS",
      "experience": "5+ years",
      "description":
        "Dr. Nithin Neeps is the Chief Dental Surgeon and founder of our clinics in Kuravilangad and Ayarkunnam, Kottayam. Known for his expertise in general and cosmetic dentistry, he focuses on delivering painless, high-quality treatments tailored to each patient. With a strong reputation as one of the most trusted dentists in Kottayam, Dr. Nithin combines advanced techniques with compassionate care to help patients achieve healthy, confident smiles.",
      "image":
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop",
    },
    {
      "name": "Dr. Athul Bharat MDS",
      "specialization": "Endodontics",
      "qualification": "BDS, MDS (Endodontics)",
      "experience": "5+ years",
      "description":
        "Dr. Athul Bharat is an experienced endodontist specializing in advanced root canal therapy, retreatments, and microsurgical procedures. Serving patients at our Kuravilangad and Ayarkunnam clinics, he is known for using CBCT-guided diagnosis and modern rotary technology to preserve natural teeth. For anyone searching for an expert root canal specialist in Kottayam, Dr. Athul offers predictable, comfortable, and long-lasting results.",
      "image":
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop",
    },
    {
      "name": "Dr. Amal Devadas MDS",
      "specialization": "Endodontics",
      "qualification": "BDS, MDS (Orthodontics)",
      "experience": "6+ years",
      "description":
        "Dr. Amal Devadas is a skilled endodontist offering precision-driven root canal treatments, retreatments, and restorative procedures. His gentle and detail-focused approach ensures patients experience maximum comfort during treatment. Patients looking for reliable root canal treatment in Kuravilangad or Ayarkunnam often choose Dr. Amal for his expertise and patient-first care.",
      "image":
        "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop",
    },
    {
      "name": "Dr. Arun Joseph MDS",
      "specialization": "Orthodontics",
      "qualification": "BDS, MDS (Orthodontics)",
      "experience": "6+ years",
      "description":
        "Dr. Arun Joseph is an orthodontist specializing in braces and clear aligners, helping patients achieve well-aligned, confident smiles. He creates personalized orthodontic plans using advanced techniques, making him a preferred choice for orthodontic care in Kottayam. Whether patients need metal braces, ceramic braces, or clear aligners, Dr. Arun delivers safe and effective results at both clinic locations.",
      "image":
        "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop",
    },
    {
      "name": "Dr. Vineeth John MDS",
      "specialization": "Oral and Maxillofacial Surgery",
      "qualification": "BDS, MDS (Oral and Maxillofacial Surgery)",
      "experience": "5+ years",
      "description":
        "Dr. Vineeth John is an experienced oral and maxillofacial surgeon providing expert care for procedures involving the mouth, jaw, and facial region. Patients from Kuravilangad, Ayarkunnam, and nearby Kottayam areas trust him for safe, precise surgical care. His focus on patient comfort and advanced surgical planning ensures successful outcomes for complex cases.",
      "image":
        "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=400&h=400&fit=crop",
    },
    {
      "name": "Dr. Afzal Ahmmed MDS",
      "specialization": "Oral and Maxillofacial Surgery",
      "qualification": "BDS, MDS (Oral and Maxillofacial Surgery)",
      "experience": "5+ years",
      "description":
        "Specializing in oral and maxillofacial surgery, Dr. Afzal Ahmmed offers skilled surgical management for teeth, gums, jaws, and facial bone structures. His compassionate approach and surgical accuracy make him a strong choice for patients seeking safe oral surgery in Kottayam, especially in the Kuravilangad and Ayarkunnam regions.",
      "image":
        "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=400&h=400&fit=crop",
    },
    {
      "name": "Dr. Minu Philipose MDS",
      "specialization": "Prosthodontics and Implantology",
      "qualification": "BDS, MDS (Prosthodontics and Implantology)",
      "experience": "5+ years",
      "description":
        "Dr. Minu Philipose specializes in prosthodontics and implantology, offering solutions such as crowns, dentures, bridges, full-mouth rehabilitation, and dental implants. Patients looking for dental implants in Kottayam trust her for her precision, aesthetic sense, and commitment to restoring natural function. She provides personalized care at both our clinic locations.",
      "image":
        "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=400&h=400&fit=crop",
    },
    {
      "name": "Dr. Aravind P MDS",
      "specialization": "Periodontics and Implantology",
      "qualification": "BDS, MDS (Periodontics and Implantology)",
      "experience": "5+ years",
      "description":
        "Dr. Aravind P is a specialist in gum disease treatment and implant dentistry. He provides comprehensive periodontal therapy, advanced gum care, and long-lasting implant solutions. Patients in Kuravilangad and Ayarkunnam appreciate his calm approach and modern treatment methods, making him a leading choice for gum treatment in Kottayam.",
      "image":
        "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=400&h=400&fit=crop",
    },
    {
      "name": "Dr. Jithin Jose MDS",
      "specialization": "Conservative Dentistry and Endodontics",
      "qualification": "BDS, MDS (Conservative Dentistry and Endodontics)",
      "experience": "5+ years",
      "description":
        "Dr. Jithin Jose focuses on preserving natural teeth through conservative dentistry, restoration work, and painless root canal treatment. His precise, minimally invasive methods make him a trusted endodontist in Kottayam, especially for patients near Kuravilangad and Ayarkunnam seeking comfortable, effective dental care.",
      "image":
        "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=400&h=400&fit=crop",
    },
    {
      "name": "Dr. Amritha V.D MDS",
      "specialization": "Paedodontics",
      "qualification": "BDS, MDS (Paedodontics)",
      "experience": "5+ years",
      "description":
        "Dr. Amritha is a caring pediatric dentist dedicated to providing gentle, stress-free dental care for children. She helps young patients build positive dental habits, making her a preferred choice for kids' dental care in Kottayam. Families from Kuravilangad and Ayarkunnam trust her for her patience, compassion, and child-friendly treatment approach.",
      "image":
        "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=400&h=400&fit=crop",
    },
    {
      "name": "Dr. Akshaya J.S MDS",
      "specialization": "Oral Medicine and Radiology",
      "qualification": "BDS, MDS (Oral Medicine and Radiology)",
      "experience": "5+ years",
      "description":
        "Dr. Akshaya specializes in diagnosing and managing oral diseases using advanced imaging and radiographic techniques. Patients from Kottayam and the surrounding areas rely on her for accurate oral assessments and long-term care planning. Her expertise ensures precise diagnosis for complex dental conditions.",
      "image":
        "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=400&h=400&fit=crop",
    },
    {
      "name": "Dr. Bilja Biju",
      "specialization": "Resident Dental Surgeon",
      "qualification": "BDS",
      "experience": "Resident",
      "description":
        "Dr. Bilja Biju is a dedicated resident dental surgeon offering comprehensive general dental care. She is passionate about continuous learning and modern treatment practices. Patients visiting our clinics in Kuravilangad and Ayarkunnam appreciate her gentle approach and commitment to comfort-focused dentistry.",
      "image":
        "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=400&h=400&fit=crop",
    },
    {
      "name": "Dr. Soumya Xavier",
      "specialization": "Resident Dental Surgeon",
      "qualification": "BDS",
      "experience": "Resident",
      "description":
        "Dr. Soumya Xavier provides compassionate, high-quality general dentistry services and ensures a comfortable experience for every patient. Her focus on modern techniques and patient education makes her a dependable choice for families seeking reliable dental care in Kottayam, especially around Kuravilangad and Ayarkunnam.",
      "image":
        "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=400&h=400&fit=crop",
    },
  ],
   "CheifSurgeon" :{
    "name": "Dr. Nithin Neeps",
    "specialization": "Cheif Dental Surgeon",
    "qualification": "BDS",
    "experience": "5+ years",
    "description1":
      " With over 5+ years of experience in general and cosmetic dentistry, Dr. Nithin Neeps is committed to providing  world-class dental care. Leading two state-of-the-art clinics,he brings expertise, compassion, and the latest dental technology to every patient.",
    "description2":
      "Dr. Nithin specializes in advanced dental procedures including smile makeovers, dental implants, and cosmetic restorations. His patient-centered approach and dedication to excellence have made him a trusted name in dental care.",
  },

   "clinics" : {
    "stmarys": {
      "name": "St Mary's Dental Clinic",
      "address":
        "St.Mary'S Dental Care And Root Canal Treatment Zone ,First Floor,St. Mary's Biulding,Oppo : Indian Oil Petrol Pump,Ayarkunnam, Kottayam,Pin : 686564.",
      "phone": "+91 07947418044",
            "workingDays": "Mon - Sat",
      "workingHours": " 9:15 AM - 6:00 PM",
      "email": "contact@stmarysdental.com",
      "mapEmbed":
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d235.2833587828083!2d76.6052844!3d9.6336477!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x24e3e4b0faef5257%3A0x61dd421f5cf68a3!2sSt.Mary%27s%20Dental%20Care%20and%20Root%20Canal%20Treatment%20Zone!5e1!3m2!1sen!2sin!4v1764140754423!5m2!1sen!2sin",
      "doctors": [
        {
          "name": "Dr. Nithin Neeps",
          // "specialization": "General & Cosmetic Dentistry",
          "specialization": "Cheif Dental Surgeon",
          "days": "Mon - Sat",
          "timing": "9:00 AM - 1:00 PM, 4:00 PM - 8:00 PM",
        },
        {
          "name": "Dr. Athul Bharat MDS",
          "specialization": "Endodontics",
          "days": "Mon, Wed, Fri",
          "timing": "10:00 AM - 2:00 PM, 5:00 PM - 7:00 PM",
        },
        {
          "name": "Dr. Amal Devadas MDS",
          "specialization": "Endodontics",
          "days": "Tue, Thu, Sat",
          "timing": "9:00 AM - 1:00 PM",
        },  {
          "name": "Dr. Nithin Neeps",
          // "specialization": "General & Cosmetic Dentistry",
          "specialization": "Cheif Dental Surgeon",
          "days": "Mon - Sat",
          "timing": "9:00 AM - 1:00 PM, 4:00 PM - 8:00 PM",
        },  {
          "name": "Dr. Nithin Neeps",
          // "specialization": "General & Cosmetic Dentistry",
          "specialization": "Cheif Dental Surgeon",
          "days": "Mon - Sat",
          "timing": "9:00 AM - 1:00 PM, 4:00 PM - 8:00 PM",
        },  {
          "name": "Dr. Nithin Neeps",
          // "specialization": "General & Cosmetic Dentistry",
          "specialization": "Cheif Dental Surgeon",
          "days": "Mon - Sat",
          "timing": "9:00 AM - 1:00 PM, 4:00 PM - 8:00 PM",
        },
      ],
    },
    "clove": {
      "name": "Dr. Nithin's Clove Clinic",
      "address":
        "Clove Dental Clinic , First floor, Palachthadathil  Building , Central junction , Kuravilangad,Pin:  686633.",
      "phone": "+91 9447650452",
      "workingDays": "Mon - Sat",
       "workingHours": "9:00 AM - 7:00 PM",
      "email": "info@clovedentalkuravilangad.com",
      "mapEmbed":
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.142027938673!2d76.55862687502795!3d9.757645390335735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07d1c25edcc07d%3A0xcd6d07d33d7a510!2sClove%20Dental%20Clinic!5e1!3m2!1sen!2sin!4v1763362461401!5m2!1sen!2sin",
      "doctors": [
        {
          "name": "Dr. Nithin Neeps",
          // "specialization": "General & Cosmetic Dentistry",
          "specialization": "Cheif Dental Surgeon",
          "days": "Mon - Sat",
          "timing": "9:00 AM - 1:00 PM, 4:00 PM - 8:00 PM",
        },
        {
          "name": "Dr. Athul Bharat MDS",
          "specialization": "Endodontics",
          "days": "Mon, Wed, Fri",
          "timing": "10:00 AM - 2:00 PM, 5:00 PM - 7:00 PM",
        },
        {
          "name": "Dr. Amal Devadas MDS",
          "specialization": "Endodontics",
          "days": "Tue, Thu, Sat",
          "timing": "9:00 AM - 1:00 PM",
        },
      ],
    },
  },

   "services" : [
    {
      "title": "General Dentistry",
      "description":
        "Cleanings, exams, fillings, and preventative care for all ages.",
      "icon": generaldentristy,
    },
    {
      "title": "Cosmetic Dentistry",
      "description": "Teeth whitening, veneers, and complete smile makeovers.",
      "icon": cosmeticdentistry,
    },
    {
      "title": "Dental Implants",
      "description":
        "Restore your smile with permanent, natural-looking implants.",
      "icon": dentalimplant,
    },
    {
      "title": "Root Canal Treatment",
      "description": "Pain-free root canal therapy to save your natural teeth.",
      "icon": rootcanal,
    },
    {
      "title": "Orthodontics (Braces)",
      "description":
        "Traditional braces and clear aligners for perfect teeth alignment.",
      "icon": orthodontics,
    },
    {
      "title": "Clear Aligners",
      "description":
        "Discreet, removable aligners for comfortable and effective teeth straightening.",
      "icon": clearaligners,
    },
    {
      "title": "Teeth Whitening",
      "description":
        "Professional whitening for a brighter, more confident smile.",
      "icon": toothwhitening,
    },
    {
      "title": "Pediatric Dentistry",
      "description": "Gentle and compassionate dental care for children.",
      "icon": pediatricdentistry,
    },
    {
      "title": "Oral Surgery",
      "description":
        "Wisdom teeth extraction and surgical procedures with expert care.",
      "icon": oralsurgery,
    },
    {
      "title": "Periodontal Care",
      "description": "Treatment for gum disease and maintenance of healthy gums.",
      "icon": peridontalcare,
    },
    {
      "title": "Prosthodontics",
      "description":
        "Restoration and replacement of teeth with crowns, bridges, dentures, and implants.",
      "icon": prosthodontics,
    },
    {
      "title": "Emergency Dental Care",
      "description": "Quick relief for dental emergencies and urgent care needs.",
      "icon": emergency,
    },
    {
      "title": "Dental Crowns & Bridges",
      "description": "Restore damaged teeth with custom crowns and bridges.",
      "icon": dentalcrown,
    },
    {
      "title": "Family Dentistry",
      "description": "Comprehensive dental care for your entire family.",
      "icon": familydentistry,
    },
  ],

   "icons": [
    { "title": "Dedicated doctors", "number": "10+", "icon": stethoscopeicon },
    { "title": "Satisfied Patients", "number": "5000+", "icon": peopleicon },
    { "title": "Successful Treatments", "number": "3000+", "icon": successicon },
    { "title": "Years of experience", "number": "15+", "icon": verifiedicon },
  ],
}
  export default json