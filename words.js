const words = [
  {
    word: "variable",
    hint: "A named container that holds a value",
    category: "Programming Concepts",
    difficulty: "Easy",
  },
  {
    word: "function",
    hint: "A reusable block of code that performs a specific task",
    category: "Programming Concepts",
    difficulty: "Easy",
  },
  {
    word: "array",
    hint: "An ordered collection of elements",
    category: "Programming Concepts",
    difficulty: "Easy",
  },
  {
    word: "loop",
    hint: "A control structure that repeats a block of code until a condition is met",
    category: "Programming Concepts",
    difficulty: "Medium",
  },
  {
    word: "conditional",
    hint: "A statement that executes different actions based on a condition",
    category: "Programming Concepts",
    difficulty: "Medium",
  },
  {
    word: "object",
    hint: "An entity that contains properties and methods",
    category: "Programming Concepts",
    difficulty: "Medium",
  },
  {
    word: "algorithm",
    hint: "A step by step procedure to solve a problem",
    category: "Programming Concepts",
    difficulty: "Hard",
  },
  {
    word: "recursion",
    hint: "A function that calls itself",
    category: "Programming Concepts",
    difficulty: "Hard",
  },
  {
    word: "inheritance",
    hint: "The ability of an object to acquire properties and methods from a parent object",
    category: "Programming Concepts",
    difficulty: "Hard",
  },
  {
    word: "variable scope",
    hint: "The visibility and accessibility of variables within a program",
    category: "Programming Concepts",
    difficulty: "Medium",
  },
  {
    word: "pointer",
    hint: "A memory address that points to a value or another memory address",
    category: "Programming Concepts",
    difficulty: "Medium",
  },
  {
    word: "abstraction",
    hint: "The process of hiding complex implementation details and exposing only essential functionalities",
    category: "Programming Concepts",
    difficulty: "Hard",
  },
  {
    word: "polymorphism",
    hint: "The ability of an object to take on many forms and behave differently in different situations",
    category: "Programming Concepts",
    difficulty: "Hard",
  },
  {
    word: "debugging",
    hint: "The process of identifying and fixing errors or defects in a program",
    category: "Programming Concepts",
    difficulty: "Easy",
  },
  {
    word: "data structure",
    hint: "A way of organizing and storing data to perform efficient operations",
    category: "Programming Concepts",
    difficulty: "Medium",
  },
  {
    word: "encapsulation",
    hint: "The bundling of data and methods together as a single unit",
    category: "Programming Concepts",
    difficulty: "Medium",
  },
  {
    word: "iteration",
    hint: "The repetition of a process or set of instructions",
    category: "Programming Concepts",
    difficulty: "Easy",
  },
  {
    word: "stack",
    hint: "A data structure that follows the Last In First Out (LIFO) principle",
    category: "Programming Concepts",
    difficulty: "Medium",
  },
  {
    word: "queue",
    hint: "A data structure that follows the First In First Out (FIFO) principle",
    category: "Programming Concepts",
    difficulty: "Medium",
  },
  {
    word: "apple",
    hint: "A fruit that is red or green",
    category: "Frui ts",
    difficulty: "Easy",
  },
  {
    word: "banana",
    hint: "A yellow fruit with a curved shape",
    category: "Fruits",
    difficulty: "Easy",
  },
  {
    word: "carrot",
    hint: "A long, orange vegetable",
    category: "Vegetables",
    difficulty: "Easy",
  },
  {
    word: "chocolate",
    hint: "A sweet treat made from cocoa",
    category: "Food",
    difficulty: "Medium",
  },
  {
    word: "elephant",
    hint: "A large animal with a long trunk",
    category: "Animals",
    difficulty: "Medium",
  },
  {
    word: "guitar",
    hint: "A musical instrument with strings",
    category: "Music",
    difficulty: "Medium",
  },
  {
    word: "sunflower",
    hint: "A tall plant with large yellow flowers",
    category: "Plants",
    difficulty: "Easy",
  },
  {
    word: "computer",
    hint: "An electronic device for processing data",
    category: "Technology",
    difficulty: "Medium",
  },
  {
    word: "mountain",
    hint: "A large natural elevation of the earth's surface",
    category: "Geography",
    difficulty: "Hard",
  },

  {
    word: "pizza",
    hint: "A popular Italian dish with a round dough base and various toppings",
    category: "Food",
    difficulty: "Easy",
  },
  {
    word: "beach",
    hint: "A sandy or pebbly area by the sea or a lake",
    category: "Places",
    difficulty: "Easy",
  },
  {
    word: "book",
    hint: "A written or printed work consisting of pages glued or sewn together",
    category: "Literature",
    difficulty: "Easy",
  },
  {
    word: "camera",
    hint: "A device used to capture photographs or record videos",
    category: "Technology",
    difficulty: "Medium",
  },
  {
    word: "dog",
    hint: "A domesticated carnivorous mammal that typically has a long snout, an acute sense of smell, and a barking voice",
    category: "Animals",
    difficulty: "Easy",
  },
  {
    word: "sun",
    hint: "The star at the center of the solar system, around which the Earth and other planets revolve",
    category: "Astronomy",
    difficulty: "Easy",
  },
  {
    word: "music",
    hint: "The art of combining sounds to produce a harmonious and expressive composition",
    category: "Art",
    difficulty: "Easy",
  },
  {
    word: "rainbow",
    hint: "A meteorological phenomenon that is caused by reflection, refraction, and dispersion of light",
    category: "Nature",
    difficulty: "Easy",
  },
  {
    word: "football",
    hint: "A popular sport played with a round ball between two teams of eleven players",
    category: "Sports",
    difficulty: "Medium",
  },
  {
    word: "tree",
    hint: "A woody perennial plant that typically has a single stem or trunk and bears lateral branches",
    category: "Plants",
    difficulty: "Easy",
  },
  {
    word: "pineapple",
    hint: "A tropical fruit with a rough, spiky skin and sweet, juicy flesh",
    category: "Fruits",
    difficulty: "Easy",
  },
  {
    word: "lemon",
    hint: "A yellow citrus fruit known for its sour taste",
    category: "Fruits",
    difficulty: "Easy",
  },
  {
    word: "broccoli",
    hint: "A green vegetable with a dense cluster of small, edible flower buds",
    category: "Vegetables",
    difficulty: "Easy",
  },
  {
    word: "ice cream",
    hint: "A frozen dessert made from dairy products, sugar, and flavorings",
    category: "Food",
    difficulty: "Medium",
  },
  {
    word: "lion",
    hint: "A large, powerful carnivorous mammal known for its majestic mane",
    category: "Animals",
    difficulty: "Medium",
  },
  {
    word: "violin",
    hint: "A stringed musical instrument played with a bow",
    category: "Music",
    difficulty: "Medium",
  },
  {
    word: "rose",
    hint: "A fragrant flower with thorny stems, often given as a symbol of love",
    category: "Plants",
    difficulty: "Easy",
  },
  {
    word: "smartphone",
    hint: "A mobile phone with advanced features and capabilities",
    category: "Technology",
    difficulty: "Medium",
  },
  {
    word: "volcano",
    hint: "A mountain with a vent through which molten rock, ash, and gases erupt",
    category: "Geography",
    difficulty: "Hard",
  },

  {
    word: "sandwich",
    hint: "A food item consisting of two or more slices of bread with fillings",
    category: "Food",
    difficulty: "Easy",
  },
  {
    word: "forest",
    hint: "A large area of land covered with trees and undergrowth",
    category: "Nature",
    difficulty: "Medium",
  },
  {
    word: "cat",
    hint: "A small domesticated carnivorous mammal kept as a pet",
    category: "Animals",
    difficulty: "Easy",
  },
  {
    word: "moon",
    hint: "The natural satellite of the Earth, visible at night",
    category: "Astronomy",
    difficulty: "Easy",
  },
  {
    word: "painting",
    hint: "The art of creating images using various pigments on a surface",
    category: "Art",
    difficulty: "Medium",
  },
  {
    word: "waterfall",
    hint: "A cascade of water falling from a height",
    category: "Nature",
    difficulty: "Medium",
  },
  {
    word: "basketball",
    hint: "A sport played between two teams with a round ball and a hoop",
    category: "Sports",
    difficulty: "Medium",
  },
  {
    word: "flower",
    hint: "The reproductive structure of flowering plants",
    category: "Plants",
    difficulty: "Easy",
  },
  {
    word: "giraffe",
    hint: "A tall African mammal with a long neck and patterned coat",
    category: "Animals",
    difficulty: "Medium",
  },
  {
    word: "oxygen",
    hint: "A colorless, odorless gas essential for respiration",
    category: "Science",
    difficulty: "Medium",
  },
  {
    word: "bicycle",
    hint: "A pedal powered vehicle with two wheels",
    category: "Transportation",
    difficulty: "Easy",
  },
  {
    word: "desert",
    hint: "A barren, arid region with little precipitation and sparse vegetation",
    category: "Geography",
    difficulty: "Medium",
  },
  {
    word: "television",
    hint: "An electronic device used for receiving and displaying broadcast signals",
    category: "Technology",
    difficulty: "Medium",
  },
  {
    word: "rainforest",
    hint: "A dense forest with high rainfall, abundant biodiversity, and lush vegetation",
    category: "Nature",
    difficulty: "Hard",
  },
  {
    word: "soccer",
    hint: "A popular sport played with a round ball between two teams",
    category: "Sports",
    difficulty: "Medium",
  },
  {
    word: "astronomy",
    hint: "The study of celestial objects and phenomena",
    category: "Science",
    difficulty: "Hard",
  },
  {
    word: "architecture",
    hint: "The art and science of designing and constructing buildings",
    category: "Art",
    difficulty: "Hard",
  },
  {
    word: "bee",
    hint: "An insect known for its role in pollination and producing honey",
    category: "Animals",
    difficulty: "Easy",
  },
  {
    word: "dragonfly",
    hint: "An insect with a slender body and transparent wings",
    category: "Insects",
    difficulty: "Hard",
  },
  {
    word: "chemistry",
    hint: "The branch of science that deals with the composition, properties, and reactions of substances",
    category: "Science",
    difficulty: "Hard",
  },
  {
    word: "sculpture",
    hint: "The art of creating three dimensional forms",
    category: "Art",
    difficulty: "Hard",
  },
  {
    word: "revolution",
    hint: "A fundamental change in power or organizational structures that takes place in a relatively short period",
    category: "History Concepts",
    difficulty: "Medium",
  },
  {
    word: "colonization",
    hint: "The act of establishing a colony or colonies in a new territory",
    category: "History Concepts",
    difficulty: "Medium",
  },
  {
    word: "imperialism",
    hint: "A policy of extending a nation's power and influence through colonization, military force, or economic control",
    category: "History Concepts",
    difficulty: "Medium",
  },
  {
    word: "renaissance",
    hint: "A period of cultural and artistic rebirth that took place in Europe from the 14th to the 17th century",
    category: "History Concepts",
    difficulty: "Hard",
  },
  {
    word: "enlightenment",
    hint: "An intellectual and philosophical movement that emphasized reason, science, and individualism",
    category: "History Concepts",
    difficulty: "Hard",
  },
  {
    word: "industrialization",
    hint: "The process of developing industries on a large scale and the shift from manual labor to mechanized production",
    category: "History Concepts",
    difficulty: "Medium",
  },
  {
    word: "nationalism",
    hint: "A strong sense of loyalty and devotion to one's nation, often accompanied by the belief in its superiority",
    category: "History Concepts",
    difficulty: "Medium",
  },
  {
    word: "decolonization",
    hint: "The process of ending colonial rule and granting independence to former colonies",
    category: "History Concepts",
    difficulty: "Medium",
  },
  {
    word: "world war",
    hint: "A global military conflict involving many of the world's nations",
    category: "History Concepts",
    difficulty: "Hard",
  },
  {
    word: "Cold War",
    hint: "A period of geopolitical tension between the United States and the Soviet Union",
    category: "History Concepts",
    difficulty: "Medium",
  },
  {
    word: "Tawhid",
    hint: "The oneness of Allah and the central concept of Islamic monotheism",
    category: "Islamic Concepts",
    difficulty: "Medium",
  },
  {
    word: "Salah",
    hint: "The ritual prayer performed by Muslims five times a day",
    category: "Islamic Concepts",
    difficulty: "Easy",
  },
  {
    word: "Zakat",
    hint: "The obligatory charity given by Muslims to support the needy and the poor",
    category: "Islamic Concepts",
    difficulty: "Medium",
  },
  {
    word: "Sawm",
    hint: "The fasting observed by Muslims during the month of Ramadan",
    category: "Islamic Concepts",
    difficulty: "Easy",
  },
  {
    word: "Hajj",
    hint: "The pilgrimage to Mecca, one of the Five Pillars of Islam",
    category: "Islamic Concepts",
    difficulty: "Medium",
  },
  {
    word: "Quran",
    hint: "The holy book of Islam, believed to be the word of Allah as revealed to Prophet Muhammad",
    category: "Islamic Concepts",
    difficulty: "Easy",
  },
  {
    word: "Hadith",
    hint: "The collection of traditions and sayings of Prophet Muhammad",
    category: "Islamic Concepts",
    difficulty: "Medium",
  },
  {
    word: "Sharia",
    hint: "The Islamic law derived from the Quran and the teachings of Prophet Muhammad",
    category: "Islamic Concepts",
    difficulty: "Medium",
  },
  {
    word: "Imam",
    hint: "A religious leader or prayer leader in the Islamic community",
    category: "Islamic Concepts",
    difficulty: "Easy",
  },
  {
    word: "Jihad",
    hint: "The struggle or effort to strive for the sake of Allah and to promote righteousness",
    category: "Islamic Concepts",
    difficulty: "Medium",
  },
  {
    word: "Tawakkul",
    hint: "Reliance and trust in Allah's plan and divine will",
    category: "Islamic Concepts",
    difficulty: "Medium",
  },
  {
    word: "Ihsan",
    hint: "Excellence in worship and conduct, going above and beyond the minimum requirements",
    category: "Islamic Concepts",
    difficulty: "Medium",
  },
  {
    word: "Sunnah",
    hint: "The way and teachings of Prophet Muhammad, including his actions, sayings, and approvals",
    category: "Islamic Concepts",
    difficulty: "Easy",
  },
  {
    word: "Qibla",
    hint: "The direction faced by Muslims during prayer, towards the Kaaba in Mecca",
    category: "Islamic Concepts",
    difficulty: "Easy",
  },
  {
    word: "Iftar",
    hint: "The meal to break the fast during Ramadan",
    category: "Islamic Concepts",
    difficulty: "Easy",
  },
  {
    word: "Jannah",
    hint: "Paradise, the eternal abode of bliss for the righteous believers",
    category: "Islamic Concepts",
    difficulty: "Medium",
  },
  {
    word: "Zakah",
    hint: "The mandatory giving of a portion of one's wealth to the poor and needy",
    category: "Islamic Concepts",
    difficulty: "Easy",
  },
  {
    word: "Sadaqah",
    hint: "Voluntary acts of charity and giving",
    category: "Islamic Concepts",
    difficulty: "Easy",
  },
  {
    word: "Halal",
    hint: "Permissible and lawful according to Islamic principles",
    category: "Islamic Concepts",
    difficulty: "Easy",
  },
  {
    word: "Haram",
    hint: "Forbidden and prohibited according to Islamic principles",
    category: "Islamic Concepts",
    difficulty: "Easy",
  },
  {
    word: "Trinity",
    hint: "The Christian doctrine that God exists as three persons: the Father, the Son (Jesus Christ), and the Holy Spirit",
    category: "Christianity Concepts",
    difficulty: "Medium",
  },
  {
    word: "Salvation",
    hint: "The deliverance from sin and its consequences, believed to be achieved through faith in Jesus Christ",
    category: "Christianity Concepts",
    difficulty: "Medium",
  },
  {
    word: "Gospel",
    hint: "The teachings and message of Jesus Christ, specifically the accounts of his life, death, and resurrection",
    category: "Christianity Concepts",
    difficulty: "Easy",
  },
  {
    word: "Baptism",
    hint: "A Christian sacrament or rite of initiation, involving the application of water as a symbol of purification and admission into the Christian community",
    category: "Christianity Concepts",
    difficulty: "Easy",
  },
  {
    word: "Grace",
    hint: "The free and unmerited favor of God, given to humanity, particularly through Jesus Christ",
    category: "Christianity Concepts",
    difficulty: "Medium",
  },
  {
    word: "Crucifixion",
    hint: "The execution of Jesus Christ on the cross, regarded as the central event in Christian theology",
    category: "Christianity Concepts",
    difficulty: "Medium",
  },
  {
    word: "Resurrection",
    hint: "The belief in the rising of Jesus Christ from the dead, an essential tenet of Christian faith",
    category: "Christianity Concepts",
    difficulty: "Easy",
  },
  {
    word: "Redemption",
    hint: "The act of saving or delivering from sin and its consequences, often associated with the sacrifice of Jesus Christ",
    category: "Christianity Concepts",
    difficulty: "Medium",
  },
  {
    word: "Eucharist",
    hint: "The Christian sacrament commemorating the Last Supper, in which bread and wine are consecrated and consumed",
    category: "Christianity Concepts",
    difficulty: "Medium",
  },
  {
    word: "Kingdom of God",
    hint: "The reign or rule of God over all things, both present and future",
    category: "Christianity Concepts",
    difficulty: "Medium",
  },
  {
    word: "UCC",
    hint: "Abbreviation for University of Cape Coast",
    category: "University of Cape Coast",
    difficulty: "Easy",
  },
  {
    word: "Cape Coast",
    hint: "The city in Ghana where the University of Cape Coast is located",
    category: "University of Cape Coast",
    difficulty: "Easy",
  },
  {
    word: "Vice Chancellor",
    hint: "The principal academic and administrative officer of the University of Cape Coast",
    category: "University of Cape Coast",
    difficulty: "Medium",
  },
  {
    word: "Academics",
    hint: "The educational programs and courses offered at the University of Cape Coast",
    category: "University of Cape Coast",
    difficulty: "Easy",
  },
  {
    word: "Faculties",
    hint: "The different academic divisions within the University of Cape Coast, such as the Faculty of Social Sciences or the Faculty of Education",
    category: "University of Cape Coast",
    difficulty: "Medium",
  },
  {
    word: "Students",
    hint: "Individuals who are enrolled in or attending the University of Cape Coast",
    category: "University of Cape Coast",
    difficulty: "Easy",
  },
  {
    word: "Campus",
    hint: "The physical area or grounds of the University of Cape Coast where academic activities take place",
    category: "University of Cape Coast",
    difficulty: "Easy",
  },
  {
    word: "Library",
    hint: "A facility at the University of Cape Coast that provides resources and services for research and study",
    category: "University of Cape Coast",
    difficulty: "Easy",
  },
  {
    word: "Graduation",
    hint: "The ceremony or event where students receive their academic degrees upon completion of their studies at the University of Cape Coast",
    category: "University of Cape Coast",
    difficulty: "Medium",
  },
  {
    word: "Sports",
    hint: "Athletic activities and competitions that take place at the University of Cape Coast",
    category: "University of Cape Coast",
    difficulty: "Easy",
  },
  {
    word: "Chancellor",
    hint: "The ceremonial head of the University of Cape Coast, often a distinguished public figure",
    category: "University of Cape Coast",
    difficulty: "Medium",
  },

  {
    word: "Alumni",
    hint: "Former students of the University of Cape Coast who have graduated",
    category: "University of Cape Coast",
    difficulty: "Easy",
  },
  {
    word: "Research",
    hint: "The systematic investigation and study conducted by faculty and students at the University of Cape Coast",
    category: "University of Cape Coast",
    difficulty: "Easy",
  },

  {
    word: "Community Engagement",
    hint: "The University of Cape Coast's involvement and interaction with the local community to address societal needs",
    category: "University of Cape Coast",
    difficulty: "Medium",
  },
  {
    word: "Lectures",
    hint: "Educational sessions delivered by professors and instructors to students at the University of Cape Coast",
    category: "University of Cape Coast",
    difficulty: "Easy",
  },
  {
    word: "Graduate School",
    hint: "The division of the University of Cape Coast that offers advanced degree programs for postgraduate students",
    category: "University of Cape Coast",
    difficulty: "Medium",
  },
  {
    word: "Admissions",
    hint: "The process by which students apply and are accepted into programs at the University of Cape Coast",
    category: "University of Cape Coast",
    difficulty: "Easy",
  },
  {
    word: "Algorithm",
    hint: "A set of step by step instructions for solving a problem or accomplishing a task",
    category: "Computer Science",
    difficulty: "Easy",
  },
  {
    word: "Programming",
    hint: "The process of writing code to create computer programs",
    category: "Computer Science",
    difficulty: "Easy",
  },
  {
    word: "Data Structures",
    hint: "The organization and storage of data in a computer for efficient access and manipulation",
    category: "Computer Science",
    difficulty: "Medium",
  },
  {
    word: "Software Engineering",
    hint: "The application of engineering principles to the development of software systems",
    category: "Computer Science",
    difficulty: "Medium",
  },
  {
    word: "Residence Halls",
    hint: "The on campus accommodations provided for students at the University of Cape Coast",
    category: "University of Cape Coast",
    difficulty: "Medium",
  },
  {
    word: "Database Management",
    hint: "The design, implementation, and maintenance of databases to store and retrieve data",
    category: "Computer Science",
    difficulty: "Medium",
  },
  {
    word: "Artificial Intelligence",
    hint: "The development of computer systems that can perform tasks that normally require human intelligence",
    category: "Computer Science",
    difficulty: "Medium",
  },
  {
    word: "Network Security",
    hint: "The protection of computer networks and data from unauthorized access or attacks",
    category: "Computer Science",
    difficulty: "Medium",
  },
  {
    word: "Operating Systems",
    hint: "The software that manages computer hardware and provides a platform for running applications",
    category: "Computer Science",
    difficulty: "Easy",
  },
  {
    word: "Computer Networks",
    hint: "The interconnected systems that allow computers to communicate and share resources",
    category: "Computer Science",
    difficulty: "Easy",
  },
  {
    word: "Human Computer Interaction",
    hint: "The study of how humans interact with computers and the design of user friendly interfaces",
    category: "Computer Science",
    difficulty: "Medium",
  },
  {
    word: "Surah Al Fatiha",
    hint: "The Opening chapter of the Quran",
    category: "Quranic Verses",
    difficulty: "Easy",
  },
  {
    word: "Ayat Al Kursi",
    hint: "The Throne Verse (Quran 2:255)",
    category: "Quranic Verses",
    difficulty: "Easy",
  },
  {
    word: "Surah Al Ikhlas",
    hint: "Chapter of Sincerity (Quran 112)",
    category: "Quranic Verses",
    difficulty: "Easy",
  },
  {
    word: "Surah Al Baqarah",
    hint: "The Cow (Quran 2)",
    category: "Quranic Verses",
    difficulty: "Medium",
  },
  {
    word: "Surah Ya Sin",
    hint: "Heart of the Quran (Quran 36)",
    category: "Quranic Verses",
    difficulty: "Medium",
  },
  {
    word: "Surah Al Kahf",
    hint: "The Cave (Quran 18)",
    category: "Quranic Verses",
    difficulty: "Medium",
  },
  {
    word: "Surah Al Fajr",
    hint: "The Dawn (Quran 89)",
    category: "Quranic Verses",
    difficulty: "Easy",
  },
  {
    word: "Surah Al Anfal",
    hint: "The Spoils of War (Quran 8)",
    category: "Quranic Verses",
    difficulty: "Medium",
  },
  {
    word: "Surah Al Mulk",
    hint: "The Sovereignty (Quran 67)",
    category: "Quranic Verses",
    difficulty: "Medium",
  },
  {
    word: "Surah Al Hujurat",
    hint: "The Rooms (Quran 49)",
    category: "Quranic Verses",
    difficulty: "Medium",
  },
  {
    word: "Old Trafford",
    hint: "The iconic stadium and home ground of Manchester United",
    category: "Manchester United",
    difficulty: "Easy",
  },
  {
    word: "Sir Alex Ferguson",
    hint: "The legendary former manager of Manchester United",
    category: "Manchester United",
    difficulty: "Easy",
  },
  {
    word: "The Red Devils",
    hint: "The nickname of the Manchester United football team",
    category: "Manchester United",
    difficulty: "Easy",
  },
  {
    word: "Premier League",
    hint: "The top professional football league in England, in which Manchester United competes",
    category: "Manchester United",
    difficulty: "Easy",
  },
  {
    word: "Ryan Giggs",
    hint: "A former Manchester United player and club legend",
    category: "Manchester United",
    difficulty: "Medium",
  },
  {
    word: "UEFA Champions League",
    hint: "The premier club football competition in Europe, which Manchester United has won multiple times",
    category: "Manchester United",
    difficulty: "Medium",
  },
  {
    word: "George Best",
    hint: "One of the greatest players in Manchester United's history",
    category: "Manchester United",
    difficulty: "Medium",
  },
  {
    word: "The Class of '92",
    hint: "A group of talented Manchester United players who came through the club's youth system in the 1990s",
    category: "Manchester United",
    difficulty: "Medium",
  },

  {
    word: "The Treble",
    hint: "The achievement of winning the Premier League, FA Cup, and UEFA Champions League in a single season, which Manchester United accomplished in 1999",
    category: "Manchester United",
    difficulty: "Medium",
  },
  {
    word: "Exercise",
    hint: "Physical activity performed to improve or maintain health and fitness",
    category: "Health",
    difficulty: "Easy",
  },
  {
    word: "Nutrition",
    hint: "The process of providing the body with the necessary nutrients for growth, development, and overall health",
    category: "Health",
    difficulty: "Easy",
  },
  {
    word: "Hydration",
    hint: "The act of providing adequate fluids to the body to maintain proper physiological function",
    category: "Health",
    difficulty: "Easy",
  },
  {
    word: "Sleep",
    hint: "A naturally recurring state of rest for the body and mind, essential for overall health and well being",
    category: "Health",
    difficulty: "Easy",
  },
  {
    word: "Stress Management",
    hint: "Techniques and strategies used to cope with and reduce stress levels",
    category: "Health",
    difficulty: "Medium",
  },
  {
    word: "Mental Health",
    hint: "The state of emotional, psychological, and social well being",
    category: "Health",
    difficulty: "Medium",
  },

  {
    word: "Wellness",
    hint: "The active pursuit of activities, choices, and lifestyles that lead to a state of holistic health",
    category: "Health",
    difficulty: "Medium",
  },
  {
    word: "Vaccination",
    hint: "The administration of vaccines to stimulate the body's immune response and provide protection against infectious diseases",
    category: "Health",
    difficulty: "Medium",
  },
  {
    word: "Meditation",
    hint: "A practice of focusing the mind and achieving a mentally clear and emotionally calm state",
    category: "Health",
    difficulty: "Medium",
  },
  {
    word: "Alternating Current",
    hint: "A type of electric current that periodically reverses direction, championed by Nikola Tesla",
    category: "Nikola Tesla",
    difficulty: "Easy",
  },
  {
    word: "Tesla Coil",
    hint: "An electrical resonant transformer circuit invented by Nikola Tesla",
    category: "Nikola Tesla",
    difficulty: "Easy",
  },
  {
    word: "Wireless Power Transfer",
    hint: "The transmission of electrical energy without the need for wires or cables, a concept explored by Nikola Tesla",
    category: "Nikola Tesla",
    difficulty: "Medium",
  },
  {
    word: "Induction Motor",
    hint: "A type of electric motor utilizing rotating magnetic fields, invented by Nikola Tesla",
    category: "Nikola Tesla",
    difficulty: "Medium",
  },

  {
    word: "Wardenclyffe Tower",
    hint: "An experimental wireless transmission station designed by Nikola Tesla",
    category: "Nikola Tesla",
    difficulty: "Medium",
  },
  {
    word: "Tesla's Egg of Columbus",
    hint: "An experiment by Nikola Tesla demonstrating wireless power transmission through electromagnetic induction",
    category: "Nikola Tesla",
    difficulty: "Medium",
  },
  {
    word: "Remote Control",
    hint: "A technology developed by Nikola Tesla that allows wireless operation of devices from a distance",
    category: "Nikola Tesla",
    difficulty: "Easy",
  },
  {
    word: "Earthquake Machine",
    hint: "A hypothetical invention attributed to Nikola Tesla that allegedly could generate earthquakes",
    category: "Nikola Tesla",
    difficulty: "Medium",
  },
  {
    word: "Magnifying Transmitter",
    hint: "A large scale electrical transformer designed by Nikola Tesla for wireless energy transmission",
    category: "Nikola Tesla",
    difficulty: "Medium",
  },
  {
    word: "Albert Einstein",
    hint: "A theoretical physicist known for the theory of relativity and the equation E=mc^2",
    category: "Famous Scientists",
    difficulty: "Easy",
  },
  {
    word: "Marie Curie",
    hint: "A physicist and chemist known for her pioneering research on radioactivity",
    category: "Famous Scientists",
    difficulty: "Easy",
  },
  {
    word: "Isaac Newton",
    hint: "A mathematician and physicist who formulated the laws of motion and universal gravitation",
    category: "Famous Scientists",
    difficulty: "Easy",
  },
  {
    word: "Charles Darwin",
    hint: "A naturalist and biologist known for his theory of evolution by natural selection",
    category: "Famous Scientists",
    difficulty: "Easy",
  },
  {
    word: "Nikola Tesla",
    hint: "An inventor and electrical engineer known for his contributions to alternating current (AC) and wireless power transmission",
    category: "Famous Scientists",
    difficulty: "Medium",
  },
  {
    word: "Stephen Hawking",
    hint: "A theoretical physicist known for his work on black holes and the theory of Hawking radiation",
    category: "Famous Scientists",
    difficulty: "Medium",
  },
  {
    word: "Galileo Galilei",
    hint: "An astronomer, physicist, and mathematician known as the father of modern science",
    category: "Famous Scientists",
    difficulty: "Medium",
  },
  {
    word: "Rosalind Franklin",
    hint: "A chemist and crystallographer who made significant contributions to the discovery of the structure of DNA",
    category: "Famous Scientists",
    difficulty: "Medium",
  },
  {
    word: "Louis Pasteur",
    hint: "A biologist and chemist known for his discoveries in vaccination, pasteurization, and microbial fermentation",
    category: "Famous Scientists",
    difficulty: "Easy",
  },
  {
    word: "Jane Goodall",
    hint: "A primatologist and anthropologist known for her research and conservation efforts on chimpanzees",
    category: "Famous Scientists",
    difficulty: "Medium",
  },
  {
    word: "butterfly",
    hint: "An insect with colorful wings",
    category: "Animals",
    difficulty: "Easy",
  },
];

function removeDuplicatesByProperty(arr, property) {
  return arr.filter(
    (obj, index, self) =>
      index === self.findIndex((o) => o[property] === obj[property])
  );
}

let uniqueArray = removeDuplicatesByProperty(words, "word");

const contents = document.querySelector(".content");
const typing = contents.querySelector(".typing");
const inputs = contents.querySelector(".inputs");
const hintType = contents.querySelector(".hint span");
const categoryType = contents.querySelector(".category span");
const difficultyLevel = contents.querySelector(".level span");
const wrongLetter = contents.querySelector(".wrong-letter span");
const guessLeft = contents.querySelector(".guess-left span");
const resetBtn = contents.querySelector(".reset-btn");
const win = contents.querySelector(".winlose .wins");
const lose = contents.querySelector(".winlose .losses");
let word;
let maxGuess;
let correct = [];
let incorrects = [];
let wins = 0;
let losses = 0;

const randomWord = () => {
  const randomObj = uniqueArray[Math.floor(Math.random() * uniqueArray.length)];
  word = randomObj.word.replace(" ", "").replace(" ", "").toLowerCase();

  const { hint, difficulty, category } = randomObj;
  maxGuess = 8;
  hintType.innerText = hint;
  difficultyLevel.innerText = difficulty;
  categoryType.innerText = category;

  correct = [];
  incorrects = [];
  let html = "";
  for (word of word) {
    html += `<input type="text" />`;
  }
  inputs.innerHTML = html;
};
randomWord();

const initGame = (event) => {
  const key = event.target.value.trim().toLowerCase();
  if (
    key.match(/^[A-Za-z]+$/) &&
    !incorrects.includes(`${key}`) &&
    !correct.includes(`${key}`)
  ) {
    if (word.includes(key)) {
      for (let i = 1; i < word.length; i++) {
        if (word[i] === key) {
          correct.push(key);
          inputs = document.querySelectorAll("input")[i].value = key;
        }
      }
    } else {
      incorrects.push(key);
      maxGuess--;
    }
    guessLeft.innerHTML = maxGuess;
    wrongLetter.innerText = incorrects;
  }
};
