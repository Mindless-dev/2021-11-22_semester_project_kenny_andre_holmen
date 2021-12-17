import { createNav } from "./components/nav/menu.js";
import { baseUrl } from "./settings/api.js";
import { apiCallProductCreation } from "./utils/apicall.js";
import { getHeroImage } from "./utils/heroimage/heromimage.js";

createNav();
apiCallProductCreation(baseUrl, "products", ".featuredProductContainer");

getHeroImage();
