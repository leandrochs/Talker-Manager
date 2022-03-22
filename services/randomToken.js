const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function randomToken(tokenSize) {
  let token = '';

  for (let i = 0; i < tokenSize; i += 1) {
    token += characters[parseInt((Math.random() * 62), 10)];
  }

  return token;  
}

module.exports = randomToken;

// ref: https://www.webtutorial.com.br/funcao-para-gerar-uma-string-aleatoria-random-com-caracteres-especificos-em-javascript/
