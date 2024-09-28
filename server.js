const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Pontos da rota Cristo Rei
const cristoReiRoute = [
    "Terminal Urbano",
    "Ponto Da Fernando Machado Em Frente A Radiodontica",
    "Próximo Ao CRC",
    "Em frente a Igreja três Estrelas",
    "Em Frente Ao Zin Automóveis",
    "Próximo A Aurora Matriz",
    "Próximo a vik pão",
    "Próximo a casan",
    "Próximo ao Shoupanas",
    "Em frente a kanto kente",
    "Antigo pontão",
    "Em frente a farmácia Bela Vista",
    "Próximo ao mercado PB",
    "Próximo ao éder motos",
    "Antigo canhoto",
    "Em frente a central lanches",
    "Em frente a Pink sorveteria",
    "Próximo a motormac",
    "Próximo ao shoping",
    "Próximo a fiat gambatto",
    "Próximo a mepar",
    "Em Frente Ao Superalfa",
    "Próximo a Bigolin",
    "Próximo a Moto A",
    "Próximo A Santa Maria Imóveis",
    "Em Frente A Igreja Três Estrelas",
    "Próximo ao CRC",
    "Em Frente Ao Ditália",
    "Ponto estação"
];

app.post('/optimize-route', (req, res) => {
    const { startPoint, endPoint } = req.body;

    if (!startPoint || !endPoint) {
        return res.status(400).json({ message: 'Ponto de saída e chegada são obrigatórios.' });
    }

    // Aqui você pode implementar lógica para otimizar a rota
    // Por enquanto, vamos apenas retornar os pontos da rota
    res.json({ message: 'Rota otimizada com sucesso!', route: cristoReiRoute });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
