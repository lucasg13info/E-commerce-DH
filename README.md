<h1 align="center"> E-commerce EchoPet 🦁 🐦 </h1>


<img src="new.png">

<h3> Figma: </h3> 
<p>https://www.figma.com/file/uSzNvWzY9Nh2RZrS5mZSwG/EchoPet?node-id=0%3A1 </p>



<h1> SPRINT 1: Desenhando o projeto no Figma ✔️</h1> 
<p> Os grupos deverão criar e pensar no sistema a ser desenvolvido. A ideia é documentar
wireframe de todas as páginas, funcionalidades principais da aplicação, fluxos e processos
para a facilitação do desenvolvimento.</p>



<p> Para a documentação e criação dos layouts, podem ser utilizadas qualquer ferramenta,
porém deixamos como recomendação as seguintes: </p>


<ul> 
    <li> Adobe XD - Link: ​ https://www.adobe.com/br/products/xd.html  </li>
    <li> Figma - Link: ​ https://www.figma.com/  </li>
    <li> Canva - Link ​ https://www.canva.com/   </li>

</ul>




<h1> SPRINT 2: Criando o Front da aplicação ✔️</h1> 
<p> Agora que já pensamos no layout e identidade visual do nosso
projeto, essas ideias devem ser passadas para o código! </p>

<p> Deve ser entregue o front-end completo do sistema escolhido por
vocês, ou seja, todas as páginas. </p>

<p> É muito importante que o usuário tenha uma boa experiência tanto
    no computador, quanto no celular ou tablet. Atente-se a
    responsividade dos elementos e teste em diferentes dispositivos
    para garantir a qualidade da entrega. </p>



<p> Alguns links que podem ajudá-los nessa etapa: </p>



<ul>
    <li> Google Fonts - Link: https://fonts.google.com/ </li>
    <li> UnDraw (Ilustrações)- Link: https://undraw.co/illustrations  </li>
    <li> Freepik (ilustrações, ícones)- Link: https://br.freepik.com/  </li>
    <li>  Pexels (imagens) - Link: ​https://www.pexels.com/</li>
    <li> Adobe Color (criação paleta de cores)- Link: ​https://color.adobe.com/create </li>
</ul>


<p> Vale lembrar: ​ Não esperamos que apliquem nada além de HTML, CSS e
Bootstrap (caso o grupo opte por usá-lo). E, é provável que após
começarem a transformar o protótipo em código tenham novas ideias
para o layout, desde que todo o grupo concorde com as mudanças não há
problema algum! </p>



<h1> SPRINT 3: Banco de dados ✔️</h1> 


<p>
   Nessa sprint vamos nos aprofundar mais nas regras de negócio doprojeto, definir quais informações precisam ficar salvas no banco dedados. E assim, criar as tabelas com suas respectivas colunas erelacionamentos. 
</p>


<p>
    SPRINT 3: Banco de dadosNessa sprint vamos nos aprofundar mais nas regras de negócio doprojeto, definir quais informações precisam ficar salvas no banco dedados. E assim, criar as tabelas com suas respectivas colunas erelacionamentos.
</p>



<p>
    Utilize o Workbench Model para criar o diagrama de forma maisdinâmica e gere o schema com a opção “Forward Engineer”.Lembre-se de manter boas práticas na criação da estrutura, pode serutilizado letras minúsculas e underline nas nomenclaturas. Essaregra vai evitar muito bug no back-end
</p>

<p>
    Valelembrar:Para garantir que a estrutura do banco faz sentido com a aplicaçãoque estamos desenvolvendo, insira alguns registros em cada tabela, explorandoos tipos de relações entre as entidades.
</p>


<h1> SPRINT 4: Back-end - in progress ... </h1> 

<p>Deverá ser criado toda a lógica de backend do projeto. Aqui deverá ser criada cada funcionalidade do sistema em si, como envios de formulários, criação de
usuários, produtos (CRUD) e assim por diante. Além disso, será integrado o banco de dados na aplicação para que as informações possam ser armazenadas.
</p>

<h2>Requisitos: </h2>

<ul>
    <li>Utilizar o framework express e padrão MVC; </li>
    <li>Formulários e ações devem salvar as informações diretamente no banco de dados;</li>
    <li>Criar a funcionalidade de autenticação de usuários (session e middlewares) e funcionalidade logout. Senhas precisam ser armazenadas criptografadas.
        Tela de login deverá validar usuário e redireciona-lo para a página inicial interna. </li>
    <li>Para um usuário já logado, a rota de login e de formulário de cadastro devem direcioná-lo para página inicial interna;</li>
    <li>Deverá ser feita a validação do que está sendo salvo dentro do banco de dados, além de exibir mensagem de erro sempre que necessário.</li>
    <li>Produtos, clientes, serviços, etc deverão ser exibidos de forma dinâmica e de acordo com o que está armazenado dentro do banco de dados. </li>
    <li>Incluir uma seção comum em todo o site, por exemplo, o cabeçalho. Se o usuário estiver logado, eles devem indicar seu nome de usuário. Se você
        não está logado, você deve ter um link para a página de login </li>
    <li>Utilizar Migration como versionamento do banco de dados.</li>
    <li>Ter alguma ferramenta de busca de alguma entidade (produtos, alunos,serviços, etc...)</li>
</ul>





<h1>Para executar o backend do projeto: </h1>
<p> 1- Acesse a pasta Back-end </p>
<p> 2- Dê um npm install para baixar as dependencias de projeto </p>
<p> 3- Instale o Sequelize </p>
<p> 4- Instale o MySql e WorkBanch </p>
<p> 5- Instale o NPX </p>
<p> 6- Configure o arquivo /config/database.js com o user e senha do seu banco de dados </p>
<p> 7- Dê o comando: npx sequelize db:migrate:undo:all para limpar o banco </p>
<p> 8- Dê o comando: npx sequelize db:migrade para rodas as migrations e o banco </p>
<p> 9- Instale o nodemon </p>
 10 - Execute nodemon ou npm start para rodar o servidor que está configurado na porta 3000
