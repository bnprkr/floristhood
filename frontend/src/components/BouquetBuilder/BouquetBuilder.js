import { useState } from 'react'

import { Page1, Page2, Page3 } from './index'

function BouquetBuilder() {
  const [page, setPage] = useState(1);

  switch(page) {
    case 1: return (
      <Page1 page={page} setPage={setPage}/>
    )
    case 2: return (
      <Page2 page={page} setPage={setPage}/>
    )
    case 3: return (
      <Page3 page={page} setPage={setPage}/>
    )
    default: return (
      <Page1 page={page} setPage={setPage}/>
    )
  }
}

export default BouquetBuilder