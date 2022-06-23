import Header from "../../Header/Header";
import Navigation from "../../Navigation/Navigation";

function ArrangementType({ page, setPage, first }) {
  setPage(1);
  return (
    <>
      <Header
        heading1="This is the main heading"
        heading2="This is the secondary heading"
      />
      <Navigation first={first} />
    </>
  );
}

export default ArrangementType;
