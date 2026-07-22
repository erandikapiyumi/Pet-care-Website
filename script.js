// HTML එකේ තියෙන බටන් එක සහ අනෙකුත් කොටස් හඳුනා ගැනීම
const wishButton = document.getElementById('wish-btn');
const messageParagraph = document.getElementById('message');
const petImage = document.getElementById('pet-image');

// බටන් එක ක්ලික් කරපු වෙලාවට වෙන දේ
wishButton.addEventListener('click', function() {
    // ලස්සන මැසේජ් එකක් පෙන්වීම
    messageParagraph.textContent = "ඔබේ සුරතලාට අපගේ උණුසුම් ආදරය! 🐶❤️";
    
    // බල්ලාගේ පින්තූරය වෙනස් කිරීම (පූසෙකුගේ පින්තූරයකට)
    petImage.src = "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=500";
});