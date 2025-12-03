import React from "react";
import { Helmet } from "react-helmet";

/**
 * NOTE:
 * - Replace `siteUrl` and `logo` values with your real production URLs.
 * - If you have page-specific meta later, create per-page SEO components.
 */

const siteUrl = "https://clovedentalkuravilangad.com";
const orgName = "St Mary's Dental Clinic & Dr. Nithin's Clove Clinic";
const logo = `${siteUrl}/logo.png`; // replace if you have a real logo path

/* Website schema */
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}#website`,
  "url": siteUrl,
  "name": orgName,
  "publisher": {
    "@type": "Organization",
    "name": orgName,
    "logo": {
      "@type": "ImageObject",
      "url": logo
    }
  }
};

/* Organization schema */
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}#organization`,
  "name": orgName,
  "url": siteUrl,
  "logo": logo,
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+91 07947418044",
      "contactType": "customer service",
      "areaServed": "Kottayam, Kerala",
      "availableLanguage": ["English", "Malayalam"]
    },
    {
      "@type": "ContactPoint",
      "telephone": "+91 9447650452",
      "contactType": "customer service",
      "areaServed": "Kottayam, Kerala",
      "availableLanguage": ["English", "Malayalam"]
    }
  ],
  "sameAs": [
    // add your social URLs if available
    // "https://www.facebook.com/yourclinic",
    // "https://www.instagram.com/yourclinic"
    "https://www.instagram.com/clove_dental_kuravilangad",
    "https://www.facebook.com/CloveDentalKuravilangad"
  ]
};

/* Two clinic/location schemas (as Dentist LocalBusiness entries) */
const ayarkunnamClinic = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  "@id": `${siteUrl}#clinic-ayarkunnam`,
  "name": "St Mary's Dental Clinic",
  "image": `${siteUrl}/images/clinic-ayarkunnam.jpg`, // optional, replace if available
  "url": siteUrl,
  "telephone": "+91 08089875919",
  "email": "contact@stmarysdental.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "St.Mary's Dental Care And Root Canal Treatment Zone, First Floor, St. Mary's Building, Opp: Indian Oil Petrol Pump",
    "addressLocality": "Ayarkunnam",
    "addressRegion": "Kottayam",
    "postalCode": "686564",
    "addressCountry": "IN"
  },
  "areaServed": "Kottayam, Kerala",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:15",
      "closes": "18:00"
    }
  ],
  "medicalSpecialty": [
    "Root Canal Treatment",
    "Cosmetic Dentistry",
    "Orthodontics",
    "Dental Implants"
  ],
  "parentOrganization": {
    "@id": `${siteUrl}#organization`
  }
};

const kuravilangadClinic = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  "@id": `${siteUrl}#clinic-kuravilangad`,
  "name": "Dr. Nithin's Clove Clinic",
  "image": `${siteUrl}/images/clinic-kuravilangad.jpg`, // optional, replace if available
  "url": siteUrl,
  "telephone": "+91 9447650452",
  "email": "info@clovedentalkuravilangad.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Clove Dental Clinic, First Floor, Palachthadathil Building, Central Junction",
    "addressLocality": "Kuravilangad",
    "addressRegion": "Kottayam",
    "postalCode": "686633",
    "addressCountry": "IN"
  },
  "areaServed": "Kottayam, Kerala",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "19:00"
    }
  ],
  "medicalSpecialty": [
    "Root Canal Treatment",
    "Pediatric Dentistry",
    "Tooth Extraction",
    "General Dentistry"
  ],
  "parentOrganization": {
    "@id": `${siteUrl}#organization`
  }
};

/* Doctors as Person schemas (14 entries). All doctors serve both clinics.
   Each Person references the organization and (optionally) clinics via `memberOf` or `worksFor`.
   If you have individual profile URLs, add "url" to each person object.
*/
const doctors = [
  {
    "@type": "Person",
    "name": "Dr. Nithin Neeps",
    "jobTitle": "Chief Dental Surgeon",
    "knowsAbout": ["General Dentistry", "Cosmetic Dentistry", "Dental Implants"],
    "alumniOf": "",
    "worksFor": { "@id": `${siteUrl}#organization` },
    "description": "Chief Dental Surgeon with 5+ years of experience.",
    "telephone": "+91 07947418044"
  },
  {
    "@type": "Person",
    "name": "Dr. Athul Bharat MDS",
    "jobTitle": "Endodontist",
    "knowsAbout": ["Endodontics", "Root Canal Treatment"],
    "worksFor": { "@id": `${siteUrl}#organization` },
    "description": "Endodontist with 5+ years of experience.",
    "telephone": "+91 07947418044"
  },
  {
    "@type": "Person",
    "name": "Dr. Amal Devadas MDS",
    "jobTitle": "Endodontist",
    "knowsAbout": ["Endodontics", "Microsurgery"],
    "worksFor": { "@id": `${siteUrl}#organization` },
    "description": "Endodontist with 6+ years of experience.",
    "telephone": "+91 07947418044"
  },
  {
    "@type": "Person",
    "name": "Dr. Arun Joseph MDS",
    "jobTitle": "Orthodontist",
    "knowsAbout": ["Orthodontics", "Braces", "Clear Aligners"],
    "worksFor": { "@id": `${siteUrl}#organization` },
    "description": "Orthodontist with 6+ years of experience.",
    "telephone": "+91 07947418044"
  },
  {
    "@type": "Person",
    "name": "Dr. Vineeth John MDS",
    "jobTitle": "Oral and Maxillofacial Surgeon",
    "knowsAbout": ["Oral Surgery", "Maxillofacial Surgery"],
    "worksFor": { "@id": `${siteUrl}#organization` },
    "description": "Oral & Maxillofacial Surgeon with 5+ years of experience.",
    "telephone": "+91 07947418044"
  },
  {
    "@type": "Person",
    "name": "Dr. Afzal Ahmmed MDS",
    "jobTitle": "Oral and Maxillofacial Surgeon",
    "knowsAbout": ["Oral Surgery", "Trauma Care"],
    "worksFor": { "@id": `${siteUrl}#organization` },
    "description": "Oral & Maxillofacial Surgeon with 5+ years of experience.",
    "telephone": "+91 07947418044"
  },
  {
    "@type": "Person",
    "name": "Dr. Minu Philipose MDS",
    "jobTitle": "Prosthodontist & Implantologist",
    "knowsAbout": ["Prosthodontics", "Implantology"],
    "worksFor": { "@id": `${siteUrl}#organization` },
    "description": "Prosthodontist and Implantologist with 5+ years of experience.",
    "telephone": "+91 07947418044"
  },
  {
    "@type": "Person",
    "name": "Dr. Aravind P MDS",
    "jobTitle": "Periodontist & Implantologist",
    "knowsAbout": ["Periodontics", "Gum Treatment", "Implantology"],
    "worksFor": { "@id": `${siteUrl}#organization` },
    "description": "Periodontist with 5+ years of experience.",
    "telephone": "+91 07947418044"
  },
  {
    "@type": "Person",
    "name": "Dr. Jithin Jose MDS",
    "jobTitle": "Conservative Dentistry & Endodontics",
    "knowsAbout": ["Restorative Dentistry", "Endodontics"],
    "worksFor": { "@id": `${siteUrl}#organization` },
    "description": "Specialist in conservative dentistry with 5+ years of experience.",
    "telephone": "+91 07947418044"
  },
  {
    "@type": "Person",
    "name": "Dr. Amritha V.D MDS",
    "jobTitle": "Paedodontist",
    "knowsAbout": ["Pediatric Dentistry", "Kids Dental Care"],
    "worksFor": { "@id": `${siteUrl}#organization` },
    "description": "Paedodontist with 5+ years of experience.",
    "telephone": "+91 07947418044"
  },
  {
    "@type": "Person",
    "name": "Dr. Akshaya J.S MDS",
    "jobTitle": "Oral Medicine & Radiologist",
    "knowsAbout": ["Oral Medicine", "Oral Radiology"],
    "worksFor": { "@id": `${siteUrl}#organization` },
    "description": "Oral Medicine and Radiology specialist with 5+ years of experience.",
    "telephone": "+91 07947418044"
  },
  {
    "@type": "Person",
    "name": "Dr. Bilja Biju",
    "jobTitle": "Resident Dental Surgeon",
    "knowsAbout": ["General Dentistry"],
    "worksFor": { "@id": `${siteUrl}#organization` },
    "description": "Resident dental surgeon.",
    "telephone": "+91 07947418044"
  },
  {
    "@type": "Person",
    "name": "Dr. Soumya Xavier",
    "jobTitle": "Resident Dental Surgeon",
    "knowsAbout": ["General Dentistry"],
    "worksFor": { "@id": `${siteUrl}#organization` },
    "description": "Resident dental surgeon.",
    "telephone": "+91 07947418044"
  }
];

/* Service schemas (examples for major services) */
const services = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Root Canal Treatment",
    "description": "Painless and modern root canal therapy using rotary instruments and CBCT-guided diagnosis.",
    "provider": { "@id": `${siteUrl}#clinic-ayarkunnam` }
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Dental Implants",
    "description": "Permanent dental implants and restorations for missing teeth.",
    "provider": { "@id": `${siteUrl}#clinic-kuravilangad` }
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Orthodontics (Braces & Clear Aligners)",
    "description": "Comprehensive orthodontic treatments including braces and clear aligner therapy.",
    "provider": { "@id": `${siteUrl}#clinic-kuravilangad` }
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Pediatric Dentistry",
    "description": "Child-friendly dental care and preventive dentistry for kids.",
    "provider": { "@id": `${siteUrl}#clinic-ayarkunnam` }
  }
];

/* Combine schemas into an array for easier rendering (multiple script tags) */
const schemaChunks = [
  websiteSchema,
  organizationSchema,
  ayarkunnamClinic,
  kuravilangadClinic,
  // services each separate below
  ...services,
  // doctors: wrap in a dedicated typed container for clarity (not strictly required, but okay)
  {
    "@context": "https://schema.org",
    "@graph": doctors
  }
];

export default function SEO() {
  return (
    <Helmet>
      {/* Basic SEO meta — change as needed */}
      <title>Dr Nithin"s Dental Care in Kottayam | Kuravilangad & Ayarkunnam</title>
      <meta
        name="description"
        content="St Mary's Dental Clinic & Dr. Nithin's Clove Clinic — Expert dentists serving Kuravilangad and Ayarkunnam, Kottayam. Root canal, implants, braces, pediatric dentistry."
      />
      <link rel="canonical" href={siteUrl} />

      {/* Render each schema chunk as its own <script> tag */}
      {schemaChunks.map((sc, i) => (
        <script
          key={`schema-${i}`}
          type="application/ld+json"
          // using dangerouslySetInnerHTML pattern inside Helmet isn't necessary; react-helmet accepts children
        >
          {JSON.stringify(sc)}
        </script>
      ))}
    </Helmet>
  );
}
