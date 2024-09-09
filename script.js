function addMessage() {
    const messageInput = document.getElementById('messageInput');
    const messageText = messageInput.value.trim();
    if (messageText) {
        const messagesDiv = document.getElementById('messages');
        const newMessage = document.createElement('p');
        newMessage.textContent = messageText;
        messagesDiv.appendChild(newMessage);
        messageInput.value = ''; // 清空输入框
    } else {
        alert('请输入您的留言！');
    }
}