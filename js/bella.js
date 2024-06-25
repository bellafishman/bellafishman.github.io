// bella.js


// "Hello" text animation for index.html
document.addEventListener('DOMContentLoaded', function() {
    const text = "Hello world";
    const speed = 300; // Adjust typing speed here
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            document.getElementById("hello-text").innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }
    typeWriter();
});

// Skills animation for about.html
document.addEventListener('DOMContentLoaded', function() {
    let skillsContent = document.querySelector('.skills-content');
    if (skillsContent) {
        new Waypoint({
            element: skillsContent,
            offset: '80%',
            handler: function(direction) {
                let progressBars = skillsContent.querySelectorAll('.progress .progress-bar');
                progressBars.forEach((progressBar) => {
                    progressBar.style.width = progressBar.getAttribute('aria-valuenow') + '%';
                });
            }
        });
    } else {
        console.error('Skills content element (.skills-content) not found.');
    }
});
