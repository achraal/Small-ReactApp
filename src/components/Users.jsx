import React, { useEffect, useState } from "react";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Appel à l'API locale
    fetch("http://localhost:4000/users")
      .then(res => res.json())
      .then(data => {
        // Si ton JSON-Server renvoie directement le tableau : setUsers(data)
        // Si c'est structuré comme une API type ReqRes : setUsers(data.data)
        setUsers(Array.isArray(data) ? data : data.data);
      })
      .catch(err => console.error("Erreur API:", err));
  }, []); // [] signifie que l'effet s'exécute une seule fois au montage

  return (
    <div className="user-container">
      {users.map(user => (
        <div className="card" key={user.id}>
          <img src={user.avatar} alt={user.first_name} />
          <h3>{user.first_name} {user.last_name}</h3>
          <p>{user.email}</p>
          <button className="btn">Voir Profil</button>
        </div>
      ))}
    </div>
  );
}