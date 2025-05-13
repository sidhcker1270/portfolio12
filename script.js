document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.querySelector(".typertext");

    const texts = ["Frontend Developer", "Backend Developer", "Full Stack Developer", "Web Designer"];
    let index = 0;
    let textIndex = 0;

    function typeEffect() {
        if (index < texts[textIndex].length) {
            textElement.textContent += texts[textIndex].charAt(index);
            index++;
            setTimeout(typeEffect, 100); // Adjust typing speed here
        } else {
            setTimeout(() => {
                textElement.textContent = ""; // Clear the text
                index = 0; // Reset the index
                textIndex = (textIndex + 1) % texts.length; // Move to the next text
                typeEffect();
            }, 2000); // Delay before switching to the next text
        }
    }


    function loopEffect() {
        typeEffect();
        setTimeout(() => {
            textElement.textContent = ""; // Clear the text
            index = 0; // Reset the index
            loopEffect(); // Call the function again
        }, text.length * 100 + 1000); // Wait for typing to finish and add a delay
    }
    loopEffect();

});

document.addEventListener("DOMContentLoaded", () => {
    const coldElements = document.querySelectorAll('.cold');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    coldElements.forEach(element => {
        observer.observe(element);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const coldElements = document.querySelectorAll('.recold');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reshow');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    coldElements.forEach(element => {
        observer.observe(element);
    });
});



       document.addEventListener("DOMContentLoaded", () => {
            const coldElements = document.querySelectorAll('.progres');

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('mydl');
                        observer.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.1
            });

            coldElements.forEach(element => {
                observer.observe(element);
            });
        });

        document.addEventListener("DOMContentLoaded", () => {
            const coldElements = document.querySelectorAll('.boldprogress');

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('mydl');
                        observer.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.1
            });

            coldElements.forEach(element => {
                observer.observe(element);
            });
        });

