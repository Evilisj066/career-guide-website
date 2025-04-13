console.log("Career Compass script loaded!");

document.addEventListener("DOMContentLoaded", function () {
  const quizForm = document.getElementById("careerQuiz");

  if (quizForm) {
    quizForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const q1 = document.querySelector('input[name="q1"]:checked');
      const q2 = document.querySelector('input[name="q2"]:checked');
      const q3 = document.querySelector('input[name="q3"]:checked');

      let result = "";

      if (!q1 || !q2 || !q3) {
        result = "❗ Please answer all the questions.";
      } else if (q1.value === "tech" && q3.value === "technical") {
        result = "💻 You might enjoy being a Software Developer, Data Analyst, or IT Specialist!";
      } else if (q2.value === "health") {
        result = "🏥 You could be a Nurse, Medical Technologist, or Therapist!";
      } else if (q3.value === "creative") {
        result = "🎨 You may love careers like Graphic Design, Advertising, or Multimedia Arts!";
      } else {
        result = "📚 Consider careers in Business, Education, or Management.";
      }

      document.getElementById("result").textContent = result;
    });
  }
});
