export function Contact () {
    return(
        <div id="contact" className="contact ">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="titlepage">
          <h2><strong className="yellow">Contactanos</strong><br />Preguntas Frecuentes</h2>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-8 offset-md-2">
        <form id="post_form" className="contact_form">
          <div className="row">
            <div className="col-md-12 ">
              <input className="contact_control" placeholder=" Nombre" type="type" name="Name" />
            </div>
            <div className="col-md-12">
              <input className="contact_control" placeholder="Correo" type="type" name="Email" />
            </div>
            <div className="col-md-12">
              <input className="contact_control" placeholder="Numero Telefonico" type="type" name="Phone Number " />
            </div>
            <div className="col-md-12">
              <textarea className="textarea" placeholder="Mensaje" type="type" message="Name" defaultValue={"Mensaje"} />
            </div>
            <div className="col-md-12">
              <button className="send_btn">Enviar</button>
            </div>
          </div></form>
      </div>
    </div>
  </div>
</div>

    )
}