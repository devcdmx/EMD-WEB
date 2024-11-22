const Contacts = () => {
  return (
    <div className="section contacts" id="section-contacts">
      <div className="content">
        {/* title */}
        <div className="titles">
          <div className="title">Contacto</div>
          <div className="subtitle">Hablemos</div>
        </div>
        {/* contact form */}
        <div className="contact-form">
          <form id="cform" method="post">
            <div className="group-val">
              <div className="label">
                Nombre <strong>*</strong>
              </div>
              <input
                type="text"
                name="name"
                placeholder="ej.: Genoveva Lian Hullt"
              />
            </div>
            <div className="group-val">
              <div className="label">
                Correo electrónico <strong>*</strong>
              </div>
              <input
                type="email"
                name="email"
                placeholder="example@domain.com"
              />
            </div>
            <div className="group-val">
              <div className="label">
                Tu mensaje <strong>*</strong>
              </div>
              <textarea
                name="message"
                placeholder="To Write"
                defaultValue={""}
              />
            </div>
            <div className="group-bts">
              <button type="submit" className="btn">
                <span className="animated-button">
                  <span>Enviar</span>
                </span>
                <i className="icon fas fa-chevron-right" />
              </button>
            </div>
          </form>
          <div className="alert-success">
            <p>Gracias, tu mensaje fue enviado.</p>
          </div>
        </div>
        {/* contact info */}
        <div className="contact-info">
          <div className="name">Entiendo mi Diabetes</div>
          <div className="subname">Protocolo de investigación</div>
          <div className="info-list">
            <ul>
              
              <li>
                <strong>Dirección:</strong> Ciudad de México
              </li>
              <li>
                <strong>Teléfono:</strong> 55 88 54 96 12
              </li>
              <li>
                <strong>Extensión:</strong> 1522
              </li>
            </ul>
          </div>
          <div className="author">Dra. Lubia Velazquez</div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
export default Contacts;
