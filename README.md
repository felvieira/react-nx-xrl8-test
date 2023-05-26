# Projeto teste para XLR8 com React, TypeScript, Nx e Vite

Este é um projeto para um teste para empresa XLR8, desenvolvido com React e TypeScript. O formulário permite ao usuário adicionar várias linhas com informações, como data de início, data de término, tipo de valor e valor.

## Requisitos

Certifique-se de ter o seguinte software instalado em seu ambiente de desenvolvimento:

- Node.js (versão 12 ou superior)
- npm (gerenciador de pacotes do Node.js)

## Configuração do Projeto

Siga as etapas abaixo para configurar e executar o projeto em seu ambiente local:

1.  Faça o download ou clone o projeto para o seu computador.
2.  Abra um terminal na pasta raiz do projeto.
3.  Execute o seguinte comando para instalar as dependências do projeto:

    `npm install`

4.  Após a conclusão da instalação das dependências, execute o seguinte comando para iniciar o projeto:

    `npm start`

5.  O projeto será iniciado e estará acessível no seu navegador através da URL `http://localhost:3000`.

## Funcionalidades

O formulário possui as seguintes funcionalidades:

- Adicionar linhas: O usuário pode adicionar várias linhas clicando no botão "Adicionar Linha". Cada linha representa um conjunto de informações, como data de início, data de término, tipo de valor e valor.
- Remover linhas: O usuário pode remover uma linha específica clicando no ícone de lixeira ao lado da linha.
- Validação: O formulário realiza a validação dos campos, verificando se as datas estão preenchidas corretamente e se a data de início é anterior à data de término. Caso haja erros de validação, eles serão exibidos na parte superior do formulário.
- Resumo dos dados: Após a submissão bem-sucedida do formulário, um resumo dos dados preenchidos é exibido, mostrando as informações de todas as linhas adicionadas.
- Edição dos dados: O usuário pode voltar e editar as escolhas feitas clicando no botão "Voltar e editar as escolhas" no resumo dos dados.

## Utilização do Nx e Vite

Este projeto foi configurado utilizando o Nx e Vite para fornecer uma estrutura de desenvolvimento mais eficiente e produtiva. Aqui estão algumas das melhorias que essas ferramentas trazem em comparação com o Create React App e o Webpack:

- Nx: O Nx é um conjunto de ferramentas desenvolvido pela equipe do Angular para ajudar no desenvolvimento de aplicativos de grande escala. Ele oferece recursos avançados de gerenciamento de monorepos, permitindo a criação de vários projetos e bibliotecas compartilhadas em um único repositório. Com o Nx, é possível executar testes, linting e compilação incremental apenas nos arquivos afetados, o que resulta em um fluxo de trabalho de desenvolvimento mais rápido e eficiente.
- Vite: O Vite é um novo bundler e servidor de desenvolvimento que oferece um tempo de inicialização extremamente rápido. Ele utiliza a importação de módulos nativos do ES e gera código otimizado para desenvolvimento, o que resulta em tempos de compilação significativamente mais rápidos em comparação com o Webpack. O Vite também possui suporte nativo para o hot module replacement (HMR), permitindo atualizações instantâneas no navegador durante o desenvolvimento.

Ao utilizar o Nx e o Vite em conjunto, você obtém um ambiente de desenvolvimento altamente eficiente, com tempos de compilação rápidos, suporte para testes e linting seletivos, e uma estrutura escalável para o crescimento do seu projeto.

## Personalização do Projeto

Este projeto foi desenvolvido utilizando a biblioteca de componentes React DatePicker e o conjunto de ícones HeroIcons. Caso deseje personalizar o projeto, você pode modificar os estilos CSS, adicionar novos componentes ou realizar outras customizações conforme necessário.

## Conclusão

Este projeto de formulário de múltiplas etapas com React, TypeScript, Nx e Vite oferece uma estrutura básica para a criação de formulários interativos e personalizáveis, além de fornecer um ambiente de desenvolvimento eficiente. Sinta-se à vontade para explorar e adaptar o código de acordo com suas necessidades específicas.
