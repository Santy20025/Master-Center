import about from '../../images/Nosotros.jpeg';

export function About () {
    return(
        <div id="about" className="about">
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-12 col-lg-7">
        <div className="about_box">
          <div className="titlepage">
            <h2><strong className="yellow">Acerca de Nosotros</strong><br />Tu Taller Especializado en BMW y Mnni Cooper</h2>
          </div>
          <h3>¡TODO LO QUE NECESITAS PARA TU VEHÍCULO!</h3>
          <span>Servicios de alta calidad para mantener tu BMW o Minni Cooper en óptimas condiciones.</span>
          <p>En Master Center, ofrecemos un servicio integral para vehículos BMW yMinni Cooper. Nuestro equipo de expertos garantiza la mejor atención y mantenimiento para tu vehículo.</p>
        </div>
      </div>
      <div className="col-md-12 col-lg-5">
        <div className="about_img">
          <figure><img src={about} alt="#" /></figure>
        </div>
      </div>
    </div>
  </div>
</div>

    )
}