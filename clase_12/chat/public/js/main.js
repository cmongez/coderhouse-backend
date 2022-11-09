const socket = io.connect();

function render(data) {
  const html = data
    .map((elem) => {
      return `<div><strong>${elem.author}</strong>:<em>${elem.text}</em></div>`;
    })
    .join(' ');
  document.getElementById('messages').innerHTML = html;
}

function addMessage(e) {
  const message = {
    author: document.getElementById('author').value,
    text: document.getElementById('text').value,
  };

  socket.emit('new-message', message);
  return false;
}

socket.on('messages', (data) => {
  console.log(data);
  render(data);
});
