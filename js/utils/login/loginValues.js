import { createMessage } from "../../components/message/message.js";

const username = document.querySelector("#username");
const password = document.querySelector("#password");
import { login } from "./loginApi.js";
export function sendForm(event) {
  event.preventDefault();

  const usernameValue = username.value.trim();
  const passwordValue = password.value.trim();

  if (usernameValue.length === 0 || passwordValue.length === 0) {
    createMessage(".loginError", "error", "please input password and username");
  }

  login(usernameValue, passwordValue);
}
