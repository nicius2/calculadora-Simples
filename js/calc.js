const display = document.getElementById('display');
const botoes = document.querySelectorAll('.btn');

let expressao = '';

botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        const valor = botao.textContent;

        if (valor === 'C') {
            expressao = '';
            display.textContent = '0';
        } else if (valor === 'Del') {
            expressao = expressao.slice(0, -1);
            display.textContent = expressao || '0'; // Se apagar tudo, mostra "0"
        } else if (valor === '=') {
            try {
                const resultado = eval(expressao);
                display.textContent = resultado;
                expressao = resultado.toString();
            } catch {
                display.textContent = 'Erro';
                expressao = '';
            }
        } else {
            expressao += valor;
            display.textContent = expressao;
        }
    });
});
