

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


const cuadrantes = [
  {
    numero: 2,
    titulo: 'Q2: Automáticas & Manuales',
    pruebas: [
      'Pruebas Funcionales',
      'Pruebas de Historias de Usuario',
      'Pruebas Manuales Exploratorias',
      'Revisión de Aceptación',
      'Pruebas con Criterios Gherkin / BDD / ATDD',
    ],
  },
  {
    numero: 3,
    titulo: 'Q3: Manuales',
    pruebas: [
      'Pruebas Exploratorias',
      'Pruebas de Usabilidad',
      'Pruebas Alpha/Beta',
      'Validación de UX/UI',
      'Pruebas con UAT',
      'Pruebas de Flujo de Negocio',
    ],
  },
  {
    numero: 1,
    titulo: 'Q1: Automáticas',
    pruebas: [
      'Pruebas Unitarias',
      'Pruebas de Componentes',
      'Pruebas de Integración Técnica',
      'Pruebas de API (a nivel técnico)',
      'Pruebas de Regresión Técnicas',
    ],
  },
  {
    numero: 4,
    titulo: 'Q4: Herramientas y Pruebas No Funcionales',
    pruebas: [
      'Pruebas de Rendimiento (carga, estrés)',
      'Pruebas de Seguridad',
      'Pruebas de Compatibilidad',
      'Pruebas de Recuperación / Resiliencia',
      'Pruebas No Funcionales en General',
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
        <div className="cuadrante-wrapper">
          {/* Etiquetas laterales y superiores */}
          <div className="cuadrante-label cuadrante-label-top">Orientados a negocio</div>
          <div className="cuadrante-label cuadrante-label-left">Apoyan al equipo</div>
          <div className="cuadrante-label cuadrante-label-bottom">Orientados a tecnología</div>
          <div className="cuadrante-label cuadrante-label-right">Evalúan el producto</div>

          {/* Cuadrantes 2x2 */}
          <div className="cuadrante-matrix">
            <div className="cuadrante-card cuadrante-card-2">
              <h2><b>Q2: Automáticas & Manuales</b></h2>
              <ul>
                {cuadrantes[0].pruebas.map((prueba) => (
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
            <div className="cuadrante-card cuadrante-card-3">
              <h2><b>Q3: Manuales</b></h2>
              <ul>
                {cuadrantes[1].pruebas.map((prueba) => (
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
            <div className="cuadrante-card cuadrante-card-1">
              <h2><b>Q1: Automáticas</b></h2>
              <ul>
                {cuadrantes[2].pruebas.map((prueba) => (
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
            <div className="cuadrante-card cuadrante-card-4">
              <h2><b>Q4: Herramientas y Pruebas No Funcionales</b></h2>
              <ul>
                {cuadrantes[3].pruebas.map((prueba) => (
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
          </div>
        </div>
        <button className="santander-btn" onClick={generarDocumento} disabled={seleccionadas.length === 0}>
          Generar Estrategia de Pruebas
        </button>
      </div>
    </>
  );
}

export default App;
