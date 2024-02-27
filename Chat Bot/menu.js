//For Hamburger or a menu.......
const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const menu_items = document.querySelectorAll('nav .mainMenu li a');

openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

// close menu when you click on a menu item 
menu_items.forEach(item => {
    item.addEventListener('click',function(){
        close();
    })
})

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close(){
    mainMenu.style.top = '-100%';
}



// For Messaging and response.......

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
        // chatWindow.scrollTop = chatWindow.scrollHeight; // Auto-scroll to bottom
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




// bot......
function sendMessage() {
  const userInput = document.getElementById("user-input").value;
  if (userInput.trim() !== "") {
    addMessage("user", userInput);
    respondToUser( userInput );
  }
  document.getElementById("user-input").value = "";
}

function addMessage(sender, message) {
  const chatHistory = document.getElementById("chat-history");
  const newMessage = document.createElement("div");
  newMessage.classList.add("message", sender + "-message");
  newMessage.textContent = message;
  chatHistory.appendChild(newMessage);
  chatHistory.scrollTop = chatHistory.scrollHeight; // Scroll to the bottom
}

function respondToUser(userInput) {
  // Simple bot response logic - you can customize this part
  const botResponse = getBotResponse(userInput);
  setTimeout(() => {
    addMessage("bot", botResponse);
  }, 500);
}

function getBotResponse(userInput) {
  // Simple bot response mapping - customize as needed
  const responses = {
    "hello": "CHATBOT: Hello there!How can i help you!!",
    "hello world": "CHATBOT: Welcome to the era of Web Developing!!",
    "who are you?": "CHATBOT: I am an Artificial Intelligence Robo which is very helpful to You!!",
    "who designed you": "CHATBOT: Sir Mayank Meghwal! Who is an Software Engineer!",
    "email id": "CHATBOT: mayankmeg27@gmail.com",
    "website name": "CHATBOT: www.CHATBOT.in",
    "how are you?": "CHATBOT: I'm just a bot, but I'm doing fine. How can I assist you?",
    "goodbye": "CHATBOT: Goodbye! Feel free to come back anytime.",
    "default": "CHATBOT: I'm sorry, I didn't understand that. Can you please rephrase your question?",
  };

  const lowerCaseInput = userInput.toLowerCase();
  return responses[lowerCaseInput] || responses["default"];
}
    // Event listeners
    sendButton.addEventListener('click', sendMessage);

    messageInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            sendMessage();
        }
    });