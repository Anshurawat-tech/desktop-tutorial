import { questionsTa } from './questionsTa'

const base = [
  ['What side of the road should you drive on?', 'सड़क की किस ओर वाहन चलाना चाहिए?', ['Left','Right','Any side','Middle'], 0, 'Keep left'],
  ['Who should wear a helmet on a two-wheeler?', 'दोपहिया वाहन पर हेलमेट किसे पहनना चाहिए?', ['Only the driver','Only the passenger','Driver and passenger','Nobody'], 2, 'Helmet safety'],
  ['What should you do at a red traffic signal?', 'लाल ट्रैफिक सिग्नल पर क्या करना चाहिए?', ['Speed up','Stop','Turn off lights','Honk'], 1, 'Traffic signals'],
  ['Which side should you overtake from?', 'ओवरटेक किस ओर से करना चाहिए?', ['Left','Right','Either side','Footpath'], 1, 'Overtaking'],
  ['Can you use a phone while driving?', 'क्या वाहन चलाते समय फोन का इस्तेमाल कर सकते हैं?', ['Yes, always','Only at speed','No','Only at night'], 2, 'Safe driving'],
  ['What should you do when an ambulance approaches?', 'एम्बुलेंस आने पर क्या करना चाहिए?', ['Block it','Give way','Race it','Ignore it'], 1, 'Giving way'],
  ['What should you do at a pedestrian crossing?', 'पैदल पार-पथ पर क्या करना चाहिए?', ['Stop for pedestrians','Honk and pass','Speed up','Park'], 0, 'Pedestrians'],
  ['Where should you avoid using the horn?', 'हॉर्न का उपयोग कहाँ नहीं करना चाहिए?', ['Open road','Near a hospital','At home','Parking lot'], 1, 'No horn'],
  ['What does a Stop sign mean?', 'रुकें संकेत का क्या अर्थ है?', ['Slow only','Stop completely','Park','Turn right'], 1, 'Stop sign'],
  ['What does a No Entry sign mean?', 'प्रवेश निषेध संकेत का क्या अर्थ है?', ['Enter slowly','Do not enter','Parking','One way'], 1, 'No Entry sign'],
  ['What does a No Parking sign mean?', 'पार्किंग निषेध संकेत का क्या अर्थ है?', ['Parking is free','Do not park','Park for 5 minutes','Repair vehicle'], 1, 'No Parking sign'],
  ['What does a speed limit sign tell you?', 'गति सीमा संकेत क्या बताता है?', ['Minimum age','Maximum speed','Road width','Fuel price'], 1, 'Speed limit sign'],
  ['What does Keep Left mean?', 'बाईं ओर चलें का क्या अर्थ है?', ['Keep left','Turn left now','Stop','Overtake left'], 0, 'Keep Left sign'],
  ['When should you wear a seatbelt?', 'सीट बेल्ट कब लगानी चाहिए?', ['Only on highways','Every time in a car','Only at night','Never'], 1, 'Seatbelt safety'],
  ['What does Give Way mean?', 'रास्ता दें का क्या अर्थ है?', ['Go first','Let other traffic go first','Stop forever','Park'], 1, 'Give Way sign'],
  ['What should you do near a school?', 'स्कूल के पास क्या करना चाहिए?', ['Slow down','Race','Use loud horn','Park on road'], 0, 'School safety'],
  ['What does a pedestrian crossing sign warn about?', 'पैदल पार-पथ संकेत किस बारे में चेतावनी देता है?', ['People crossing','Petrol','Parking','Bridge'], 0, 'Pedestrians'],
  ['What does a hospital sign show?', 'अस्पताल संकेत क्या बताता है?', ['Hospital nearby','Police station','School','Parking'], 0, 'Informatory signs'],
  ['What is the first step at a stop sign?', 'रुकें संकेत पर पहला कदम क्या है?', ['Stop before the line','Overtake','Reverse','Turn off engine only'], 0, 'Stop sign'],
  ['Is it safe to overtake on a blind curve?', 'क्या अंधे मोड़ पर ओवरटेक करना सुरक्षित है?', ['Yes','No','Only fast','Only with horn'], 1, 'Overtaking'],
  ['What should you do before changing lanes?', 'लेन बदलने से पहले क्या करना चाहिए?', ['Check mirrors and signal','Close eyes','Speed up only','Honk continuously'], 0, 'Safe driving'],
  ['What should you do if the road is wet?', 'सड़क गीली हो तो क्या करना चाहिए?', ['Slow down','Speed up','Brake hard only','Use phone'], 0, 'Safe driving'],
  ['Why are traffic signs important?', 'ट्रैफिक संकेत क्यों जरूरी हैं?', ['Guide and warn road users','Decorate roads','Show shops only','Replace brakes'], 0, 'Road rules'],
  ['What does a one-way sign mean?', 'एकतरफा सड़क संकेत का क्या अर्थ है?', ['Traffic one direction','Two-way traffic','No traffic','Parking'], 0, 'One Way sign'],
  ['Can you park near a hospital entrance?', 'क्या अस्पताल के प्रवेश द्वार के पास पार्क कर सकते हैं?', ['Yes','No','Only at noon','Only with lights'], 1, 'No parking'],
  ['What should you do if a pedestrian is crossing?', 'पैदल यात्री पार कर रहा हो तो क्या करना चाहिए?', ['Stop and let them cross','Honk and rush','Overtake them','Park'], 0, 'Pedestrians'],
  ['What does a Road Works sign mean?', 'सड़क निर्माण संकेत का क्या अर्थ है?', ['Road work ahead','Road closed forever','Petrol nearby','Parking'], 0, 'Road works sign'],
  ['What does a right curve sign tell you?', 'दाईं ओर मोड़ संकेत क्या बताता है?', ['Right bend ahead','Turn immediately','No right turn','Parking'], 0, 'Curve sign'],
  ['What is the safe action at a yellow signal?', 'पीले सिग्नल पर सुरक्षित काम क्या है?', ['Prepare to stop','Always speed up','Park','Reverse'], 0, 'Traffic signals'],
  ['Should you sound a loud horn near a school?', 'क्या स्कूल के पास तेज हॉर्न बजाना चाहिए?', ['Yes','No','Only at night','Always'], 1, 'No horn'],
  ['Which document should be carried for a learner test?', 'लर्नर टेस्ट के लिए कौन सा दस्तावेज़ ले जाना चाहिए?', ['Appointment details and required documents','Shopping bill','Movie ticket','None'], 0, 'Test day'],
  ['How long is a learner licence valid in this prototype?', 'इस प्रोटोटाइप में लर्नर लाइसेंस कितने समय तक मान्य है?', ['1 month','3 months','6 months','5 years'], 2, 'Learner licence'],
  ['When can you apply for a permanent licence?', 'स्थायी लाइसेंस के लिए कब आवेदन कर सकते हैं?', ['The same day','After 30 days','After 1 day','After 5 years'], 1, 'Permanent licence'],
  ['What should you do if you miss your appointment?', 'अपॉइंटमेंट छूट जाए तो क्या करना चाहिए?', ['Check rescheduling options','Ignore forever','Create fake receipt','Drive without licence'], 0, 'Appointments'],
  ['Why should you check mirrors?', 'शीशे क्यों देखने चाहिए?', ['To see surrounding traffic','For decoration','To save fuel','To change radio'], 0, 'Safe driving'],
  ['What does a No Horn sign mean?', 'हॉर्न निषेध संकेत का क्या अर्थ है?', ['Do not use horn','Honk twice','Horn is free','Stop parking'], 0, 'No Horn sign'],
  ['What does a parking sign show?', 'पार्किंग संकेत क्या बताता है?', ['Parking available','No entry','Hospital','School'], 0, 'Parking sign'],
  ['What should a rider do before starting?', 'चालक को शुरू करने से पहले क्या करना चाहिए?', ['Wear helmet and check vehicle','Use phone','Remove mirrors','Ignore traffic'], 0, 'Helmet safety'],
  ['What is a common reason to fail a driving test?', 'ड्राइविंग टेस्ट में फेल होने का आम कारण क्या है?', ['Ignoring signals','Using indicators','Checking mirrors','Wearing helmet'], 0, 'Driving test'],
  ['What should you do when another vehicle has right of way?', 'जब दूसरे वाहन को रास्ते का अधिकार हो तो क्या करें?', ['Give way','Block it','Race it','Honk loudly'], 0, 'Giving way']
]

const hindiOptions = {
  Left:'बाईं ओर', Right:'दाईं ओर', 'Any side':'किसी भी ओर', Middle:'बीच में',
  'Only the driver':'सिर्फ चालक', 'Only the passenger':'सिर्फ यात्री', 'Driver and passenger':'चालक और यात्री', Nobody:'कोई नहीं',
  'Speed up':'तेज चलें', Stop:'रुकें', 'Turn off lights':'लाइट बंद करें', Honk:'हॉर्न बजाएँ', 'Either side':'किसी भी ओर', Footpath:'फुटपाथ',
  'Yes, always':'हाँ, हमेशा', 'Only at speed':'केवल गति पर', No:'नहीं', 'Only at night':'केवल रात में', 'Block it':'रास्ता रोकें', 'Give way':'रास्ता दें', 'Race it':'दौड़ लगाएँ', 'Ignore it':'अनदेखा करें',
  'Stop for pedestrians':'पैदल यात्रियों के लिए रुकें', 'Honk and pass':'हॉर्न बजाकर निकलें', Park:'पार्क करें', 'Open road':'खुली सड़क', 'Near a hospital':'अस्पताल के पास', 'At home':'घर पर', 'Parking lot':'पार्किंग',
  'Slow only':'सिर्फ धीमा', 'Stop completely':'पूरी तरह रुकें', 'Turn right':'दाईं ओर मुड़ें', 'Enter slowly':'धीरे प्रवेश करें', 'Parking is free':'पार्किंग मुफ्त है', 'Park for 5 minutes':'5 मिनट पार्क करें', 'Repair vehicle':'वाहन ठीक करें',
  'Minimum age':'न्यूनतम उम्र', 'Maximum speed':'अधिकतम गति', 'Road width':'सड़क की चौड़ाई', 'Fuel price':'ईंधन की कीमत', 'Keep left':'बाईं ओर चलें', 'Turn left now':'अभी बाईं ओर मुड़ें', 'Overtake left':'बाईं ओर ओवरटेक',
  'Go first':'पहले जाएँ', 'Let other traffic go first':'दूसरे यातायात को पहले जाने दें', 'Stop forever':'हमेशा रुकें', 'Slow down':'धीमा चलें', Race:'दौड़ें', 'Use loud horn':'तेज हॉर्न बजाएँ', 'Park on road':'सड़क पर पार्क करें',
  'People crossing':'लोग पार कर रहे हैं', Petrol:'पेट्रोल', Bridge:'पुल', 'Hospital nearby':'पास में अस्पताल', 'Police station':'पुलिस स्टेशन', School:'स्कूल', 'Stop before the line':'लाइन से पहले रुकें', Overtake:'ओवरटेक', Reverse:'पीछे चलें', 'Turn off engine only':'सिर्फ इंजन बंद करें',
  'Only fast':'सिर्फ तेज', 'Only with horn':'सिर्फ हॉर्न के साथ', 'Check mirrors and signal':'शीशे देखें और संकेत दें', 'Close eyes':'आँखें बंद करें', 'Speed up only':'सिर्फ तेज चलें', 'Honk continuously':'लगातार हॉर्न बजाएँ',
  'Guide and warn road users':'सड़क उपयोगकर्ताओं को मार्गदर्शन और चेतावनी', 'Decorate roads':'सड़क सजाना', 'Show shops only':'सिर्फ दुकान दिखाना', 'Replace brakes':'ब्रेक बदलना', 'Traffic one direction':'एक दिशा में यातायात', 'Two-way traffic':'दो तरफा यातायात', 'No traffic':'यातायात नहीं',
  'Road work ahead':'आगे सड़क का काम', 'Road closed forever':'सड़क हमेशा बंद', 'Right bend ahead':'आगे दाईं ओर मोड़', 'Turn immediately':'तुरंत मुड़ें', 'No right turn':'दाईं ओर मुड़ना मना', 'Prepare to stop':'रुकने के लिए तैयार',
  'Appointment details and required documents':'अपॉइंटमेंट विवरण और जरूरी दस्तावेज़', 'Shopping bill':'खरीदारी की रसीद', 'Movie ticket':'फिल्म टिकट', 'None':'कुछ नहीं', '1 month':'1 महीना', '3 months':'3 महीने', '6 months':'6 महीने', '5 years':'5 साल',
  'The same day':'उसी दिन', 'After 30 days':'30 दिनों बाद', 'After 1 day':'1 दिन बाद', 'After 5 years':'5 साल बाद', 'Check rescheduling options':'रीशेड्यूल विकल्प देखें', 'Ignore forever':'हमेशा अनदेखा करें', 'Create fake receipt':'नकली रसीद बनाएँ', 'Drive without licence':'लाइसेंस के बिना चलाएँ',
  'To see surrounding traffic':'आसपास का यातायात देखने के लिए', Decoration:'सजावट', 'To save fuel':'ईंधन बचाने के लिए', 'To change radio':'रेडियो बदलने के लिए', 'Honk twice':'दो बार हॉर्न बजाएँ', 'Horn is free':'हॉर्न मुफ्त है', 'Stop parking':'पार्किंग रोकें', 'Parking available':'पार्किंग उपलब्ध', 'No entry':'प्रवेश निषेध',
  'Wear helmet and check vehicle':'हेलमेट पहनें और वाहन जाँचें', 'Use phone':'फोन इस्तेमाल करें', 'Remove mirrors':'शीशे हटाएँ', 'Ignore traffic':'यातायात अनदेखा करें', 'Ignoring signals':'संकेत अनदेखा करना', 'Using indicators':'इंडिकेटर इस्तेमाल करना', 'Checking mirrors':'शीशे देखना', 'Wearing helmet':'हेलमेट पहनना', 'Honk loudly':'तेज हॉर्न बजाएँ'
}

const reasons = {
  'Keep left': { en:'Drive on the left side and follow the lane.', hi:'बाईं ओर चलें और लेन का पालन करें।', ta:'இடப்புறம் சென்று லேனைப் பின்பற்றவும்.' },
  'Helmet safety': { en:'A helmet protects the rider and passenger.', hi:'हेलमेट चालक और यात्री की सुरक्षा करता है।', ta:'ஹெல்மெட் ஓட்டுநரையும் பின்னால் இருப்பவரையும் பாதுகாக்கும்.' },
  'Traffic signals': { en:'Signals tell you when to stop or move.', hi:'सिग्नल बताते हैं कि कब रुकना या चलना है।', ta:'சிக்னல் எப்போது நிற்கவும் செல்லவும் சொல்லும்.' },
  'Overtaking': { en:'Overtake on the right only when the road is clear and safe.', hi:'सड़क साफ और सुरक्षित हो तभी दाईं ओर से ओवरटेक करें।', ta:'சாலை தெளிவாகவும் பாதுகாப்பாகவும் இருந்தால் மட்டும் வலப்புறம் முந்தவும்.' },
  'Safe driving': { en:'Stay alert, signal, check mirrors and control your speed.', hi:'सतर्क रहें, संकेत दें, शीशे देखें और गति नियंत्रित रखें।', ta:'கவனமாக இருந்து சிக்னல் கொடுத்து, கண்ணாடி பார்த்து, வேகத்தை கட்டுப்படுத்தவும்.' },
  'Giving way': { en:'Let the vehicle with priority pass first.', hi:'जिस वाहन को प्राथमिकता है उसे पहले जाने दें।', ta:'முன்னுரிமை உள்ள வாகனம் முதலில் செல்ல வழி விடவும்.' },
  'Pedestrians': { en:'People walking must have time to cross safely.', hi:'पैदल लोगों को सुरक्षित पार होने का समय दें।', ta:'நடந்து செல்லும் மக்கள் பாதுகாப்பாக கடக்க நேரம் கொடுக்கவும்.' },
  'No horn': { en:'Avoid the horn near quiet places such as hospitals and schools.', hi:'अस्पताल और स्कूल जैसे शांत स्थानों के पास हॉर्न से बचें।', ta:'மருத்துவமனை, பள்ளி போன்ற அமைதியான இடங்களில் ஹார்னைத் தவிர்க்கவும்.' },
  'Road rules': { en:'Signs guide and warn everyone using the road.', hi:'संकेत सड़क का उपयोग करने वालों को मार्गदर्शन और चेतावनी देते हैं।', ta:'சாலை பயன்படுத்துவோருக்கு குறியீடுகள் வழிகாட்டி எச்சரிக்கின்றன.' },
  'Learner licence': { en:'This prototype uses a six-month learner licence validity.', hi:'इस प्रोटोटाइप में लर्नर लाइसेंस छह महीने मान्य है।', ta:'இந்த மாதிரியில் லேர்னர் லைசன்ஸ் ஆறு மாதங்கள் செல்லும்.' },
  'Permanent licence': { en:'The permanent licence step starts after the 30-day wait.', hi:'30 दिन की प्रतीक्षा के बाद स्थायी लाइसेंस का चरण शुरू होता है।', ta:'30 நாள் காத்திருப்புக்குப் பிறகு நிரந்தர லைசன்ஸ் படி தொடங்கும்.' },
  'Appointments': { en:'Check the RTO rules and choose a new slot.', hi:'RTO के नियम देखें और नया स्लॉट चुनें।', ta:'RTO விதிகளைப் பார்த்து புதிய நேரத்தைத் தேர்வு செய்யவும்.' },
  'Test day': { en:'Carry the appointment details and required documents.', hi:'अपॉइंटमेंट विवरण और जरूरी दस्तावेज़ साथ रखें।', ta:'அப்பாயின்ட்மென்ட் விவரமும் தேவையான ஆவணங்களும் எடுத்துச் செல்லவும்.' },
  'Driving test': { en:'Follow signals, stay controlled and practise before the test.', hi:'संकेतों का पालन करें, नियंत्रण रखें और टेस्ट से पहले अभ्यास करें।', ta:'சிக்னல்களைப் பின்பற்றி கட்டுப்பாட்டுடன் இருந்து தேர்வுக்கு முன் பயிற்சி செய்யவும்.' },
  'Informatory signs': { en:'Informatory signs point to useful places and services.', hi:'सूचनात्मक संकेत उपयोगी जगहों और सेवाओं का रास्ता बताते हैं।', ta:'தகவல் குறியீடுகள் பயனுள்ள இடங்களையும் சேவைகளையும் காட்டும்.' }
}

export const questions = base.map((q, index) => ({
  id:index+1, en:q[0], hi:q[1], ta:questionsTa[index][0],
  optionsEn:q[2], optionsHi:q[2].map(option => hindiOptions[option] || option), optionsTa:questionsTa[index][1],
  correct:q[3], topic:q[4], explanation:reasons[q[4]] || reasons['Road rules']
}))
