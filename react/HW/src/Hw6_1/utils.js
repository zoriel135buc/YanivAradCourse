import axios from "axios";

const MOVIES_URL = `https://api.tvmaze.com/shows`;

const Get10Movies = () => axios.get(MOVIES_URL);
export { Get10Movies };
