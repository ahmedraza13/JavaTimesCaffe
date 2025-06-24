
import styles from "./herosection.module.css";

function HeroSection() {
  return (
    <>
      <section className={styles.heroSection}>
        <div className="container">
          <h2 className={styles.heroSubtitle}>Discover the real taste of</h2>
          <h1 className={styles.heroTitle}>Coffee with Java <br /> Times Caffe</h1>
          <button>Order Now</button>
       
        </div>
      </section>
    </>
  );
}



export default HeroSection;
