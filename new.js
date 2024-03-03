    function sendPromptToChatGPT() {
        const apiKey = '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'; // Replace with your API key
        const apiUrl = 'https://api.openai.com/v1/chat/completions';

        // const prompt = promptInput.value.trim();
        const message = 'I need a band name for 5 twin sisters who play jazz'

        // Check if prompt is empty
        if (!message) {
            alert('Please enter a prompt.');
            return;
        }

        // Send POST request to ChatGPT API
        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + apiKey,
            },
            body: JSON.stringify(
                {
                messages: [
                {
                    role: "system",
                    content: "You are a helpful assistant designed to output JSON. Every request please generate a unique band name based on the description I send to you.",
                },
                { role: "user", content: `${message}` },
                ],
                 model: "gpt-3.5-turbo-0125",
                response_format: { type: "json_object" },
            }
            )
        })
        .then(response => response.json())
        .then(data => {
            // Display ChatGPT response
            // chatContainer.innerHTML = '<strong>You:</strong> ' + prompt + '<br><strong>ChatGPT:</strong> ' + data.choices[0].text;
            console.log(data.choices[0].message.content)
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }

    console.log(sendPromptToChatGPT())

