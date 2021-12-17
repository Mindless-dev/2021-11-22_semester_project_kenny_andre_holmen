import { baseUrl } from "../../settings/api.js";
import { addToStorage } from "../localstorage.js";
import { createMessage } from "../../components/message/message.js";

export async function login(username, password) {
  const url = baseUrl + "auth/local";
  const data = JSON.stringify({ identifier: username, password: password });

  const options = {
    method: "POST",
    body: data,
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await fetch(url, options);
    const json = await response.json();
    if (json.user) {
      addToStorage("token", json.jwt);
      addToStorage("user", json.user);

      location.href = "/admin.html";
    }

    if (json.error) {
      createMessage(".loginError", "error", "wrong password/username");
    }
  } catch (error) {
    createMessage(".loginError", "error", "something went wrong");
  }
}
