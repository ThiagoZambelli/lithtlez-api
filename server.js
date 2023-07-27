import "dotenv/config.js";
import app from "./src/app.js";

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Estamos escutando na porta: ${port}`);
});