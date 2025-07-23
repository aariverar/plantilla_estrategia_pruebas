

import { useState } from 'react';
import './App.css';

function Header() {
  return (
    <header className="santander-header">
      <span className="santander-header-title">Santander - Estrategia de Pruebas</span>
      <span className="santander-header-badge">QA</span>
    </header>
  );
}

const cuadrante = [
  {
    titulo: 'Tecnología / Soporte a Equipo',
    pruebas: [
      'Pruebas Unitarias',
      'Pruebas de Integración',
      'Revisión de Código',
      'Automatización de pruebas',
    ],
  },
  {
    titulo: 'Negocio / Soporte a Equipo',
    pruebas: [
      'Revisión de Requerimientos',
      'Ejemplos y Casos de Uso',
      'BDD / TDD',
    ],
  },
  {
    titulo: 'Tecnología / Críticas al Producto',
    pruebas: [
      'Pruebas de Seguridad',
      'Pruebas de Rendimiento',
      'Pruebas de Integración Continua',
    ],
  },
  {
    titulo: 'Negocio / Críticas al Producto',
    pruebas: [
      'Pruebas de Aceptación',
      'Pruebas de Usuario',
      'Exploratory Testing',
    ],
  },
];


function App() {
  const [seleccionadas, setSeleccionadas] = useState<string[]>([]);

  const togglePrueba = (prueba: string) => {
    setSeleccionadas((prev) =>
      prev.includes(prueba)
        ? prev.filter((p) => p !== prueba)
        : [...prev, prueba]
    );
  };

  const generarDocumento = () => {
    const doc = `Estrategia de Pruebas\n\nPruebas seleccionadas:\n${seleccionadas.map((p) => '- ' + p).join('\n')}`;
    const blob = new Blob([doc], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'estrategia_pruebas.txt';
    link.click();
  };

  return (
    <>
      <Header />
      <div className="santander-bg">
        <h1 className="santander-title">Cuadrante Ágil de Testing</h1>
        <div className="cuadrante-grid">
          {cuadrante.map((q) => (
            <div className="cuadrante-card" key={q.titulo}>
              <h2>{q.titulo}</h2>
              <ul>
                {q.pruebas.map((prueba) => (
                  <li key={prueba}>
                    <label className="santander-checkbox">
                      <input
                        type="checkbox"
                        checked={seleccionadas.includes(prueba)}
                        onChange={() => togglePrueba(prueba)}
                      />
                      {prueba}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <button className="santander-btn" onClick={generarDocumento} disabled={seleccionadas.length === 0}>
          Generar Estrategia de Pruebas
        </button>
      </div>
    </>
  );
}

export default App;
