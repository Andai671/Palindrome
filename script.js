const textInput = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
const result = document.getElementById('result');

checkBtn.addEventListener('click', () => {
    const inputValue = textInput.value.trim();

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