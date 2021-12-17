import { createNav } from "./components/nav/menu.js";
import { baseUrl } from "./settings/api.js";
import { apiCallProductCreation } from "./utils/apicall.js";

createNav();
apiCallProductCreation(baseUrl, "products", ".allProducts");
