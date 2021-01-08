//chamando biblioteca necessária
const venom = require('venom-bot');


//##############
//##############
//##############
//##VARIÁVEIS###
//##############
var i = 0;

/*variavel para contatos de clientes */
var clientes = ['553291607063','5532998057607'];

/*variavel para contanecao (FORMATO PADRAO PARA ENVIO DE MENSAGEM UTILIZANDO O VENON) */
var contatenacao_txt = '@c.us';


/*variaveis do texto de envio*/
var texto = "👉Venon bot ativado...";


//##############
//##############
//##############
//###FUNÇÕES####
//##############

/*funcao inicial*/
async function start(client) {

    for(i=0;i<clientes.length;i++){
        cliente_formatado = clientes[i]+contatenacao_txt;
        sendMessage(client,cliente_formatado,texto);
    }
  
}

/*funcao envio de mensagem*/
function sendMessage(client,numero_cliente, texto){

    client.sendText(numero_cliente, texto)
    .then(() => {
      console.log("mensagem enviada");
    })//then
    .catch(() => {
      console.error('Erro ao enviar mensagem: ');
    });//catch

}


//##############
//##############
//##############
//#ARQUIVO MAIN#
//##############

/*instanciando a bibliteca venon*/ 
venom
  .create()
  .then((client) => start(client));
