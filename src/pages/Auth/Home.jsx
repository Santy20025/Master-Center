import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTiktok, faInstagram } from '@fortawesome/free-brands-svg-icons';


export function Home () {
   return(
    <div className="header">
  <div className="header_to d_none">
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-sm-6">
          <ul className="lan">
            <li> Master center </li>
          </ul>
        </div>
        <div className="col-md-6 col-sm-6 ">
          <ul className="social_icon1">
            <li> Nuestras redes 
            </li>
            <li> <a href="https://www.facebook.com/groups/569329231237225/?ref=share&mibextid=NSMWBT"><FontAwesomeIcon icon={faFacebook} aria-hidden="true" /></a></li>
            <li> <a href="https://www.tiktok.com/@mastercenter_plus?_t=8oTBfyMPmtS&_r=1"> <FontAwesomeIcon icon={faTiktok} /></a></li>
            <li> <a href="https://www.instagram.com/mastercenter_plus?igsh=M2UxMmxpaWpxcWky"><FontAwesomeIcon icon={faInstagram} aria-hidden="true" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>

   )
}
