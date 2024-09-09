// Função para verificar o conteúdo da página
function checkContent() {
    const bodyText = document.body.innerText;
    const offensiveWords = ['example1', 'example2']; // Sua lista de palavras
    const found = offensiveWords.some(word => bodyText.includes(word));

    // Verifique se o usuário optou por não mostrar mais alertas nesta aba
    const showAlert = localStorage.getItem('showAlert') !== 'false';

    if (found && showAlert) {
        // Cria um diálogo de confirmação com uma caixa de seleção
        const userChoice = confirm("Warning: This page may contain content that is inappropriate for minors. Click OK to continue seeing this warning, or Cancel to not see it again.");
        if (!userChoice) {
            // Se o usuário clicar em 'Cancelar', não mostre mais o alerta
            localStorage.setItem('showAlert', 'false');
        }
    }
}

// Verifica o conteúdo ao carregar e depois periodicamente a cada 30 segundos
document.addEventListener('DOMContentLoaded', checkContent);
setInterval(checkContent, 30000);
