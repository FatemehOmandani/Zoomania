export const feedbacks = [
    {
        text: "„Die Kombination aus Lernen und Spaß ist einfach großartig. Unsere Tochter wollte gar nicht mehr nach Hause! Die Organisation war super, und das Personal war sehr freundlich.“",
        img: "pics/mainPage/persona-Anna.jpg",
        name: "Anna M.",
        date: "12.02.2025",
        stars: "★★★★★"
    },
    {
        text: "„Tolles Museum mit vielen interaktiven Elementen! Meine Kinder hatten eine fantastische Zeit und haben so viel gelernt.“",
        img: "pics/mainPage/max.jpg",
        name: "Max K.",
        date: "11.01.2022",
        stars: "★★★★★"
    },
    {
        text: "„Ich war begeistert von der Vielfalt an Aktivitäten. Ein wirklich gut durchdachtes Konzept für die ganze Familie!“",
        img: "pics/mainPage/lisa.jpg",
        name: "Lisa S.",
        date: "10.08.2016",
        stars: "★★★★☆"
    },
    {
        text: "„Ein wunderbarer Ort für Kinder! Besonders das virtuelle Museum war ein Highlight.“",
        img: "pics/mainPage/tom.jpg",
        name: "Tom B.",
        date: "09.03.2020",
        stars: "★★★★★"
    }
];

let currentIndex = 0;

export function updateFeedback() {
    document.getElementById("feedback-text").textContent = feedbacks[currentIndex].text;
    document.getElementById("feedback-img").src = feedbacks[currentIndex].img;
    document.getElementById("feedback-name").textContent = feedbacks[currentIndex].name;
    document.getElementById("feedback-date").textContent = feedbacks[currentIndex].date;
    document.getElementById("feedback-stars").textContent = feedbacks[currentIndex].stars;
}

export function nextFeedback() {
    currentIndex = (currentIndex + 1) % feedbacks.length;
    updateFeedback();
}

export function prevFeedback() {
    currentIndex = (currentIndex - 1 + feedbacks.length) % feedbacks.length;
    updateFeedback();
}



