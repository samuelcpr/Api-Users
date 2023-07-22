const express = require('express');
const app = express();

// Importar as rotas da API
const usuarioRoutes = require('./routes/usuarioRoutes');

// Configurar o middleware para o uso de JSON nas requisições
app.use(express.json());

// Definir as rotas da API
app.use('/usuarios', usuarioRoutes);

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
