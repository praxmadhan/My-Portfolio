document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the default way

    // Get form values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validate username and password
    if (validateCredentials(username, password)) {
        // Redirect to success page if valid
        window.location.href = 'Index.html';
    } else {
        alert('Invalid username or password.');
    }
});

function validateCredentials(username, password) {
    // Define valid username and password pairs
    const validCredentials = [
        { username: 'Prasanna', password: 'darzz' },
        { username: 'Deepu', password: 'vetikattu' },
        { username: 'Saro', password: 'vicky' }
        // Add more username-password pairs as needed
    ];

    // Check if the provided username and password match any of the valid credentials
    return validCredentials.some(cred => cred.username === username && cred.password === password);
}
