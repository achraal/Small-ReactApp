// components/CrudPersonnes.jsx
import { useEffect, useState } from "react";
// import "./CrudPersonnes.css"; // Renomme ton style.css pour éviter les conflits

const API = "http://localhost:4001/personnes";

export default function CrudPersonnes() {
  const [personnes, setPersonnes] = useState([]);
  const [form, setForm] = useState({ nom: "", tel: "", age: "", email: "" });
  const [editId, setEditId] = useState(null);

  const loadData = async () => {
    try {
        const res = await fetch(API);
        const data = await res.json();
        setPersonnes(data);
    } catch (error) {
        console.error("Erreur de chargement:", error);
    }
  };

  useEffect(() => { loadData(); }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const method = editId ? "PUT" : "POST";
    const url = editId ? `${API}/${editId}` : API;

    await fetch(url, {
      method: method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });

    setForm({ nom: "", tel: "", age: "", email: "" });
    setEditId(null);
    loadData();
  };

  const handleDelete = async (id) => {
    await fetch(`${API}/${id}`, { method: "DELETE" });
    loadData();
  };

  const handleEdit = (p) => {
    setForm(p);
    setEditId(p.id);
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Gestion des Personnes</h1>
      <form onSubmit={handleSubmit} className="mb-4 p-3 border rounded bg-light">
        <div className="row g-3">
            <div className="col-md-3"><input className="form-control" name="nom" placeholder="Nom" value={form.nom} onChange={handleChange} required /></div>
            <div className="col-md-3"><input className="form-control" name="tel" placeholder="Téléphone" value={form.tel} onChange={handleChange} required /></div>
            <div className="col-md-2"><input className="form-control" name="age" placeholder="Age" value={form.age} onChange={handleChange} required /></div>
            <div className="col-md-4"><input className="form-control" name="email" placeholder="Email" value={form.email} onChange={handleChange} required /></div>
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          {editId ? "Modifier" : "Ajouter"}
        </button>
      </form>

      <table className="table table-striped shadow-sm">
        <thead className="table-dark">
          <tr>
            <th>ID</th><th>Nom</th><th>Tel</th><th>Age</th><th>Email</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {personnes.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td><td>{p.nom}</td><td>{p.tel}</td><td>{p.age}</td><td>{p.email}</td>
              <td>
                <button className="btn btn-sm btn-warning me-2" onClick={() => handleEdit(p)}>Modifier</button>
                <button className="btn btn-sm btn-danger" onClick={() => handleDelete(p.id)}>Supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}