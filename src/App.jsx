import React, { useState, useEffect } from "react";
import {
  Code,
  Server,
  Layout,
  Database,
  Terminal,
  Github,
  Linkedin,
  Mail,
  Moon,
  Sun,
  Menu,
  X,
  ChevronDown,
  Briefcase,
  ExternalLink,
  Download,
} from "lucide-react";

import Notify from "./assets/notify.png";
import Sell from "./assets/sell.png";
import Mja from "./assets/mja.png";
import Cashback from "./assets/cashback.png";
import Sipresma from "./assets/sipresma.png";
import Profile from "./assets/profile.jpg";
import CVFile from "./assets/pebryan_ibrahim.pdf";

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Handle scroll spy for active navigation
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "experience", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (
          element &&
          element.offsetTop <= scrollPosition &&
          element.offsetTop + element.offsetHeight > scrollPosition
        ) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fungsi khusus untuk Smooth Scroll
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80; // Sesuaikan dengan tinggi header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      setActiveSection(sectionId);
      setIsMenuOpen(false); // Tutup menu mobile jika terbuka
    }
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const navLinks = [
    { name: "Beranda", id: "home" },
    { name: "Tentang", id: "about" },
    { name: "Keahlian", id: "skills" },
    { name: "Proyek", id: "projects" },
    { name: "Pengalaman", id: "experience" },
    { name: "Kontak", id: "contact" },
  ];

  const skills = [
    {
      category: "Backend Development",
      icon: <Server className="w-8 h-8 text-blue-500" />,
      items: [
        "PHP",
        "Laravel",
        "CodeIgniter 4",
        "Express.js",
        "Golang",
        "Gin",
        "RESTful APIs",
        "MySQL",
      ],
    },
    {
      category: "Frontend Development",
      icon: <Layout className="w-8 h-8 text-emerald-500" />,
      items: [
        "Vue.js",
        "Vuetify",
        "Tailwind CSS",
        "HTML5/CSS3",
        "JavaScript (ES6+)",
        "Responsive Design",
      ],
    },
    {
      category: "Tools & Workflow",
      icon: <Terminal className="w-8 h-8 text-purple-500" />,
      items: ["Git/GitHub/GitLab", "Composer", "NPM", "Postman", "Docker", "Docker CLI", "Redis"],
    },
  ];

  const projects = [
    {
      title: "CraftiveNotify",
      desc: "Sistem WhatsApp Gateway SaaS (Software as a Service) yang mengintegrasikan payment gateway Midtrans untuk transaksi layanan.",
      tech: ["Laravel", "MariaDB", "Tailwind CSS", "Midtrans API", "SQLite", "Golang"],
      image: Notify,
      type: "Full Stack",
      labelLink: "Kunjungi Website",
      link: "https://notify.craftivelabs.com",
    },
    {
      title: "CraftiveSell",
      desc: "Aplikasi Point of Sale (POS) cloud multi-tenant yang menerapkan notifikasi WhatsApp gateway sebagai media pengiriman nota transaksi (paperless).",
      tech: [
        "CodeIgniter 4",
        "Redis",
        "Vue.js",
        "MariaDB",
        "Whatsapp Gateway",
      ],
      image: Sell,
      type: "Full Stack",
      labelLink: "Kunjungi Website",
      link: "https://sell.craftivelabs.com",
    },
    {
      title: "MLM Operational Systems",
      desc: "Pengembangan berbagai platform operasional bisnis Multi-Level Marketing. Berfokus pada stabilitas kalkulasi komisi, serta integrasi sistem notifikasi WhatsApp dan payment gateway pihak ketiga.",
      tech: ["Codeigniter 4", "Vue.js", "MariaDB", "WA Gateway", "Xendit API", "Onebrick API"],
      image: Mja,
      type: "Full Stack",
      labelLink: "Kunjungi Representasi Website",
      link: "https://mjaglobal.net",
    },
    {
      title: "Marketplace Affiliate System",
      desc: "Pengembangan antarmuka (frontend) untuk sistem afiliasi yang memungkinkan pengguna memaksimalkan komisi dari transaksi pribadi pada marketplace seperti Shopee dan ShopeeFood.",
      tech: [
        "Vue.js",
        "Frontend Development",
      ],
      image: Cashback,
      type: "Frontend",
      labelLink: "Kunjungi Website",
      link: "https://cashback.craftivelabs.com",
    },
    {
      title: "SIPRESMA",
      desc: "Sistem Presensi Mahasiswa INSTIPER Yogyakarta untuk kegiatan perkuliahan yang terintegrasi dengan pemindai RFID. Dilengkapi otomatisasi rekap kehadiran ke Google Drive dan pengiriman notifikasi beserta dokumen melalui WhatsApp.",
      tech: ["Codeigniter 4", "Vue.js", "MariaDB", "Bootstrap", "WA Gateway", "Google Drive API", "RFID Integration"],
      image: Sipresma,
      type: "Full Stack",
      labelLink: "Sistem Internal Kampus",
      link: "",
    },
  ];

  const experiences = [
    {
      role: "Senior Web Developer",
      period: "Jan 2025 - Sekarang",
      company: "PT Esoftdream Solusi Bisnis",
      tasks: [
        "Merancang dan mengembangkan arsitektur sistem web fullstack yang efisien.",
        "Melakukan review dan refactoring kode untuk optimasi performa.",
        "Membimbing dan memberikan feedback teknis kepada junior developer.",
      ],
    },
    {
      role: "Intermediate Web Developer",
      period: "Jan 2024 - Jan 2025",
      company: "PT Esoftdream Solusi Bisnis",
      tasks: [
        "Berkolaborasi dengan QA untuk memastikan standar kebutuhan pengguna.",
        "Menulis kode bersih, efisien, dan melakukan integrasi API eksternal.",
      ],
    },
    {
      role: "Junior Web Developer",
      period: "Mei 2023 - Des 2023",
      company: "Dinas Kominfo dan Persandian - Seruyan",
      tasks: [
        "Membangun dan mengembangkan sistem tunjangan ASN/PNS daerah.",
        "Berkontribusi dalam integrasi fitur dan UI sistem website daerah.",
      ],
    },
    {
      role: "Junior Web Developer",
      period: "Jan 2021 - Apr 2023",
      company: "PT Esoftdream Solusi Bisnis",
      tasks: [
        "Membantu mengembangkan dan memelihara website serta mendukung implementasi teknis.",
        "Berkolaborasi dengan tim desain dan pengembang untuk integrasi fitur dan UI responsif.",
        "Melakukan testing dasar, perbaikan bug (error), serta menyusun dokumentasi teknis.",
        "Terus belajar dan mengikuti perkembangan teknologi web terbaru.",
      ],
    },
  ];

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-slate-900 text-slate-100" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          darkMode
            ? "bg-slate-900/90 border-b border-slate-800"
            : "bg-white/90 border-b border-gray-200"
        } backdrop-blur-sm`}
      >
        <div className="w-full mx-auto px-6 lg:px-16">
          <div className="flex items-center justify-between h-16">
            <div
              className="flex-shrink-0 font-bold text-2xl tracking-tighter cursor-pointer"
              onClick={(e) => scrollToSection(e, "home")}
            >
              <span className="text-blue-600">&lt;</span>
              PI
              <span className="text-blue-600">/&gt;</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-8">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={`#${link.id}`}
                    onClick={(e) => scrollToSection(e, link.id)}
                    className={`text-sm font-medium transition-colors hover:text-blue-500 cursor-pointer ${
                      activeSection === link.id
                        ? "text-blue-500"
                        : darkMode
                        ? "text-slate-300"
                        : "text-gray-600"
                    }`}
                  >
                    {link.name}
                  </a>
                ))}
                <button
                  onClick={toggleTheme}
                  className={`p-2 rounded-full transition-colors ${
                    darkMode
                      ? "hover:bg-slate-800 bg-slate-900/90 text-yellow-400"
                      : "hover:bg-gray-100 bg-slate-100 text-slate-600"
                  }`}
                >
                  {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-4">
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-full ${
                  darkMode
                    ? "text-yellow-400 bg-slate-900/90"
                    : "text-gray-600 bg-slate-100"
                }`}
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2 rounded-md ${
                  darkMode
                    ? "text-slate-300 hover:bg-slate-800 bg-slate-900/90"
                    : "text-gray-600 hover:bg-gray-100 bg-slate-100"
                }`}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div
            className={`md:hidden ${
              darkMode ? "bg-slate-800" : "bg-white"
            } border-b ${darkMode ? "border-slate-700" : "border-gray-200"}`}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={`#${link.id}`}
                  onClick={(e) => scrollToSection(e, link.id)}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    darkMode
                      ? "text-slate-300 hover:bg-slate-700"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center pt-24 pb-16 relative overflow-hidden"
      >
        {/* Background Decorative Elements */}
        <div
          className={`absolute top-20 right-0 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob`}
        ></div>
        <div
          className={`absolute top-20 left-0 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000`}
        ></div>

        <div className="w-full mx-auto px-6 lg:px-16 relative z-10 text-center">
          {/* PROFILE IMAGE - Style Kotak (Rounded-2xl) */}
          <div className="mb-10 relative inline-block group mx-auto font-center">
            {/* Gradient Background Effect - Disesuaikan jadi kotak */}
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 via-emerald-500 to-purple-600 rounded-2xl blur-md opacity-40 group-hover:opacity-80 transition duration-1000 group-hover:duration-200 animate-tilt"></div>

            {/* Container Foto - Disesuaikan jadi kotak (rounded-2xl) */}
            <div
              className={`relative w-40 h-40 md:w-52 md:h-52 rounded-2xl overflow-hidden border-4 ${
                darkMode
                  ? "bg-slate-900 border-slate-800"
                  : "bg-white border-gray-100"
              } shadow-2xl`}
            >
              {/* GANTI SRC DI BAWAH INI DENGAN LINK FOTO ANDA */}
              <img
                src={Profile}
                alt="Pebryan Ibrahim"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            {/* Status Badge dihapus */}
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            Halo, Saya{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              Pebryan Ibrahim
            </span>
          </h1>
          <p
            className={`mt-4 max-w-2xl mx-auto text-xl md:text-2xl ${
              darkMode ? "text-slate-400" : "text-gray-600"
            }`}
          >
            Web Developer dengan pengalaman lebih dari 5 tahun membangun aplikasi web modern, scalable, dan berkinerja tinggi.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#projects"
              onClick={(e) => scrollToSection(e, "projects")}
              className="px-8 py-3.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white hover:text-blue-50 font-semibold transition-all shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2"
            >
              <Briefcase size={20} />
              Lihat Portofolio
            </a>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "contact")}
              className={`px-8 py-3.5 rounded-lg font-semibold transition-all border ${
                darkMode
                  ? "border-slate-700 hover:bg-slate-800 text-white"
                  : "border-gray-300 hover:bg-gray-100 text-gray-900"
              } flex items-center justify-center gap-2`}
            >
              <Mail size={20} />
              Hubungi Saya
            </a>

            <a
              href={CVFile}
              download="Pebryan_Ibrahim.pdf"
              onClick={(e) => {
                // Prevent default hanya untuk preview agar tidak redirect ke '#'
                if (CVFile === "#") e.preventDefault();
                // Di lokal, biarkan onClick ini kosong atau hapus baris ini
              }}
              className={`px-8 py-3.5 rounded-lg font-semibold transition-all border ${
                darkMode
                  ? "border-emerald-500/50 hover:text-emerald-500 text-emerald-400 hover:bg-emerald-500/10"
                  : "border-emerald-500 hover:text-emerald-500 text-emerald-600 hover:bg-emerald-50"
              } flex items-center justify-center gap-2 cursor-pointer`}
            >
              <Download size={20} />
              Download CV
            </a>
          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="font-bold text-xl">Laravel</span>
            <span className="font-bold text-xl">CodeIgniter 4</span>
            <span className="font-bold text-xl">Vue.js</span>
            <span className="font-bold text-xl">Express.js</span>
            <span className="font-bold text-xl">Golang</span>
            <span className="font-bold text-xl">Docker</span>
          </div>

          <div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
            onClick={(e) => scrollToSection(e, "about")}
          >
            <div className={darkMode ? "text-slate-500" : "text-gray-400"}>
              <ChevronDown size={32} />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className={`py-20 ${darkMode ? "bg-slate-800/50" : "bg-gray-100"}`}
      >
        <div className="w-full mx-auto px-6 lg:px-16">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            {/* Visual Column */}
            <div className="relative mt-12 lg:mt-0 mb-12 lg:mb-0">
              {/* Code Card - Clean Version without Image */}
              <div
                className={`rounded-xl p-6 md:p-8 font-mono text-sm overflow-hidden shadow-2xl relative z-10 border ${
                  darkMode
                    ? "bg-slate-900 text-slate-300 border-slate-700"
                    : "bg-white text-gray-800 border-gray-200"
                }`}
              >
                <div className="flex gap-2 mb-6 border-b pb-4 border-slate-700/50">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <div
                    className={`ml-auto text-xs ${
                      darkMode ? "text-slate-500" : "text-gray-400"
                    }`}
                  >
                    Developer.php
                  </div>
                </div>
                <div className="space-y-3 leading-relaxed">
                  <p>
                    <span className="text-purple-400">class</span>{" "}
                    <span className="text-yellow-400">Pebryan</span>{" "}
                    <span className="text-purple-400">extends</span>{" "}
                    <span className="text-yellow-400">WebDeveloper</span> &#123;
                  </p>
                  <p className="pl-4">
                    <span className="text-blue-400">public</span>{" "}
                    <span className="text-blue-300">$experience</span> ={" "}
                    <span className="text-orange-400">5</span>;{" "}
                    <span className="text-slate-500">// years</span>
                  </p>
                  <p className="pl-4">
                    <span className="text-blue-400">public</span>{" "}
                    <span className="text-blue-300">$location</span> ={" "}
                    <span className="text-green-400">
                      "Yogyakarta, Indonesia"
                    </span>
                    ;
                  </p>
                  <p className="pl-4">
                    <span className="text-blue-400">public</span>{" "}
                    <span className="text-blue-300">$stack</span> = [
                  </p>
                  <p className="pl-8">
                    <span className="text-green-400">"Laravel"</span>,
                  </p>
                  <p className="pl-8">
                    <span className="text-green-400">"CodeIgniter 4"</span>,
                  </p>
                  <p className="pl-8">
                    <span className="text-green-400">"Vue.js"</span>,
                  </p>
                  <p className="pl-8">
                    <span className="text-green-400">"Express.js"</span>,
                  </p>
                  <p className="pl-8">
                    <span className="text-green-400">"Golang"</span>,
                  </p>
                  <p className="pl-8">
                    <span className="text-green-400">"Gin"</span>,
                  </p>
                  <p className="pl-8">
                    <span className="text-green-400">"Docker"</span>
                  </p>
                  <p className="pl-4">];</p>
                  <p>&#125;</p>
                </div>
              </div>

              {/* Decorative Glow */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-500 rounded-full opacity-20 blur-2xl"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-500 rounded-full opacity-20 blur-2xl"></div>
            </div>

            <div className="mt-10 lg:mt-0">
              <h2 className="text-3xl font-bold mb-6">Tentang Saya</h2>
              <p
                className={`text-lg mb-6 leading-relaxed ${
                  darkMode ? "text-slate-300" : "text-gray-600"
                }`}
              >
                Saya adalah seorang Web Developer profesional dengan pengalaman
                lebih dari <strong className="text-emerald-500">5 tahun</strong>{" "}
                dalam merancang, mengembangkan, dan mengoptimalkan sistem
                berbasis web.
              </p>
              <p
                className={`text-lg mb-6 leading-relaxed ${
                  darkMode ? "text-slate-300" : "text-gray-600"
                }`}
              >
                Saya bertanggung jawab dalam analisis kebutuhan, perancangan
                arsitektur, serta pengembangan sistem website yang berkualitas
                tinggi, scalable, dan berperforma tinggi. Saya memiliki keahlian
                dalam berbagai teknologi backend dan frontend seperti
                Javascript, PHP, Go, CSS, dan HTML, serta berpengalaman menggunakan
                framework populer seperti{" "}
                <strong className="text-blue-500">
                  Express.js, CodeIgniter 4, Laravel, Gin
                </strong>{" "}
                dan <strong className="text-emerald-500">Vue.js</strong>. Saya
                juga terbiasa bekerja dalam tim lintas fungsi dan menerapkan
                prinsip clean code, version control (Git), Docker, serta integrasi API
                untuk mendukung kebutuhan bisnis digital secara efisien.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 relative">
        <div className="w-full mx-auto px-6 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Keahlian & Teknologi
            </h2>
            <p
              className={`max-w-2xl mx-auto ${
                darkMode ? "text-slate-400" : "text-gray-600"
              }`}
            >
              Daftar bahasa pemrograman dan alat yang saya gunakan sehari-hari
              untuk membangun aplikasi.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className={`p-8 rounded-2xl transition-all hover:-translate-y-2 border ${
                  darkMode
                    ? "bg-slate-800 border-slate-700 hover:border-blue-500/50"
                    : "bg-white border-gray-200 hover:border-blue-400"
                } shadow-lg`}
              >
                <div className="mb-6 inline-block p-4 rounded-xl bg-slate-100">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{skill.category}</h3>
                <ul className="space-y-2">
                  {skill.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                      <span
                        className={
                          darkMode ? "text-slate-300" : "text-gray-600"
                        }
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className={`py-20 ${darkMode ? "bg-slate-800/30" : "bg-gray-50"}`}
      >
        <div className="w-full mx-auto px-6 lg:px-16">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Portofolio
              </h2>
              <p className={darkMode ? "text-slate-400" : "text-gray-600"}>
                Beberapa karya terbaik yang pernah saya kerjakan.
              </p>
            </div>
            {/* Link Github di Header section tetap ada sebagai referensi sosial, tapi tombol di kartu dihapus */}
            <a
              href="https://github.com/pebryan354"
              target="_blank"
              className="hidden md:flex items-center gap-2 text-blue-500 font-medium hover:text-blue-400 transition-colors mt-4 md:mt-0"
            >
              Lihat GitHub <Github size={18} />
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`group rounded-xl overflow-hidden border flex flex-col transition-colors ${
                  darkMode
                    ? "bg-slate-800 border-slate-700 hover:border-blue-500"
                    : "bg-white border-gray-200 hover:border-blue-400"
                }`}
              >
                <div
                  className={`aspect-video w-full overflow-hidden relative border-b ${
                    darkMode ? "border-slate-700" : "border-gray-200"
                  }`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div
                    className={`absolute inset-0 group-hover:bg-transparent transition-colors z-10 ${
                      darkMode ? "bg-slate-900/10" : "bg-black/5"
                    }`}
                  ></div>
                  <div className="absolute top-4 right-4 z-20 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-white">
                    {project.type}
                  </div>
                </div>

                <div className="p-6 flex-1">
                  <h3
                    className={`text-xl font-bold mb-2 transition-colors ${
                      darkMode
                        ? "text-white group-hover:text-blue-400"
                        : "text-gray-900 group-hover:text-blue-600"
                    }`}
                  >
                    {project.title}
                  </h3>
                  <p
                    className={`text-sm mb-4 line-clamp-3 ${
                      darkMode ? "text-slate-400" : "text-gray-600"
                    }`}
                  >
                    {project.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className={`text-xs font-medium px-2 py-1 rounded ${
                          darkMode
                            ? "bg-slate-900 text-slate-300"
                            : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div
                  className={`px-6 py-4 border-t ${
                    darkMode
                      ? "bg-slate-900/50 border-slate-700"
                      : "bg-gray-50 border-gray-200"
                  }`}
                >
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-sm font-medium inline-flex items-center ${
                        darkMode
                          ? "text-blue-400 hover:text-blue-300"
                          : "text-blue-600 hover:text-blue-700"
                      }`}
                    >
                      {project.labelLink} &rarr;
                    </a>
                  ) : (
                    <div className="flex items-center justify-between gap-2 text-gray-500">
                    <span class="text-sm text-gray-500 font-medium">
                            Sistem Internal Kampus
                        </span>
                        <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <a
              href="https://github.com/pebryan354"
              target="_blank"
              className="inline-flex items-center gap-2 text-blue-500 font-medium"
            >
              Lihat GitHub <Github size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className={`py-20 ${darkMode ? "bg-slate-800/50" : "bg-gray-100"}`}
      >
        <div className="w-full mx-auto px-6 lg:px-16">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Pengalaman Kerja
              </h2>
              <p className={darkMode ? "text-slate-400" : "text-gray-600"}>
                Perjalanan karir dan pengalaman profesional saya.
              </p>
            </div>
          </div>

          <div
            className={`space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent ${
              darkMode ? "before:via-slate-600" : "before:via-gray-300"
            } before:to-transparent`}
          >
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
              >
                {/* Timeline Icon */}
                <div
                  className={`flex items-center justify-center w-10 h-10 rounded-full border-4 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 ${
                    darkMode ? "border-slate-900" : "border-gray-50"
                  } ${
                    index === 0
                      ? "bg-blue-500 text-white"
                      : "bg-slate-500 text-white"
                  }`}
                >
                  {index === 0 && (
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </div>

                {/* Content Card */}
                <div
                  className={`w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-xl border shadow-md transition-colors ${
                    darkMode
                      ? "bg-slate-800 border-slate-700"
                      : "bg-white border-gray-200"
                  }`}
                >
                  <div className="flex flex-col xl:flex-row xl:items-center justify-between mb-2 gap-1 xl:gap-0">
                    <h3
                      className={`font-bold text-lg ${
                        darkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {exp.role}
                    </h3>
                    <span
                      className={`text-sm font-medium ${
                        index === 0
                          ? "text-blue-500"
                          : darkMode
                          ? "text-slate-400"
                          : "text-gray-500"
                      }`}
                    >
                      {exp.period}
                    </span>
                  </div>
                  <h4
                    className={`text-md mb-4 ${
                      darkMode ? "text-slate-300" : "text-gray-700"
                    }`}
                  >
                    {exp.company}
                  </h4>
                  <ul
                    className={`text-sm space-y-2 list-disc list-inside ${
                      darkMode ? "text-slate-400" : "text-gray-600"
                    }`}
                  >
                    {exp.tasks.map((task, tIndex) => (
                      <li key={tIndex}>{task}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Contact Section */}
      <section id="contact" className="py-20">
        <div className="w-full mx-auto px-6 lg:px-16">
          <div
            className={`rounded-3xl p-8 md:p-12 text-center border relative overflow-hidden ${
              darkMode
                ? "bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700"
                : "bg-gradient-to-br from-blue-600 to-indigo-700 border-transparent text-white"
            }`}
          >
            {/* Decor */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400"></div>

            <h2
              className={`text-3xl md:text-4xl font-bold mb-6 ${
                darkMode ? "text-white" : "text-white"
              }`}
            >
              Siap Memulai Proyek Berikutnya?
            </h2>
            <p
              className={`text-lg mb-8 max-w-2xl mx-auto ${
                darkMode ? "text-slate-400" : "text-blue-100"
              }`}
            >
              Saya selalu terbuka untuk mendiskusikan proyek pengembangan web
              baru, konsultasi teknis, atau peluang kolaborasi.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-6 items-center">
              <a
                href="mailto:pebryanibrahim98@gmail.com"
                className={`flex items-center gap-3 px-6 py-3 rounded-xl font-semibold transition-transform hover:-translate-y-1 ${
                  darkMode
                    ? "bg-white text-slate-900 hover:bg-slate-200"
                    : "bg-white text-blue-600 hover:bg-gray-100 shadow-lg"
                }`}
              >
                <Mail size={20} />
                Kirim Email
              </a>
              <a
                href="https://www.linkedin.com/in/pebryan-ibrahim"
                target="_blank"
                className={`flex items-center gap-3 px-6 py-3 rounded-xl font-semibold border transition-all ${
                  darkMode
                    ? "border-slate-600 hover:bg-slate-800 text-white"
                    : "border-blue-400 hover:bg-blue-600 hover:text-blue-100 hover:border-blue-600 text-white"
                }`}
              >
                <Linkedin size={20} />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className={`py-8 border-t ${
          darkMode
            ? "bg-slate-950 border-slate-800"
            : "bg-gray-100 border-gray-200"
        }`}
      >
        <div className="w-full mx-auto px-6 lg:px-16 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p
              className={`font-semibold ${
                darkMode ? "text-slate-200" : "text-gray-900"
              }`}
            >
              Pebryan Ibrahim
            </p>
            <p
              className={`text-sm ${
                darkMode ? "text-slate-500" : "text-gray-500"
              }`}
            >
              Web Developer | Yogyakarta, Indonesia
            </p>
          </div>
          <div
            className={`text-sm ${
              darkMode ? "text-slate-600" : "text-gray-400"
            }`}
          >
            &copy; {new Date().getFullYear()} All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
