# Arquitetura da Solução

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>

Definição de como o software é estruturado em termos dos componentes que fazem parte da solução e do ambiente de hospedagem da aplicação.

## Diagrama de componentes

Diagrama que permite a modelagem física de um sistema, através da visão dos seus componentes e relacionamentos entre os mesmos.

Exemplo: 

Os componentes que fazem parte da solução são apresentados na Figura XX.

![Diagrama de Componentes](img/componentes.png)
<center>Figura XX - Arquitetura da Solução</center>

A solução implementada conta com os seguintes módulos:
- **Navegador** - Interface básica do sistema  
  - **Páginas Web** - Conjunto de arquivos HTML, CSS, JavaScript e imagens que implementam as funcionalidades do sistema.
   - **Local Storage** - armazenamento mantido no Navegador, onde são implementados bancos de dados baseados em JSON. São eles: 
     - **Canais** - seções de notícias apresentadas 
     - **Comentários** - registro de opiniões dos usuários sobre as notícias
     - **Preferidas** - lista de notícias mantidas para leitura e acesso posterior
 - **News API** - plataforma que permite o acesso às notícias exibidas no site.
 - **Hospedagem** - local na Internet onde as páginas são mantidas e acessadas pelo navegador. 

> **Links Úteis**:
>
> - [Whimsical](https://whimsical.com/)

A imagem a seguir ilustra a o fluxo do usuário em nossa solução. Assim
que o usuário entra na plataforma, ele é apresentado à tela inicial
(Tela 1) onde ele pode fazer login ou se cadastrar.

Caso ele opte por seguir pelo primeiro caminho (cadastro), ele é
redirecionado para a tela cadastro (Tela 2), onde ele pode inserir seus dados e 
se cadastrar,caso esteja tudo correto, ele será redirecionado para a tela de login (Tela 3).

Caso o usuário opte seguir pelo segundo caminho (login) ele
é redirecionado para a (Tela 3), onde ele vai inserir seus dados e efetuar o login,
caso os dados estejam corretos ele será redirecionado para sua tela de relatório de gastos (Tela 4).

Na tela do relatório existem três opções, cadastrar uma categoria, na aba de categorias (Tela 5), e após isso lançar um gasto na aba de gastos (Tela 6), o sistema verifica seus dados e atualiza seu relatório te redirecionando para a (Tela 4) caso tudo esteja correto, caso esteja errado o sistema te redireciona para a aba de gastos (Tela 6).O usuário pode também ir direto para a tela de gastos (Tela 6) apenas para lançar um gasto sem mexer em suas categorias.Na tela de relatório o usuário também pode fazer logout (Tela 7).
<img width="2532" alt="userflowatt" src="https://user-images.githubusercontent.com/66649959/232633406-90c63664-ba3a-45b8-bd3e-7933258eade3.png">


## Tecnologias Utilizadas

Descreva aqui qual(is) tecnologias você vai usar para resolver o seu problema, ou seja, implementar a sua solução. Liste todas as tecnologias envolvidas, linguagens a serem utilizadas, serviços web, frameworks, bibliotecas, IDEs de desenvolvimento, e ferramentas.

Apresente também uma figura explicando como as tecnologias estão relacionadas ou como uma interação do usuário com o sistema vai ser conduzida, por onde ela passa até retornar uma resposta ao usuário.


## Hospedagem

Explique como a hospedagem e o lançamento da plataforma foi feita.

> **Links Úteis**:
>
> - [Website com GitHub Pages](https://pages.github.com/)
> - [Programação colaborativa com Repl.it](https://repl.it/)
> - [Getting Started with Heroku](https://devcenter.heroku.com/start)
> - [Publicando Seu Site No Heroku](http://pythonclub.com.br/publicando-seu-hello-world-no-heroku.html)
