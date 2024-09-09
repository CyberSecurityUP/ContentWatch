// Função para verificar a aba atual e executar o script de verificação
function checkCurrentTab() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var currentTab = tabs[0];
        if (currentTab) {
            chrome.scripting.executeScript({
                target: {tabId: currentTab.id},
                func: scanPageContent
            });
        }
    });
}

// Adiciona um listener para o clique do botão
document.getElementById('checkPage').addEventListener('click', checkCurrentTab);

// Executa a verificação automaticamente quando a extensão é aberta
document.addEventListener('DOMContentLoaded', checkCurrentTab);

// Função que será injetada e executada nas abas
function scanPageContent() {
    const bodyText = document.body.innerText;
    const offensiveWords = ['example1', 'example2']; // Sua lista de palavras
    const found = offensiveWords.some(word => bodyText.includes(word));
    if (found) {
        alert('Warning: This page may contain content that is inappropriate for minors.');
    }
}
