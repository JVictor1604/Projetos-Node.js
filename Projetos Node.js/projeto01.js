const prompt = require("prompt-sync")(); // COMANDO PARA DEFINIR O PROMPT


console.clear(); // COMANDO PARA LIMPAR O TERMINAL

// INICIO DA HISTÓRIA

console.log(`No século XIV, vários piratas partiram em seus barcos na busca de um grande tesouro
localizado em uma ilha desconhecida no pacífico, agora, chegou a sua vez de partir capitão. 
Tudo o que você tem é um pergaminho junto com um fragmento um mapa e algumas moedas de ouro....  não deixe essa chance passar...

`);

console.log();

console.log(prompt('Pressione enter para iniciar essa jornada...'));

console.log();

let nome = prompt('Primeiro, Qual o seu nome Capitão? '); // VARIÁVEL DO NOME

console.log();

console.log(`É um prazer conhece-lo, Capitão ${nome}, vamos iniciar sua jornada pelos mares sombrios...`);

console.log();


let x = 0 // VARIÁVEL QUE CONTARÁ OS NUMEROS DE SIM


// PERGUNTA 1 

console.log(`Você encontrou sua tripulação, e agora precisa de um barco para partir em direção ao 
oriente. Deseja comprar um novo barco forte e equipado usando as suas moedas de ouro?`);

console.log();

let rpt1 = prompt('Digite sua Resposta: ');

if (rpt1 == 'sim' || rpt1 == "Sim" ) {x = x+1};

console.log();

console.log(`Sua resposta foi ${rpt1}`);

console.log();

//PERGUNTA 2

console.log(`Durante a viagem, próximo a Índia, você se depara com navios piratas inimigos, 
eles não parecem muito fortes mas são agéis para te pegar se decidir fugir, deseja lutar?`);

console.log();

let rpt2 = prompt('Digite sua Resposta: ');

if (rpt2 == 'sim' || rpt2 == "Sim" ) {x = x+1};

console.log();

console.log(`Sua resposta foi ${rpt2}`);

console.log();

// PERGUNTA 3

console.log("Durante uma madrugada fria, seu barco sofre com uma grande tempestade e você perde sua único pedaço de mapa restante, você é orientado pelo bando para procura-lo antes de partir, deseja procurar? ");

console.log(); 

let rpt3 = prompt('Digite sua resposta: '); 

if (rpt3 == 'sim' || rpt3 == "Sim" ) {x = x+1};

console.log();

console.log(`Sua resposta foi ${rpt3}`);

console.log();

// PERGUNTA 4

console.log('Após dias navegando, você percebeu que sua tribulação está faminta, você precisa de comida!! Um fragmento que você carrega no bolso têm instruções para cozinhar uma bela sopa, deseja cozinhar para todos?');

console.log();

let rpt4 = prompt('Digite sua resposta: ');

if (rpt4 == 'sim' || rpt4 == "Sim" ) {x = x+1};

console.log();

console.log(`Sua resposta foi ${rpt4}`);

// PERGUNTA 5 

console.log();

console.log(`Você está quase no fim da jornada, porém a ilha está repleta de piratas furiosos prontos 
para arrancar sua cabeça, a única coisa que vai te salvar é a sua lendária espada de ouro, você nunca perdeu uma batalha sequer com ela. Você trouxe sua espada?`);

console.log();

let rpt5 = prompt('Digite sua resposta: ');

if (rpt5 == 'sim' || rpt5 == "Sim" ) {x = x+1};


console.log();

console.log(`Sua resposta foi ${rpt5}`);

console.log();

// TOTAL DE RESPOSTAS

console.log(`Ao chegar na ilha sua frota encontra uma grande quantidade de piratas inimigos..... `);

console.log();

prompt('Você deve estar pronto para luta...  Pressione enter para continuar');

console.log();

prompt('Seu bando entra em uma frenética luta eee......  Pressione enter para continuar');

console.log();

// RESULTADO DA HISTÓRIA

if (x == 0) {console.log('Seu bando foi muito mal na batalha, você fracassou miseravelmente, seu barco foi perdido e sua tripulação lhe abandonou, agora você está perdido em busca de abrigo em novos bandos piratas enquanto tenta não morrer de fome e sede em uma ilha deserta.....')} else if (x == 1 || x == 2) {console.log('Depois de uma dura batalha, sua tripulação foi derrotada. Você falhou, mas ainda assim conseguiu avistar um navio pirata amigo que te deu abrigo longe daquela tenebrosa ilha. Mesmo com todos os danos e sem sua tripulação, você saiu no lucro por não ter morrido.....')}

else if (x == 3) {console.log('Você junto com seu bando derrotaram boa parte dos piratas, porém, em um momento de descuido, deixou outros piratas roubarem o tesouro e fugirem pelo grande mar. Você não tem como pega-los e a unica coisa que você pode aceitar é que falhou, porém sem danos nem baixas..... ')}

else if (x == 4) {console.log('Depois de uma dura batalha, seus piratas triunfaram sobre os adversários e você consegue o tesouro, porém não de maneira perfeita já que boa parte do tesouro se perdeu nos mares após a grande batalha..... ')}

else if (x == 5) {console.log('Durante a batalha você não encontra nenhum problema, seus piratas triunfam de maneira inquestionável conquistando todo o tesouro além de novos barcos roubados de outros piratas.... VOCÊ VENCEUUUU......')};

console.log();

console.log('Sua aventura chegou ao fim..... Você gostou?');

console.log();

let resposta = prompt('Digite sua Resposta: ');

console.log();

console.log('Obrigado por se aventurar junto comigo, até mais....');

console.log(); 



