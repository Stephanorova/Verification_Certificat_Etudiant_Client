import React, { useState } from 'react';
import axios from 'axios';
import { Card, CardHeader, CardContent, TextField, Button, Typography } from '@mui/material';
import Navebar from './Navebar/Navebar';
import './App.css'



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
     
     <div className='nebo'>
     <img src='/image/nebo.png' alt='' />
      <h1 style={{color:"brown", fontFamily:"Times New Roman, Times, serif"}}>T . S . L</h1>
      <div className='verification'>
      <Typography variant="h6" gutterBottom className='validation'>
        THIS IS A VALID CERTIFICATE
      </Typography>

      <form onSubmit={handleVerification} style={{marginBottom: '20px'}}>
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
          <CardHeader  title="Please ensure that the details on the printed certificate the verified detail below :"/>
          <CardContent>
            <Typography variant="body1" gutterBottom>
              <strong>Student's first and last name:</strong> {certificat.NomEtPrenomEtudient}
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Training date:</strong> {certificat.DateFormation}
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Certificat Number:</strong> {certificat.Ref}
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Student Number:</strong> {certificat.Num}
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Training Name:</strong> {certificat.Formation}
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Company Name:</strong> {certificat.Societe}
            </Typography>
          </CardContent>
        </Card>
      )}
       <footer style={{display:"flex", alignItems:"center",justifyContent:"center", marginTop:"5rem"}}>
        © 2024 TechSkils Learning Institute. All right Reserved.
        <img src='/image/certificat.png' alt='' width='100px' />
      </footer>
    </div>
    </div>
    </>
  );
}

export default App;
