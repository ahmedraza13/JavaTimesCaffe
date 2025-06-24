import whatsapplogo from "../../assets/images/whatsapp-logo.png";
import maillogo from "../../assets/images/mail-logo.png";
import styles from "./header.module.css";

function Header() {
  return (
    <header>
      <section className={styles.leftSide} aria-label="Promotional message">
        <p>
          Get A Discount Of Up To <strong>50%</strong> For Orders This Month!
        </p>
      </section>
      <address className={styles.rightSide}>
        <p>
          <a href="tel:+528711236511">
            <img src={whatsapplogo} alt="whatsapplogo" height={22} width={22} />
            +52 871 123 6511
          </a>
        </p>

        <p>
          <a href="mailto:ceo@javatimescaffe.com">
            <img src={maillogo} alt="email logo" />
            ceo@javatimescaffe.com
          </a>
        </p>
      </address>
    </header>
  );
}

export default Header;
