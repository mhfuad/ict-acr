const express = require('express')

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send({"msg":"Hello from firstClass"});
});

app.listen(8001, () => {
    console.log(`firstClass is running on port 8001`)
})