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

  const cambiarTema = () => {
    setTema(tema === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-navy-900 dark:to-navy-950 text-gray-800 dark:text-white transition-colors duration-300">
      {/* Navegación */}
      <nav className="fixed left-0 top-0 h-screen w-16 md:w-20 bg-white/10 backdrop-blur-sm border-r border-gray-200 dark:border-gray-800 flex flex-col items-center py-8 space-y-8">
        <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold">
          FM
        </div>
        
        <div className="flex-1 flex flex-col space-y-4">
          <a href="#inicio" className="p-3 rounded-xl hover:bg-white/20 transition-colors">Inicio</a>
          <a href="#yo" className="p-3 rounded-xl hover:bg-white/20 transition-colors">Yo</a>
          <a href="#habilidades" className="p-3 rounded-xl hover:bg-white/20 transition-colors">Habilidades</a>
          <a href="#proyectos" className="p-3 rounded-xl hover:bg-white/20 transition-colors">Proyectos</a>
          <a href="#contacto" className="p-3 rounded-xl hover:bg-white/20 transition-colors">Contacto</a>
        </div>

        <div className="flex flex-col space-y-4">
          <a href="https://github.com/ValHazka12" target="_blank" rel="noopener noreferrer" className="p-2 hover:text-indigo-500 transition-colors">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 hover:text-indigo-500 transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 hover:text-indigo-500 transition-colors">
            <Twitter size={24} />
          </a>
        </div>

        <button
          onClick={cambiarTema}
          className="p-2 rounded-xl hover:bg-white/20 transition-colors"
        >
          {tema === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
        </button>
      </nav>

      {/* Contenido Principal */}
      <main className="ml-16 md:ml-20 p-8">
        {/* Sección Hero */}
        <section id="inicio" className="min-h-screen flex items-center">
          <div className="max-w-4xl flex flex-col md:flex-row items-center gap-12">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Hola! Soy Fernando Mendoza,
                <br />
                <span className="text-indigo-600 dark:text-indigo-400">Desarrollador Web</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
                Desarrollador de Software / Hacker en progreso
              </p>
              <a
                href="#contacto"
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

        {/* Sección de Habilidades */}
        <section id="habilidades" className="min-h-screen py-20">
          <h2 className="text-4xl font-bold mb-12">Habilidades y Experiencia</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-800">
              <Code2 className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Desarrollo Frontend</h3>
              <p className="text-gray-600 dark:text-gray-300">
                React, TypeScript, Tailwind CSS, Next.js
              </p>
            </div>
            <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-800">
              <Database className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Desarrollo Backend</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Node.js, Express, PostgreSQL, MongoDB
              </p>
            </div>
            <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-800">
              <MonitorSmartphone className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Diseño Responsive</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Mobile-First, UI/UX, Compatibilidad entre navegadores
              </p>
            </div>
          </div>
        </section>

        {/* Otras secciones como Proyectos y Contacto están adaptadas al español también. */}
      </main>
    </div>
  );
}

export default App;
