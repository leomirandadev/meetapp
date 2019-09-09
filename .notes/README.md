# INICIAÇÃO DA API NODE.JS


## Instalando bibliotecas de produção:
- ``Express`` : Responsável pela lib http;
- ``Sequelize`` : ORM;
- ``YUP`` : Responsável verificação de dados;
- ``BCryptJs`` : Responsável critografia;
- ``JsonWebToken`` : Responsável pela geração de webtoken para permissão de usuários para a utilização de algumas áreas da API;

```
yarn add express sequelize yup bcryptjs jsonwebtoken 
```


----


## Instalando bibliotecas para ambiente de desenvolvimento:
- ``Nodemon`` : Responsável por fornecer levantar o servidor e manter atualizado conforme o código vai alterando;
- ``Sucrase`` : Responsável por disponibilizar o 'import' e o 'export default' com o padrão ES6+
- ``Sequelize-cli`` : Interface de linha de comando utilizado junto com a lib sequelize para geração de migrations, entre outras automatizações;
```
yarn add nodemon sequelize-cli sucrase -D
```

----


## Criando repositórios para organização da API:
```
mkdir src src/config src/database src/app src/app/controllers src/app/models src/app/middlewares
```