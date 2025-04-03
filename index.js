const express = require("express");
const fs = require("fs");
const cors = require("cors");
const app = express();
const PORT = 5000;


app.use(cors());


app.use(express.json());


const getData = () => {
    try {
        const data = fs.readFileSync("data.json", "utf8");
        return JSON.parse(data);
    } catch (error) {
        console.error("Error reading file:", error);
        return [];
    }
};
const getAuthors = () => {
    try {
        const data = fs.readFileSync("authors.json", "utf8");
        return JSON.parse(data);
    } catch (error) {
        console.error("Error reading file:", error);
        return [];
    }
};


const getCtaInfo = () => {
    try {
        const data = fs.readFileSync("ctaInfo.json", "utf8");
        return JSON.parse(data);
    } catch (error) {
        console.error("Error reading file:", error);
        return [];
    }
};

app.get("/api/data", (req, res) => {
    const data = getData();
    res.json(data);
});

app.get("/api/authors",(req,res) => {
    const authors = getAuthors();
    res.json(authors)
});

app.get("/api/ctaInfo",(req,res) => {
    const cta = getCtaInfo();
    res.json(cta)
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
