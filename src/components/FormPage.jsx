// import React, { useState } from "react";
// export default function FormPage() {
//  const villes = ["Casablanca", "Rabat", "Marrakech", "Fes", "Tanger"];
//  const [form, setForm] = useState({
//     nom: "",
//     email: "",
//     password: "",
//     genre: "",
//     ville: "",
//     newsletter: false,
//     message: ""
//   });

//   const [suggestions, setSuggestions] = useState([]);

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;

//     setForm({
//       ...form,
//       [name]: type === "checkbox" ? checked : value
//     });

//     // Autocomplete ville
//     if (name === "ville") {
//       const filtered = villes.filter(v =>
//         v.toLowerCase().includes(value.toLowerCase())
//       );
//       setSuggestions(filtered);
//     }
//   };

//   const selectVille = (ville) => {
//     setForm({ ...form, ville });
//     setSuggestions([]);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert(JSON.stringify(form, null, 2));
//   };

//   return (
//     <div className="card p-4 shadow">

//       <h3 className="mb-3">
//         <i className="bi bi-person-lines-fill"></i> Formulaire Utilisateur
//       </h3>

//       <form onSubmit={handleSubmit}>

//         <div className="row">

//           <div className="col-md-6 mb-3">
//             <label className="form-label">Nom</label>
//             <input
//               className="form-control"
//               name="nom"
//               onChange={handleChange}
//             />
//           </div>

//           <div className="col-md-6 mb-3">
//             <label className="form-label">Email</label>
//             <input
//               type="email"
//               className="form-control"
//               name="email"
//               onChange={handleChange}
//             />
//           </div>

//           <div className="col-md-6 mb-3">
//             <label className="form-label">Mot de passe</label>
//             <input
//               type="password"
//               className="form-control"
//               name="password"
//               onChange={handleChange}
//             />
//           </div>

//           <div className="col-md-6 mb-3">
//             <label className="form-label">Genre</label>
//             <select className="form-select" name="genre" onChange={handleChange}>
//               <option value="">Choisir</option>
//               <option>Homme</option>
//               <option>Femme</option>
//             </select>
//           </div>

//           {/* AUTOCOMPLETE */}
//           <div className="col-md-6 mb-3 position-relative">
//             <label className="form-label">Ville (Autocomplete)</label>
//             <input
//               className="form-control"
//               name="ville"
//               value={form.ville}
//               onChange={handleChange}
//               autoComplete="off"
//             />

//             {suggestions.length > 0 && (
//               <ul className="list-group position-absolute w-100">
//                 {suggestions.map((v, i) => (
//                   <li
//                     key={i}
//                     className="list-group-item list-group-item-action"
//                     onClick={() => selectVille(v)}
//                     style={{ cursor: "pointer" }}
//                   >
//                     {v}
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </div>

//           <div className="col-md-6 mb-3">
//             <label className="form-label">Pays</label>
//             <select className="form-select" name="pays" onChange={handleChange}>
//               <option>Maroc</option>
//               <option>France</option>
//               <option>Espagne</option>
//             </select>
//           </div>

//           <div className="col-12 mb-3">
//             <label className="form-label">Message</label>
//             <textarea
//               className="form-control"
//               name="message"
//               rows="3"
//               onChange={handleChange}
//             ></textarea>
//           </div>

//           <div className="col-12 mb-3">
//             <div className="form-check">
//               <input
//                 type="checkbox"
//                 className="form-check-input"
//                 name="newsletter"
//                 onChange={handleChange}
//               />
//               <label className="form-check-label">
//                 S'abonner à la newsletter
//               </label>
//             </div>
//           </div>

//         </div>

//         <button className="btn btn-primary">
//           <i className="bi bi-send"></i> Envoyer
//         </button>

//       </form>

//     </div>
//   );
// }
import React, { useState } from "react";
import { 
  TextField, 
  MenuItem, 
  Checkbox, 
  FormControlLabel, 
  Button, 
  Typography, 
  Box, 
  Paper,
  Grid 
} from "@mui/material";

export default function FormPage() {
  const villes = ["Casablanca", "Rabat", "Marrakech", "Fes", "Tanger"];
  
  const [form, setForm] = useState({
    nom: "",
    email: "",
    password: "",
    genre: "",
    ville: "",
    pays: "Maroc", // Valeur par défaut
    newsletter: false,
    message: ""
  });

  const [suggestions, setSuggestions] = useState([]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value
    });

    // Logique Autocomplete simplifiée
    if (name === "ville") {
      const filtered = value === "" ? [] : villes.filter(v =>
        v.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filtered);
    }
  };

  const selectVille = (ville) => {
    setForm({ ...form, ville });
    setSuggestions([]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(form, null, 2));
  };

  return (
    /* CORRECTION DES MARGES :
       - width: "100%" pour prendre toute la place du container
       - Suppression de maxWidth: 800 (qui bloquait la largeur)
       - Suppression de mx: "auto" (qui centrait avec des marges vides)
       - Suppression de mt: 4 (car déjà géré par la div parente dans App.jsx)
    */
    <Paper elevation={3} sx={{ p: 4, width: "100%", borderRadius: 2 }}>
      <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1, fontWeight: 'bold', mb: 3 }}>
        Formulaire Utilisateur
      </Typography>

      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          
          {/* NOM */}
          <Grid item xs={12} md={6}>
            <TextField 
              label="Nom" 
              name="nom" 
              fullWidth 
              variant="outlined" 
              onChange={handleChange} 
            />
          </Grid>

          {/* EMAIL */}
          <Grid item xs={12} md={6}>
            <TextField 
              label="Email" 
              type="email" 
              name="email" 
              fullWidth 
              onChange={handleChange} 
            />
          </Grid>

          {/* PASSWORD */}
          <Grid item xs={12} md={6}>
            <TextField 
              label="Mot de passe" 
              type="password" 
              name="password" 
              fullWidth 
              onChange={handleChange} 
            />
          </Grid>

          {/* GENRE (SELECT) */}
          <Grid item xs={12} md={6}>
            <TextField
              select
              label="Genre"
              name="genre"
              fullWidth
              value={form.genre}
              onChange={handleChange}
            >
              <MenuItem value="">Choisir</MenuItem>
              <MenuItem value="Homme">Homme</MenuItem>
              <MenuItem value="Femme">Femme</MenuItem>
            </TextField>
          </Grid>

          {/* VILLE (AVEC AUTOCOMPLETE CUSTOM) */}
          <Grid item xs={12} md={6} sx={{ position: 'relative' }}>
            <TextField
              label="Ville"
              name="ville"
              fullWidth
              autoComplete="off"
              value={form.ville}
              onChange={handleChange}
            />
            {suggestions.length > 0 && (
              <Paper sx={{ position: 'absolute', zIndex: 10, width: '100%', mt: 1, boxShadow: 3 }}>
                {suggestions.map((v, i) => (
                  <MenuItem key={i} onClick={() => selectVille(v)}>
                    {v}
                  </MenuItem>
                ))}
              </Paper>
            )}
          </Grid>

          {/* PAYS (SELECT) */}
          <Grid item xs={12} md={6}>
            <TextField
              select
              label="Pays"
              name="pays"
              fullWidth
              value={form.pays}
              onChange={handleChange}
            >
              <MenuItem value="Maroc">Maroc</MenuItem>
              <MenuItem value="France">France</MenuItem>
              <MenuItem value="Espagne">Espagne</MenuItem>
            </TextField>
          </Grid>

          {/* MESSAGE */}
          <Grid item xs={12}>
            <TextField
              label="Message"
              name="message"
              multiline
              rows={3}
              fullWidth
              onChange={handleChange}
            />
          </Grid>

          {/* NEWSLETTER */}
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox 
                  name="newsletter" 
                  checked={form.newsletter} 
                  onChange={handleChange} 
                />
              }
              label="S'abonner à la newsletter"
            />
          </Grid>

          {/* BOUTON */}
          <Grid item xs={12}>
            <Button 
              type="submit" 
              variant="contained" 
              color="primary" 
              size="large"
              sx={{ px: 5 }}
            >
              Envoyer
            </Button>
          </Grid>

        </Grid>
      </form>
    </Paper>
  );
}