# App de Clima - Aplicativo Web de Consulta de Clima

O App de Clima é um aplicativo web simples de consulta de clima que utiliza a API do OpenWeather para obter informações climáticas em tempo real. Ele permite que os usuários pesquisem o clima de qualquer cidade em todo o mundo.

## Pré-requisitos

Antes de executar o App de Clima, você precisa ter a chave de API do OpenWeather para fazer as solicitações à API de previsão do tempo. Certifique-se de criar um arquivo `secret.js` no diretório `js` com suas credenciais da API, conforme o exemplo abaixo:

**js/secret.js**
```javascript
export const apiKey = "sua_chave_da_api_aqui";
export const apiCountryUrl = "https://flagsapi.com/";
export const extensionCoutryUrl = "/flat/32.png";
```

## Como executar o App de Clima

1. Clone o repositório App de Clima em seu computador usando o seguinte comando:

```bash
git clone https://github.com/juanp00/app-clima.git
```

2. Navegue até o diretório do projeto:

```bash
cd weather-app
```

3. Certifique-se de ter criado o arquivo `secret.js` no diretório `js` com suas credenciais da API, conforme explicado nos pré-requisitos.

4. Abra o arquivo `index.html` em seu navegador para iniciar o aplicativo.

5. No campo de pesquisa, digite o nome da cidade cujo clima você deseja consultar.

6. Clique no botão "Consultar" para obter a previsão do tempo para a cidade selecionada.

## Recursos e Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (ES6)
- API do OpenWeather

## Contribuição

Contribuições são bem-vindas! Se você encontrar algum problema ou tiver ideias para melhorar o App de Clima, sinta-se à vontade para abrir uma _issue_ ou enviar um _pull request_.

## Licença

O App de Clima é distribuído sob a licença MIT.