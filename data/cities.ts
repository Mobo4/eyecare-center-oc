export interface City {
  name: string;
  slug: string;
  county: string;
  population: string;
  zipCodes: string[];
  description: string;
  neighborhoods: string[];
  seoTitle: string;
  seoDescription: string;
}

export const cities: City[] = [
  {
    name: "Irvine",
    slug: "irvine",
    county: "Orange County",
    population: "307,000+",
    zipCodes: ["92602", "92603", "92604", "92606", "92612", "92614", "92617", "92618", "92620", "92697"],
    description: "Irvine is a master-planned city in Orange County, known for its excellent schools, safe neighborhoods, and thriving business community. We provide comprehensive eye care services to Irvine residents with convenient access from all neighborhoods.",
    neighborhoods: ["Woodbridge", "University Park", "Northwood", "Turtle Rock", "Quail Hill", "Woodbury"],
    seoTitle: "Eye Doctor Irvine CA | Optometrist Orange County | Eye Care Center",
    seoDescription: "Top-rated eye doctor in Irvine, CA. Comprehensive eye exams, LASIK consultations, and eye disease treatment. Serving all Irvine neighborhoods. Call (949) 364-0008."
  },
  {
    name: "Newport Beach",
    slug: "newport-beach",
    county: "Orange County",
    population: "85,000+",
    zipCodes: ["92657", "92658", "92660", "92661", "92662", "92663"],
    description: "Newport Beach is a coastal city known for its beautiful beaches, upscale shopping, and waterfront living. Our eye care center serves Newport Beach residents with advanced vision care and treatment options.",
    neighborhoods: ["Balboa Island", "Corona del Mar", "Newport Coast", "Lido Isle", "Harbor View", "Bayshores"],
    seoTitle: "Eye Doctor Newport Beach CA | Vision Care | Eye Exams",
    seoDescription: "Expert eye doctor in Newport Beach, CA. Comprehensive eye care, specialty contact lenses, and advanced treatments. Serving Corona del Mar and surrounding areas. Call (949) 364-0008."
  },
  {
    name: "Costa Mesa",
    slug: "costa-mesa",
    county: "Orange County",
    population: "113,000+",
    zipCodes: ["92626", "92627", "92628"],
    description: "Costa Mesa is a vibrant city known for its arts district, shopping centers, and diverse community. We provide exceptional eye care services to Costa Mesa residents with a focus on comprehensive vision health.",
    neighborhoods: ["South Coast Metro", "Mesa Verde", "Eastside Costa Mesa", "Westside Costa Mesa"],
    seoTitle: "Eye Doctor Costa Mesa CA | Optometrist | Comprehensive Eye Care",
    seoDescription: "Professional eye doctor in Costa Mesa, CA. Eye exams, contact lens fittings, and vision therapy. Convenient location near South Coast Plaza. Call (949) 364-0008."
  },
  {
    name: "Huntington Beach",
    slug: "huntington-beach",
    county: "Orange County",
    population: "198,000+",
    zipCodes: ["92646", "92647", "92648", "92649"],
    description: "Huntington Beach, known as Surf City USA, is famous for its beaches and surfing culture. Our eye care center serves Huntington Beach residents with comprehensive vision services and advanced treatment options.",
    neighborhoods: ["Downtown Huntington Beach", "Huntington Harbour", "Seacliff", "Bella Terra"],
    seoTitle: "Eye Doctor Huntington Beach CA | Surf City Vision Care",
    seoDescription: "Trusted eye doctor in Huntington Beach, CA. Complete eye care services, sports vision, and beach lifestyle vision solutions. Call (949) 364-0008."
  },
  {
    name: "Santa Ana",
    slug: "santa-ana",
    county: "Orange County",
    population: "310,000+",
    zipCodes: ["92701", "92703", "92704", "92705", "92706", "92707", "92728"],
    description: "Santa Ana is the county seat of Orange County and a vibrant, diverse city with rich cultural heritage. Our eye care center is conveniently located in Santa Ana, providing accessible eye care services to the community.",
    neighborhoods: ["Downtown Santa Ana", "French Park", "Delhi", "Artesia Pilar", "Madison Park"],
    seoTitle: "Eye Doctor Santa Ana CA | Orange County Eye Care Center",
    seoDescription: "Leading eye doctor in Santa Ana, CA. Bilingual staff, comprehensive eye exams, and advanced eye care. Convenient Orange County location. Call (949) 364-0008."
  },
  {
    name: "Anaheim",
    slug: "anaheim",
    county: "Orange County",
    population: "346,000+",
    zipCodes: ["92801", "92802", "92804", "92805", "92806", "92807", "92808", "92809"],
    description: "Anaheim is home to Disneyland Resort and a thriving community. We provide comprehensive eye care services to Anaheim residents with convenient access and flexible scheduling.",
    neighborhoods: ["Anaheim Hills", "Downtown Anaheim", "West Anaheim", "Platinum Triangle"],
    seoTitle: "Eye Doctor Anaheim CA | Vision Care Near Disneyland",
    seoDescription: "Expert eye doctor in Anaheim, CA. Family eye care, pediatric exams, and vision correction. Serving Anaheim Hills and all neighborhoods. Call (949) 364-0008."
  },
  {
    name: "Tustin",
    slug: "tustin",
    county: "Orange County",
    population: "80,000+",
    zipCodes: ["92780", "92782"],
    description: "Tustin is a family-friendly city with excellent schools and parks. Our eye care center serves Tustin residents with personalized vision care and advanced treatment options.",
    neighborhoods: ["Old Town Tustin", "Tustin Legacy", "North Tustin", "Columbus Grove"],
    seoTitle: "Eye Doctor Tustin CA | Family Vision Care | Eye Exams",
    seoDescription: "Trusted eye doctor in Tustin, CA. Family-friendly eye care, pediatric vision, and comprehensive exams. Serving Tustin Legacy and surrounding areas. Call (949) 364-0008."
  },
  {
    name: "Orange",
    slug: "orange",
    county: "Orange County",
    population: "139,000+",
    zipCodes: ["92856", "92865", "92866", "92867", "92868", "92869"],
    description: "The City of Orange is known for its historic Old Town district and tree-lined neighborhoods. We provide exceptional eye care services to Orange residents with a focus on personalized care.",
    neighborhoods: ["Old Town Orange", "Orange Park Acres", "Villa Park", "East Orange"],
    seoTitle: "Eye Doctor Orange CA | Historic Orange Vision Care",
    seoDescription: "Professional eye doctor in Orange, CA. Comprehensive eye care near Old Town Orange. Advanced vision services for all ages. Call (949) 364-0008."
  },
  {
    name: "Fountain Valley",
    slug: "fountain-valley",
    county: "Orange County",
    population: "57,000+",
    zipCodes: ["92708", "92728"],
    description: "Fountain Valley is a suburban city known for its parks and family-friendly atmosphere. Our eye care center serves Fountain Valley residents with comprehensive vision services.",
    neighborhoods: ["Southwest Fountain Valley", "Northeast Fountain Valley", "Mile Square"],
    seoTitle: "Eye Doctor Fountain Valley CA | Suburban Eye Care",
    seoDescription: "Expert eye doctor in Fountain Valley, CA. Family eye care, contact lenses, and vision therapy. Serving all Fountain Valley neighborhoods. Call (949) 364-0008."
  },
  {
    name: "Garden Grove",
    slug: "garden-grove",
    county: "Orange County",
    population: "171,000+",
    zipCodes: ["92840", "92841", "92843", "92844", "92845", "92846"],
    description: "Garden Grove is a diverse, vibrant city with a strong sense of community. We provide culturally sensitive eye care services to Garden Grove residents with multilingual staff.",
    neighborhoods: ["West Garden Grove", "East Garden Grove", "Central Garden Grove"],
    seoTitle: "Eye Doctor Garden Grove CA | Multilingual Eye Care",
    seoDescription: "Trusted eye doctor in Garden Grove, CA. Bilingual services, comprehensive eye exams, and vision care for diverse communities. Call (949) 364-0008."
  },
  {
    name: "Lake Forest",
    slug: "lake-forest",
    county: "Orange County",
    population: "85,000+",
    zipCodes: ["92610", "92630"],
    description: "Lake Forest is a master-planned community known for its parks, trails, and family-friendly atmosphere. Our eye care center provides comprehensive vision services to Lake Forest residents.",
    neighborhoods: ["Foothill Ranch", "Portola Hills", "Baker Ranch", "Serrano Heights"],
    seoTitle: "Eye Doctor Lake Forest CA | Vision Care | Eye Exams",
    seoDescription: "Expert eye doctor in Lake Forest, CA. Comprehensive eye care for families. Serving Foothill Ranch and surrounding areas. Call (949) 364-0008."
  },
  {
    name: "Mission Viejo",
    slug: "mission-viejo",
    county: "Orange County",
    population: "94,000+",
    zipCodes: ["92691", "92692", "92694"],
    description: "Mission Viejo is one of the largest master-planned communities in the US, known for excellent schools and safe neighborhoods. We serve Mission Viejo residents with advanced eye care services.",
    neighborhoods: ["Lake Mission Viejo", "Mission Viejo High School Area", "Oso Creek"],
    seoTitle: "Eye Doctor Mission Viejo CA | Family Eye Care",
    seoDescription: "Top-rated eye doctor in Mission Viejo, CA. Family eye exams, contact lenses, and vision therapy. Serving all Mission Viejo neighborhoods. Call (949) 364-0008."
  },
  {
    name: "Westminster",
    slug: "westminster",
    county: "Orange County",
    population: "90,000+",
    zipCodes: ["92683"],
    description: "Westminster is a diverse city known for its Vietnamese community and cultural attractions. Our eye care center provides multilingual services to Westminster residents.",
    neighborhoods: ["Little Saigon", "Midway City", "Barber City"],
    seoTitle: "Eye Doctor Westminster CA | Multilingual Vision Care",
    seoDescription: "Professional eye doctor in Westminster, CA. Vietnamese and English services. Comprehensive eye care in Little Saigon area. Call (949) 364-0008."
  },
  {
    name: "Buena Park",
    slug: "buena-park",
    county: "Orange County",
    population: "82,000+",
    zipCodes: ["90620", "90621", "90622", "90624"],
    description: "Buena Park is home to Knott's Berry Farm and a diverse community. We provide comprehensive eye care services to Buena Park residents with convenient scheduling.",
    neighborhoods: ["Knott's Berry Farm Area", "West Buena Park", "East Buena Park"],
    seoTitle: "Eye Doctor Buena Park CA | Eye Care Near Knott's Berry Farm",
    seoDescription: "Trusted eye doctor in Buena Park, CA. Family eye care, LASIK consultations, and comprehensive exams. Convenient location. Call (949) 364-0008."
  },
  {
    name: "Fullerton",
    slug: "fullerton",
    county: "Orange County",
    population: "140,000+",
    zipCodes: ["92831", "92832", "92833", "92834", "92835", "92836", "92837", "92838"],
    description: "Fullerton is a college town home to Cal State Fullerton and known for its historic downtown. Our eye care center serves Fullerton residents and students with comprehensive vision services.",
    neighborhoods: ["Downtown Fullerton", "Sunny Hills", "West Coyote Hills", "Amerige Heights"],
    seoTitle: "Eye Doctor Fullerton CA | College Town Vision Care",
    seoDescription: "Expert eye doctor in Fullerton, CA. Student discounts, comprehensive eye exams, and vision care near CSUF. Call (949) 364-0008."
  },
  {
    name: "Aliso Viejo",
    slug: "aliso-viejo",
    county: "Orange County",
    population: "52,000+",
    zipCodes: ["92656"],
    description: "Aliso Viejo is a young, modern city with excellent amenities and parks. Our eye care center provides comprehensive vision services to Aliso Viejo residents.",
    neighborhoods: ["Grand Park", "Woodfield", "Canyon View", "Westridge"],
    seoTitle: "Eye Doctor Aliso Viejo CA | Modern Vision Care",
    seoDescription: "Professional eye doctor in Aliso Viejo, CA. Comprehensive eye care, contact lenses, and advanced treatments. Call (949) 364-0008."
  },
  {
    name: "Yorba Linda",
    slug: "yorba-linda",
    county: "Orange County",
    population: "68,000+",
    zipCodes: ["92886", "92887"],
    description: "Yorba Linda is known as the birthplace of Richard Nixon and features beautiful hillside homes. We serve Yorba Linda residents with personalized eye care services.",
    neighborhoods: ["East Lake Village", "Fairmont", "Vintage Hills"],
    seoTitle: "Eye Doctor Yorba Linda CA | Hillside Eye Care",
    seoDescription: "Trusted eye doctor in Yorba Linda, CA. Family eye care, pediatric vision, and comprehensive exams. Serving all Yorba Linda. Call (949) 364-0008."
  },
  {
    name: "Laguna Niguel",
    slug: "laguna-niguel",
    county: "Orange County",
    population: "65,000+",
    zipCodes: ["92607", "92677"],
    description: "Laguna Niguel is a coastal city with beautiful ocean views and family-friendly neighborhoods. Our eye care center serves Laguna Niguel residents with advanced vision care.",
    neighborhoods: ["Monarch Beach", "Sea Country", "Bear Brand Ranch", "Aliso Viejo Heights"],
    seoTitle: "Eye Doctor Laguna Niguel CA | Coastal Vision Care",
    seoDescription: "Expert eye doctor in Laguna Niguel, CA. Comprehensive eye care with ocean views. Serving Monarch Beach area. Call (949) 364-0008."
  },
  {
    name: "Placentia",
    slug: "placentia",
    county: "Orange County",
    population: "51,000+",
    zipCodes: ["92870", "92871"],
    description: "Placentia is a small, family-oriented city with a historic downtown. We provide personalized eye care services to Placentia residents.",
    neighborhoods: ["Old Town Placentia", "Kraemer-Bradford", "North Placentia"],
    seoTitle: "Eye Doctor Placentia CA | Small Town Eye Care",
    seoDescription: "Professional eye doctor in Placentia, CA. Personalized eye care, family exams, and vision services. Call (949) 364-0008."
  },
  {
    name: "Rancho Santa Margarita",
    slug: "rancho-santa-margarita",
    county: "Orange County",
    population: "48,000+",
    zipCodes: ["92688"],
    description: "Rancho Santa Margarita is a master-planned community in the foothills with excellent schools. Our eye care center serves RSM residents with comprehensive vision services.",
    neighborhoods: ["Dove Canyon", "Robinson Ranch", "Tijeras Creek", "Walden"],
    seoTitle: "Eye Doctor Rancho Santa Margarita CA | RSM Vision Care",
    seoDescription: "Trusted eye doctor in Rancho Santa Margarita, CA. Family eye care and comprehensive exams. Serving RSM and Dove Canyon. Call (949) 364-0008."
  },
  {
    name: "Laguna Hills",
    slug: "laguna-hills",
    county: "Orange County",
    population: "31,000+",
    zipCodes: ["92653", "92654"],
    description: "Laguna Hills is a suburban city known for shopping and family living. Our eye care center provides convenient vision services to Laguna Hills residents.",
    neighborhoods: ["Nellie Gail Ranch", "Laguna Hills Village", "Moulton Ranch"],
    seoTitle: "Eye Doctor Laguna Hills CA | Suburban Eye Care",
    seoDescription: "Expert eye doctor in Laguna Hills, CA. Convenient eye care, comprehensive exams, and vision services. Call (949) 364-0008."
  },
  {
    name: "San Clemente",
    slug: "san-clemente",
    county: "Orange County",
    population: "65,000+",
    zipCodes: ["92672", "92673", "92674"],
    description: "San Clemente is a beautiful coastal city known as the Spanish Village by the Sea. Our eye care center serves San Clemente residents with comprehensive vision services.",
    neighborhoods: ["Downtown San Clemente", "San Clemente Pier Area", "Talega", "Marblehead Coastal"],
    seoTitle: "Eye Doctor San Clemente CA | Coastal Vision Care",
    seoDescription: "Professional eye doctor in San Clemente, CA. Beach lifestyle vision care, sports vision, and comprehensive exams. Call (949) 364-0008."
  },
  {
    name: "Dana Point",
    slug: "dana-point",
    county: "Orange County",
    population: "34,000+",
    zipCodes: ["92629"],
    description: "Dana Point is a harbor town known for its beaches, surfing, and maritime activities. We serve Dana Point residents with specialized vision care.",
    neighborhoods: ["Dana Point Harbor", "Monarch Beach", "Lantern District", "Capistrano Beach"],
    seoTitle: "Eye Doctor Dana Point CA | Harbor Vision Care",
    seoDescription: "Trusted eye doctor in Dana Point, CA. Marine and water sports vision care. Serving Dana Point Harbor area. Call (949) 364-0008."
  },
  {
    name: "Cypress",
    slug: "cypress",
    county: "Orange County",
    population: "50,000+",
    zipCodes: ["90630"],
    description: "Cypress is a small city with a strong sense of community. Our eye care center provides personalized vision services to Cypress residents.",
    neighborhoods: ["Oak Knoll", "Watson", "Cypress Village"],
    seoTitle: "Eye Doctor Cypress CA | Community Eye Care",
    seoDescription: "Expert eye doctor in Cypress, CA. Family-friendly eye care and comprehensive vision services. Call (949) 364-0008."
  },
  {
    name: "La Habra",
    slug: "la-habra",
    county: "Orange County",
    population: "62,000+",
    zipCodes: ["90631", "90632", "90633"],
    description: "La Habra is located on the border of Orange and Los Angeles counties with a rich agricultural history. We provide comprehensive eye care to La Habra residents.",
    neighborhoods: ["La Habra Heights", "East La Habra", "West La Habra"],
    seoTitle: "Eye Doctor La Habra CA | Border City Vision Care",
    seoDescription: "Professional eye doctor in La Habra, CA. Comprehensive eye exams and vision services. Convenient Orange County location. Call (949) 364-0008."
  },
  {
    name: "Brea",
    slug: "brea",
    county: "Orange County",
    population: "47,000+",
    zipCodes: ["92821", "92822", "92823"],
    description: "Brea is known for its public art, shopping, and entertainment. Our eye care center serves Brea residents with advanced vision care services.",
    neighborhoods: ["Olinda Village", "Downtown Brea", "East Brea", "Brea Canyons"],
    seoTitle: "Eye Doctor Brea CA | Art District Eye Care",
    seoDescription: "Trusted eye doctor in Brea, CA. Comprehensive eye care near Brea Mall. Advanced vision services. Call (949) 364-0008."
  },
  {
    name: "San Juan Capistrano",
    slug: "san-juan-capistrano",
    county: "Orange County",
    population: "35,000+",
    zipCodes: ["92675", "92693"],
    description: "San Juan Capistrano is a historic city home to the famous mission. We provide comprehensive eye care services to San Juan Capistrano residents.",
    neighborhoods: ["Historic District", "Marbella Country Club", "Hunt Club", "Rancho Mission Viejo"],
    seoTitle: "Eye Doctor San Juan Capistrano CA | Historic Mission Eye Care",
    seoDescription: "Expert eye doctor in San Juan Capistrano, CA. Comprehensive vision care near the historic mission. Call (949) 364-0008."
  },
  {
    name: "Seal Beach",
    slug: "seal-beach",
    county: "Orange County",
    population: "25,000+",
    zipCodes: ["90740"],
    description: "Seal Beach is a charming coastal town with a classic beach atmosphere. Our eye care center serves Seal Beach residents with personalized vision services.",
    neighborhoods: ["Old Town Seal Beach", "Leisure World", "Surfside Colony", "Seal Beach Naval Weapons Station"],
    seoTitle: "Eye Doctor Seal Beach CA | Beachtown Vision Care",
    seoDescription: "Professional eye doctor in Seal Beach, CA. Beach lifestyle eye care and comprehensive exams. Serving Old Town Seal Beach. Call (949) 364-0008."
  },
  {
    name: "La Palma",
    slug: "la-palma",
    county: "Orange County",
    population: "16,000+",
    zipCodes: ["90623"],
    description: "La Palma is a small, quiet city with a suburban feel. We provide personalized eye care services to La Palma residents.",
    neighborhoods: ["Central La Palma", "Walker Street District"],
    seoTitle: "Eye Doctor La Palma CA | Quiet City Eye Care",
    seoDescription: "Trusted eye doctor in La Palma, CA. Personalized vision care for small community. Comprehensive eye exams. Call (949) 364-0008."
  },
  {
    name: "Los Alamitos",
    slug: "los-alamitos",
    county: "Orange County",
    population: "12,000+",
    zipCodes: ["90720", "90721"],
    description: "Los Alamitos is a small city with excellent schools and a family atmosphere. Our eye care center provides comprehensive vision services to Los Alamitos residents.",
    neighborhoods: ["Rossmoor", "Old Town Los Alamitos"],
    seoTitle: "Eye Doctor Los Alamitos CA | Small City Vision Care",
    seoDescription: "Expert eye doctor in Los Alamitos, CA. Family eye care and comprehensive exams. Serving Rossmoor area. Call (949) 364-0008."
  },
  {
    name: "Stanton",
    slug: "stanton",
    county: "Orange County",
    population: "39,000+",
    zipCodes: ["90680"],
    description: "Stanton is a small, diverse city in central Orange County. We provide culturally sensitive eye care services to Stanton residents.",
    neighborhoods: ["West Stanton", "East Stanton", "Central Stanton"],
    seoTitle: "Eye Doctor Stanton CA | Central OC Eye Care",
    seoDescription: "Professional eye doctor in Stanton, CA. Comprehensive eye care for diverse communities. Convenient central location. Call (949) 364-0008."
  },
  {
    name: "Villa Park",
    slug: "villa-park",
    county: "Orange County",
    population: "5,900+",
    zipCodes: ["92861"],
    description: "Villa Park is a small, affluent city known for its equestrian trails and large properties. Our eye care center serves Villa Park residents with premium vision services.",
    neighborhoods: ["Santiago Hills", "Villa Park Estates"],
    seoTitle: "Eye Doctor Villa Park CA | Equestrian Community Eye Care",
    seoDescription: "Trusted eye doctor in Villa Park, CA. Premium eye care for equestrian community. Personalized vision services. Call (949) 364-0008."
  },
  {
    name: "Laguna Beach",
    slug: "laguna-beach",
    county: "Orange County",
    population: "23,000+",
    zipCodes: ["92651", "92652", "92607"],
    description: "Laguna Beach is a picturesque coastal city known for its art galleries, beaches, and coves. We provide comprehensive eye care services to Laguna Beach residents and artists.",
    neighborhoods: ["Downtown Laguna", "Top of the World", "North Laguna", "South Laguna", "Laguna Canyon"],
    seoTitle: "Eye Doctor Laguna Beach CA | Coastal Art Community Vision Care",
    seoDescription: "Expert eye doctor in Laguna Beach, CA. Comprehensive eye care for artists and beach community. Serving all coastal neighborhoods. Call (949) 364-0008."
  },
  {
    name: "Laguna Woods",
    slug: "laguna-woods",
    county: "Orange County",
    population: "16,000+",
    zipCodes: ["92637"],
    description: "Laguna Woods is an age-restricted community with active seniors. Our eye care center specializes in age-related vision services for Laguna Woods residents.",
    neighborhoods: ["Laguna Woods Village"],
    seoTitle: "Eye Doctor Laguna Woods CA | Senior Vision Care Specialists",
    seoDescription: "Professional eye doctor in Laguna Woods, CA. Specialized care for age-related eye conditions. Cataract, glaucoma, and macular degeneration treatment. Call (949) 364-0008."
  },
  {
    name: "Midway City",
    slug: "midway-city",
    county: "Orange County",
    population: "8,500+",
    zipCodes: ["92655"],
    description: "Midway City is a small unincorporated community in Westminster. We provide accessible eye care services to Midway City residents.",
    neighborhoods: ["Midway City proper"],
    seoTitle: "Eye Doctor Midway City CA | Community Eye Care",
    seoDescription: "Trusted eye doctor serving Midway City, CA. Accessible vision care and comprehensive eye exams. Call (949) 364-0008."
  },
  {
    name: "Rossmoor",
    slug: "rossmoor",
    county: "Orange County",
    population: "11,000+",
    zipCodes: ["90720"],
    description: "Rossmoor is an unincorporated community near Los Alamitos with excellent schools. Our eye care center serves Rossmoor residents with family vision services.",
    neighborhoods: ["Rossmoor community"],
    seoTitle: "Eye Doctor Rossmoor CA | Family Vision Care",
    seoDescription: "Expert eye doctor serving Rossmoor, CA. Family-friendly eye care and comprehensive exams. Call (949) 364-0008."
  },
  {
    name: "North Tustin",
    slug: "north-tustin",
    county: "Orange County",
    population: "25,000+",
    zipCodes: ["92705"],
    description: "North Tustin is an affluent unincorporated area with hillside homes. We provide premium eye care services to North Tustin residents.",
    neighborhoods: ["Cowan Heights", "Peters Canyon"],
    seoTitle: "Eye Doctor North Tustin CA | Hillside Vision Care",
    seoDescription: "Professional eye doctor serving North Tustin, CA. Premium eye care for hillside communities. Call (949) 364-0008."
  },
  {
    name: "El Modena",
    slug: "el-modena",
    county: "Orange County",
    population: "8,000+",
    zipCodes: ["92869"],
    description: "El Modena is a neighborhood in Orange known for its historic charm. Our eye care center serves El Modena residents with personalized vision services.",
    neighborhoods: ["El Modena community"],
    seoTitle: "Eye Doctor El Modena CA | Neighborhood Eye Care",
    seoDescription: "Trusted eye doctor serving El Modena, Orange, CA. Personalized vision care for historic neighborhood. Call (949) 364-0008."
  },
  {
    name: "Las Flores",
    slug: "las-flores",
    county: "Orange County",
    population: "5,000+",
    zipCodes: ["92688"],
    description: "Las Flores is a canyon community in Rancho Santa Margarita. We provide comprehensive eye care services to Las Flores residents.",
    neighborhoods: ["Las Flores canyon"],
    seoTitle: "Eye Doctor Las Flores CA | Canyon Community Eye Care",
    seoDescription: "Expert eye doctor serving Las Flores, CA. Comprehensive eye care for canyon communities. Call (949) 364-0008."
  },
  {
    name: "Coto de Caza",
    slug: "coto-de-caza",
    county: "Orange County",
    population: "15,000+",
    zipCodes: ["92679"],
    description: "Coto de Caza is a guard-gated community in the foothills. Our eye care center provides premium vision services to Coto de Caza residents.",
    neighborhoods: ["Coto de Caza community"],
    seoTitle: "Eye Doctor Coto de Caza CA | Guard-Gated Community Eye Care",
    seoDescription: "Professional eye doctor serving Coto de Caza, CA. Premium vision care for gated community residents. Call (949) 364-0008."
  },
  {
    name: "Ladera Ranch",
    slug: "ladera-ranch",
    county: "Orange County",
    population: "25,000+",
    zipCodes: ["92694"],
    description: "Ladera Ranch is a master-planned community with parks and trails. We serve Ladera Ranch residents with comprehensive family eye care services.",
    neighborhoods: ["Covenant Hills", "Terramor", "Avendale Village"],
    seoTitle: "Eye Doctor Ladera Ranch CA | Master-Planned Community Eye Care",
    seoDescription: "Trusted eye doctor serving Ladera Ranch, CA. Family eye care for planned community. Serving Covenant Hills area. Call (949) 364-0008."
  },
  {
    name: "Trabuco Canyon",
    slug: "trabuco-canyon",
    county: "Orange County",
    population: "30,000+",
    zipCodes: ["92679"],
    description: "Trabuco Canyon is a rural community in the foothills with a small-town feel. Our eye care center serves Trabuco Canyon residents with personalized vision services.",
    neighborhoods: ["Trabuco Highlands", "Robinson Ranch"],
    seoTitle: "Eye Doctor Trabuco Canyon CA | Rural Community Eye Care",
    seoDescription: "Expert eye doctor serving Trabuco Canyon, CA. Personalized eye care for rural foothill communities. Call (949) 364-0008."
  },
  {
    name: "Modjeska Canyon",
    slug: "modjeska-canyon",
    county: "Orange County",
    population: "500+",
    zipCodes: ["92676"],
    description: "Modjeska Canyon is a small, rural canyon community. We provide accessible eye care services to Modjeska Canyon residents.",
    neighborhoods: ["Modjeska Canyon proper"],
    seoTitle: "Eye Doctor Modjeska Canyon CA | Rural Canyon Eye Care",
    seoDescription: "Professional eye doctor serving Modjeska Canyon, CA. Accessible vision care for canyon communities. Call (949) 364-0008."
  },
  {
    name: "Silverado Canyon",
    slug: "silverado-canyon",
    county: "Orange County",
    population: "2,000+",
    zipCodes: ["92676"],
    description: "Silverado Canyon is a rustic mountain community. Our eye care center provides comprehensive vision services to Silverado Canyon residents.",
    neighborhoods: ["Silverado Canyon proper"],
    seoTitle: "Eye Doctor Silverado Canyon CA | Mountain Community Eye Care",
    seoDescription: "Trusted eye doctor serving Silverado Canyon, CA. Comprehensive eye care for mountain communities. Call (949) 364-0008."
  },
  {
    name: "Capistrano Beach",
    slug: "capistrano-beach",
    county: "Orange County",
    population: "6,000+",
    zipCodes: ["92624"],
    description: "Capistrano Beach is a coastal community in Dana Point. We serve Capistrano Beach residents with comprehensive vision and beach lifestyle eye care.",
    neighborhoods: ["Capo Beach proper"],
    seoTitle: "Eye Doctor Capistrano Beach CA | Coastal Vision Care",
    seoDescription: "Expert eye doctor serving Capistrano Beach, CA. Beach lifestyle vision care and surf-safe eye protection. Call (949) 364-0008."
  },
  {
    name: "Corona del Mar",
    slug: "corona-del-mar",
    county: "Orange County",
    population: "13,000+",
    zipCodes: ["92625"],
    description: "Corona del Mar is an upscale coastal village in Newport Beach. Our eye care center provides premium vision services to Corona del Mar residents.",
    neighborhoods: ["CDM Village", "Big Canyon", "Harbor View Hills"],
    seoTitle: "Eye Doctor Corona del Mar CA | Upscale Coastal Eye Care",
    seoDescription: "Professional eye doctor serving Corona del Mar, CA. Premium coastal vision care and comprehensive exams. Call (949) 364-0008."
  },
  {
    name: "Newport Coast",
    slug: "newport-coast",
    county: "Orange County",
    population: "10,000+",
    zipCodes: ["92657"],
    description: "Newport Coast is an affluent coastal community with ocean views. We provide premium eye care services to Newport Coast residents.",
    neighborhoods: ["Crystal Cove", "Pelican Hill", "Ridge Park"],
    seoTitle: "Eye Doctor Newport Coast CA | Luxury Coastal Eye Care",
    seoDescription: "Trusted eye doctor serving Newport Coast, CA. Luxury vision care with ocean views. Serving Crystal Cove area. Call (949) 364-0008."
  },
  {
    name: "Lemon Heights",
    slug: "lemon-heights",
    county: "Orange County",
    population: "4,000+",
    zipCodes: ["92865"],
    description: "Lemon Heights is a neighborhood in Orange. Our eye care center serves Lemon Heights residents with personalized vision services.",
    neighborhoods: ["Lemon Heights community"],
    seoTitle: "Eye Doctor Lemon Heights CA | Neighborhood Vision Care",
    seoDescription: "Expert eye doctor serving Lemon Heights, Orange, CA. Personalized neighborhood eye care. Call (949) 364-0008."
  },
  {
    name: "Orange Park Acres",
    slug: "orange-park-acres",
    county: "Orange County",
    population: "8,000+",
    zipCodes: ["92869"],
    description: "Orange Park Acres is a semi-rural community in Orange. We provide comprehensive eye care services to Orange Park Acres residents.",
    neighborhoods: ["Orange Park Acres proper"],
    seoTitle: "Eye Doctor Orange Park Acres CA | Semi-Rural Eye Care",
    seoDescription: "Professional eye doctor serving Orange Park Acres, CA. Comprehensive eye care for equestrian community. Call (949) 364-0008."
  },
  {
    name: "El Toro",
    slug: "el-toro",
    county: "Orange County",
    population: "20,000+",
    zipCodes: ["92630"],
    description: "El Toro is a neighborhood in Lake Forest with a mix of residential and commercial areas. Our eye care center serves El Toro residents with comprehensive vision services.",
    neighborhoods: ["El Toro proper"],
    seoTitle: "Eye Doctor El Toro CA | Lake Forest Vision Care",
    seoDescription: "Trusted eye doctor serving El Toro, Lake Forest, CA. Comprehensive eye care for all families. Call (949) 364-0008."
  },
  {
    name: "Balboa Island",
    slug: "balboa-island",
    county: "Orange County",
    population: "3,000+",
    zipCodes: ["92662"],
    description: "Balboa Island is a charming island community in Newport Beach Harbor. We serve Balboa Island residents with premium vision services.",
    neighborhoods: ["Little Island", "Big Island", "Collins Island"],
    seoTitle: "Eye Doctor Balboa Island CA | Island Community Eye Care",
    seoDescription: "Expert eye doctor serving Balboa Island, Newport Beach, CA. Premium island vision care. Call (949) 364-0008."
  },
  {
    name: "Emerald Bay",
    slug: "emerald-bay",
    county: "Orange County",
    population: "1,000+",
    zipCodes: ["92651"],
    description: "Emerald Bay is a gated coastal community in Laguna Beach. Our eye care center provides premium vision services to Emerald Bay residents.",
    neighborhoods: ["Emerald Bay community"],
    seoTitle: "Eye Doctor Emerald Bay CA | Gated Coastal Eye Care",
    seoDescription: "Professional eye doctor serving Emerald Bay, Laguna Beach, CA. Premium gated community vision care. Call (949) 364-0008."
  },
  {
    name: "Three Arch Bay",
    slug: "three-arch-bay",
    county: "Orange County",
    population: "500+",
    zipCodes: ["92651"],
    description: "Three Arch Bay is a private gated beach community in Laguna Beach. We provide exclusive eye care services to Three Arch Bay residents.",
    neighborhoods: ["Three Arch Bay proper"],
    seoTitle: "Eye Doctor Three Arch Bay CA | Private Beach Community Eye Care",
    seoDescription: "Trusted eye doctor serving Three Arch Bay, Laguna Beach, CA. Exclusive private community vision care. Call (949) 364-0008."
  },
  {
    name: "Irvine Spectrum",
    slug: "irvine-spectrum",
    county: "Orange County",
    population: "50,000+",
    zipCodes: ["92618", "92603"],
    description: "Irvine Spectrum is a business and residential area in Irvine. Our eye care center serves Irvine Spectrum area residents and workers with convenient vision services.",
    neighborhoods: ["Spectrum Center Area", "Portola Springs", "Woodbury East"],
    seoTitle: "Eye Doctor Irvine Spectrum CA | Business District Eye Care",
    seoDescription: "Expert eye doctor serving Irvine Spectrum area, CA. Convenient eye care for business district. Call (949) 364-0008."
  },
  {
    name: "University Hills",
    slug: "university-hills",
    county: "Orange County",
    population: "15,000+",
    zipCodes: ["92617"],
    description: "University Hills is a neighborhood near UC Irvine. We provide comprehensive eye care services to University Hills residents and students.",
    neighborhoods: ["University Park", "UCI Campus Area"],
    seoTitle: "Eye Doctor University Hills CA | Campus Eye Care",
    seoDescription: "Professional eye doctor serving University Hills, Irvine, CA. Student-friendly vision care near UCI. Call (949) 364-0008."
  },
  {
    name: "Turtle Ridge",
    slug: "turtle-ridge",
    county: "Orange County",
    population: "6,000+",
    zipCodes: ["92603"],
    description: "Turtle Ridge is an upscale neighborhood in Irvine with views of the canyons. Our eye care center provides premium vision services to Turtle Ridge residents.",
    neighborhoods: ["Turtle Ridge community"],
    seoTitle: "Eye Doctor Turtle Ridge CA | Upscale Irvine Eye Care",
    seoDescription: "Trusted eye doctor serving Turtle Ridge, Irvine, CA. Premium vision care for upscale neighborhoods. Call (949) 364-0008."
  },
  {
    name: "Shady Canyon",
    slug: "shady-canyon",
    county: "Orange County",
    population: "2,000+",
    zipCodes: ["92603"],
    description: "Shady Canyon is an exclusive guard-gated community in Irvine. We provide luxury eye care services to Shady Canyon residents.",
    neighborhoods: ["Shady Canyon Estates"],
    seoTitle: "Eye Doctor Shady Canyon CA | Exclusive Irvine Eye Care",
    seoDescription: "Expert eye doctor serving Shady Canyon, Irvine, CA. Luxury vision care for exclusive gated community. Call (949) 364-0008."
  },
  {
    name: "Eastbluff",
    slug: "eastbluff",
    county: "Orange County",
    population: "7,000+",
    zipCodes: ["92660"],
    description: "Eastbluff is a coastal neighborhood in Newport Beach. Our eye care center serves Eastbluff residents with comprehensive vision services.",
    neighborhoods: ["Eastbluff community"],
    seoTitle: "Eye Doctor Eastbluff CA | Newport Beach Coastal Eye Care",
    seoDescription: "Professional eye doctor serving Eastbluff, Newport Beach, CA. Coastal community vision care. Call (949) 364-0008."
  },
  {
    name: "Harbor View",
    slug: "harbor-view",
    county: "Orange County",
    population: "5,000+",
    zipCodes: ["92660"],
    description: "Harbor View is a neighborhood in Newport Beach with bay views. We provide comprehensive eye care services to Harbor View residents.",
    neighborhoods: ["Harbor View Hills"],
    seoTitle: "Eye Doctor Harbor View CA | Newport Beach Bay Eye Care",
    seoDescription: "Trusted eye doctor serving Harbor View, Newport Beach, CA. Bay view community vision care. Call (949) 364-0008."
  },
  {
    name: "Dover Shores",
    slug: "dover-shores",
    county: "Orange County",
    population: "4,000+",
    zipCodes: ["92660"],
    description: "Dover Shores is a waterfront community in Newport Beach. Our eye care center serves Dover Shores residents with premium vision services.",
    neighborhoods: ["Dover Shores proper"],
    seoTitle: "Eye Doctor Dover Shores CA | Waterfront Eye Care",
    seoDescription: "Expert eye doctor serving Dover Shores, Newport Beach, CA. Waterfront community vision care. Call (949) 364-0008."
  },
  {
    name: "Talega",
    slug: "talega",
    county: "Orange County",
    population: "20,000+",
    zipCodes: ["92673"],
    description: "Talega is a master-planned community in San Clemente. We serve Talega residents with comprehensive family eye care services.",
    neighborhoods: ["Talega Gallery", "Talega Terrace"],
    seoTitle: "Eye Doctor Talega CA | San Clemente Family Eye Care",
    seoDescription: "Professional eye doctor serving Talega, San Clemente, CA. Family eye care for planned community. Call (949) 364-0008."
  },
  {
    name: "Forster Ranch",
    slug: "forster-ranch",
    county: "Orange County",
    population: "10,000+",
    zipCodes: ["92675"],
    description: "Forster Ranch is a neighborhood in San Juan Capistrano. Our eye care center serves Forster Ranch residents with comprehensive vision services.",
    neighborhoods: ["Forster Ranch community"],
    seoTitle: "Eye Doctor Forster Ranch CA | San Juan Capistrano Eye Care",
    seoDescription: "Trusted eye doctor serving Forster Ranch, San Juan Capistrano, CA. Comprehensive neighborhood eye care. Call (949) 364-0008."
  },
  {
    name: "Nellie Gail Ranch",
    slug: "nellie-gail-ranch",
    county: "Orange County",
    population: "4,000+",
    zipCodes: ["92653"],
    description: "Nellie Gail Ranch is an upscale gated equestrian community in Laguna Hills. Our eye care center provides premium vision services to Nellie Gail Ranch residents.",
    neighborhoods: ["Nellie Gail Ranch proper"],
    seoTitle: "Eye Doctor Nellie Gail Ranch CA | Gated Equestrian Eye Care",
    seoDescription: "Expert eye doctor serving Nellie Gail Ranch, Laguna Hills, CA. Premium vision care for gated equestrian community. Call (949) 364-0008."
  },
  {
    name: "Surfside",
    slug: "surfside",
    county: "Orange County",
    population: "300+",
    zipCodes: ["90743"],
    description: "Surfside is an exclusive gated beach community near Seal Beach. We provide premium eye care services to Surfside residents.",
    neighborhoods: ["Surfside Colony"],
    seoTitle: "Eye Doctor Surfside CA | Exclusive Beach Community Eye Care",
    seoDescription: "Professional eye doctor serving Surfside, CA. Exclusive gated beach community vision care. Call (949) 364-0008."
  },
  {
    name: "Long Beach",
    slug: "long-beach",
    county: "Los Angeles County",
    population: "450,000+",
    zipCodes: ["90802", "90803", "90804", "90805", "90806", "90807", "90808", "90810", "90813", "90814", "90815"],
    description: "Long Beach is a major coastal city known for its waterfront attractions, diverse communities, and the Queen Mary. We serve Long Beach residents with comprehensive eye care services just a short drive away.",
    neighborhoods: ["Belmont Shore", "Bixby Knolls", "Naples", "El Dorado Park", "Downtown Long Beach", "Alamitos Beach"],
    seoTitle: "Eye Doctor Long Beach CA | Coastal Vision Care",
    seoDescription: "Expert eye doctor serving Long Beach, CA. Comprehensive eye exams and advanced vision care. Conveniently located for Long Beach residents. Call (949) 364-0008."
  },
  {
    name: "Cerritos",
    slug: "cerritos",
    county: "Los Angeles County",
    population: "49,000+",
    zipCodes: ["90703"],
    description: "Cerritos is an affluent city known for its performing arts center and library. We provide premium eye care services to Cerritos residents looking for top-tier vision specialists.",
    neighborhoods: ["Cerritos Towne Center", "Shadow Park", "Landmark Square"],
    seoTitle: "Eye Doctor Cerritos CA | Premium Vision Care",
    seoDescription: "Professional eye doctor serving Cerritos, CA. Advanced eye care and specialty contact lenses. Convenient location for Cerritos residents. Call (949) 364-0008."
  },
  {
    name: "Lakewood",
    slug: "lakewood",
    county: "Los Angeles County",
    population: "79,000+",
    zipCodes: ["90711", "90712", "90713", "90714", "90715"],
    description: "Lakewood is a family-oriented city known as 'Tree City USA'. Our eye care center serves Lakewood families with comprehensive vision services.",
    neighborhoods: ["Lakewood Country Club", "Mayfair", "Lakewood Manor", "Carson Park"],
    seoTitle: "Eye Doctor Lakewood CA | Family Eye Care",
    seoDescription: "Trusted eye doctor serving Lakewood, CA. Family-friendly eye exams and vision care. Serving Lakewood Country Club area. Call (949) 364-0008."
  },
  {
    name: "Corona",
    slug: "corona",
    county: "Riverside County",
    population: "157,000+",
    zipCodes: ["92879", "92880", "92881", "92882", "92883"],
    description: "Corona is a vibrant city in Riverside County known as the 'Circle City'. We provide advanced eye care services to Corona residents seeking specialized treatment.",
    neighborhoods: ["South Corona", "Eagle Glen", "Dos Lagos", "Sierra Del Oro", "The Retreat"],
    seoTitle: "Eye Doctor Corona CA | Advanced Vision Care",
    seoDescription: "Expert eye doctor serving Corona, CA. Specialized eye care including keratoconus and dry eye treatment. Worth the drive for quality care. Call (949) 364-0008."
  },
  {
    name: "Chino Hills",
    slug: "chino-hills",
    county: "San Bernardino County",
    population: "78,000+",
    zipCodes: ["91709"],
    description: "Chino Hills is known for its rolling hills and high quality of life. Our eye care center serves Chino Hills residents with premium vision services.",
    neighborhoods: ["Vellano", "Los Serranos", "Butterfield Ranch", "Western Hills"],
    seoTitle: "Eye Doctor Chino Hills CA | Premium Eye Care",
    seoDescription: "Professional eye doctor serving Chino Hills, CA. Comprehensive eye exams and specialty vision care. Convenient access via 91/241. Call (949) 364-0008."
  }
];

export function getCityBySlug(slug: string): City | undefined {
  return cities.find(c => c.slug === slug);
}

export function getCitiesByCounty(county: string): City[] {
  return cities.filter(c => c.county === county);
}
