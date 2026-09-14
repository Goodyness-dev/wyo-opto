export const BUSINESS_INFO = {
  name: "Wyomissing Optometric Center",
  legalName: "Wyomissing Optometric Center, P.C.",
  tagline: "Precision Vision Care, For A Full Spectrum Life",
  shortDescription: "Berks & Lebanon County's premier multi-location eye care practice. Delivering comprehensive eye examinations, advanced retinal diagnostics, pediatric vision, dry eye therapies, and 24/7 emergency medical eye care.",
  foundedYear: 1980,
  yearsInBusiness: "45+",
  domain: "wyo-opto.com",
  rating: 4.9,
  reviewCount: 685,
  phone: "(610) 374-3134",
  emergencyPhone: "(610) 374-3134",
  email: "info@wyo-opto.com",
  
  // 3 Primary Offices
  locations: [
    {
      id: "wyomissing",
      name: "Wyomissing (Main Office)",
      street: "50 Berkshire Court",
      city: "Wyomissing",
      state: "PA",
      zip: "19610",
      phone: "(610) 374-3134",
      fax: "(610) 374-2191",
      mapLink: "https://maps.google.com/?q=50+Berkshire+Court,+Wyomissing,+PA+19610",
      coordinates: { lat: 40.3356, lng: -75.9682 },
      isPrimary: true,
      hours: [
        { days: "Mon, Tue, Thu", time: "10:00 AM – 8:00 PM" },
        { days: "Wednesday", time: "8:30 AM – 6:00 PM" },
        { days: "Friday – Sunday", time: "Closed (24/7 Emergency On Call)" }
      ]
    },
    {
      id: "douglassville",
      name: "Douglassville Office",
      street: "1050 Benjamin Franklin Hwy (Route 422 West)",
      city: "Douglassville",
      state: "PA",
      zip: "19518",
      phone: "(610) 385-4333",
      fax: "(610) 385-4422",
      mapLink: "https://maps.google.com/?q=1050+Benjamin+Franklin+Hwy,+Douglassville,+PA+19518",
      coordinates: { lat: 40.2568, lng: -75.7289 },
      isPrimary: false,
      hours: [
        { days: "Monday", time: "1:00 PM – 8:00 PM" },
        { days: "Tuesday", time: "10:00 AM – 8:00 PM" },
        { days: "Wednesday", time: "9:00 AM – 8:00 PM" },
        { days: "Thursday", time: "10:00 AM – 5:00 PM" },
        { days: "Friday", time: "8:30 AM – 1:00 PM" },
        { days: "Saturday – Sunday", time: "Closed (24/7 Emergency On Call)" }
      ]
    },
    {
      id: "myerstown",
      name: "Myerstown Office",
      street: "356 West Main Avenue",
      city: "Myerstown",
      state: "PA",
      zip: "17067",
      phone: "(717) 866-1400",
      fax: "(717) 866-2144",
      mapLink: "https://maps.google.com/?q=356+West+Main+Avenue,+Myerstown,+PA+17067",
      coordinates: { lat: 40.3723, lng: -76.3122 },
      isPrimary: false,
      hours: [
        { days: "Mon, Tue", time: "11:00 AM – 8:00 PM" },
        { days: "Wednesday", time: "8:00 AM – 4:00 PM" },
        { days: "Thursday", time: "10:00 AM – 6:00 PM" },
        { days: "Friday", time: "7:00 AM – 1:00 PM" },
        { days: "Saturday – Sunday", time: "Closed (24/7 Emergency On Call)" }
      ]
    }
  ],

  // Key Practice Highlights
  badges: [
    "45+ Years Clinical Excellence",
    "2024 Salus Alumna of the Year",
    "2023 Presidential Medal of Honor",
    "AdaptDx Center of Excellence",
    "24/7 Acute Ocular Emergency Triage",
    "VSP & EyeMed Premier Provider"
  ],

  // Verified Patient Testimonials
  reviews: [
    {
      id: 1,
      author: "Sarah M.",
      location: "Wyomissing, PA",
      rating: 5,
      date: "2 weeks ago",
      text: "Dr. Corbin and the team at Wyomissing Optometric Center are in a class of their own. Their diagnostic technology caught an early retinal change that standard exams missed. I felt genuinely cared for from the moment I checked in.",
      badge: "Verified Patient • Retinal Imaging"
    },
    {
      id: 2,
      author: "David K.",
      location: "Douglassville, PA",
      rating: 5,
      date: "1 month ago",
      text: "I had a sudden painful eye injury at work on a Tuesday evening. Their 24/7 emergency response was immediate and compassionate. Dr. Legge saw me within 30 minutes, removed a metal fleck, and saved my vision. Truly grateful.",
      badge: "Verified Patient • Emergency Care"
    },
    {
      id: 3,
      author: "Elena R.",
      location: "Reading, PA",
      rating: 5,
      date: "3 weeks ago",
      text: "Our entire family has trusted Wyomissing Optometric Center for 15 years. Dr. Burrell is remarkable with children; our 8-year-old actually looks forward to eye checkups! Their optical gallery has an unbeatable frame selection.",
      badge: "Verified Patient • Pediatric Vision"
    },
    {
      id: 4,
      author: "Mark T.",
      location: "Myerstown, PA",
      rating: 5,
      date: "2 months ago",
      text: "Their Dry Eye Center and LipiFlow treatment changed my life after years of severe burning and blurry screens. The Myerstown office is sleek, spotless, and running like clockwork. 5 stars all the way!",
      badge: "Verified Patient • Dry Eye Treatment"
    }
  ]
};
