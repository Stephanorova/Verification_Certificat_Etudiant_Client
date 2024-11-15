import React, { useState } from 'react';
import axios from 'axios';
import { Card, CardHeader, CardContent, TextField, Button, Typography } from '@mui/material';
import Navebar from './Navebar/Navebar';




function App() {
  const [certificat, setCertificat] = useState(null);
  const [Ref, setRef] = useState(null);
  const [error, setError] = useState('');


  const handleVerification = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.get(`https://backendsite-5yjl.onrender.com/verifier/${Ref}`);
      setCertificat(response.data);
      setError('')
    } catch (error) {
      setRef(null)
      setError('Certificat non trouvé');
    }
  };




  return (
    <>
    <div>
      <Navebar/>
    </div>
   <div style={{ padding: '20px',marginTop:"3rem", maxWidth: '600px', margin: '0 auto' }}>
      <Typography variant="h5" gutterBottom>
        Verification of student who followed our training courses
      </Typography>
      
      <form onSubmit={handleVerification} style={{ marginBottom: '20px' }}>
        <TextField
          fullWidth
          label="Certificat Number"
          variant="outlined"
          value={Ref} 
          onChange={(e) => setRef(e.target.value)} 
          style={{ marginBottom: '10px' }}
          required
        />
        <Button variant="contained" color="primary" type="submit">
          CHECK
        </Button>
      </form>
     

      {error && (
        <Typography color="error" gutterBottom>
          {error}
        </Typography>
      )}

      {certificat  && (
        <Card>
          <CardHeader title="Résultat de votre vérification" />
          <CardContent>
            <Typography variant="body1" gutterBottom>
              <strong>Nom et Prénom de l'étudiant:</strong>{certificat.NomEtPrenomEtudient}
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Date de formation:</strong> {certificat.DateFormation}
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Numéro certificat:</strong> {certificat.Ref}
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Numéro Etudiant:</strong> {certificat.Num}
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Nom de Formation:</strong> {certificat.Formation}
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Nom de Societé:</strong> {certificat.Societe}
            </Typography>
          </CardContent>
        </Card>
      )}
       <footer style={{display:"flex", alignItems:"center",justifyContent:"center", marginTop:"5rem"}}>
        © 2024 TechSkils Learning Institute. All right Reserved.
      </footer>
    </div> 
    </>
  );
}

export default App;
