const questions = [
  {
    statement: "2+2?",
    answer: "2+2 = 4"
  },
  {
    statement: "In which year did Christopher Columbus discover America?",
    answer: "1492"
  },
  {
    statement:
      "What occurs twice in a lifetime, but once in every year, twice in a week but never in a day?",
    answer: "The E letter"
  }
];

const div = document.getElementById("content");

questions.forEach((question, index) => {
  const container = document.createElement("p");
  
  const questionText = document.createElement("span");
  questionText.innerText = `Question ${index + 1}: `;
  questionText.style.fontWeight = "bold";

  const questionStatement = document.createElement("span");
  questionStatement.style.fontStyle = "italic";
  questionStatement.innerText += question.statement;

  container.appendChild(questionText);
  container.appendChild(questionStatement);

  const answerText = document.createElement("p");
  answerText.innerText = question.answer;
  answerText.style.display = "none";

  const buttonShowAnswer = document.createElement("button");
  buttonShowAnswer.innerText = "Show answer";
  buttonShowAnswer.addEventListener("click", () => {
    answerText.style.display = "block";
    buttonShowAnswer.style.display = "none";
  });

  div.appendChild(container);
  div.appendChild(answerText);
  div.appendChild(buttonShowAnswer);
});