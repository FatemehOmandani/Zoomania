export function search(){
    let searchInput = document.getElementById("searchInput");
    let content = document.getElementById("content");

    searchInput.addEventListener("input", function () {
        let searchQuery = searchInput.value.trim();
        console.log("Suchanfrage:", searchQuery); 

        // Falls das Suchfeld leer ist, entferne Markierungen
        if (searchQuery === "") {
            removeHighlights(content);
            return;
        }

        // Vorherige Markierungen entfernen
        removeHighlights(content);

        // Durchsuche den Text und markiere Treffer
        let regex = new RegExp(searchQuery, "gi");
        content.innerHTML = content.innerHTML.replace(regex, (match) => `<mark>${match}</mark>`);
    });
}

export function removeHighlights(element) {
    element.innerHTML = element.innerHTML.replace(/<\/?mark>/g, "");
}