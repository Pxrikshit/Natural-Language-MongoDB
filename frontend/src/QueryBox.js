import React, { useState } from "react";
import axios from "axios";

function QueryBox() {

  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    try {
      setError("");
      const res = await axios.post("http://localhost:5000/api/query", {
        userQuery: query
      });
      setResult(res.data);
    } catch (err) {
      setError("Something went wrong!");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        placeholder="Ask something like: Show IT employees with salary > 60000"
        onChange={(e) => setQuery(e.target.value)}
        style={{ width: "450px", padding: "10px" }}
      />

      <button onClick={handleSearch} style={{ marginLeft: "10px" }}>
        Search
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <div style={{ marginTop: "20px" }}>
        <pre>{JSON.stringify(result, null, 2)}</pre>
      </div>
    </div>
  );
}

export default QueryBox;