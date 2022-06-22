import bouquetImage from '../../assets/flowers-main'
import styles from './Welcome.module.css'

function Welcome() {
  return (
    <div className={styles.container}>
      <img src={bouquetImage} alt="A bouquet of pink flowers in a vase" className={styles.welcomeImage}/>
      <div className={styles.welcomeMessage}>
        <h1>Personalise your <br/>flower arrangement</h1>
        <p>Nam eu rutrum mauris. Cras tempor porttitor augue mattis consectetur.</p>
        <button>Order now</button>
      </div>
    </div>
  );
}

export default Welcome;