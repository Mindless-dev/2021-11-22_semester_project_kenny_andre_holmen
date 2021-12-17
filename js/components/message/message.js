export function createMessage(messageTarget, typeOfMessage, message) {
  const htmlTargert = document.querySelector(messageTarget);
  htmlTargert.innerHTML = `<p class=${typeOfMessage}>${message}</p>`;
}
