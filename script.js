const textInput = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
const result = document.getElementById('result');

// Function to check palindrome and update result
const checkPalindrome = () => {
    const inputValue = textInput.value.trim();

    // Check if input is empty
    if (!inputValue) {
        alert('Please input a value');
        result.textContent = '';
        return;
    }

    // Check if input is a palindrome
    const isPalindrome = (str) => {
        const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
        return cleanStr === cleanStr.split('').reverse().join('');
    };

    // Update result display
    result.style.display = 'block';
    result.textContent = `${inputValue} is ${isPalindrome(inputValue) ? '' : 'not '}a palindrome`;
};

// Click event listener for the button
checkBtn.addEventListener('click', checkPalindrome);

// Enter key event listener for the input
textInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        checkPalindrome();
    }
});

