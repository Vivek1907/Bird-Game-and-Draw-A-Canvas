var cycloneStatus = {
    five: ' is safe from cyclones',
    four: ' is less prone to cyclones',
    three: ' is moderately prone to cyclones',
    two: ' is highly prone to cyclones',
    one: ' is very highly prone to cyclones'
}

function checkCycloneDistricts(){
  checkLocalityListForVHP('NELLORE','EAST GODAVARI','KRISHNA','BALASORE','KENDRAPURA','JAGATSINGHPUR','BHADRAK','YANAM','SOUTH 24 PARGANAS','MEDINIPUR','NORTH 24 PARGANAS','KOLKATA');
  checkLocalityListForHP('SRIKAKULAM','GUNTUR','VISAKHAPATNAM','WEST GODAVARI','PRAKASAM','ONGOLE','VIZIANAGARAM','DIU','JUNAGADH','GIR SOMNATH','KUTCH','LAKSHADWEEP','GANJAM','PURI','KHORDA','KARAIKAL','PUDUKKOTTAI','CUDDALORE','KANCHIPURAM','TIRUVARUR','NAGAPATTINAM','CHENNAI','RAMANATHAPURAM','RAMNATHAPURAM','THOOTHUKUDI','TIRUNELVELI','CHITTOR','HOWRAH');
  checkLocalityListForMP('ANDAMAN AND NICOBAR','DAMAN','NORTH GOA','SOUTH GOA','AHMEDABAD','BHAVNAGAR','AMRELI','JAMNAGAR','DEVBHOOMI DWARKA','ANAND','NAVSARI','SURAT','VALSAD','BHARUCH','PORBANDAR','RAJKOT','VADODARA','UDUPI','UTTARA KANNADA','DAKSHINA KANNADA','KOZHIKODE','CALICUT','MALAPPURAM','THRISSUR','KANNUR','KOLLAM','ALAPPUZHA','THIRUVANATHAPURAM','THANE','MUMBAI SUBURBAN','MUMBAI CITY','RATNAGIRI','RAIGAD','SINDHUDURG','PONDICHERRY','MAHE','VILLUPPURAM','TANJAVUR','TIRUVALLUR','KANYAKUMARI','DADRA AND NAGAR HAVELI','MAYURBHANJ','CUTTACK','NAYAGARH','GAJAPATI','JAJPUR','KEONJHAR','HOOGHLY','BARDHAMAN');
  checkLocalityListForLP('KASARGOD','ERNAKULAM','SURENDRA NAGAR','KHEDA','WAYNAD','PALLAKAD','KOTTYAM','IDDUKI','PATHANAMTHITA','DHENKANAL','ARIYALUR','TIRUVANNAMALAI','SIVAGANGA')
}

function getCycloneDistricts(){
  stormZone.subSelect.option('Choose A District');
  stormZone.subSelect.selected('Choose A District')

  localityList('Andhra Pradesh','Anantapur', 'Chittoor','East Godavari','Guntur','Kadapa','Krishna', 'Kurnool','Prakasam', 'Nellore', 'Srikakulam', 'Visakhapatnam', 'Vizianagaram','West Godavari');
  localityList('Arunachal Pradesh','Anjaw', 'Changlang', 'East Kameng', 'East Siang',  'Kamle', 'Kra Daadi',  'Kurung Kumey',  'Lepa Rada',  'Lohit', 'Longding', 'Lower Dibang Valley','Lower Siang',  'Lower Subansiri', 'Namasai', 'Pakke-Kessang', 'Papum Pare', 'Shi Yomi', 'Siang', 'Tawang', 'Tirap', 'Upper Dibang Valley', 'Upper Siang',  'Upper Subansiri', 'West Kameng', 'West Siang');
  localityList('Assam','Baksa',  'Barpeta', 'Bishwanath', 'Bongaigaon', 'Cachar', 'Charaideo', 'Chirang', 'Darrang',      'Dhemaji',      'Dhubri',      'Dibrugarh',      'Dima Hasao',      'Goalpara',      'Golaghat',      'Guwahati',      'Hailakandi',      'Hojai',      'Jorhat',      'Kamrup',      'Karbi Anglong',      'Karimganj',      'Kokrajhar',      'Lakhimpur',      'Majuli',      'Morigaon',      'Nagaon',      'Nalbari',      'Sivasagar',      'South Salmara',      'Sonitpur',      'Tinsukia',      'Udalguri',      'West Karbi Anglong'   );
  localityList('Bihar', 'Araria', 'Arwal', 'Aurangabad', 'Banka', 'Begusarai', 'Bhagalpur', 'Bhojpur', 'Buxar','Darbhanga',    'East Champaran',    'Gaya',    'Gopalganj',    'Jamui',    'Jehanabad',    'Kaimur',    'Katihar',    'Khagaria',    'Kishanganj',    'Lakhisarai',    'Madhepura',    'Madhubani',    'Munger',    'Muzaffarpur',    'Nalanda',    'Nawada',    'Patna',    'Purnia',    'Rohtas',    'Saharsa',    'Samastipur',    'Saran',    'Sheikhpura',    'Sheohar',    'Sitamarhi',    'Siwan',    'Supaul',    'Vaishali',    'West Champaran')
  localityList('Chhattisgarh','Balod','Baloda Bazar','Balrampur','Bastar','Bemetara','Bijapur','Bilaspur','Dantewada','Dhamtari','Durg','Gariaband','Gaurela','Janjgir-Champa','Jashpur','Kabirdham','Kanker','Kondagaon','Korba','Koriya','Mahasamund','Mungeli','Narayanpur','Raigarh','Raipur','Rajnandgaon','Sukma','Surajpur','Surguja');
  localityList('Goa','North Goa', 'South Goa');
  localityList('Gujarat','Ahmedabad','Amreli','Anand','Aravalli','Banaskantha','Bharuch','Bhavnagar','Botad','Chotta Udepur','Dahod','Dang','Devbhoomi Dwarka','Gandhinagar','Gir Somnath','Jamnagar','Junagadh','Kheda','Kutch','Mahisagar','Mehsana','Morbi','Narmada','Navsari','Panchmahal','Patan','Porbandar','Rajkot','Sabarkantha','Surat','Surendranagar','Tapi','Vadodara','Valsad');
  localityList('Haryana','Ambala','Bhiwani','Charki Dadri','Faridabad','Fatehabad','Gurgaon','Hissar','Jhajjar','Jind','Kaithal','Karnal','Kurukshetra','Mahendragarh','Nuh','Palwal','Panchkula','Panipat','Rewari','Rohtak','Sirsa','Sonipat','Yamuna Nagar')
  localityList('Himachal Pradesh','Bilaspur','Chamba','Dharmashala','Hamirpur','Kinnaur','Kullu','Lahaul and Spiti','Mandi','Shimla','Srimaur','Solan','Una')
  localityList('Jharkhand','Bokaro','Chatra','Deoghar','Dhanbad','Dumka','East Singbhum','Garhwa','Giridih','Godda','Gumla','Hazaribag','Jamtara','Khunti','Koderma','Latehar','Lohardaga','Pakur','Palamu','Ramgarh','Ranchi','Sahibganj','Seraikela Kharsawan','Simdega','West Singhbum')
  localityList('Karnataka','Bagalkot','Ballari','Belagavi','Bangalore Rural','Bangalore Urban','Bidar','Chamarajanagar','Chikkaballapur','Chikkamagaluru','Chitradurga','Dakshina Kannada','Davangere','Dharwad','Gadag','Gulbarga','Hassan','Haveri','Kodagu','Kolar','Koppala','Mandya','Mysuru','Raichur','Ramanagara','Shimoga','Tumkur','Udupi','Uttara Kannada','Vijayapur','Yadgir');
  localityList('Kerala','Alppuzha','Ernakulam','Idukki','Kannur','Kasaragod','Kollam','Kottayam','Kozhikode','Mallapuram','Palakkad','Pathanamthitta','Thrissur','Thiruvanathapuram','Wayanad')
  localityList('Madhya Pradesh','Agar Malwa','Alirajpur','Anuppur','Ashok Nagar','Balaghat','Barwani','Betul','Bhind','Bhopal','Burhanpur','Chachaura','Chhatarpur','Chhindwara','Damoh','Datia','Dewas','Dhar','Dindori','Guna','Gwalior','Harda','Hoshangabad','Indore','Jabalpur','Jhabua','Katni','Khandwa','Khargone','Maihar','Mandia','Mandia','Mandsaur','Morena','Narsinghpur','Nagda','Neemuch','Niwari','Panna','Raisen','Rajgarh','Ratlam','Rewa','Sagar','Satna','Sehore','Seoni','Shahdol','Shivpur','Sidhi','Singrauli','Tikamgarh','Ujjain','Umaria','Vidisha');
  localityList('Maharashtra','Ahmednagar','Akola','Amravati','Aurangabad','Beed','Bhandara','Buldhana','Chandrapur','Dhule','Gadchiroli','Gondia','Hingoli','Jalgaon','Jaina','Kolhapur','Latur','Mumbai City','Mumbai Suburban','Nanded','Nandurbar','Nagpur','Nashik','Osmanabad','Palghar','Parbhani','Pune','Raigad','Ratnagiri','Sangli','Satara','Sindhdurg','Solapur','Thane','Wardha','Washim','Yavatmal');
  localityList('Manipur','Ahmednagar','Akola','Amravati','Aurangabad','Beed','Bhandara','Buldhana','Chandrapur','Dhule','Gadchiroli','Gondia','Hingoli','Jalgaon','Jaina','Kolhapur','Latur','Mumbai City','Mumbai Suburban','Nanded','Nandurbar','Nagpur','Nashik','Osmanabad','Palghar','Parbhani','Pune','Ralgad','Ratnagiri','Sangli','Satara','Sindhdurg','Solapur','Thane','Wardha','Washim','Yavatmal');
  localityList('Meghalaya','Williamnagar', 'Shillong', 'Khliehriat', 'Resubelpara', 'Nongpoh', 'Baghmara', 'Ampati', 'Mawkyrwat', 'Jowai', 'Tura', 'Nongstoin');
  localityList('Mizoram','Aizawl', 'Champhai', 'Kolasib', 'Lawngtlai', 'Lun glei', 'Mamit',  'Saiha', 'Serchhip');
  localityList('Nagaland','Dimapur', 'Kiphire', 'Kohima','Longleng','Mokokchung','Mon','Noklak','Peren','Phek','Tuensang','Wokha','Zunheboto');
  localityList('Odisha','Angul','Boudh','Bhadrak','Balangir','	Bargarh','Balasore','Cuttack','Debagarh','Dhenkanal','Ganjam','Gajapati','Jharsuguda','Jajpur','Jagatsinghpur','Khordha','Kendujhar','Kalahandi','Kandhamal','Koraput','Kendrapara','Malkangiri','Mayurbhanj','Nabarangpur','Nuapada','Nayagarh','Puri','Rayagada','Sambalpur','Subarnapur','Sundargarh');
  localityList('Punjab','Amritsar', 'Barnala', 'Bathinda' ,'Firozpur','Faridkot', 'Fatehgarh Sahib', 'Fazilka','Gurdaspur','Hoshiarpur','Jalandhar','Kapurthala','Ludhiana','Mansa','Moga','Sri Muktsar Sahib','Pathankot','Patiala','Rupnagar','Sahibzada  Ajit Singh Nagar','Sangrur','Shahid Bhagat Singh Nagar','Tarn Taran');
  localityList('Rajasthan','Ajmer','Alwar','Bikaner','Barmer','Banswara','Bharatpur','Baran','Bundi','Bhilwara','Churu','Chittorgarh','Dausa','Dholpur','Dungarpur','Ganganagar','Hanumangarh','Jhunjhunu','Jalore','Jodhpur','Jaipur','Jaisalmer','Jhalawar','Karauli','Kota','Nagaur','Pali','Pratapgarh','Rajsamand','Sikar','Sawai Madhopur','Sirohi','Tonk','Udaipur');
  localityList('Sikkim','East Sikkim','North Sikkim','South Sikkim','West Sikkim');
  localityList('Tamil Nadu','Ariyalur','Chengalpattu','Chennai','Coimbatore','Cuddalore','Dharmapuri','Dindigul','Erode','Kallakurichi','Kanchipuram','Kanyakumari','Karur','Krishnagiri','Madurai','Mayiladuthurai','Nagapattinam','Nilgiris','Namakkal','Perambalur','Pudukkottai','Ramanathapuram','Ranipet','Salem','Sivaganga','Tenkasi','Tirupur','Tiruchirappalli','Theni','Tirunelveli','Thanjavur','Thoothukudi','Tirupattur','Tiruvallur','Tiruvarur','Tiruvannamalai','Vellore','Viluppuram','Virudhunagar');
  localityList('Telengna','Adilabad','Komaram','Bheem','Bhadradri Kothagudem','Hyderabad','Jagtial','Jangaon','Jayashankar Bhupalpally','Jogulamba','Gadwal','Kamareddy','Karimnagar','Khammam','Mahabubabad','Mahbubnagar','Mancherial','Medak','Medchal-Malkajgiri','Mulugu','Nalgonda','Narayanpet','Nagarkurnool','Nirmal','Nizamabad','Peddapalli','Rajanna Sircilla','Ranga Reddy','Sangareddy','Siddipet','Suryapet','Vikarabad','Wanaparthy','Warangal Urban','Warangal Rural','Yadadri Bhuvanagiri');
  localityList('Tripura','Dhalai','Gomati','Khowai','North Tripura','Sepahijala','South Tripura','Unokoti','West Tripura');
  localityList('Uttar Pradesh','Agra','Aligarh','Allahabad','Ambedkar Nagar','Amethi',' Amroha','Auraiya','Azamgarh','Bagpat','Bahraich','Ballia','Balrampur','Banda','Barabanki','Bareilly','Basti','Bhadohi','Bijnor','Budaun','Bulandshahr','Chandauli','Chitrakoot','Deoria','Etah','Etawah','Faizabad','Farrukhabad','Fatehpur','Firozabad','Gautam Buddh Nagar','Ghaziabad','Ghazipur','Gonda','Gorakhpur','Hamirpur','Hapur','Hardoi','Hathras','Jalaun','Jaunpur','Jhansi','Kannauj','Kanpur Dehat','Kanpur Nagar','Kasganj','Kaushambi','Kushinagar','Lakhimpur Kheri','Lalitpur','Lucknow','Maharajganj','Mahoba','Mainpuri','Mathura','Mau','Meerut','Mirzapur','Moradabad','Muzaffarnagar','Pilibhit','Pratapgarh','Raebareli','Rampur','Saharanpur','Sambhal','Sant Kabir Nagar','Shahjahanpur','Shamli','Shravasti','Siddharthnagar','Sitapur','Sonbhadra','Sultanpur','Unnao','Varanasi');
  localityList('Uttarakhand','Almora','Bageshwar','Chamoli','Champawat','Dehradun','Haridwar','Nainital','Pauri Garhwal','Pithoragarh','Rudraprayag','Tehri Garhwal','Udham Singh Nagar','Uttarkashi');
  localityList('West Bengal','Alipurduar','Bankura','Bardhaman','Birbhum','Cooch Behar','Dakshin Dinajpur','Darjeeling','Hooghly','Howrah','Jalpaiguri','Jhargram','Kalimpong','Kolkata','Maldah','Murshidabad','Nadia','North 24 Parganas', 'Medinipur', 'Purulia', 'South 24 Parganas', 'Uttar Dinajpur');
  localityList('Andaman and Nicoar','Andaman and Nicobar');
  localityList('Chandigarh','Chandigarh');
  localityList('Daman and Diu','Daman','Diu');
  localityList('Dadra and Nagar Haveli','Dadra and Nagar Haveli');
  localityList('Delhi','Central Delhi','East Delhi','New Delhi','North Delhi','Northeast Delhi, Northwest Delhi','Shahdara','South Delhi','Southeast Delhi','Southwest Delhi','West Delhi');
  localityList('Jammu and Kashmir','Jammu and Kashmir');
  localityList('Ladakh','Ladakh');
  localityList('Lakshadweep','Lakshadweep');
  localityList('Pondicherry','Karaikal','Mahe','Pondicherry','Yanam')
} 

function localityList(state){
   for(var i = 1; i<arguments.length; i++){
    if(stormZone.select.value() == state){
      stormZone.subSelect.option(arguments[i]);
   }
}
}

function checkLocalityListForVHP(variable){
  for(var i = 1;i<arguments.length;i++){
     var variable = (stormZone.locality.toUpperCase() == arguments[i].toUpperCase()||
                     stormZone.locality.toUpperCase() == arguments[i-1].toUpperCase());
     if(variable == true){
        isVeryHighlyProneToCyclones = true;
     }
  }
}

function checkLocalityListForHP(variable){
   for(var i = 1;i<arguments.length;i++){
      var variable = (stormZone.locality.toUpperCase() == arguments[i].toUpperCase()||
                      stormZone.locality.toUpperCase() == arguments[i-1].toUpperCase());
      if(variable == true){
         isHighlyProneToCyclones = true;
      }
   }
 }

 function checkLocalityListForMP(variable){
   for(var i = 1;i<arguments.length;i++){
      var variable = (stormZone.locality.toUpperCase() == arguments[i].toUpperCase()||
                      stormZone.locality.toUpperCase() == arguments[i-1].toUpperCase());
      if(variable == true){
         isModeratelyProneToCyclones = true;
      }
   }
 }

 function checkLocalityListForLP(variable){
   for(var i = 1;i<arguments.length;i++){
      var variable = (stormZone.locality.toUpperCase() == arguments[i].toUpperCase()||
                      stormZone.locality.toUpperCase() == arguments[i-1].toUpperCase());
      if(variable == true){
         isLessProneToCyclones = true;
      }
   }
 }

 