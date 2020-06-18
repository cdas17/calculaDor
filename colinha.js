// operações
const add = (a, b) => String(a + b);
const sub = (a, b) => String(a - b);
const mult = (a, b) => String(a * b);
const div = (a, b) => String(a / b);

(
  function blah() {
    // check
    let algumBotaoApertado = false;

    // elementos do DOM
    const telaDaCalculadora = document.querySelector('output'); // Element mdn
    const botoesPadrao = document.querySelectorAll('.botao_inserir') // NodeArrayList
    const botaoLimpar = document.querySelector('.botao_limpar');
    const limparUltimo = document.querySelector('.limpar_ultimo');
    const botaoResultado = document.querySelector('.botao_resultado');

    // regular expressions (MDN it)
    const ultimoElemento = /(\d|\D)$/;
    const isDigit = RegExp('\\d');

    // helper/callback functions
    const limpaCalculadora = () => {
      telaDaCalculadora.innerText = '0';
      algumBotaoApertado = false;
    };
    const calcNumbers = () => {
      const [ num1, operator, num2 ] = telaDaCalculadora.innerText.split(' '); // ['1231231', '*', '1231231']

      if (operator === '+') {
        return telaDaCalculadora.innerText = add(Number(num1), Number(num2));
      } else if (operator === '-'){
        return telaDaCalculadora.innerText = sub(Number(num1), Number(num2));
      } else if (operator === '*') {
        return telaDaCalculadora.innerText = mult(Number(num1), Number(num2));
      }

      return telaDaCalculadora.innerText = div(Number(num1), Number(num2));
    }

    // events
    botoesPadrao.forEach(botao => {
      botao.addEventListener('click', () => {
        if (!algumBotaoApertado) {
          algumBotaoApertado = true;

          telaDaCalculadora.innerText = '';
        }

        const textoAtual = telaDaCalculadora.innerText;
        const textoBotao = botao.innerText;
        const isFirstInput = textoAtual.length === 0;
        const ultimoCaracter = textoAtual.charAt(textoAtual.length - 1);
        const isButtonADigit = isDigit.test(textoBotao);
        const hasOperator = () => {
          if (textoAtual.includes('+')) return true;
          if (textoAtual.includes('-')) return true;
          if (textoAtual.includes('/')) return true;
          if (textoAtual.includes('*')) return true;

          return false
        }

        if (isDigit.test(ultimoCaracter) || (isFirstInput && isButtonADigit)) {
          if (isButtonADigit) {
            telaDaCalculadora.innerText = ''.concat(textoAtual, botao.innerText);
          } else {
            if (hasOperator() && !isButtonADigit) {
              calcNumbers();

              const newText = telaDaCalculadora.innerText;
              
              telaDaCalculadora.innerText = ''.concat(newText, ' ', botao.innerText);
            } else {
              telaDaCalculadora.innerText = ''.concat(textoAtual, ' ', botao.innerText);
            }
          }
        } else {
          if (isFirstInput) { // um jeito melhor é !textoAtual.length pq !0 é truthy
            telaDaCalculadora.innerText = '0';

            algumBotaoApertado = false;
          } else {
            if (hasOperator() && !isButtonADigit) {
              calcNumbers();

              const newText = telaDaCalculadora.innerText;
              
              telaDaCalculadora.innerText = ''.concat(newText, ' ', botao.innerText);
            } else {
              telaDaCalculadora.innerText = ''.concat(textoAtual, ' ', botao.innerText);
            }
          }
        }
      });
    });
    
    botaoLimpar.addEventListener('click', () => {
      limpaCalculadora()
    })

    limparUltimo.addEventListener('click', () => {
      if (!algumBotaoApertado) return

      const calculatorText = telaDaCalculadora.innerText;

      if (calculatorText.length === 1) {
        limpaCalculadora()
      } else {
        telaDaCalculadora.innerText = ''.concat(calculatorText.replace(ultimoElemento, ''));
      }
    });

    botaoResultado.addEventListener('click', () => {
      calcNumbers();
    });
  }
)() // Imediatly Invoked Function Expression