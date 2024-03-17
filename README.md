# Api-Users

# Iniciar aplicação:

>> yarn start

projeto/
├── controllers/
│   └── authController.js
├── middleware/
│   └── authMiddleware.js
├── models/
│   └── User.js
├── routes/
│   └── authRoutes.js
├── config/
│   └── config.js
├── utils/
│   └── jwtUtils.js
├── index.js
└── package.json


<h1>Dependências Necessárias:</h1>

<h1>Express:</h1> Para criar o servidor e lidar com as rotas.
<h1>Mongoose:</h1> Para interagir com o MongoDB.
jsonwebtoken: Para gerar e verificar JWTs.

<h1>Configuração do MongoDB:</h1>
Configure uma instância do MongoDB e conecte seu aplicativo a ela. Você pode usar o Mongoose para facilitar a interação com o MongoDB.

<h1>Configuração do JWT:</h1>
Crie um segredo para assinar seus tokens JWT.
Configure o tempo de expiração dos tokens conforme necessário.

<h1>Models:</h1>
Defina o modelo do usuário (User) para armazenar informações relevantes, como nome de usuário, senha (criptografada) e qualquer outra informação necessária.
Controllers:

<h1>authController.js:</h1> 
Contém lógica para registrar usuários, fazer login e gerar tokens JWT.
Middleware:

<h1>authMiddleware.js:</h1> 
Middleware para autenticar as solicitações usando tokens JWT.
Rotas:

<h1>authRoutes.js:</h1> 
Defina as rotas para registro, login e qualquer outra funcionalidade relacionada à autenticação.
Utilitários:

<h1>jwtUtils.js:</h1>
Contém funções auxiliares para gerar e verificar tokens JWT.

<h1>Configuração do Express:</h1>
Configure o Express para usar os middleware necessários (body-parser, etc.).
Defina suas rotas.
Inicialização do Servidor:

No arquivo index.js, inicialize o servidor Express e conecte-o ao MongoDB.

<h1>Testes:</h1>
Teste todas as funcionalidades para garantir que tudo funcione conforme o esperado.