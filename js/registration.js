export function registration() {
    const inputElement = document.getElementById('email_input');
    const inputValue = inputElement.value;
    const responseElement = document.getElementById('respond');

    // Leeres Eingabefeld überprüfen
    if (inputValue.trim() === "") {
        responseElement.textContent = "Bitte gib eine E-Mail-Adresse ein.";
        responseElement.className = "error";
        responseElement.style.display = 'block'; // Stelle sicher, dass die Nachricht angezeigt wird
        return;
    }

    // Überprüfen, ob das Format der E-Mail-Adresse korrekt ist
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Einfaches E-Mail-Regex
    if (!emailPattern.test(inputValue)) {
        responseElement.textContent = "Bitte gib eine gültige E-Mail-Adresse ein.";
        responseElement.className = "error";
        responseElement.style.display = 'block'; // Stelle sicher, dass die Nachricht angezeigt wird
        return;
    }

    // Wenn die Eingabe gültig ist
    responseElement.textContent = "Anmeldung erfolgreich! Vielen Dank.";
    responseElement.className = "success";
    responseElement.style.display = 'block'; // Nachricht anzeigen

    // Eingabefeld leeren
    inputElement.value = '';

    // // Timeout, um die Nachricht nach 3 Sekunden auszublenden
    //  setTimeout(function() {
    //     responseElement.style.display = 'none'; // Verstecke die Nachricht
    // }, 3000); // 3000 Millisekunden = 3 Sekunden
}