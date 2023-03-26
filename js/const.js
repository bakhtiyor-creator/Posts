const ENDPIONT = "https://blog-backend.up.railway.app/api/v1/";
const TOKEN = "PORTFOLIO_TOKEN";

const request = axios.create({
  baseURL: ENDPIONT,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});
