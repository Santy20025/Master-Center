import logo from '../../images/Logo_Master_center.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTiktok, faInstagram } from '@fortawesome/free-brands-svg-icons';

export function Footer () {
    return(
        <div className="footer">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <a className="logo2" href="#"><img src={ logo } alt="#" /></a>
      </div>
      <div className="col-lg-5 col-md-6 col-sm-6">
        <h3>Contactanos</h3>
        <ul className="location_icon">
          <li><a href="#"><i className="fa fa-map-marker" aria-hidden="true" />Bogotá</a> 
            <br /> Cl 134 Bis #45a-20
          </li>
          <li><a href="#"><i className="fa fa-envelope" aria-hidden="true" /></a>mastercenterplus@gmail.com</li>
          <li><a href="#"><i className="fa fa-volume-control-phone" aria-hidden="true" /></a>+57 3118089487</li>
        </ul>
        <ul className="social_icon">
          <li> <a href="https://www.facebook.com/groups/569329231237225/?ref=share&mibextid=NSMWBT"><FontAwesomeIcon icon={faFacebook} /></a></li>
          <li> <a href="https://www.tiktok.com/@mastercenter_plus?_t=8oTBfyMPmtS&_r=1"><FontAwesomeIcon icon={faTiktok} /></a></li>
          <li> <a href="https://www.instagram.com/mastercenter_plus?igsh=M2UxMmxpaWpxcWky"><FontAwesomeIcon icon={faInstagram} /></a></li>
        </ul>
      </div>
    </div>
  </div>
  <div className="copyright">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <p>© 2019 All Rights Reserved.</p>
        </div>
      </div>
    </div>
  </div>
</div>

    )
}