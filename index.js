document.addEventListener('DOMContentLoaded', function() {
    // Obter o botão e a div que contém os detalhes
    const toggleButton = document.getElementById('details-t');
    const detailsDiv = document.getElementById('details');

    // Definir a ação de clique no botão
    toggleButton.addEventListener('click', function() {
        // Verificar se os detalhes estão visíveis
        if (detailsDiv.style.display === "none" || detailsDiv.style.display === "") {
            detailsDiv.style.display = "block";
            toggleButton.textContent = "Ocultar Detalhes"; // Atualiza o texto do botão
        } else {
            detailsDiv.style.display = "none";
            toggleButton.textContent = "Mostrar Detalhes"; // Atualiza o texto do botão
        }
    });
});
