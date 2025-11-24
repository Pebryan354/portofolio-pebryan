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

import Sipekan from "./assets/sipekan.png";
import Bsn from "./assets/bsn.png";
import RuangCat from "./assets/ruangcat.png";
import Booking from "./assets/booking.png";
import Ekin from "./assets/ekin.png";
import Sipresma from "./assets/sipresma.png";
import CVFile from "./assets/pebryan_ibrahim.pdf";

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Handle scroll spy for active navigation
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"];
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
      items: ["Git/GitHub/GitLab", "Composer", "NPM", "Postman", "Docker"],
    },
  ];

  const projects = [
    {
      title: "Sistem Presensi",
      desc: "Sistem presensi untuk DPUPR Klaten, fitur mencakup absensi, cuti, perjalanan dinas dan izin.",
      tech: ["Codeigniter 4", "Vue.js", "MySQL", "Vuetify"],
      image: Sipekan,
      type: "Full Stack",
      link: "https://sipekan.klaten.go.id",
    },
    {
      title: "Berkah Sinergi Nusantara",
      desc: "Sistem Multi Level Marketing (MLM).",
      tech: [
        "CodeIgniter 4",
        "Bootstrap",
        "Vue.js",
        "MySQL",
        "Payment Gateway",
        "Whatsapp Gateway",
      ],
      image: Bsn,
      type: "Full Stack",
      link: "https://berkahsinergi.com",
    },
    {
      title: "RuangCat",
      desc: "Aplikasi Computer Assisted Test (CAT) untuk tes CPNS dan PPPK.",
      tech: ["Codeigniter 4", "Vue.js", "Tailwind CSS", "MySQL"],
      image: RuangCat,
      type: "Full Stack",
      link: "https://ruangcat.id",
    },
    {
      title: "Booking Villa",
      desc: "Aplikasi Booking Villa di Silancur.",
      tech: ["Codeigniter 4", "Vue.js", "Bootstrap", "MySQL"],
      image: Booking,
      type: "Full Stack",
      link: "https://booking.silancurhighland.com",
    },
    {
      title: "Ekinerja",
      desc: "Aplikasi menghitung tunjangan ASN di kabupaten Seruyan.",
      tech: ["Codeigniter 4", "Vue.js", "Bootstrap", "MySQL"],
      image: Ekin,
      type: "Full Stack",
      link: "https://ekinerja.seruyankab.go.id",
    },
    {
      title: "Sipresma",
      desc: "Sistem Presensi Mahasiswa untuk Institut Pertanian STIPER Yogyakarta",
      tech: ["Codeigniter 4", "Vue.js", "Bootstrap", "MySQL"],
      image: Sipresma,
      type: "Full Stack",
      link: "https://instiper.my-appweb.com",
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
                src="https://avatars.githubusercontent.com/u/33095305?v=4"
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
            Web Developer dengan pengalaman hampir 5 tahun membangun sistem yang
            scalable menggunakan{" "}
            <span className="text-blue-500 font-semibold">PHP</span> &{" "}
            <span className="text-emerald-500 font-semibold">JavaScript</span>.
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

          <div className="mt-16 flex justify-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="font-bold text-xl">Laravel</span>
            <span className="font-bold text-xl">CodeIgniter 4</span>
            <span className="font-bold text-xl">Vue.js</span>
            <span className="font-bold text-xl">Express.js</span>
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
                    <span className="text-green-400">"Express.js"</span>
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
                hampir <strong className="text-emerald-500">5 tahun</strong>{" "}
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
                Javascript, PHP, CSS, dan HTML, serta berpengalaman menggunakan
                framework populer seperti{" "}
                <strong className="text-blue-500">
                  Express.js, CodeIgniter 4, Laravel
                </strong>{" "}
                dan <strong className="text-emerald-500">Vue.js</strong>. Saya
                juga terbiasa bekerja dalam tim lintas fungsi dan menerapkan
                prinsip clean code, version control (Git), serta integrasi API
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
                className={`group rounded-xl overflow-hidden border transition-all hover:shadow-2xl ${
                  darkMode
                    ? "bg-slate-900 border-slate-700"
                    : "bg-white border-gray-200"
                }`}
              >
                <div className="relative overflow-hidden h-48">
                  <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-colors z-10"></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 z-20 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-white">
                    {project.type}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-500 transition-colors">
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
                        className={`text-xs px-2 py-1 rounded ${
                          darkMode
                            ? "bg-slate-800 text-blue-400"
                            : "bg-blue-50 text-blue-700"
                        }`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Tombol Akses Sistem (GitHub Button Removed) */}
                  <div className="flex gap-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 hover:text-blue-100 text-white text-sm font-semibold transition-colors flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20"
                    >
                      Akses Sistem <ExternalLink size={16} />
                    </a>
                  </div>
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
              Web Developer • PHP & JS
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
