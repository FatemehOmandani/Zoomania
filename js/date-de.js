export function updateDateDe() {
    const todayElement = document.getElementById('tagesprogramm-text');
    const dateElement = document.getElementById("date");
    const now = new Date();

    // Datum im deutschen Format
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = now.toLocaleDateString('de-DE', options);
    
    // Wochentag und Datum herausziehen
    const [weekday, ...restDate] = formattedDate.split(", ");
    const date = restDate.join(", ");

    todayElement.innerHTML = `Heute, am ${weekday}, ${date}, erwarten dich spannende
     Aktivitäten in Zoomania. Ob interaktive Erlebnisse, kreative Workshops oder aufregende
      Abenteuer - für jedes Alter ist etwas dabei.`;

   dateElement.innerHTML = `${weekday}, ${date}`;
}

document.addEventListener('DOMContentLoaded', () => {
    updateDateDe(); // Call the function after the DOM has fully loaded
});
