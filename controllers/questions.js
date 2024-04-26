const fs = require("fs");

const descriptions = [
  "Description 1",
  "Description 2",
  "Description 3",
  "Description 4",
];

const answers = ["a", "b", "c", "d"];

const newArray = Array.from({ length: 60 }, () => ({
  description: descriptions[Math.floor(Math.random() * descriptions.length)],
  answer: answers[Math.floor(Math.random() * answers.length)],
  images: [],
  options: ["option1 ", "option2", "option 3" , "option 4" ],
}));

const jsonContent = JSON.stringify(newArray, null, 2);

// Write the JSON string to a file
fs.writeFile("questions.json", jsonContent, "utf8", (err) => {
  if (err) {
    console.error("Error writing JSON file:", err);
    return;
  }
  console.log("JSON file has been saved.");
});
