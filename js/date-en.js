export function updateDateEn() {
    const todayElement = document.getElementById('tagesprogramm-text');
    const dateElement = document.getElementById("date");
    const now = new Date();

    // Date format for English
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = now.toLocaleDateString('en-US', options);
    
    // Extract weekday and date
    const [weekday, ...restDate] = formattedDate.split(", ");
    const date = restDate.join(", ");

    todayElement.innerHTML = `Today, on ${weekday}, ${date}, exciting activities await you 
    at Zoomania. Whether interactive experiences, creative workshops, or thrilling 
    adventures - something is available for every age.`;

    dateElement.innerHTML = `${weekday}, ${date}`;
}

document.addEventListener('DOMContentLoaded', () => {
    updateDateEn(); // Call the function after the DOM has fully loaded
});

