const port = 3010;
const { app } = require("./index.js");

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});