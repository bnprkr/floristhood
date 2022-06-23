function Page1({page, setPage}) {
  setPage(1);
  return (
    <>
      <h1>Page 1</h1>
      <button
        onClick={() => {
          setPage(page + 1);
        }}
      >Next</button>
    </>
  );
}

export default Page1