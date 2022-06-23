import Heading from "../Heading/Heading";

function Page1({ page, setPage }) {
  setPage(1);
  return (
    <>
      <Heading
        heading1="This is the main heading"
        heading2="This is the secondary heading"
      />
      <button
        onClick={() => {
          setPage(page + 1);
        }}
      >
        Next
      </button>
    </>
  );
}

export default Page1;
