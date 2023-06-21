const express = require('express')

const app = express();
app.use(express.json());

const formRoute = require('../routes/formRoutes')
const assessmentRoutes = require('../routes/assessmentRoutes')

app.get("/", (req, res) => {
    res.send({"msg":"Hello from firstClass"});
});

app.use('/form', formRoute)
app.use('/assessment', assessmentRoutes)

app.listen(8001, () => {
    console.log(`firstClass is running on port 8001`)
})