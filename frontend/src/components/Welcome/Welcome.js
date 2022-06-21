import bouquetImage from '../../assets/flowers-main'

function Welcome() {
  return (
    <div className="container">
      <div className="welcome-image">
        <img src={bouquetImage} alt="A bouquet of pink flowers in a vase" />
      </div>
    </div>
  );
}

export default Welcome;