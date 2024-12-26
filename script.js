// Chatbot functionality
document.getElementById("chatbot-send").addEventListener("click", function() {
    const inputField = document.getElementById("chatbot-input");
    const userMessage = inputField.value.trim();
    
    if (userMessage) {
        displayMessage(userMessage, "user");
        getBotResponse(userMessage);
        inputField.value = ""; // Clear the input field
    }
});

function displayMessage(message, sender) {
    const messageElement = document.createElement("div");
    messageElement.className = `chatbot-message ${sender}`;
    messageElement.textContent = message;
    document.getElementById("chatbot-body").appendChild(messageElement);
    document.getElementById("chatbot-body").scrollTop = document.getElementById("chatbot-body").scrollHeight;
}

function getBotResponse(userMessage) {
    let botResponse = "Sorry, I didn't understand that.";

    // Predefined responses
    if (userMessage.toLowerCase().includes("hello")) {
        botResponse = "Hi there! How can I assist you today?";
    } else if (userMessage.toLowerCase().includes("portfolio")) {
        botResponse = "Sure! You can check out my portfolio in the Portfolio section of this website.";
    } else if (userMessage.toLowerCase().includes("contact")) {
        botResponse = "You can reach me through the Contact section or email me directly at arshhh28@gmail.com.";
    } else if (userMessage.toLowerCase().includes("skills")) {
        botResponse = "I specialize in data science, machine learning, and AI. I also have strong skills in Python, TensorFlow, and Power BI.";
    } else if (userMessage.toLowerCase().includes("projects")) {
        botResponse = "I’ve worked on several projects, including a Movie Recommender System, Sales Dashboard, and an Image Classification model. You can find more details in the Portfolio section.";
    } else if (userMessage.toLowerCase().includes("study")) {
        botResponse = "I am currently pursuing a B.Tech in AI & Data Science from Guru Tegh Bahadur Institute Of Technology, New Delhi.";
    } else if (userMessage.toLowerCase().includes("certifications")) {
        botResponse = "Yes, I have certifications in Data Analysis and Generative AI from Microsoft and LinkedIn. You can view them in the Certificates section.";
    } else if (userMessage.toLowerCase().includes("what do you do")) {
        botResponse = "I am a data scientist passionate about AI, machine learning, and building data-driven solutions.";
    } else if (userMessage.toLowerCase().includes("navigate")) {
        botResponse = "You can use the menu at the top to navigate to different sections such as About, Portfolio, Certificates, and Contact.";
    } else if (userMessage.toLowerCase().includes("thank you")) {
        botResponse = "You're welcome! Feel free to ask anything else.";
    }

    displayMessage(botResponse, "bot");
}
