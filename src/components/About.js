const About = () => {
  return (
    <div className="section about" id="section-about">
      <div className="content">
        {/* title */}
        <div className="titles">
          <div className="title">Proyecto</div>
          <div className="subtitle">Misión y visión</div>
        </div>
        {/* text */}
        <div className="cols">
          <div className="col">
            <div className="single-post-text">
              <p>
              Otorgar herramientas en salud con el uso de la tecnología para acercar a los profesionales de la salud y pacientes con diabetes para un cuidado integral de la enfermedad.
              </p>
            </div>
          </div>
          <div className="col">
            <div className="single-post-text">
              <p>
              Ser un grupo multidisciplinario en salud y de la tecnología de vanguardia, para ofrecer herramientas que faciliten el cuidado y seguimiento integral por el profesional de la salud y del paciente con diabetes.
              </p>
            </div>
          </div>
          <div className="col col-full">
            <div className="single-post-text">
              <p>
              Protocolo de Investigación: “Efecto de la implementación educativa
“Entiendo mi Diabetes” con APP móvil, sitio Web y monitoreo de glucosa en el control
metabólico del paciente con diabetes tipo 2. Ensayo Clínico Multicéntrico”
              </p>
            </div>
          </div>
        </div>
        {/* info list */}
        <div className="info-list">
          <ul>
            <li>
              <strong>Año:</strong> 2024
            </li>
            <li>
              <strong>Registro:</strong> R-2018-785-100
            </li>
            <li>
              <strong>Institución:</strong> IMSS
            </li>
            <li>
              <strong>Ubicación:</strong> Ciudad de México
            </li>
          </ul>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
export default About;
