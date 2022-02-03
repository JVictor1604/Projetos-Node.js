const prompt = require("prompt-sync")();
console.clear();


//TEMPO

var dia = 01;
const meses = ['','janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro', 'dezembro']
var mês = meses[10];
var ano = 1942;
let hora = 9;
let minuto = 0;

//STATUS
let status = {
    saude: 100,
    moral: 60,
    nível: 0,
    experiência: 0,
    fome: 30,
    dinheiro: 50,
   }

    

console.log(
`01 de Outubro de 1942... O relógio marca ${hora}:${minuto} da manhã

–Mais um dia de tensão na União Sóviética, o exército nazista avança pelas ruas da tão almejada cidade de Stalingrado, e agora eu preciso lutar contra a morte nesses que podem ser meus últimos dias...

Você olha sua identidade e lá estão seus dados: 

╔════════════════════════════════╗
║              URSS              ║
║ Nome: Nina Litvinova           ║
║ Data de nascimento: 10/09/1915 ║
║ Registro: 161988US             ║
║ Função: Enfermeira             ║
║                                ║
║ Notas: Filha do general        ║
║ Gueorgui Júkov                 ║
╚════════════════════════════════╝

–Apesar de ser respeitada e conhecida por causa do meu pai, me sinto sozinha nesse vasto hospital de guerra. Minha mãe morreu faz 7 anos e meu pai vive nas frentes de batalha. Minhas rotina é ver corpos e mais corpos por todos os lados, dor e sofrimento de todos que fogenm da invasão nazista. Quanto a mim? não resta escolha a não ser tentar sobreviver a tudo isso...

Esses são seus status:

╔════════════════════════╗
║   saúde = 100          ║
║   moral = 60           ║
║   nível = 0            ║
║   experiência = 0      ║
║   fome = 30            ║
║   dinheiro = 50 rublos ║               
╚════════════════════════╝

Agora está na hora de dar tudo de mim mesma na luta pela sobrevivência 
`);

console.log();

prompt('Pressione enter para iniciar a jornada')

console.log();

//FUNÇÕES

function comer() { 
    
    console.log(
    
     `Você chegou ao refeitório, escolha uma refeição para preparar:
    
      1 - SOPA 
      2 - ESTROGONOFE
      3 - PEIXE FRITO
    
    Lembrando que uma refeição mais completa diminuirá mais sua fome, porém gastará mais tempo...
    
    `)
    let cm = +prompt('Digite o número de sua refeição: ')

    console.log();

        if (cm == 1) {console.log(
        'Você comeu uma sopa, ela estava um pouco fria mas não é de se reclamar. Sua fome diminuiu em 10!!'); status.fome -=10; hora +=2;

    }   else if (cm == 2) {console.log(
        'Você fez um belo estrogonofre de frango. Sua fome diminuiu em 20!!'), status.fome -=20; hora += 3;

    }   else {console.log('Você comeu um magnífico peixe frito. Sua fome diminuiu em 30!!'), status.fome-=30, hora += 4};

        console.log();
        console.log(`Sua fome agora é: ${status.fome}`)
        console.log();
        console.log(`São ${hora} horas`);
    };

function trabalhar() {
    
    console.log('Você chega a sua sala de enfermaria, vários soldados esperam seu atendimento')
     
    let numAtendimentos = 0;

    while (numAtendimentos != 1 && numAtendimentos != 2) {
        
        if (status.moral > 50) { numAtendimentos = +prompt('Sua moral está alta, você pode fazer até dois atendimentos hoje. Digite o número de atendimentos que deseja realizar: ')
        } 
        else {'Sua moral está baixa, você só poderá atender um paciente',numAtendimentos = 1}

        for (i = 0; i < numAtendimentos;i++) {
            console.log('Atendi um paciente')
        }
}};

