const venom = require('venom-bot');

venom
  .create()
  .then((client) => start(client));

//variaveis dos clientes
var clientes = ['553291607063','5532998057607'];
var contatenacao_txt = '@c.us';
var i = 0;

//variaveis do texto de envio
var texto = "👉Venon bot ativado...";


async function start(client) {


    for(i=0;i<clientes.length;i++){
      
      cliente_formatado = clientes[i]+contatenacao_txt;
  
      client.sendText(cliente_formatado, texto)
      .then(() => {
        console.log("mensagem enviada");
      })//then
      .catch(() => {
        console.error('Erro ao enviar mensagem: ');
      });//catch
  
    }//for
  
  
}//async function start