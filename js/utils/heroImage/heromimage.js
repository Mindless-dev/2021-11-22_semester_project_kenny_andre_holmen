import { createMessage } from "../../components/message/message.js";
import { baseUrl } from "../../settings/api.js";
export async function getHeroImage() {
  const target = document.querySelector(".heroImage");
  target.innerHTML = "";
  const url = baseUrl + "hero-images";

  try {
    const response = await fetch(url);
    const json = await response.json();

    target.style.backgroundImage = `url(${json[0].heroImage.url})`;
  } catch {
    createMessage(".heroImage", "error", "an error occouren please try refreshing the site");
  }
}
