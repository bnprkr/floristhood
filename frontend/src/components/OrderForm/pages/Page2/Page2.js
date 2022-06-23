function Page2({ page, setPage }) {
  setPage(2);
  return (
    <>
      <h1>Page 2</h1>
      <button
        onClick={() => {
          setPage(page - 1);
        }}
      >
        Back
      </button>
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

export default Page2;
