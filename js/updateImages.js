export function updateImageBasedOnTheme() {
    const imageHeader = document.getElementById('header-img');
    const imageQuote = document.getElementById('quote-image');
    const rightElement = document.getElementById('right-img');
    const leftElement = document.getElementById('left-img');
    const footerImageElement = document.getElementById('footer-img');
    const logoTopElement = document.getElementById('logo-top');
    const logobottomElement = document.getElementById('logo-bottom');
    const arrowElement = document.getElementById('arrow');
    const scrollElement = document.getElementById('top-scroll');
    
    // Überprüfen des Farbschemas
    const darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Bildquelle anpassen
    if (darkMode) {
        imageHeader.src = 'pics/header-dark.svg'; //Dunkelmodus
        imageQuote.src = 'pics/quote-dark.svg';
        leftElement.src = 'pics/icons/left-dark.svg';
        rightElement.src = 'pics/icons/right-dark.svg';
        footerImageElement.src = "pics/footer-dark.svg";
        logoTopElement.src = "pics/logos/logo-top-dark.svg";
        logobottomElement.src = "pics/logos/logo-bottom-dark.svg";
        arrowElement.src = 'pics/icons/arrow_down_dark.png';
        scrollElement.src = "pics/icons/seitenanfang-dark.svg"
        
    } else {
        imageHeader.src = 'pics/header-light.svg'; //  Hellmodus
        imageQuote.src = 'pics/quote.svg';
        leftElement.src = 'pics/icons/left.svg';
        rightElement.src = 'pics/icons/right.svg';
        footerImageElement.src = "pics/footer.svg";
        logoTopElement.src = "pics/logos/logo_top.svg";
        logobottomElement.src = "pics/logos/logo_bottom.svg";
        arrowElement.src = 'pics/icons/arrow_down.png';
        scrollElement.src = "pics/icons/seitenanfang.svg"

    }
}

