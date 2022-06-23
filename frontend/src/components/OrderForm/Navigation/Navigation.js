function Navigation({ page, setPage, first }) {
  return (
    <div className="container">
      {!first && (
        <button
          onClick={() => {
            setPage(page + 1);
          }}
        >
          Back
        </button>
      )}
      <button
        onClick={() => {
          setPage(page + 1);
        }}
      >
        Next
      </button>
    </div>
  );
}

Navigation.defaultProps = {
  first: false,
};

export default Navigation;
