Instale o pacote @emotion/react e @emotion/styled:

bash
Copy code
>> npm install @emotion/react @emotion/styled
ou

bash
Copy code
>> yarn add @emotion/react @emotion/styled
Verifique as versões compatíveis:
Certifique-se de que as versões do @emotion/react e @emotion/styled que você instalou são compatíveis com a versão do Material-UI que você está usando. Verifique a documentação do Material-UI para determinar as versões recomendadas.

Atualize o Material-UI:
Às vezes, o problema pode ser corrigido simplesmente atualizando o Material-UI para a versão mais recente. Você pode fazer isso com:

bash

>> npm install @mui/material@latest @mui/icons-material@latest
ou

bash
Copy code
yarn add @mui/material@latest @mui/icons-material@latest
Verifique a configuração do Babel:
Certifique-se de que a sua configuração do Babel está correta. O @emotion/react geralmente requer a configuração do plugin Babel @emotion/babel-plugin.

Certifique-se de que seu arquivo .babelrc ou babel.config.js inclua algo semelhante a:

json
<scrip>
{
  "plugins": ["@emotion/babel-plugin"]
}
</scrip>
Limpe a cache do Node:
Às vezes, problemas de cache podem causar esses tipos de erros. Tente limpar a cache do Node usando:

bash

>> npm cache clean --force
ou

bash
Copy code
>> yarn cache clean
Depois de seguir essas etapas, tente executar seu aplicativo novamente. Se o problema persistir, você pode precisar investigar mais detalhadamente as versões específicas de pacotes e suas configurações de Babel.