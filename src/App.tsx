import { useState } from 'react';
import './App.css';

function ModalFloating({ open, x, y, children }: { open: boolean; x: number; y: number; children: React.ReactNode }) {
  if (!open) return null;
  return (
    <div
      className="modal-floating"
      style={{ position: 'fixed', top: y + 12, left: x + 12, zIndex: 9999 }}
    >
      {children}
    </div>
  );
}

function Modal({ open, onClose, children }: { open: boolean; onClose: () => void; children: React.ReactNode }) {
  if (!open) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        {children}
      </div>
    </div>
  );
}

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
  const [modalOpen, setModalOpen] = useState(false);
  const [modalPos, setModalPos] = useState({ x: 0, y: 0 });

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

        {/* === SECCIÓN: CATEGORÍAS DE TÉCNICAS DE DISEÑO (ISTQB) === */}
        <div className="istqb-section">
          <h2>✅ CATEGORÍAS DE TÉCNICAS DE DISEÑO (según ISTQB)</h2>
          <div className="istqb-categorias">
            <div className="istqb-categoria-card">
              <h3>Técnicas de caja negra</h3>
              <p>Basadas en comportamiento externo</p>
            </div>
            <div className="istqb-categoria-card">
              <h3>Técnicas de caja blanca</h3>
              <p>Basadas en estructura interna del código</p>
            </div>
            <div className="istqb-categoria-card">
              <h3>Técnicas basadas en experiencia</h3>
              <p>Basadas en juicio, intuición y experiencia</p>
            </div>
          </div>

          <h2>🎯 1. TÉCNICAS DE CAJA NEGRA (Black-box)</h2>
          <table className="istqb-table">
            <thead>
              <tr>
                <th></th>
                <th>Técnica</th>
                <th>Descripción</th>
              </tr>
            </thead>
            <tbody>
              {[
                { nombre: 'Partición de equivalencia', desc: 'Divide entradas/salidas en clases válidas e inválidas, prueba 1 por clase.' },
                { nombre: 'Análisis de valores límite', desc: 'Verifica comportamientos en límites extremos (mínimos/máximos).' },
                { nombre: 'Tabla de decisión', desc: 'Evalúa combinaciones de condiciones y reglas.' },
                { nombre: 'Tabla de causa-efecto', desc: 'Deriva casos desde una tabla lógica de causas (inputs) y efectos (outputs).' },
                { nombre: 'Transición de estados', desc: 'Prueba cambios de estado y eventos activadores.' },
                { nombre: 'Caso de uso (Use Case)', desc: 'Pruebas centradas en flujos funcionales del usuario.' },
                { nombre: 'Pruebas basadas en requisitos', desc: 'Cada caso se deriva de un requisito funcional concreto.' },
                { nombre: 'Pruebas de comportamiento (BDD)', desc: 'Usa Gherkin o lenguajes similares para definir escenarios.' },
              ].map(({ nombre, desc }) => (
                <tr key={nombre}
                  onMouseEnter={e => {
                    if (nombre === 'Partición de equivalencia') {
                      setModalOpen(true);
                      setModalPos({ x: e.clientX, y: e.clientY });
                    }
                  }}
                  onMouseMove={e => {
                    if (nombre === 'Partición de equivalencia' && modalOpen) {
                      setModalPos({ x: e.clientX, y: e.clientY });
                    }
                  }}
                  onMouseLeave={() => nombre === 'Partición de equivalencia' && setModalOpen(false)}
                  style={{ cursor: nombre === 'Partición de equivalencia' ? 'pointer' : undefined }}
                >
                  <td>
                    <label className="santander-checkbox">
                      <input
                        type="checkbox"
                        checked={seleccionadas.includes(nombre)}
                        onChange={() => togglePrueba(nombre)}
                      />
                    </label>
                  </td>
                  <td>{nombre}</td>
                  <td>{desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <ModalFloating open={modalOpen} x={modalPos.x} y={modalPos.y}>
            <div className="modal-content modal-content-floating" style={{ fontSize: '0.89rem', lineHeight: 1.25 }}>
              <b style={{ fontSize: '1.01em', color: '#b00' }}>🎯 Escenario:</b>
              <div style={{ marginBottom: '0.4em' }}>Supón que tienes un campo que acepta valores entre 1 y 100. La lógica válida es aceptar solo los números dentro de ese rango.</div>
              <b style={{ fontSize: '1.01em', color: '#b00' }}>✅ Particiones:</b>
              <ul style={{ margin: '0.2em 0 0 1em', padding: 0 }}>
                <li><b>Clase válida:</b> valores entre 1 y 100 (por ejemplo, 50)</li>
                <li><b>Clases inválidas:</b>
                  <ul style={{ margin: '0.1em 0 0 1em', padding: 0 }}>
                    <li>valores menores a 1 (ej. –5)</li>
                    <li>valores mayores a 100 (ej. 150)</li>
                  </ul>
                </li>
              </ul>
              <b style={{ fontSize: '1.01em', color: '#b00' }}>🧪 Aplicación:</b>
              <div>Seleccionas un valor por cada clase, con lo cual no necesitas probar todos los posibles valores.<br />Esto reduce el número de pruebas sin perder efectividad.</div>
            </div>
          </ModalFloating>

          <h2>🧠 2. TÉCNICAS BASADAS EN EXPERIENCIA</h2>
          <table className="istqb-table">
            <thead>
              <tr>
                <th></th>
                <th>Técnica</th>
                <th>Descripción</th>
              </tr>
            </thead>
            <tbody>
              {[
                { nombre: 'Pruebas exploratorias', desc: 'Sin casos predefinidos, se prueba sobre la marcha observando resultados.' },
                { nombre: 'Adivinación de errores (error guessing)', desc: 'Se anticipan fallos comunes basados en la experiencia del tester.' },
                { nombre: 'Checklists (listas de verificación)', desc: 'Lista de elementos a validar. Útil en pruebas de mantenimiento.' },
                { nombre: 'Pruebas basadas en escenarios', desc: 'Se diseñan historias realistas de uso para probar flujos completos.' },
                { nombre: 'Pruebas heurísticas', desc: 'Aplicación de patrones conocidos de errores (ej. heurísticas de Bach).' },
              ].map(({ nombre, desc }) => (
                <tr key={nombre}>
                  <td>
                    <label className="santander-checkbox">
                      <input
                        type="checkbox"
                        checked={seleccionadas.includes(nombre)}
                        onChange={() => togglePrueba(nombre)}
                      />
                    </label>
                  </td>
                  <td>{nombre}</td>
                  <td>{desc}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h2>🔍 3. TÉCNICAS DE CAJA BLANCA (White-box)</h2>
          <table className="istqb-table">
            <thead>
              <tr>
                <th></th>
                <th>Técnica</th>
                <th>Descripción</th>
              </tr>
            </thead>
            <tbody>
              {[
                { nombre: 'Cobertura de sentencias', desc: 'Asegura que cada línea de código sea ejecutada al menos una vez.' },
                { nombre: 'Cobertura de decisiones (ramas)', desc: 'Asegura que cada decisión (if, else, switch) sea evaluada en ambas direcciones.' },
                { nombre: 'Cobertura de condiciones', desc: 'Evalúa cada condición booleana por separado.' },
                { nombre: 'Cobertura de condición/decisión', desc: 'Combinación de ambas.' },
                { nombre: 'Cobertura de múltiples condiciones', desc: 'Evalúa todas las combinaciones de condiciones en una decisión.' },
                { nombre: 'Pruebas de flujo de datos', desc: 'Verifica el uso correcto de variables (definidas, usadas, destruidas).' },
                { nombre: 'Pruebas de caminos lógicos', desc: 'Verifica todos los caminos posibles a través del código.' },
              ].map(({ nombre, desc }) => (
                <tr key={nombre}>
                  <td>
                    <label className="santander-checkbox">
                      <input
                        type="checkbox"
                        checked={seleccionadas.includes(nombre)}
                        onChange={() => togglePrueba(nombre)}
                      />
                    </label>
                  </td>
                  <td>{nombre}</td>
                  <td>{desc}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="istqb-extra">
            <h3>🔄 TÉCNICAS ADICIONALES SEGÚN ISTQB AVANZADO (Test Analyst y Test Manager)</h3>
            <table className="istqb-extra-table">
              <thead>
                <tr>
                  <th></th>
                  <th>Técnica</th>
                  <th>Aplicación típica</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { nombre: 'Pruebas basadas en riesgo (Risk-based)', desc: 'Se diseñan según impacto y probabilidad.' },
                  { nombre: 'Técnicas combinatorias (pairwise, t-wise)', desc: 'Reducen combinaciones usando teoría matemática.' },
                  { nombre: 'Pruebas ortogonales', desc: 'Variante de pruebas combinatorias optimizadas.' },
                  { nombre: 'Técnicas de prueba de calidad de datos', desc: 'Prueba de consistencia, precisión y completitud de datos.' },
                ].map(({ nombre, desc }) => (
                  <tr key={nombre}>
                    <td>
                      <label className="santander-checkbox">
                        <input
                          type="checkbox"
                          checked={seleccionadas.includes(nombre)}
                          onChange={() => togglePrueba(nombre)}
                        />
                      </label>
                    </td>
                    <td>{nombre}</td>
                    <td>{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
