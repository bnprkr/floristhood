import bouquetImage from '../../assets/flowers-main'
import styles from './Welcome.module.css'

function Welcome() {
  return (
    <div className="container">
      <div>
        <img src={bouquetImage} alt="A bouquet of pink flowers in a vase" className={styles.welcomeImage}/>
      </div>
    </div>
  );
}

export default Welcome;