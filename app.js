const likeButton = document.getElementById("likeButton");
        const counter = document.getElementById("likeCounter");
        const sound = document.getElementById("likeSound");

        function setDark() {
            document.body.style.backgroundColor = "#121212";
            document.body.style.color = "white";
        }
        function setLight() {
            document.body.style.backgroundColor = "#e7ebec";
            document.body.style.color = "black";
        }

        let likeCount = parseInt(localStorage.getItem("likeCount")) || 0;
        let hasLiked = localStorage.getItem("hasLiked") === "true";
        counter.textContent = likeCount;
        if (hasLiked) {
        likeButton.classList.add("liked");
        }
        likeButton.addEventListener("click", () => {
        if (hasLiked) {
            // Dislike
            likeCount = Math.max(0, likeCount - 1);
            hasLiked = false;
            likeButton.classList.remove("liked");
        } else {
            // Like (with sound)
            likeCount++;
            hasLiked = true;
            likeButton.classList.add("liked");
            sound.currentTime = 0;
            sound.play().catch(e => {
            console.log("Autoplay blocked or failed:", e);
            });
        }
        // Update counter and storage
            counter.textContent = likeCount;
            localStorage.setItem("likeCount", likeCount);
            localStorage.setItem("hasLiked", hasLiked);
        });
