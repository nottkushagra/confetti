    const button = document.getElementById("btn");
    button.addEventListener("click", function() {
        confetti({
            particleCount: 100,
            spread: 100,
            origin: { y: 0.9 }
        });
    });