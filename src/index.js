function showMessage(event) {
           var answer = [
               "Yes!",
               "No!",
               "Not today",
               "Count on it",
               "Maybe",
               "That sounds good!",
               "Ask again",
               "No doubt",
               "Absolutely",
               "Go for it",
               "Wait for it",
               "Not now",
               "Cannot tell now",
               "Very likely",
               "It is ok",
               "Very doubtful",
               "You may rely on it",
               "Try again",
               "Outlook not so good"
           ]

           
            let result = document.querySelector("#result");
            let randomAnswer = answer[Math.floor(Math.random() * 18)];
            return result.innerHTML = randomAnswer;
        }

        let sendButton = document.querySelector("button");
        sendButton.addEventListener("click", showMessage);