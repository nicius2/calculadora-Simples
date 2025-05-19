const buttonToggle = document.getElementById("button-toggle") // pegando o id do button

// função para alterar o tema
export function toggleTheme() {
    const body = document.body; // get body
    const currentTheme = body.getAttribute('data-tema'); // get atribute

    if(currentTheme == 'dark' || !currentTheme) {
        body.setAttribute('data-tema', 'light');
        buttonToggle.textContent = '🌑 Modo Escuro';
    } else {
        body.setAttribute('data-tema', 'dark');
        buttonToggle.textContent = '☀️ Modo Claro';
    }
}

buttonToggle.addEventListener('click', toggleTheme);

// Define o modo inicial
document.body.setAttribute('data-tema', 'dark');
buttonToggle.textContent = '☀️ Modo Claro';