import { useState } from 'react';
import './App.css';

function ModalFloating({ open, x, y, children }: { open: boolean; x: number; y: number; children: React.ReactNode }) {
  if (!open) return null;
  return (
    <div
      className="modal-floating"
      style={{
        position: 'fixed',
        top: y + 12,
        left: x + 12,
        zIndex: 20000,
        pointerEvents: 'auto',
        minWidth: 340,
        maxWidth: 480,
        background: 'white',
        borderRadius: 10,
        boxShadow: '0 4px 24px #0003',
        padding: 16,
        border: '1.5px solid #b00',
        fontSize: '0.95rem',
        lineHeight: 1.25
      }}
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
  // Estado para cada modal flotante
  const [modalEquiOpen, setModalEquiOpen] = useState(false);
  const [modalEquiPos, setModalEquiPos] = useState({ x: 0, y: 0 });
  const [modalLimiteOpen, setModalLimiteOpen] = useState(false);
  const [modalLimitePos, setModalLimitePos] = useState({ x: 0, y: 0 });
  const [modalDecisionOpen, setModalDecisionOpen] = useState(false);
  const [modalDecisionPos, setModalDecisionPos] = useState({ x: 0, y: 0 });
  const [modalCausaEfectoOpen, setModalCausaEfectoOpen] = useState(false);
  const [modalCausaEfectoPos, setModalCausaEfectoPos] = useState({ x: 0, y: 0 });
  const [modalTransicionOpen, setModalTransicionOpen] = useState(false);
  const [modalTransicionPos, setModalTransicionPos] = useState({ x: 0, y: 0 });
  const [modalCasoUsoOpen, setModalCasoUsoOpen] = useState(false);
  const [modalCasoUsoPos, setModalCasoUsoPos] = useState({ x: 0, y: 0 });
  const [modalRequisitosOpen, setModalRequisitosOpen] = useState(false);
  const [modalRequisitosPos, setModalRequisitosPos] = useState({ x: 0, y: 0 });
  const [modalBDDOpen, setModalBDDOpen] = useState(false);
  const [modalBDDPos, setModalBDDPos] = useState({ x: 0, y: 0 });
  // Modal flotante para Pruebas exploratorias
  const [modalExploratoriasOpen, setModalExploratoriasOpen] = useState(false);
  const [modalExploratoriasPos, setModalExploratoriasPos] = useState({ x: 0, y: 0 });

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
                <tr
                  key={nombre}
                  onMouseEnter={e => {
                    if (nombre === 'Partición de equivalencia') {
                      setModalEquiOpen(true);
                      setModalEquiPos({ x: e.clientX, y: e.clientY });
                    } else if (nombre === 'Análisis de valores límite') {
                      setModalLimiteOpen(true);
                      setModalLimitePos({ x: e.clientX, y: e.clientY });
                    } else if (nombre === 'Tabla de decisión') {
                      setModalDecisionOpen(true);
                      setModalDecisionPos({ x: e.clientX, y: e.clientY });
                    } else if (nombre === 'Tabla de causa-efecto') {
                      setModalCausaEfectoOpen(true);
                      setModalCausaEfectoPos({ x: e.clientX, y: e.clientY });
                    } else if (nombre === 'Transición de estados') {
                      setModalTransicionOpen(true);
                      setModalTransicionPos({ x: e.clientX, y: e.clientY });
                    } else if (nombre === 'Caso de uso (Use Case)') {
                      setModalCasoUsoOpen(true);
                      setModalCasoUsoPos({ x: e.clientX, y: e.clientY });
                    } else if (nombre === 'Pruebas basadas en requisitos') {
                      setModalRequisitosOpen(true);
                      setModalRequisitosPos({ x: e.clientX, y: e.clientY });
                    } else if (nombre === 'Pruebas de comportamiento (BDD)') {
                      setModalBDDOpen(true);
                      setModalBDDPos({ x: e.clientX, y: e.clientY });
                    }
                }}
                onMouseMove={e => {
                    if (nombre === 'Partición de equivalencia' && modalEquiOpen) {
                      setModalEquiPos({ x: e.clientX, y: e.clientY });
                    } else if (nombre === 'Análisis de valores límite' && modalLimiteOpen) {
                      setModalLimitePos({ x: e.clientX, y: e.clientY });
                    } else if (nombre === 'Tabla de decisión' && modalDecisionOpen) {
                      setModalDecisionPos({ x: e.clientX, y: e.clientY });
                    } else if (nombre === 'Tabla de causa-efecto' && modalCausaEfectoOpen) {
                      setModalCausaEfectoPos({ x: e.clientX, y: e.clientY });
                    } else if (nombre === 'Transición de estados' && modalTransicionOpen) {
                      setModalTransicionPos({ x: e.clientX, y: e.clientY });
                    } else if (nombre === 'Caso de uso (Use Case)' && modalCasoUsoOpen) {
                      setModalCasoUsoPos({ x: e.clientX, y: e.clientY });
                    } else if (nombre === 'Pruebas basadas en requisitos' && modalRequisitosOpen) {
                      setModalRequisitosPos({ x: e.clientX, y: e.clientY });
                    } else if (nombre === 'Pruebas de comportamiento (BDD)' && modalBDDOpen) {
                      setModalBDDPos({ x: e.clientX, y: e.clientY });
                    }
                }}
                onMouseLeave={() => {
                    if (nombre === 'Partición de equivalencia') setModalEquiOpen(false);
                    if (nombre === 'Análisis de valores límite') setModalLimiteOpen(false);
                    if (nombre === 'Tabla de decisión') setModalDecisionOpen(false);
                    if (nombre === 'Tabla de causa-efecto') setModalCausaEfectoOpen(false);
                    if (nombre === 'Transición de estados') setModalTransicionOpen(false);
                    if (nombre === 'Caso de uso (Use Case)') setModalCasoUsoOpen(false);
                    if (nombre === 'Pruebas basadas en requisitos') setModalRequisitosOpen(false);
                    if (nombre === 'Pruebas de comportamiento (BDD)') setModalBDDOpen(false);
                }}
                style={{ cursor: nombre === 'Partición de equivalencia' || nombre === 'Análisis de valores límite' || nombre === 'Tabla de decisión' || nombre === 'Tabla de causa-efecto' || nombre === 'Transición de estados' || nombre === 'Caso de uso (Use Case)' || nombre === 'Pruebas basadas en requisitos' || nombre === 'Pruebas de comportamiento (BDD)' ? 'pointer' : undefined }}
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
          {/* Modal flotante para Partición de equivalencia */}
          <ModalFloating open={modalEquiOpen} x={modalEquiPos.x} y={modalEquiPos.y}>
            {modalEquiOpen && (
              <div className="modal-content modal-content-floating" style={{ fontSize: '0.89rem', lineHeight: 1.25 }}>
                <b style={{ fontSize: '1.01em', color: '#b00' }}>Aplicación:</b>
                <div style={{ marginBottom: '0.4em' }}>
                  La partición de equivalencia se utiliza para dividir el conjunto de entradas en clases válidas e inválidas, con el fin de reducir el número de casos de prueba. Se asume que todos los valores dentro de una misma clase se comportan de forma similar, por lo que basta con probar un valor representativo de cada clase.
                </div>
                <b style={{ fontSize: '1.01em', color: '#b00' }}>Ejemplo:</b>
                <div>
                  Si una app permite registrarse solo a personas entre 18 y 65 años, se identifican tres clases: edad válida (18–65), edad inválida menor a 18 y edad inválida mayor a 65. Luego se elige un valor por clase, como 30, 15 y 70 respectivamente, para verificar que la validación se comporte correctamente en cada grupo.
                </div>
              </div>
            )}
          </ModalFloating>
          {/* Modal flotante para Análisis de valores límite */}
          <ModalFloating open={modalLimiteOpen} x={modalLimitePos.x} y={modalLimitePos.y}>
            {modalLimiteOpen && (
              <div className="modal-content modal-content-floating" style={{ fontSize: '0.89rem', lineHeight: 1.25 }}>
                <b style={{ fontSize: '1.01em', color: '#b00' }}>Aplicación:</b>
                <div style={{ marginBottom: '0.4em' }}>
                  El análisis de valores límite se usa para verificar cómo se comporta un sistema en los extremos de los rangos válidos e inválidos. Esta técnica se basa en que los errores suelen ocurrir en los límites, por lo que se prueban los valores mínimos, máximos, y los inmediatamente adyacentes a esos límites.
                </div>
                <b style={{ fontSize: '1.01em', color: '#b00' }}>Ejemplo:</b>
                <div>
                  Si una app acepta edades entre 18 y 65 años para registrarse, se prueban los valores límite: 18 y 65 (válidos), así como 17 y 66 (inválidos). Esto permite detectar errores comunes en la validación de rangos al probar justo en los bordes del comportamiento esperado.
                </div>
              </div>
            )}
          </ModalFloating>
          {/* Modal flotante para Tabla de decisión */}
          <ModalFloating open={modalDecisionOpen} x={modalDecisionPos.x} y={modalDecisionPos.y}>
            {modalDecisionOpen && (
              <div className="modal-content modal-content-floating" style={{ fontSize: '0.89rem', lineHeight: 1.25 }}>
                <b style={{ fontSize: '1.01em', color: '#b00' }}>Aplicación:</b>
                <div style={{ marginBottom: '0.4em' }}>
                  La técnica de tabla de decisión se utiliza para evaluar todas las combinaciones posibles de condiciones y sus respectivas acciones o resultados. Es útil cuando una funcionalidad depende de múltiples reglas lógicas que se deben cumplir en distintas combinaciones.
                </div>
                <b style={{ fontSize: '1.01em', color: '#b00' }}>Ejemplo:</b>
                <div>
                  Para otorgar un préstamo, una entidad puede considerar dos condiciones: si el cliente tiene ingresos fijos y si no tiene deudas. La tabla de decisión analizaría las cuatro combinaciones posibles (sí/sí, sí/no, no/sí, no/no) y definiría la acción correspondiente en cada caso, como "aprobar", "evaluar", o "rechazar", asegurando cobertura total de reglas.
                </div>
              </div>
            )}
          </ModalFloating>
          {/* Modal flotante para Tabla de causa-efecto */}
          <ModalFloating open={modalCausaEfectoOpen} x={modalCausaEfectoPos.x} y={modalCausaEfectoPos.y}>
            {modalCausaEfectoOpen && (
              <div className="modal-content modal-content-floating" style={{ fontSize: '0.89rem', lineHeight: 1.25 }}>
                <b style={{ fontSize: '1.01em', color: '#b00' }}>Aplicación:</b>
                <div style={{ marginBottom: '0.4em' }}>
                  La tabla de causa-efecto se utiliza para derivar casos de prueba a partir de una representación lógica que relaciona causas (entradas o condiciones) con efectos (salidas o acciones). Es útil cuando múltiples condiciones influyen en distintos resultados, permitiendo identificar combinaciones relevantes de forma sistemática.
                </div>
                <b style={{ fontSize: '1.01em', color: '#b00' }}>Ejemplo:</b>
                <div>
                  En una banca en línea, las causas pueden ser: ingreso correcto de usuario, ingreso correcto de contraseña y uso de dispositivo confiable. Según las combinaciones de estas condiciones, los efectos pueden ser permitir el acceso, requerir verificación adicional (OTP), o bloquear el intento. La tabla de causa-efecto permite definir casos de prueba para cada combinación, validando que el sistema responda adecuadamente ante intentos válidos, sospechosos o fallidos.
                </div>
              </div>
            )}
          </ModalFloating>
          {/* Modal flotante para Transición de estados */}
          <ModalFloating open={modalTransicionOpen} x={modalTransicionPos.x} y={modalTransicionPos.y}>
            {modalTransicionOpen && (
              <div className="modal-content modal-content-floating" style={{ fontSize: '0.89rem', lineHeight: 1.25 }}>
                <b style={{ fontSize: '1.01em', color: '#b00' }}>Aplicación:</b>
                <div style={{ marginBottom: '0.4em' }}>
                  La técnica de transición de estados se utiliza para probar el comportamiento de un sistema a medida que cambia de un estado a otro en respuesta a ciertos eventos. Permite validar que las transiciones, condiciones y respuestas del sistema sean correctas según el flujo definido.
                </div>
                <b style={{ fontSize: '1.01em', color: '#b00' }}>Ejemplo:</b>
                <div>
                  En una app bancaria, una tarjeta puede estar en estado "Activa", "Bloqueada" o "Cancelada". Acciones como "ingresar clave errónea tres veces" o "solicitar cancelación" provocan transiciones entre estos estados. Mediante un diagrama de estados, se generan casos de prueba para verificar que cada evento conduzca al estado correcto.
                </div>
              </div>
            )}
          </ModalFloating>
          {/* Modal flotante para Caso de uso */}
          <ModalFloating open={modalCasoUsoOpen} x={modalCasoUsoPos.x} y={modalCasoUsoPos.y}>
            {modalCasoUsoOpen && (
              <div className="modal-content modal-content-floating" style={{ fontSize: '0.89rem', lineHeight: 1.25 }}>
                <b style={{ fontSize: '1.01em', color: '#b00' }}>Aplicación:</b>
                <div style={{ marginBottom: '0.4em' }}>
                  La técnica de caso de uso se enfoca en validar los flujos funcionales del usuario a través del sistema, considerando pasos normales y alternativos. Permite verificar que cada interacción cumpla los objetivos del usuario según los requisitos del negocio.
                </div>
                <b style={{ fontSize: '1.01em', color: '#b00' }}>Ejemplo:</b>
                <div>
                  En una banca móvil, un caso de uso puede ser "Realizar transferencia entre cuentas". El flujo principal incluye: ingresar al sistema, seleccionar cuentas origen y destino, ingresar el monto y confirmar. Los flujos alternativos incluyen errores como saldo insuficiente o formato inválido del monto. Las pruebas se diseñan para cubrir tanto el camino exitoso como las excepciones, garantizando una experiencia funcional completa.
                </div>
              </div>
            )}
          </ModalFloating>
          {/* Modal flotante para Pruebas basadas en requisitos */}
          <ModalFloating open={modalRequisitosOpen} x={modalRequisitosPos.x} y={modalRequisitosPos.y}>
            {modalRequisitosOpen && (
              <div className="modal-content modal-content-floating" style={{ fontSize: '0.89rem', lineHeight: 1.25 }}>
                <b style={{ fontSize: '1.01em', color: '#b00' }}>Aplicación:</b>
                <div style={{ marginBottom: '0.4em' }}>
                  Las pruebas basadas en requisitos consisten en derivar casos de prueba directamente de los requisitos funcionales definidos para el sistema. Aseguran que cada funcionalidad especificada se haya implementado correctamente y cumpla con lo solicitado por el cliente o el negocio.
                </div>
                <b style={{ fontSize: '1.01em', color: '#b00' }}>Ejemplo:</b>
                <div>
                  Si un requisito en una aplicación bancaria indica que "el usuario debe poder visualizar el saldo de todas sus cuentas en la pantalla principal después de iniciar sesión", se genera un caso de prueba que verifica exactamente esa funcionalidad: ingresar al sistema y comprobar que se muestran los saldos correctamente. Así, cada requisito tiene una o más pruebas que validan su cumplimiento.
                </div>
              </div>
            )}
          </ModalFloating>
          {/* Modal flotante para Pruebas de comportamiento (BDD) */}
          <ModalFloating open={modalBDDOpen} x={modalBDDPos.x} y={modalBDDPos.y}>
            {modalBDDOpen && (
              <div className="modal-content modal-content-floating" style={{ fontSize: '0.89rem', lineHeight: 1.25 }}>
                <b style={{ fontSize: '1.01em', color: '#b00' }}>Aplicación:</b>
                <div style={{ marginBottom: '0.4em' }}>
                  Las pruebas de comportamiento (BDD) se basan en la colaboración entre negocio, desarrollo y QA para definir escenarios de prueba usando un lenguaje natural estructurado como Gherkin. Estas pruebas describen el comportamiento esperado del sistema en función de ejemplos concretos que mejoran la comprensión compartida.
                </div>
                <b style={{ fontSize: '1.01em', color: '#b00' }}>Ejemplo:</b>
                <div>
                  En una app bancaria, un escenario BDD podría validar una transferencia exitosa entre cuentas. Usando Gherkin, se escribe:<br />
                  <span style={{ display: 'block', margin: '0.5em 0', fontFamily: 'monospace', background: '#f8f8f8', padding: '0.5em', borderRadius: 6 }}>
                    Dado que el usuario ha iniciado sesión,<br />
                    Y tiene saldo suficiente,<br />
                    Cuando realiza una transferencia de S/100,<br />
                    Entonces el sistema debe confirmar la operación<br />
                    Y mostrar el nuevo saldo actualizado.
                  </span>
                </div>
              </div>
            )}
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
                nombre === 'Pruebas exploratorias' ? (
                  <tr
                    key={nombre}
                    onMouseEnter={e => {
                      setModalExploratoriasOpen(true);
                      setModalExploratoriasPos({ x: e.clientX, y: e.clientY });
                    }}
                    onMouseMove={e => {
                      if (modalExploratoriasOpen) {
                        setModalExploratoriasPos({ x: e.clientX, y: e.clientY });
                      }
                    }}
                    onMouseLeave={() => setModalExploratoriasOpen(false)}
                    style={{ cursor: 'pointer' }}
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
                ) : (
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
                )
              ))}
            </tbody>
          {/* Modal flotante para Pruebas exploratorias */}
          <ModalFloating open={modalExploratoriasOpen} x={modalExploratoriasPos.x} y={modalExploratoriasPos.y}>
            {modalExploratoriasOpen && (
              <div className="modal-content modal-content-floating" style={{ fontSize: '0.89rem', lineHeight: 1.25 }}>
                <b style={{ fontSize: '1.01em', color: '#b00' }}>Aplicación:</b>
                <div style={{ marginBottom: '0.4em' }}>
                  Las pruebas exploratorias permiten al evaluador analizar una aplicación sin casos de prueba predefinidos, facilitando el descubrimiento de defectos inesperados y validando la experiencia del usuario. En el ámbito bancario, complementan las pruebas formales al revelar errores no previstos y ofrecer una visión más realista del uso cotidiano.
                </div>
                <b style={{ fontSize: '1.01em', color: '#b00' }}>Ejemplo:</b>
                <div>
                  En una app bancaria, el tester navega libremente, consulta saldos, transfiere fondos y modifica datos, simulando escenarios como errores de conexión o cambios de contraseña seguidos de transferencias. Así, detecta problemas de usabilidad y validación que no están cubiertos en pruebas formales, mejorando la calidad y seguridad del sistema.
                </div>
              </div>
            )}
          </ModalFloating>
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
