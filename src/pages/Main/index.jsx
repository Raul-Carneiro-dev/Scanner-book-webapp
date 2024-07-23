import React, { useState } from "react";

import Scanner from "./Scanner";
import Results from "./results";

function Main() {

  const [isbn, setIsbn] = useState();

  return (
    <>
      <Scanner onScan={setIsbn} />
      {isbn && <Results isbn={isbn} />}
    </>
  )

}

export default Main;
