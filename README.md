É necessário ter o Docker, Node, NPM e Yarn instalados.
Rodar este comando no terminal para iniciar a imagem do Docker do MySQL
docker run -it --name mysql -e MYSQL_ROOT_PASSWORD=root -p 3306:3306 -d mysql

Clonar o repositório
git clone https://github.com/tiagocoelho231/teste-oficina-5.git

Entrar na pasta da API e rodar este comando para instalar os módulos Node.
yarn install

Criar um banco de dados no MySQL chamado "oficina-5"

Rodar este comando para gerar as tabelas no MySQL
yarn run syncdb

Rodar este comando para iniciar a API
yarn start

Voltar para a raiz do projeto, entrar na pasta do Front e rodar este comando para instalar os módulos Node
yarn install

Rodar este comando para iniciar o Front
yarn start
