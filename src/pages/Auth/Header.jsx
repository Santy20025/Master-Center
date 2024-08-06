import logo from '../../images/Logo_Master_center.jpg';

export function Header () {
    return(
        <div>
  <div className="header_midil">
    <div className="container">
      <div className="row d_flex">
        <div className="col-md-4 col-sm-4 d_none">
          <ul className="conta_icon">
            <li><a href="#"><i className="fa fa-phone" aria-hidden="true" />Contactanos: +57 3118089487</a> </li>
          </ul>
        </div>
        <div className="col-md-4 col-sm-4 ">
          <a className="logo" href="#"><img src={logo} alt="#" /></a>
        </div>
        <div className="col-md-4 col-sm-4 d_none">
          <ul className="conta_icon ">
            <li><a href="#"><i className="fa fa-envelope" aria-hidden="true" /> mastercenterplus@gmail.com</a> </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div className="header_bo">
    <div className="container">
      <div className="row">
        <div className="col-md-9 col-sm-7">
          <nav className="navigation navbar navbar-expand-md navbar-dark ">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarsExample04">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item ">
                  <a className="nav-link" href="Inicio.jsx"> Inicio </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="About.jsx">Acerca</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="Service.jsx">Servicios</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="col-md-3 col-sm-5 d_none">
          <ul className="sign">
            <li><a className="sign_btn" href="#">Iniciar Sesion</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>

    )
}