const providers = [
  {
    id: 1,
    name: 'Ramesh Kumar',
    category: 'Electrician',
    village: 'Jogiya Khera',
    phone: '+91 7839462150',
    available: true,
    serviceDescription: 'Home wiring, fan installation, and basic electrical repairs.',
    hindiServiceDescription: 'घर की वायरिंग, पंखा लगाना और सामान्य बिजली मरम्मत।',
    rate: { en: 'From ₹250 per visit', hi: '₹250 प्रति विज़िट से' }
  },
  {
    id: 2,
    name: 'Sita Devi',
    category: 'Plumber',
    village: 'Rajpur',
    phone: '+91 8926147350',
    available: true,
    serviceDescription: 'Tap repairs, leak checks, and bathroom fixture fitting.',
    hindiServiceDescription: 'नल की मरम्मत, रिसाव की जाँच और बाथरूम फिटिंग।',
    rate: { en: 'From ₹200 per visit', hi: '₹200 प्रति विज़िट से' }
  },
  {
    id: 3,
    name: 'Mohan Lal',
    category: 'Tutor',
    village: 'Joula',
    phone: '+91 9347628150',
    available: false,
    serviceDescription: 'Mathematics and science lessons for middle-school students, with weekly practice.',
    hindiServiceDescription: 'मध्य विद्यालय के लिए गणित और विज्ञान की नमूना ट्यूशन।',
    rate: { en: '₹300 per hour', hi: '₹300 प्रति घंटा' }
  },
  {
    id: 4,
    name: 'Asha Kumari',
    category: 'Mechanic',
    village: 'Rajpur',
    phone: '+91 7693842150',
    available: true,
    serviceDescription: 'Two-wheeler maintenance and basic roadside inspection.',
    hindiServiceDescription: 'दोपहिया वाहन की देखभाल और सामान्य सड़क किनारे जाँच।',
    rate: { en: 'From ₹350 per service', hi: '₹350 प्रति सेवा से' }
  },
  {
    id: 5,
    name: 'Hari Prasad',
    category: 'Tailor',
    village: 'Fathepur Kheri',
    phone: '+91 8172639450',
    available: false,
    serviceDescription: 'Clothing alterations, blouse stitching, and simple repairs.',
    hindiServiceDescription: 'कपड़ों की फिटिंग, ब्लाउज सिलाई और सामान्य मरम्मत।',
    rate: { en: 'From ₹120 per item', hi: '₹120 प्रति कपड़ा से' }
  },
  {
    id: 6,
    name: 'Sakir',
    category: 'Tractor Service',
    village: 'Parasoli',
    phone: '+91 9538172640',
    available: true,
    serviceDescription: 'Routine tractor servicing and seasonal maintenance checks.',
    hindiServiceDescription: 'ट्रैक्टर की नियमित सर्विस और मौसम के अनुसार जाँच।',
    rate: { en: 'From ₹700 per service', hi: '₹700 प्रति सर्विस से' }
  },
  {
    id: 7,
    name: 'Mohammad Sameer',
    category: 'Electrician',
    village: 'Bigana',
    phone: '+91 7284951630',
    available: false,
    serviceDescription: 'Switchboard repair, lighting, and inverter setup assistance.',
    hindiServiceDescription: 'स्विचबोर्ड मरम्मत, लाइटिंग और इन्वर्टर लगाने में सहायता।',
    rate: { en: 'From ₹300 per visit', hi: '₹300 प्रति विज़िट से' }
  },
  {
    id: 8,
    name: 'Pooja Sharma',
    category: 'Plumber',
    village: 'Jogiya Khera',
    phone: '+91 8617394250',
    available: true,
    serviceDescription: 'Water tank connections, drainage checks, and tap fitting.',
    hindiServiceDescription: 'पानी की टंकी के कनेक्शन, नाली की जाँच और नल लगाना।',
    rate: { en: 'From ₹250 per visit', hi: '₹250 प्रति विज़िट से' }
  },
  {
    id: 9,
    name: 'Arjun Verma',
    category: 'Tutor',
    village: 'Fathepur Kheri',
    phone: '+91 9472816350',
    available: true,
    serviceDescription: 'English reading, grammar, and social studies support for school students.',
    hindiServiceDescription: 'स्कूली विद्यार्थियों के लिए अंग्रेज़ी और सामाजिक अध्ययन में नमूना सहायता।',
    rate: { en: '₹280 per hour', hi: '₹280 प्रति घंटा' }
  },
  {
    id: 10,
    name: 'Nisha Patel',
    category: 'Mechanic',
    village: 'Chajpur',
    phone: '+91 7964251830',
    available: true,
    serviceDescription: 'Bicycle and motorbike brake, tyre, and chain checks.',
    hindiServiceDescription: 'साइकिल और मोटरसाइकिल के ब्रेक, टायर और चेन की जाँच।',
    rate: { en: 'From ₹180 per service', hi: '₹180 प्रति सेवा से' }
  },
  {
    id: 11,
    name: 'Suresh Yadav',
    category: 'Tailor',
    village: 'Parasoli',
    phone: '+91 8327159460',
    available: true,
    serviceDescription: 'Shirt and trouser stitching with basic garment alterations.',
    hindiServiceDescription: 'शर्ट और पतलून की सिलाई तथा कपड़ों की सामान्य फिटिंग।',
    rate: { en: 'From ₹200 per item', hi: '₹200 प्रति कपड़ा से' }
  },
  {
    id: 12,
    name: 'Rafiq Ansari',
    category: 'Tractor Service',
    village: 'Rajpur',
    phone: '+91 9652837410',
    available: false,
    serviceDescription: 'Oil, filter, and tyre-pressure checks for farm tractors.',
    hindiServiceDescription: 'खेती के ट्रैक्टर के तेल, फ़िल्टर और टायर दबाव की जाँच।',
    rate: { en: 'From ₹600 per service', hi: '₹600 प्रति सर्विस से' }
  },
  {
    id: 13,
    name: 'Meera Joshi',
    category: 'Electrician',
    village: 'Sakhawat Gadhi',
    phone: '+91 7483169250',
    available: true,
    serviceDescription: 'Indoor lighting, doorbell fitting, and wiring safety checks.',
    hindiServiceDescription: 'घर की लाइट, घंटी लगाना और वायरिंग सुरक्षा की जाँच।',
    rate: { en: 'From ₹275 per visit', hi: '₹275 प्रति विज़िट से' }
  },
  {
    id: 14,
    name: 'Sahid Ali',
    category: 'Plumber',
    village: 'Fugana',
    phone: '+91 8795246130',
    available: false,
    serviceDescription: 'Kitchen sink fitting and household pipe leak repairs.',
    hindiServiceDescription: 'रसोई सिंक फिटिंग और घर के पाइप रिसाव की मरम्मत।',
    rate: { en: 'From ₹220 per visit', hi: '₹220 प्रति विज़िट से' }
  },
  {
    id: 15,
    name: 'Farida Khan',
    category: 'Tutor',
    village: 'Loi',
    phone: '+91 9274165830',
    available: true,
    serviceDescription: 'Primary reading practice and help organizing daily homework.',
    hindiServiceDescription: 'प्राथमिक कक्षा के लिए पढ़ने और गृहकार्य में नमूना मार्गदर्शन।',
    rate: { en: '₹250 per hour', hi: '₹250 प्रति घंटा' }
  },
  {
    id: 16,
    name: 'Karan Thakur',
    category: 'Mechanic',
    village: 'Teekri',
    phone: '+91 7861359240',
    available: false,
    serviceDescription: 'Basic engine, battery, and two-wheeler maintenance checks.',
    hindiServiceDescription: 'इंजन, बैटरी और दोपहिया वाहन की सामान्य देखभाल जाँच।',
    rate: { en: 'From ₹400 per service', hi: '₹400 प्रति सेवा से' }
  },
  {
    id: 17,
    name: 'Lata Mishra',
    category: 'Tailor',
    village: 'Bhabisa',
    phone: '+91 8139572460',
    available: true,
    serviceDescription: 'Dress adjustments, school uniform stitching, and repairs.',
    hindiServiceDescription: 'कपड़ों की फिटिंग, स्कूल यूनिफॉर्म सिलाई और मरम्मत।',
    rate: { en: 'From ₹150 per item', hi: '₹150 प्रति कपड़ा से' }
  },
  {
    id: 18,
    name: 'Brijesh Rana',
    category: 'Tractor Service',
    village: 'Doonger',
    phone: '+91 9586241730',
    available: true,
    serviceDescription: 'Seasonal tractor inspection and implement attachment checks.',
    hindiServiceDescription: 'मौसम के अनुसार ट्रैक्टर निरीक्षण और उपकरण जोड़ने की जाँच।',
    rate: { en: 'From ₹750 per service', hi: '₹750 प्रति सर्विस से' }
  },
  {
    id: 19,
    name: 'Naveen Rawat',
    category: 'Electrician',
    village: 'Budhana',
    phone: '+91 7391846250',
    available: false,
    serviceDescription: 'Outdoor light fitting and small appliance troubleshooting.',
    hindiServiceDescription: 'बाहरी लाइट लगाना और छोटे उपकरणों की समस्या जाँचना।',
    rate: { en: 'From ₹325 per visit', hi: '₹325 प्रति विज़िट से' }
  },
  {
    id: 20,
    name: 'Geeta Kumari',
    category: 'Plumber',
    village: 'Kalyanpur',
    phone: '+91 8946251370',
    available: true,
    serviceDescription: 'Tap replacement, bathroom fittings, and drain cleaning.',
    hindiServiceDescription: 'नल बदलना, बाथरूम फिटिंग और नाली की सफ़ाई।',
    rate: { en: 'From ₹240 per visit', hi: '₹240 प्रति विज़िट से' }
  },
  {
    id: 21,
    name: 'Devendra Pal',
    category: 'Tutor',
    village: 'Shahpur',
    phone: '+91 9683174250',
    available: false,
    serviceDescription: 'Mathematics practice and revision sessions for school examinations.',
    hindiServiceDescription: 'गणित अभ्यास और परीक्षा दोहराई के नमूना सत्र।',
    rate: { en: '₹320 per hour', hi: '₹320 प्रति घंटा' }
  },
  {
    id: 22,
    name: 'Imran Sheikh',
    category: 'Mechanic',
    village: 'Joula',
    phone: '+91 8274619350',
    available: true,
    serviceDescription: 'Two-wheeler servicing, puncture checks, and brake adjustment.',
    hindiServiceDescription: 'दोपहिया सर्विस, पंचर जाँच और ब्रेक समायोजन।',
    rate: { en: 'From ₹300 per service', hi: '₹300 प्रति सेवा से' }
  },
  {
    id: 23,
    name: 'Kamini Das',
    category: 'Tailor',
    village: 'Bigana',
    phone: '+91 7916284530',
    available: false,
    serviceDescription: 'Everyday clothing repairs and simple custom stitching.',
    hindiServiceDescription: 'रोज़मर्रा के कपड़ों की मरम्मत और सामान्य सिलाई।',
    rate: { en: 'From ₹100 per item', hi: '₹100 प्रति कपड़ा से' }
  },
  {
    id: 24,
    name: 'Prakash Meena',
    category: 'Tractor Service',
    village: 'Loi',
    phone: '+91 9364827150',
    available: true,
    serviceDescription: 'Farm tractor tune-up and basic maintenance support.',
    hindiServiceDescription: 'खेती के ट्रैक्टर की सामान्य सर्विस और देखभाल सहायता।',
    rate: { en: 'From ₹800 per service', hi: '₹800 प्रति सर्विस से' }
  }
];

export default providers;