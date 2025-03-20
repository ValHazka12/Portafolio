import React from 'react';
import { Github, Linkedin, Twitter, Mail, Moon, Sun, Code2, MonitorSmartphone, Database } from 'lucide-react';
import { useEffect, useState } from 'react';

function App() {
  const [tema, setTema] = useState('dark');

  useEffect(() => {
    if (tema === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [tema]);

  const alternarTema = () => {
    setTema(tema === 'dark' ? 'ligth' : 'dark');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-navy-900 dark:to-navy-950 text-gray-800 dark:text-white transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed left-0 top-0 h-screen w-15 md:w-35 bg-white/10 backdrop-blur-sm border-r border-gray-200 dark:border-gray-900 flex flex-col items-center py-8 space-y-8">
        <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold">
          
            FM
        </div>
        
        <div className="flex-1 flex flex-col space-y-4">
          <a href="#home" className="p-3 rounded-xl hover:bg-white/20 transition-colors">Home</a>
          <a href="#about" className="p-3 rounded-xl hover:bg-white/20 transition-colors">About</a>
          <a href="#skills" className="p-3 rounded-xl hover:bg-white/20 transition-colors">Skills</a>
          <a href="#projects" className="p-3 rounded-xl hover:bg-white/20 transition-colors">Projects</a>
          <a href="#contact" className="p-3 rounded-xl hover:bg-white/20 transition-colors">Contact</a>
        </div>

        <div className="flex flex-col space-y-4">
          <a href="https://github.com/ScarManco/" target="_blank" rel="noopener noreferrer" className="p-2 hover:text-indigo-500 transition-colors">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/mendoza-fernando-gjallarjorn/" target="_blank" rel="noopener noreferrer" className="p-2 hover:text-indigo-500 transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 hover:text-indigo-500 transition-colors">
            <Twitter size={24} />
          </a>
        </div>

        <button
          onClick={alternarTema}
          className="p-2 rounded-xl hover:bg-white/20 transition-colors"
        >
          {tema === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
        </button>
      </nav>

      {/* Contenido Principal */}
      <main className="ml-16 md:ml-20 p-8">
        {/* Sección Hero */}
        <section id="home" className="min-h-screen flex items-center">
          <div className="max-w-4xl flex flex-col md:flex-row items-center gap-12">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                ¡Hola! Soy Fernando Mendoza,
                <br />
                <span className="text-indigo-600 dark:text-indigo-400">Web Developer</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
                Desarrollador Web / Hacker in process
              </p>
              <a
                href="#contact"
                className="inline-block px-8 py-4 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors"
              >
                ¡Contáctame!
              </a>
            </div>
            <div className="shrink-0">
              <img 
                src="https://i.ibb.co/mmvMVnh/Imagen-de-Whats-App-2025-03-19-a-las-18-54-58-d65d7921.jpg" 
                alt="Perfil" 
                className="w-64 h-64 object-cover rounded-2xl border-4 border-indigo-600 shadow-xl shadow-indigo-600/20"
              />
            </div>
          </div>
        </section>

        {/* Sección de mi */}
        <section id="about" className="min-h-screen py-20">
           <h2 className="text-4xl font-bold mb-12">Acerca de Mi</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative bg-white/10 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden hover:border-indigo-500 transition-colors p-6">
              <h3 className="text-xl font-bold mb-2">Educación</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Universidad Tecnologica del Valle de Toluca
              </p>
            </div>
            <div className="group relative bg-white/10 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden hover:border-indigo-500 transition-colors p-6">
              <h3 className="text-xl font-bold mb-2">Certificados</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                CCNAv7 Switching, Routing / CCNAv7: Enterprise Networking, 
                IBM Cloud Computing Essentials / NDG Linux 
              </p>
            </div> 
            <div className="group relative bg-white/10 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden hover:border-indigo-500 transition-colors p-6">
                <h3 className="text-xl font-bold mb-2">Hobbies</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                F1, Literarura, Videojuegos, Musica, Hacking ethical
              </p>
            </div> 
          </div>
         </section>  
        {/* Sección Habilidades */}
        <section id="skills" className="min-h-screen py-20">
          <h2 className="text-4xl font-bold mb-12">Habilidades y Experiencia</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-800">
              <Code2 className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Desarrollo Frontend</h3>
              <p className="text-gray-600 dark:text-gray-300">
                React, TypeScript, HTML, CSS, Next.js
              </p>
            </div>
            <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-800">
              <Database className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Desarrollo Backend</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Node.js, Bash, MySQL, MongoDB, PHP
              </p>
            </div>
            <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-800">
              <MonitorSmartphone className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Otras Skills </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Manejo de servers Linux, CCNA, Switching, Routing, Python,  
              </p>
            </div>
          </div>
        </section>

{/* Projects Section */}
        <section id="projects" className="min-h-screen py-20">
          <h2 className="text-4xl font-bold mb-12">Principales Proyectos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative bg-white/10 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden hover:border-indigo-500 transition-colors p-6">
              <h3 className="text-xl font-bold mb-2">Blog de Recetas</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Una página para encontrar y compartir recetas de cocina.
              </p>
              <a 
                href="https://log-con-recetas-fgm-83.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
               Ver la Página
                👈(ﾟヮﾟ👈)
              </a>
            </div>

            <div className="group relative bg-white/10 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden hover:border-indigo-500 transition-colors p-6">
              <h3 className="text-xl font-bold mb-2">Chat con Ia de IBM</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Una pagina con chat bot integrado.
              </p>
              <a 
                href="https://chatibmpage.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Ver la Página
                (👉ﾟヮﾟ)👉
              </a>
            </div>

            <div className="group relative bg-white/10 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden hover:border-indigo-500 transition-colors p-6">
              <h3 className="text-xl font-bold mb-2">Monitor del sistema</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Monitor de sistema de recursos en dashboard.
              </p>
              <a 
                href="https://monitor-wine.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Ver la Página
                 👈(⌒▽⌒)👉
              </a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen py-20">
          <h2 className="text-4xl font-bold mb-12">Dame algún tip ^_~</h2>
          <div className="max-w-2xl">
            <div className="flex items-center space-x-4 mb-6">
              <Mail className="w-6 h-6 text-indigo-600" />
              <a href="mailto:contact@example.com" className="hover:text-indigo-600 transition-colors">
                al222210570@gmail.com
              </a>
            </div>
            <form className="space-y-6">
              <div>
                <label className="block mb-2">Nombre</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-xl bg-white/10 backdrop-blur-sm border border-gray-200 dark:border-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                />
              </div>
              <div>
                <label className="block mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 rounded-xl bg-white/10 backdrop-blur-sm border border-gray-200 dark:border-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                />
              </div>
              <div>
                <label className="block mb-2">Mensaje</label>
                <textarea
                  className="w-full px-4 py-2 rounded-xl bg-white/10 backdrop-blur-sm border border-gray-200 dark:border-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-600 h-32"
                ></textarea>
              </div>
              <button
                type="submit"
                className="px-8 py-4 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
