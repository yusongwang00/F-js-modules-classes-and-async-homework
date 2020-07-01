import getURL from "./utils";
import { ADDRESS, PORT, PATH, REGION } from "./constant";

const url = getURL(ADDRESS, PORT, PATH);
export { url, REGION as region };
