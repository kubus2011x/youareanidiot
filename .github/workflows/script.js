window.onload = function() {
    // Create a button to start the audio and windows
    const playAudioButton = document.createElement('button');
    playAudioButton.innerText = "Click this to be an idiot!!";
    playAudioButton.style.position = 'fixed';
    playAudioButton.style.top = '300px';
    playAudioButton.style.left = '750px';
    playAudioButton.style.zIndex = '10000';
    document.body.appendChild(playAudioButton);

    // Get the audio element
    const idiotSong = document.getElementById('idiotSong');

    // Function to play audio and hide button
    function playAudio() {
        idiotSong.play().then(() => {
            console.log("Audio started successfully.");
        }).catch((error) => {
            console.log("Autoplay failed: ", error);
        });
    }

    // When the button is clicked, start the audio and bouncing windows
    playAudioButton.addEventListener('click', function() {
        playAudio(); // Start the audio
        playAudioButton.style.display = 'none'; // Hide the button after it's clicked

        // Create multiple bouncing windows after the audio starts
        for (let i = 0; i < 10; i++) {
            createBouncingWindow();
        }
    });

    // Function to create bouncing windows
    function createBouncingWindow() {
        const windowDiv = document.createElement('div');
        windowDiv.className = 'bouncing-window';

        // Add some styling for the window
        windowDiv.style.position = 'fixed';
        windowDiv.style.width = '300px';
        windowDiv.style.height = '200px';
        windowDiv.style.backgroundColor = 'red';
        windowDiv.style.border = '2px solid black';
        windowDiv.style.zIndex = '999'; // Ensure it's on top of everything
        windowDiv.style.textAlign = 'center';
        windowDiv.style.lineHeight = '200px';
        windowDiv.style.color = 'white';
        windowDiv.innerHTML = "You Are An Idiot!";

        document.body.appendChild(windowDiv);

        // Random initial position
        const x = Math.random() * (window.innerWidth - 300); // Adjust based on the window size
        const y = Math.random() * (window.innerHeight - 200); // Adjust based on the window size
        windowDiv.style.left = `${x}px`;
        windowDiv.style.top = `${y}px`;

        // Set initial random direction for bouncing
        let directionX = Math.random() < 0.5 ? 1 : -1;
        let directionY = Math.random() < 0.5 ? 1 : -1;

        // Bouncing effect
        setInterval(() => {
            const rect = windowDiv.getBoundingClientRect();

            if (rect.left + rect.width >= window.innerWidth || rect.left <= 0) {
                directionX *= -1; // Reverse direction on X-axis
            }
            if (rect.top + rect.height >= window.innerHeight || rect.top <= 0) {
                directionY *= -1; // Reverse direction on Y-axis
            }

            // Move the window
            windowDiv.style.left = `${rect.left + directionX * 5}px`;
            windowDiv.style.top = `${rect.top + directionY * 5}px`;
        }, 20);
    }
};
