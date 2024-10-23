document.addEventListener("DOMContentLoaded", function() {
    const questions = document.querySelectorAll(".faq-question");

    questions.forEach(question => {
        question.addEventListener("click", () => {
            const answer = question.nextElementSibling;
            const isVisible = answer.style.display === "block";

            // Ocultar todas las respuestas
            document.querySelectorAll(".faq-answer").forEach(ans => {
                ans.style.display = "none";
            });

            // Alternar la respuesta de la pregunta seleccionada
            answer.style.display = isVisible ? "none" : "block";
        });
    });
});