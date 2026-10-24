export const schemeCategories = [
  {
    id: 'farmers',
    name: {
      en: 'Farmers',
      hi: 'किसान'
    },
    icon: '🌾'
  },
  {
    id: 'students',
    name: {
      en: 'Students',
      hi: 'विद्यार्थी'
    },
    icon: '📚'
  },
  {
    id: 'women-families',
    name: {
      en: 'Women & Families',
      hi: 'महिलाएँ और परिवार'
    },
    icon: '👪'
  },
  {
    id: 'general',
    name: {
      en: 'General',
      hi: 'सामान्य'
    },
    icon: 'ℹ️'
  }
];

const officialCheck =
  'For current guidance, eligibility, and application information, consult the relevant official government portal.';

const officialCheckHi =
  'वर्तमान मार्गदर्शन, पात्रता और आवेदन जानकारी के लिए संबंधित आधिकारिक सरकारी पोर्टल देखें।';

const schemes = [
  {
    id: 'demo-farmer-support',
    category: 'farmers',
    name: {
      en: 'Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)',
      hi: 'प्रधानमंत्री किसान सम्मान निधि (पीएम-किसान)'
    },
    shortDescription: {
      en: 'A Government of India income-support scheme for eligible landholding farmer families.',
      hi: 'पात्र भूमिधारक किसान परिवारों के लिए भारत सरकार की आय सहायता योजना।'
    },
    description: {
      en: 'PM-KISAN is a Central Sector scheme administered by the Department of Agriculture and Farmers Welfare. State and Union Territory authorities identify eligible beneficiaries under the scheme guidelines. Check the official portal for current status and rules.',
      hi: 'पीएम-किसान कृषि एवं किसान कल्याण विभाग द्वारा संचालित केंद्रीय क्षेत्र की योजना है। योजना के दिशानिर्देशों के अनुसार राज्य और केंद्रशासित प्रदेश के अधिकारी पात्र लाभार्थियों की पहचान करते हैं। वर्तमान स्थिति और नियमों के लिए आधिकारिक पोर्टल देखें।'
    },
    eligibility: {
      en: officialCheck,
      hi: officialCheckHi
    },
    benefits: {
      en: 'The scheme provides income support through the process described on its official portal; check that portal for current details.',
      hi: 'योजना के आधिकारिक पोर्टल पर वर्णित प्रक्रिया के अनुसार आय सहायता दी जाती है; वर्तमान विवरण वहीं देखें।'
    }
  },
  {
    id: 'demo-crop-learning',
    category: 'farmers',
    name: {
      en: 'Pradhan Mantri Fasal Bima Yojana (PMFBY)',
      hi: 'प्रधानमंत्री फसल बीमा योजना (पीएमएफबीवाई)'
    },
    shortDescription: {
      en: 'A government crop-insurance programme intended to support farmers facing crop loss from unforeseen events.',
      hi: 'अप्रत्याशित घटनाओं से फसल नुकसान का सामना करने वाले किसानों के लिए सरकारी फसल बीमा कार्यक्रम।'
    },
    description: {
      en: 'PMFBY is a crop insurance scheme under the Ministry of Agriculture and Farmers Welfare. Coverage, notified crops, enrolment arrangements, and timelines can vary; consult the official portal and local agriculture department for current information.',
      hi: 'पीएमएफबीवाई कृषि एवं किसान कल्याण मंत्रालय की फसल बीमा योजना है। बीमा कवरेज, अधिसूचित फसलें, नामांकन व्यवस्था और समयसीमा अलग-अलग हो सकती हैं; वर्तमान जानकारी के लिए आधिकारिक पोर्टल और स्थानीय कृषि विभाग से संपर्क करें।'
    },
    eligibility: {
      en: officialCheck,
      hi: officialCheckHi
    },
    benefits: {
      en: 'The scheme is designed to provide insurance support for specified crop losses; coverage details depend on current notifications.',
      hi: 'यह योजना निर्दिष्ट फसल नुकसान के लिए बीमा सहायता देने के उद्देश्य से बनाई गई है; कवरेज का विवरण वर्तमान अधिसूचनाओं पर निर्भर करता है।'
    }
  },
  {
    id: 'demo-student-learning',
    category: 'general',
    name: {
      en: 'Ayushman Bharat – Pradhan Mantri Jan Arogya Yojana (AB PM-JAY)',
      hi: 'आयुष्मान भारत – प्रधानमंत्री जन आरोग्य योजना (एबी पीएम-जेएवाई)'
    },
    shortDescription: {
      en: 'A national health assurance programme that supports access to hospital care for eligible families.',
      hi: 'पात्र परिवारों के लिए अस्पताल में इलाज तक पहुँच में सहायता देने वाला राष्ट्रीय स्वास्थ्य आश्वासन कार्यक्रम।'
    },
    description: {
      en: 'AB PM-JAY is implemented by the National Health Authority with States and Union Territories. Beneficiary identification and service arrangements follow official rules; check the NHA or official beneficiary portal for current guidance.',
      hi: 'एबी पीएम-जेएवाई राष्ट्रीय स्वास्थ्य प्राधिकरण द्वारा राज्यों और केंद्रशासित प्रदेशों के साथ लागू की जाती है। लाभार्थी पहचान और सेवाओं की व्यवस्था आधिकारिक नियमों के अनुसार होती है; वर्तमान मार्गदर्शन के लिए एनएचए या आधिकारिक लाभार्थी पोर्टल देखें।'
    },
    eligibility: {
      en: officialCheck,
      hi: officialCheckHi
    },
    benefits: {
      en: 'The programme provides health-assurance coverage for eligible beneficiaries as described by the National Health Authority.',
      hi: 'राष्ट्रीय स्वास्थ्य प्राधिकरण के विवरण के अनुसार यह कार्यक्रम पात्र लाभार्थियों को स्वास्थ्य आश्वासन कवरेज देता है।'
    }
  },
  {
    id: 'demo-student-guidance',
    category: 'students',
    name: {
      en: 'PM POSHAN',
      hi: 'पीएम पोषण'
    },
    shortDescription: {
      en: 'A school nutrition programme providing meals in covered government and government-aided schools.',
      hi: 'शामिल सरकारी और सरकारी सहायता प्राप्त विद्यालयों में भोजन उपलब्ध कराने वाला विद्यालय पोषण कार्यक्रम।'
    },
    description: {
      en: 'PM POSHAN (Pradhan Mantri Poshan Shakti Nirman) is the Government of India school-meal programme. Its current scope and implementation details should be checked with the Ministry of Education and the relevant state education department.',
      hi: 'पीएम पोषण (प्रधानमंत्री पोषण शक्ति निर्माण) भारत सरकार का विद्यालय भोजन कार्यक्रम है। इसके वर्तमान दायरे और कार्यान्वयन की जानकारी शिक्षा मंत्रालय और संबंधित राज्य शिक्षा विभाग से जाँचें।'
    },
    eligibility: {
      en: 'School coverage and implementation details are set by official programme guidance; consult the school or state education department.',
      hi: 'विद्यालय कवरेज और कार्यान्वयन का विवरण आधिकारिक कार्यक्रम निर्देशों से तय होता है; विद्यालय या राज्य शिक्षा विभाग से जानकारी लें।'
    },
    benefits: {
      en: 'The programme supports school nutrition through meals in covered schools.',
      hi: 'यह कार्यक्रम शामिल विद्यालयों में भोजन के माध्यम से विद्यार्थियों के पोषण में सहायता करता है।'
    }
  },
  {
    id: 'demo-family-wellbeing',
    category: 'women-families',
    name: {
      en: 'Beti Bachao Beti Padhao (BBBP)',
      hi: 'बेटी बचाओ बेटी पढ़ाओ (बीबीबीपी)'
    },
    shortDescription: {
      en: 'A national initiative focused on valuing the girl child and improving awareness around her education and well-being.',
      hi: 'बालिका के महत्व और उसकी शिक्षा तथा कल्याण के प्रति जागरूकता पर केंद्रित राष्ट्रीय पहल।'
    },
    description: {
      en: 'Beti Bachao Beti Padhao is a Government of India initiative implemented through coordinated action across departments. Consult the Ministry of Women and Child Development and local authorities for current activities and guidance.',
      hi: 'बेटी बचाओ बेटी पढ़ाओ विभिन्न विभागों के समन्वित प्रयास से लागू भारत सरकार की पहल है। वर्तमान गतिविधियों और मार्गदर्शन के लिए महिला एवं बाल विकास मंत्रालय तथा स्थानीय अधिकारियों से जानकारी लें।'
    },
    eligibility: {
      en: officialCheck,
      hi: officialCheckHi
    },
    benefits: {
      en: 'The initiative focuses on awareness and coordinated action; consult official sources for available local services.',
      hi: 'यह पहल जागरूकता और समन्वित कार्रवाई पर केंद्रित है; स्थानीय सेवाओं के लिए आधिकारिक स्रोत देखें।'
    }
  },
  {
    id: 'demo-family-information',
    category: 'women-families',
    name: {
      en: 'Sukanya Samriddhi Account',
      hi: 'सुकन्या समृद्धि खाता'
    },
    shortDescription: {
      en: 'A small-savings deposit account offered under the Government of India’s savings framework for a girl child.',
      hi: 'बालिका के लिए भारत सरकार की बचत व्यवस्था के अंतर्गत उपलब्ध लघु बचत जमा खाता।'
    },
    description: {
      en: 'The Sukanya Samriddhi Account is part of the National Savings Schemes. Account conditions, deposits, interest rates, and tax treatment are governed by current official rules and may change. Check India Post or an authorised bank.',
      hi: 'सुकन्या समृद्धि खाता राष्ट्रीय बचत योजनाओं का हिस्सा है। खाते की शर्तें, जमा, ब्याज दर और कर व्यवस्था वर्तमान आधिकारिक नियमों के अधीन हैं और बदल सकती हैं। इंडिया पोस्ट या अधिकृत बैंक से जानकारी लें।'
    },
    eligibility: {
      en: 'Account opening conditions are governed by current scheme rules. Please confirm them with India Post or an authorised bank.',
      hi: 'खाता खोलने की शर्तें वर्तमान योजना नियमों के अनुसार हैं। इंडिया पोस्ट या अधिकृत बैंक से पुष्टि करें।'
    },
    benefits: {
      en: 'Savings accrue according to the rules and rates in force; consult an authorised provider for current details.',
      hi: 'बचत पर लागू नियमों और दरों के अनुसार लाभ मिलता है; वर्तमान विवरण अधिकृत संस्था से लें।'
    }
  },
  {
    id: 'demo-community-information',
    category: 'general',
    name: {
      en: 'Pradhan Mantri Ujjwala Yojana (PMUY)',
      hi: 'प्रधानमंत्री उज्ज्वला योजना (पीएमयूवाई)'
    },
    shortDescription: {
      en: 'A Government of India programme related to access to clean cooking fuel for eligible households.',
      hi: 'पात्र परिवारों के लिए स्वच्छ खाना पकाने के ईंधन तक पहुँच से जुड़ा भारत सरकार का कार्यक्रम।'
    },
    description: {
      en: 'PMUY is administered by the Ministry of Petroleum and Natural Gas. Current application processes and eligibility conditions should be confirmed through the official PMUY portal or an authorised LPG distributor.',
      hi: 'पीएमयूवाई पेट्रोलियम और प्राकृतिक गैस मंत्रालय द्वारा संचालित है। वर्तमान आवेदन प्रक्रिया और पात्रता शर्तों की पुष्टि आधिकारिक पीएमयूवाई पोर्टल या अधिकृत एलपीजी वितरक से करें।'
    },
    eligibility: {
      en: officialCheck,
      hi: officialCheckHi
    },
    benefits: {
      en: 'The programme supports eligible households in accessing LPG connections under current government rules.',
      hi: 'वर्तमान सरकारी नियमों के तहत यह कार्यक्रम पात्र परिवारों को एलपीजी कनेक्शन तक पहुँच में सहायता देता है।'
    }
  },
  {
    id: 'demo-public-guidance',
    category: 'students',
    name: {
      en: 'National Means-cum-Merit Scholarship Scheme (NMMSS)',
      hi: 'राष्ट्रीय साधन-सह-योग्यता छात्रवृत्ति योजना (एनएमएमएसएस)'
    },
    shortDescription: {
      en: 'A central scholarship scheme intended to support meritorious students from economically weaker sections in continuing secondary education.',
      hi: 'आर्थिक रूप से कमजोर वर्गों के मेधावी विद्यार्थियों को माध्यमिक शिक्षा जारी रखने में सहायता देने के उद्देश्य वाली केंद्रीय छात्रवृत्ति योजना।'
    },
    description: {
      en: 'NMMSS is administered by the Ministry of Education. Selection, application windows, and conditions are governed by current notifications; check the National Scholarship Portal and Ministry of Education for the applicable year.',
      hi: 'एनएमएमएसएस शिक्षा मंत्रालय द्वारा संचालित है। चयन, आवेदन अवधि और शर्तें वर्तमान अधिसूचनाओं के अनुसार हैं; संबंधित वर्ष की जानकारी राष्ट्रीय छात्रवृत्ति पोर्टल और शिक्षा मंत्रालय से देखें।'
    },
    eligibility: {
      en: officialCheck,
      hi: officialCheckHi
    },
    benefits: {
      en: 'Scholarship support is subject to selection and the rules notified for the relevant year.',
      hi: 'छात्रवृत्ति सहायता चयन और संबंधित वर्ष के लिए अधिसूचित नियमों के अधीन है।'
    }
  }
];

export default schemes;