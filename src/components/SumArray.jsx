import { useState, useMemo } from "react";

export default function SumArray() {
  const [input, setInput] = useState("");

  const sum = useMemo(() => {
    console.log("Calcul de la somme en cours...");
    return input
      .split(",")
      .map(Number)
      .filter(n => !isNaN(n))
      .reduce((acc, val) => acc + val, 0);
  }, [input]);

  return (
    <div className="card">
      <h3>Somme d'un tableau (Cas 2 : useMemo)</h3>
      <input
        type="text"
        placeholder="Entrez des nombres séparés par des virgules (ex: 1,2,3)"
        value={input}
        onChange={e => setInput(e.target.value)}
        style={{ width: "100%", padding: "8px" }}
      />
      <p><strong>Somme totale :</strong> {sum}</p>
    </div>
  );
}