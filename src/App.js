import { useState } from "react";

function App() {
  const [umur, setUmur] = useState(0);

  function tambahUmur() {
    setUmur(umur + 1);
  }

  function kurangUmur() {
    setUmur(umur - 1);
  }

  return (
    <div>
      <p>Umur Nur Mutiah</p>
      <div>{umur}</div>
      {umur < 5 && (
        <button className="btn btn-biru" onClick={tambahUmur}>
          tambah
        </button>
      )}
      {umur !== 0 && (
        <button className="btn btn-merah" onClick={kurangUmur}>
          kurang
        </button>
      )}
      {umur === 5 ? <p>umur maksimal</p> : <p>umur belum maksimal</p>}
    </div>
  );
}

export default App;
