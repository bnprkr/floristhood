function Page3({page, setPage}) {
  setPage(3);
  return (
    <>
      <h1>Page 3</h1>
      <button
        onClick={() => {
          setPage(page - 1);
        }}
      >Back</button>
      <button
        onClick={() => {
          setPage(page + 1);
        }}
      >Next</button>
    </>
  );
}

export default Page3