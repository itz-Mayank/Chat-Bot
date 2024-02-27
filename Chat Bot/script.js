document.addEventListener('DOMContentLoaded', function() {
    const chatWindow = document.getElementById('chat-window');
    const messageInput = document.getElementById('message-input');
    const sendButton = document.getElementById('send-button');

    // Function to create and append a new message to the chat window
    function appendMessage(message, sender) {
        const messageElement = document.createElement('div');
        messageElement.className = 'message';
        messageElement.textContent = sender + ': ' + message;
        chatWindow.appendChild(messageElement);
        chatWindow.scrollTop = chatWindow.scrollHeight; // Auto-scroll to bottom
    }

    // Function to handle sending messages
    function sendMessage() {
        const message = messageInput.value;
        if (message.trim() !== '') {
            appendMessage(message, 'You');
            messageInput.value = ''; // Clear the input after sending
        }
    }

    // Event listeners
    sendButton.addEventListener('click', sendMessage);

    messageInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            sendMessage();
        }
    });
});