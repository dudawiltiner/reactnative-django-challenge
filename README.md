
# Desafio de Estudo - *Project RocketJobs*

## Boas vindas ao repositório do Desafio de Estudo - Case criado pela Eduarda Wiltiner

Esse desafio foi criado por mim com o objetivo de aplicar um método de estudo que chamado de Challenge First, que basicamente serve para criar uma familiaridade com alguns stacks em pouco tempo e um entendimento raso sobre elas. As habilidades contempladas foram aquelas necessáiras para desenvolver um projeto **Full Stack**. O resultado final é uma plataforma para **registro de vagas para desenvolvedores** pelos usuários e por um web scraping do site GetVagas para popular de forma automática o banco de dados **SQL** através de uma **API**.

---

## 📌 Sumário

- [Contexto do *Case*](#contexto-do-case)
  - [Requisitos técnicos](#requisitos-técnicos)
  - [Funcionalidades](#funcionalidades)
- [Entregáveis](#entregáveis)
- [Uso do projeto localmente](#uso-do-projeto-localmente)
- [Usando a plataforma](#usando-a-plataforma)
 
---

## 💻 Contexto do *Case*

*Nesse desafio as principais tecnologias de estudo foram Django, React Native e Docker. Para desenvolver a maior parte do back-end foi utilizado o chatGPT como ferramenta de aprendizado e agilidade no desenvolvimento da área que tenho menos contato no dia a dia.*

*Essa aplicação foi pensada para ser um repositório de vagas que demonstre duas formas de registro e compartlhamento das mesmas, uma por web scraping de sites públicos que temos pela internet que divulgam vagas para Dev e também através de prenchimento de um formlário para compartilhar uma vaga específica. Faclitando e centralizando a procura de vagas pelos Devs em único lugar.*

Abaixo estão os requisitos técnicos e as funcionalidades que a solução deve possuir:

###  Requisitos técnicos

- [x] Front-End para representar o Aplicativo;
- [x] Back-End em Python com rotas especificadas;
- [x] Modelagem PostgreSQL;

### Funcionalidades

- [x] Listar todos as *vagas*;
- [x] Registrar *vagas*;
- [x] Filtrar *vagas*;

## 🚀 Entregáveis

A solução do desafio foi separarada em duas partes: front-end e back-end, cada em sua respectiva pasta com as seguintes tecnologias principais:

### Front-End
[React Native](https://reactjs.org/)<br>
[Typescript](https://www.typescriptlang.org/)<br>
[ReactHooksForms](https://react-hook-form.com/)<br>
[Native Base](https://mui.com/)<br>
[Axios](https://jotai.org/)<br>
[ReactQuery](https://react-query-v3.tanstack.com/)<br>

### Back-End
[Python](https://nestjs.com/)<br>
[Django](https://nodejs.org/)<br>
[Parsel](https://jwt.io/)<br>
[Requests](https://github.com/typestack/class-validator)<br>
[Pyngrok](https://graphql.org/)<br>

### Banco de Dados
[PostgreSQL](https://www.postgresql.org/)<br>

### Criação do Ambiente
[Docker](https://www.docker.com/)<br>

---

## ⬇️ Uso do projeto localmente

Para facilitar o processo de rodar o projeto localmente. Recomendo seguir o passo a passo descrito a abaixo, após instalar o Docker e Docker Compose em seu notebook usando a própria documentação da ferramenta para o seu sistema operacional e instalar o App do Expo no seu celular. Em poucos passos você vai perceber que o projeto estará rodando em seu notebook com poucos comandos. É sensacional! Mas se preferir em cada pasta há um readme gerado pelas ferramentas pricipais que explica como manipular e instalar as dependências de cada pasta.

Vamos lá!

### Clone do repositório

1. Abra o terminal e crie um diretório no local de sua preferência com o comando **mkdir**:
```javascript
  mkdir docker-reactnative-django
```

2. Entre no diretório que acabou de criar e depois clone o projeto:
```javascript
  cd docker-reactnative-django
  git clone https://github.com/dudawiltiner/reactnative-django-challenge.git
```

### Instalação das dependências

3. Entre no diretório criado após a clonagem do repositório.
```javascript
  cd reactnative-django-challenge
```

4. Garanta de remover todas os containers, volumes e imagens que você possui.
```javascript
   docker-compose down -v --rmi all
```

5. Limpar tudo que ainda tiver.
```javascript
   docker system prune -af
```

6. Instale todas as dependências e rode a aplicação, usando o CLI **docker-compose**.
```javascript
   docker-compose up --build
```

### Garantindo a conexão com a API

Como o React Native não aceita API consideradas não seguras, ex: "localhost:3000", temos que garantir a conexão criando o serviço pelo **ngrok**. Mas não se preocupe já você já tem esse link.

7. Procure nos logs do seu terminal algo parecido com o texto abaixo.
```javascript
  python-api | ngrok tunnel "https://4389-189-33-65-158.ngrok.io" -> "http://0.0.0.0:3001"
```

8. Copie e cole o link encontrado após a palavra tunnel nos seguintes arquivos. Procure pela string "<COLE O LINK AQUI>" e a substitua pelo link. 
```javascript
  - front-end/services/api
  - back-end/scraper.py
```

### Preparando o banco de dados

9. Abra uma outra aba do seu terminal, Entre no terminal do container **python-api**
```javascript
  sudo docker exec -it python-api /bin/sh
```

10. Crie as migrations para formar a tabela **jobs**.
```javascript
  python manage.py migrate
```

11. Se quiser ao invés de preencher pelo formulário na aplicação os jobs na mão. Você pode rodar um data scraping do site getvagas para popular o banco de dados com algumas informações.
```javascript
  save_jobs()
```

12. Clique em CTRL + D duas vezes para sair do terminal do container.

### Scaneie o QR code

13. No terminal haverá um QR code para você aproveitar a aplicação no dipositivo móvel no app EXPO. Pronto(a) para a diversão?

## ⚡ Usando a plataforma

Após cada um dos passos a seguir, haverá um exemplo de como cada página pode ser usada, caso tenha dificuldades e o exemplo não seja suficiente, não hesite em me contatar em _eduardawiltiner@gmail.com_.

###  Usando o App RockerJobs

Logo abaixo eu disponibilizo um vídeo sobre o uso do App já integrado com a API, para te orientar a como testa-la localmente.

[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/tTvfRut4Tog&t/0.jpg)](https://www.youtube.com/watch?v=tTvfRut4Tog&t)

### Documentação da API

Com o Django Rest Framework temos como testar e olhar a documentação *playground* da ferramenta. Isso facilita com os testes acessando o seguinte [link](http://localhost:3001/api/jobs).


