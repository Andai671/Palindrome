const textInput = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
const result = document.getElementById('result');

checkBtn.addEventListener('click', () => {
    const inputValue = textInput.value.trim();

    // New keydown event listener for the Enter key on the input
textInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        const inputValue = textInput.value.trim();
        // Reuse the same logic as the click event
    }

    // Check if input is empty
    if (!inputValue) {
        alert('Please input a value');
        result.textContent = '';
        return;
    }

    const isPalindrome = (str) => {
        const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
        return cleanStr === cleanStr.split('').reverse().join('');
    };

    result.style.display = 'block';
    result.textContent = `${inputValue} is ${isPalindrome(inputValue) ? '' : 'not '}a palindrome`;

})
