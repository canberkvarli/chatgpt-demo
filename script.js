function sendMessage() {
  const userInput = document.getElementById("user-input").value;
  const chatContainer = document.getElementById("chat-container");
  const newMessage = document.createElement("div");

  newMessage.classList.add("message");
  newMessage.textContent = userInput;
  chatContainer.appendChild(newMessage);
  document.getElementById("user-input").value = "";
}
