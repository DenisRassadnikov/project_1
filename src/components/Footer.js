import GoogleApp from "../logo/google-play-ua.svg"
import AppStore from "../logo/appstore-ua.svg"
import MasterCard from "../logo/mastercard-logo.svg"
import Visa from "../logo/visa-logo.svg"


const Footer = () => {
  return (
    <footer>
      <div className='footer-top'>
        <section className='footer-top__download'>
          <div className="footer-top__heading">
            <h3>Download our apps</h3>
          </div>
          <ul className="footer-top__links">
            <li className="footer-top__link">
              <a target="_blank" rel="noreferrer" href="https://play.google.com/store/apps/details/?id=ua.com.rozetka.shop&referrer=utm_source%3Dfullversion%26utm_medium%3Dsite%26utm_campaign%3Dfullversion&pli=1">
              <img src={GoogleApp} alt='link to google play' />
              </a>
            </li>
            <li className="footer-top__link">
              <a target="_blank" rel="noreferrer" href="https://apps.apple.com/app/apple-store/id740469631">
              <img src={AppStore} alt='link to appstore' />
              </a>
            </li>
          </ul>
        </section>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom__layout">
        <ul className="payments-buttons">
          <li className="payments-buttons__item">
            <button className="payments-buttons__button">
              <img src={MasterCard} alt="mastercard logo" />
            </button>
          </li>
          <li className="payments-buttons__item">
          <button className="payments-buttons__button">
              <img src={Visa} alt="visa logo" />
            </button>
          </li>
        </ul>
        <p className="footer-bottom__text">
        © 2001–2023 Интернет-магазин «Розетка™» — Щоразу що треба ТМ используется на основании лицензии правообладателя RozetkaLTD
        </p>
      </div>
        </div>
    </footer>
  )
}

export default Footer
