// routes/traffic.js
const express = require('express');
const axios = require('axios');
const router = express.Router();

const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY;

// Função para obter dados de tráfego
const getTrafficData = async (origin, destination) => {
  const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${encodeURIComponent(origin)}&destination=${encodeURIComponent(destination)}&departure_time=now&key=${GOOGLE_MAPS_API_KEY}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Erro ao obter dados de tráfego:', error);
    throw error;
  }
};

// Rota para obter otimização de rota
router.post('/optimize-route', async (req, res) => {
  const { origin, destination } = req.body;

  try {
    const trafficData = await getTrafficData(origin, destination);
    res.json(trafficData);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao otimizar a rota' });
  }
});

module.exports = router;
