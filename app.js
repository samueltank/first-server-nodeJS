/* Esse eu fiz na mão kkk */

'use strict'; /* modo restrito ativado! */

const express = require('express');       /* pega o módulo Express do NPM */
const app     = express();                /* cria uma aplicação express */
const port    = process.env.PORT || 3000; /* define a porta a ser utilizada */

/* rota a ser utilizada */
app.get('/', (req, res) => {
  /* callback de processamento da requisição */
  return res.send('Hello World!');
});
app.listen(port); /* inicia a aplicação na porta definida */