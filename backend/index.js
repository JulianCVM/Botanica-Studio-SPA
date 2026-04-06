const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

// Estructura de backend vacía como se solicitó para Botanica Studio.
// Los archivos en controllers/ y models/ se integrarán en una fase futura.

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Botanica Studio Backend API' });
});

// Importar rutas en un futuro:
// const servicesRoutes = require('./routes/services');
// app.use('/api/services', servicesRoutes);

app.listen(port, () => {
  console.log(`Backend de Botanica Studio corriendo en el puerto ${port}`);
});
