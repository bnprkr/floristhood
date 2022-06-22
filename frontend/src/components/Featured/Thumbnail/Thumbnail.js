import styles from './Thumbnail.module.css'

function Thumbnail(props) {
  return (
    <div className={styles.container}>
      <img src={props.imageName} alt="Bouquet of flowers" />
      <span>Quisque<br/>pellentesque</span>
    </div>
  );
}

export default Thumbnail;