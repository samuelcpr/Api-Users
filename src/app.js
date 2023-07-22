const express = require('express');
const cors = require('cors'); // Importe o pacote cors

const app = express();

// Configurar o middleware cors para permitir solicitações de qualquer origem
app.use(cors());

// Configurar o middleware para o uso de JSON nas requisições
app.use(express.json());

// Importar as rotas da API
const usuarioRoutes = require('./routes/usuarioRoutes');

// Definir as rotas da API
app.use('/usuarios', usuarioRoutes);

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
