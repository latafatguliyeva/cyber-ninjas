
    
    function sendEmail() {
        window.location.href = "mailto:lasgarov12286@ada.edu.az?subject=Subject&body=Body";
    }

    
    document.getElementById('sendmail').addEventListener('click', sendEmail);

    
    function fadeInText() {
        const textElement = document.getElementById('animatedText');
        let opacity = 0;

        const interval = setInterval(function() {
            if (opacity < 1) {
                opacity += 0.1;
                textElement.style.opacity = opacity;
            } else {
                clearInterval(interval);
            }
        }, 200);
    }

    window.addEventListener('DOMContentLoaded', (event) => {
        fadeInText();
    });