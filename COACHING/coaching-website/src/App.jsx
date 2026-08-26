import React, { useState, useEffect, useRef } from "react";
import {
  Menu,
  X,
  Phone,
  Award,
  BookOpen,
  Users,
  TrendingUp,
  MapPin,
  ChevronRight,
  Star,
  GraduationCap,
  Shield,
  Plane,
  Anchor,
  Home,
  Building2,
} from "lucide-react";

// ==================== DATA ====================

const examCategories = [
  {
    name: "TET-CTET",
    icon: <BookOpen className="w-6 h-6" />,
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "UPSI",
    icon: <Shield className="w-6 h-6" />,
    color: "from-red-500 to-orange-500",
  },
  {
    name: "UP Police",
    icon: <Shield className="w-6 h-6" />,
    color: "from-blue-600 to-blue-800",
  },
  {
    name: "BSF",
    icon: <Building2 className="w-6 h-6" />,
    color: "from-green-600 to-emerald-700",
  },
  {
    name: "CISF",
    icon: <Building2 className="w-6 h-6" />,
    color: "from-indigo-600 to-purple-700",
  },
  {
    name: "Army (GD)",
    icon: <Users className="w-6 h-6" />,
    color: "from-amber-600 to-yellow-700",
  },
  {
    name: "Army Technical",
    icon: <Users className="w-6 h-6" />,
    color: "from-amber-700 to-orange-800",
  },
  {
    name: "Army Clerk",
    icon: <Users className="w-6 h-6" />,
    color: "from-amber-800 to-red-900",
  },
  {
    name: "Airforce",
    icon: <Plane className="w-6 h-6" />,
    color: "from-sky-500 to-blue-600",
  },
  {
    name: "Navy",
    icon: <Anchor className="w-6 h-6" />,
    color: "from-blue-800 to-blue-950",
  },
  {
    name: "Homeguard",
    icon: <Home className="w-6 h-6" />,
    color: "from-teal-600 to-cyan-700",
  },
];

const selectionData = [
  { exam: "TET-CTET", percentage: 44, color: "bg-blue-500" },
  { exam: "UPSI", percentage: 57, color: "bg-red-500" },
  { exam: "UP Police", percentage: 61, color: "bg-blue-700" },
  { exam: "BSF", percentage: 49, color: "bg-green-600" },
  { exam: "CISF", percentage: 45, color: "bg-indigo-600" },
  { exam: "Army GD", percentage: 92, color: "bg-amber-600" },
  { exam: "Army Technical", percentage: 88, color: "bg-amber-700" },
  { exam: "Army Clerk", percentage: 86, color: "bg-amber-800" },
  { exam: "Airforce", percentage: 83, color: "bg-sky-500" },
  { exam: "Navy", percentage: 81, color: "bg-blue-900" },
  { exam: "Homeguard", percentage: 70, color: "bg-teal-600" },
];

const generateStudents = (year, count) => {
  const firstNames = [
    "Amit",
    "Rajesh",
    "Suresh",
    "Vikram",
    "Rahul",
    "Priyanka",
    "Neha",
    "Anjali",
    "Ravi",
    "Deepak",
    "Sanjay",
    "Manoj",
    "Arun",
    "Vijay",
    "Sunil",
    "Pankaj",
    "Alok",
    "Nitin",
    "Karan",
    "Mohit",
    "Rohit",
    "Sachin",
    "Vivek",
    "Ajay",
    "Dinesh",
    "Gaurav",
    "Hemant",
    "Jatin",
    "Kunal",
    "Lokesh",
  ];
  const lastNames = [
    "Kumar",
    "Singh",
    "Yadav",
    "Sharma",
    "Verma",
    "Gupta",
    "Patel",
    "Reddy",
    "Jha",
    "Pandey",
    "Tiwari",
    "Mishra",
    "Chauhan",
    "Dubey",
    "Tripathi",
    "Srivastava",
    "Awasthi",
    "Maurya",
    "Chandra",
    "Prasad",
  ];
  const exams = [
    "TET-CTET",
    "UPSI",
    "UP Police",
    "BSF",
    "CISF",
    "Army GD",
    "Army Tech",
    "Army Clerk",
    "Airforce",
    "Navy",
    "Homeguard",
  ];

  return Array.from({ length: count }, (_, i) => ({
    id: `${year}-${i}`,
    name: `${firstNames[Math.floor(Math.random() * firstNames.length)]} ${lastNames[Math.floor(Math.random() * lastNames.length)]}`,
    exam: exams[Math.floor(Math.random() * exams.length)],
    rank: Math.floor(Math.random() * 500) + 1,
    image: `https://i.pravatar.cc/150?img=${(i % 70) + 1}`,
    year,
  }));
};

const students2025_26 = generateStudents("2025-26", 30);
const students2024_25 = generateStudents("2024-25", 28);
const students2022_23 = generateStudents("2022-23", 25);

const libraryImages = Array.from({ length: 4 }, (_, i) => ({
  id: i,
  url: `/photohttps://images.unsplash.com-${
    [
      "1507842217121-9e9f1479b03e",
      "https://images.unsplash.com/photo-1777927515662-a460bce161eb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "1481627834827-6ce0f4395d1b",
      "1524994796-5a6b5e4a0e32",
      "1513475382585-d5b9f0b6d8b3",
      "1509021436665-8f07dbf5bf1d",
      "1497633762265-9d179a990aa6",
      "1524994796-5a6b5e4a0e32",
      "1507842217121-9e9f1479b03e",
      "1521587760476-6ce0f4395d1b",
      "1507842217121-9e9f1479b03e",
      "1521587760476-6ce0f4395d1b",
      "1481627834827-6ce0f4395d1b",
      "1524994796-5a6b5e4a0e32",
      "1513475382585-d5b9f0b6d8b3",
      "1509021436665-8f07dbf5bf1d",
      "1497633762265-9d179a990aa6",
      "1524994796-5a6b5e4a0e32",
      "1507842217121-9e9f1479b03e",
      "1521587760476-6ce0f4395d1b",
    ][i]
  }?w=400&h=300&fit=crop`,
}));

const celebrationImages = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  url: `https://images.unsplash.com/photo-${
    [
      "1533174072545-e8d4aa97edf9",
      "1511632765486-a01980e01a18",
      "1527529482837-4698179dc6ce",
      "1514525253440-b393452e8d26",
      "1464207680463-9e2d3e1e5e3e",
      "1504196606672-aef5c9f0b0b7",
      "1519671482746-eb9e4c3e1a1e",
      "1528605248644-9bc739da5b8f",
    ][i]
  }?w=400&h=300&fit=crop`,
}));

// ==================== COMPONENTS ====================

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Results", href: "#results" },
    { name: "Director", href: "#director" },
    { name: "Selection %", href: "#selection" },
    { name: "Library", href: "#library" },
    { name: "Celebrations", href: "#celebrations" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <GraduationCap
              className={`w-8 h-8 ${scrolled ? "text-blue-700" : "text-white"}`}
            />
            <span
              className={`text-xl font-bold ${scrolled ? "text-gray-900" : "text-white"}`}
            >
              Shree Vijaya
            </span>
          </div>

          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium hover:text-blue-500 transition-colors ${scrolled ? "text-gray-700" : "text-white/90"}`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? (
              <X className={scrolled ? "text-gray-900" : "text-white"} />
            ) : (
              <Menu className={scrolled ? "text-gray-900" : "text-white"} />
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block px-4 py-3 text-gray-700 hover:bg-blue-50"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

const Hero = () => (
  <section
    id="home"
    className="relative min-h-screen flex items-center justify-center overflow-hidden"
  >
    <div className="absolute inset-0 bg-linear-to-br from-blue-900 via-indigo-900 to-purple-900" />
    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-20" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="animate-fade-in-up">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
          <Star className="w-4 h-4 text-yellow-400 mr-2" />
          <span className="text-white/90 text-sm font-medium">
            20+ Years of Excellence
          </span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Building{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
            Future
          </span>{" "}
          Leaders
        </h1>
        <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
          "Shree Vijaya Coaching Institute mein aapka swagat hai! Yahan har
          student ko unki manzil tak pahunchane ka wada kiya jata hai. Hamara
          lakshya sirf padhana nahi, balki zindagi mein asli safalta dilana
          hai."
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#results"
            className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold rounded-full hover:scale-105 transition-transform shadow-lg shadow-orange-500/30"
          >
            View Results
          </a>
          <a
            href="#contact"
            className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-bold rounded-full hover:bg-white/20 transition-all"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>

    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
      <ChevronRight className="w-6 h-6 text-white rotate-90" />
    </div>
  </section>
);

const ExamCategories = () => (
  <section className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Our Exam Categories
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Har prakar ki sarkari naukri ki taiyari yahan hoti hai
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {examCategories.map((exam, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
          >
            <div
              className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${exam.color}`}
            />
            <div
              className={`w-12 h-12 rounded-xl bg-gradient-to-br ${exam.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}
            >
              {exam.icon}
            </div>
            <h3 className="text-lg font-bold text-gray-900">{exam.name}</h3>
            <p className="text-sm text-gray-500 mt-1">Expert Guidance</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const InfiniteScroll = ({ items }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId;
    let scrollPos = 0;

    const animate = () => {
      scrollPos += 3.5;
      if (scrollPos >= scrollContainer.scrollWidth / 2) {
        scrollPos = 0;
      }
      scrollContainer.scrollLeft = scrollPos;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div className="overflow-hidden py-4">
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-hidden"
        style={{ scrollBehavior: "auto" }}
      >
        {[...items, ...items].map((student, index) => (
          <div
            key={`${student.id}-${index}`}
            className="flex-shrink-0 w-64 bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={student.image}
                alt={student.name}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-3 right-3 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                Rank #{student.rank}
              </div>
            </div>
            <div className="p-4">
              <h4 className="font-bold text-gray-900">{student.name}</h4>
              <p className="text-sm text-blue-600 font-medium">
                {student.exam}
              </p>
              <p className="text-xs text-gray-500 mt-1">Batch {student.year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ResultsSection = () => (
  <section id="results" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <Award className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Selection Reports
        </h2>
        <p className="text-lg text-gray-600">
          Hamare shandar results jo hamare students ki mehnat ko darshate hain
        </p>
      </div>

      {[
        {
          year: "2025-2026",
          students: students2025_26,
          color: "from-blue-600 to-indigo-600",
        },
        {
          year: "2024-2025",
          students: students2024_25,
          color: "from-purple-600 to-pink-600",
        },
        {
          year: "2022-2023",
          students: students2022_23,
          color: "from-orange-500 to-red-500",
        },
      ].map((batch) => (
        <div key={batch.year} className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div
              className={`w-12 h-12 rounded-xl bg-gradient-to-br ${batch.color} flex items-center justify-center text-white font-bold`}
            >
              {batch.year.split("-")[0]}
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">
                Batch {batch.year}
              </h3>
              <p className="text-gray-500">
                {batch.students.length}+ Selections
              </p>
            </div>
          </div>
          <InfiniteScroll items={batch.students} />
        </div>
      ))}
    </div>
  </section>
);

const DirectorSection = () => (
  <section
    id="director"
    className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white"
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-3xl transform rotate-3" />
          <img
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=700&fit=crop"
            alt="Director"
            className="relative rounded-3xl shadow-2xl w-full object-cover h-[500px]"
          />
          <div className="absolute -bottom-6 -right-6 bg-white text-gray-900 p-6 rounded-2xl shadow-xl">
            <div className="text-4xl font-bold text-blue-600">20+</div>
            <div className="text-sm font-medium">Years Experience</div>
          </div>
        </div>

        <div>
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <Users className="w-4 h-4 text-yellow-400 mr-2" />
            <span className="text-white/90 text-sm font-medium">
              Founder & Director
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Shri Rajesh Kumar Sharma
          </h2>
          <p className="text-lg text-white/80 mb-8 leading-relaxed">
            "Education is not just about books, it's about building character.
            Maine apni zindagi ka har pal students ki seva mein bitaya hai."
          </p>

          <div className="space-y-4">
            {[
              {
                icon: <Award className="w-5 h-5" />,
                text: "20+ Years of Teaching Experience",
              },
              {
                icon: <BookOpen className="w-5 h-5" />,
                text: "Guest Lecturer at GGIC (Govt. Girls Inter College)",
              },
              {
                icon: <Building2 className="w-5 h-5" />,
                text: "Ex-Principal at St. Inter College",
              },
              {
                icon: <TrendingUp className="w-5 h-5" />,
                text: "5000+ Students Selected in Govt. Jobs",
              },
              {
                icon: <Star className="w-5 h-5" />,
                text: "Best Coaching Director Award 2026",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10"
              >
                <div className="text-yellow-400">{item.icon}</div>
                <span className="font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const SelectionPercentages = () => (
  <section id="selection" className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <TrendingUp className="w-12 h-12 text-green-500 mx-auto mb-4" />
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Selection Percentages
        </h2>
        <p className="text-lg text-gray-600">
          Har exam mein hamara success rate
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {selectionData.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-gray-900">{item.exam}</h3>
              <span className="text-2xl font-bold text-green-600">
                {item.percentage}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              <div
                className={`h-full ${item.color} rounded-full transition-all duration-1000 ease-out`}
                style={{ width: `${item.percentage}%` }}
              />
            </div>
            <p className="text-sm text-gray-500 mt-3">Success Rate</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const LibrarySection = () => (
  <section id="library" className="py-20 bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
      <div className="text-center">
        <BookOpen className="w-12 h-12 text-indigo-500 mx-auto mb-4" />
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Library</h2>
        <p className="text-lg text-gray-600">
          Best study environment with 5000+ books
        </p>
      </div>
    </div>

    <div className="relative">
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
      <InfiniteScroll
        items={libraryImages.map((img, i) => ({
          ...img,
          id: i,
          name: `Library View ${i + 1}`,
          image: img.url,
          exam: "Library",
          year: "2024",
          rank: i + 1,
        }))}
      />
    </div>
  </section>
);

const CelebrationsSection = () => (
  <section
    id="celebrations"
    className="py-20 bg-gradient-to-br from-purple-50 to-pink-50"
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <Award className="w-12 h-12 text-purple-500 mx-auto mb-4" />
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Celebrations</h2>
        <p className="text-lg text-gray-600">
          Success moments with our students
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {celebrationImages.map((img, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-2xl aspect-square"
          >
            <img
              src={img.url}
              alt={`Celebration ${index + 1}`}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
              <p className="font-bold">Success Party {index + 1}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* const ContactSection = () => (
  <section id="contact" className="py-20 bg-gray-900 text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
          <p className="text-gray-400 mb-8">
            Aap humse kisi bhi samay sampark kar sakte hain
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Phone 1</p>
                <p className="font-bold text-lg">+91 98765 43210</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Phone 2</p>
                <p className="font-bold text-lg">+91 98765 43211</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Phone 3</p>
                <p className="font-bold text-lg">+91 98765 43212</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Address</p>
                <p className="font-bold">
                  123 Coaching Lane, Main Road, Uttar Pradesh
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-4 mt-8">
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center hover:scale-110 transition-transform"
            >
              <Youtube className="w-6 h-6" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center hover:scale-110 transition-transform"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-blue-400 rounded-xl flex items-center justify-center hover:scale-110 transition-transform"
            >
              <Twitter className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10">
          <h3 className="text-2xl font-bold mb-6">Enquiry Form</h3>
          <form
            action="https://formspree.io/f/YOUR_FORM_ID"
            method="POST"
            className="space-y-4"
          >
            <div>
              <label className="block text-sm font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:border-blue-500 text-white placeholder-gray-400"
                placeholder="Aapka naam"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                required
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:border-blue-500 text-white placeholder-gray-400"
                placeholder="Mobile number"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:border-blue-500 text-white placeholder-gray-400"
                placeholder="Email address"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Interested Exam
              </label>
              <select
                name="exam"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:border-blue-500 text-white"
              >
                <option value="" className="bg-gray-900">
                  Select Exam
                </option>
                {examCategories.map((exam) => (
                  <option
                    key={exam.name}
                    value={exam.name}
                    className="bg-gray-900"
                  >
                    {exam.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                name="message"
                rows="4"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:border-blue-500 text-white placeholder-gray-400"
                placeholder="Aapka message..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-xl hover:scale-[1.02] transition-transform shadow-lg shadow-blue-600/30"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
);
 */
const Footer = () => (
  <footer className="bg-black text-white py-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="flex items-center justify-center gap-2 mb-4">
        <GraduationCap className="w-6 h-6 text-blue-500" />
        <span className="text-xl font-bold">Success Coaching Institute</span>
      </div>
      <p className="text-gray-500">
        © 2026 Success Coaching Institute. All rights reserved.
      </p>
    </div>
  </footer>
);

// ==================== MAIN APP ====================

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <ExamCategories />
      <ResultsSection />
      <DirectorSection />
      <SelectionPercentages />
      <LibrarySection />
      <CelebrationsSection />
      {/*  <ContactSection /> */}
      <Footer />
    </div>
  );
};

export default App;
