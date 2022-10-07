const generateQuote = function() {
    const quotes = [
    {
        quote: "Life is what happens when you’re busy making other plans.",
        author: "John Lennon"
    },
    {
        quote: "You must be the change you wish to see in the world.",
        author: "Mahantma Gandhi"
    },
    {
        quote: "Get busy living or get busy dying.",
        author: "Stephen King "
    },
    {
        quote: "If you’re going through hell, keep going.",
        author: "Winston Churchill"
    },
    {
        quote: "Those who dare to fail miserably can achieve greatly.",
        author: "John F. Kennedy"
    },
    
    
];

    let arrayIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quotes").innerHTML = quotes[arrayIndex].quote;
    document.getElementById("author").innerHTML = quotes[arrayIndex].author;

}
window.onload = function() {
    //generateQuote();
    document.getElementById("generate").addEventListener('click', generateQuote);
}
