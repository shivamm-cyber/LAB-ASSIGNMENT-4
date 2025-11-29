// Web Dev Lab 4 - Prompt Quizzer
// Shivam | BCA Cybersecurity
// Fully console-based quiz using arrays, loops, functions, conditionals

const quizQuestions = [
  {
    question: "What is the capital of India?",
    answer: "new delhi"
  },
  {
    question: "Which language is used for styling web pages?",
    answer: "css"
  },
  {
    question: "What does HTML stand for?",
    answer: "hyper text markup language"
  },
  {
    question: "How many bits make a byte?",
    answer: "8"
  },
  {
    question: "Who is known as the father of computers?",
    answer: "charles babbage"
  },
  {
    question: "What is the full form of URL?",
    answer: "uniform resource locator"
  },
  {
    question: "In which year was JavaScript created?",
    answer: "1995"
  }
];

// Main function to run the quiz
function runQuiz() {
  let score = 0;

  alert("🎉 Welcome to Prompt Quizzer!\n\nTotal Questions: 7\nAnswers are case-insensitive.\nGet ready!\n\nClick OK to start...");

  // Loop through each question
  for (let i = 0; i < quizQuestions.length; i++) {
    // Prompt user for answer
    let userAnswer = prompt(`Question ${i + 1}/${quizQuestions.length}\n\n${quizQuestions[i].question}\n\nYour Answer:`);

    // If user cancels the quiz
    if (userAnswer === null) {
      alert("❌ Quiz cancelled by user.\nThanks for playing!");
      return; // Exit the function
    }

    // Normalize input: remove extra spaces and convert to lowercase
    let normalizedAnswer = userAnswer.trim().toLowerCase();
    let correctAnswer = quizQuestions[i].answer.toLowerCase();

    // Check if answer is correct
    if (normalizedAnswer === correctAnswer) {
      alert("✅ Correct Answer! Well done!");
      score++;
    } else {
      alert(`❌ Wrong Answer!\nCorrect Answer: ${quizQuestions[i].answer}`);
    }
  }

  // Final result
  let percentage = ((score / quizQuestions.length) * 100).toFixed(2);
  let resultMessage = `🎊 Quiz Completed!\n\nYour Score: ${score}/${quizQuestions.length} (${percentage}%)\n\n`;

  if (score === quizQuestions.length) {
    resultMessage += "🏆 Perfect Score! You're a JavaScript Pro!";
  } else if (score >= 5) {
    resultMessage += "🌟 Great Job! Keep it up!";
  } else if (score >= 3) {
    resultMessage += "👍 Good effort! Practice more.";
  } else {
    resultMessage += "💪 Don't give up! Try again soon.";
  }

  alert(resultMessage);
}

// Start the quiz automatically when script loads
runQuiz();
