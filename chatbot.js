function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    
    if (userInput.trim() !== "") {
        const chatArea = document.getElementById('chat-area');
        
        // Add user's message
        const userMessage = document.createElement('div');
        userMessage.className = 'user-message';
        userMessage.textContent = userInput;
        chatArea.appendChild(userMessage);
        
        // Scroll to the bottom of chat
        chatArea.scrollTop = chatArea.scrollHeight;

        // Clear input
        document.getElementById('user-input').value = '';
        
        // Simulate bot response after a delay
        setTimeout(() => {
            const botMessage = document.createElement('div');
            botMessage.className = 'bot-message';
            botMessage.textContent = generateBotResponse(userInput);
            chatArea.appendChild(botMessage);
            
            // Scroll to the bottom of chat
            chatArea.scrollTop = chatArea.scrollHeight;
        }, 1000);
    }
}
function generateBotResponse(userInput) {
    const lowerInput = userInput.toLowerCase();

    // Check for various keywords and respond accordingly
    if (lowerInput.includes("hello") || lowerInput.includes("hi")) {
        return "Hello! How can I help you today?";
    } else if (lowerInput.includes("help")) {
        return "Sure! I can help you with various tasks. What do you need assistance with?";
    } else if (lowerInput.includes("your name")) {
        return "I am a simple chatbot created to assist you!";
    } else if (lowerInput.includes("time")) {
        return "I'm unable to provide the current time, but you can check your device for the time.";
    } else if (lowerInput.includes("thank you") || lowerInput.includes("thanks")) {
        return "You're welcome! Feel free to ask me anything else.";
    } else if (lowerInput.includes("weather")) {
        return "I cannot check the weather, but you can visit a weather website like weather.com.";
    } else if (lowerInput.includes("bye")) {
        return "Goodbye! Have a great day!";
    } else if (lowerInput.includes("how to use search option")) {
        return "Click in search bar and type the news content you want then click on search logo or press Enter";
    } else {
        // Default response if input is not recognized
        return "Sorry, I don't understand that. Can you please ask something else?";
    }
}

