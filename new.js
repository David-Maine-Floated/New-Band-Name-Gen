    import dotenv from 'dotenv';
    dotenv.config();
    
    async function sendPromptToChatGPT() {
       
        const apiKey = process.env.OPENAI_API_KEY
        const apiUrl = 'https://api.openai.com/v1/chat/completions';

        // const prompt = promptInput.value.trim();
        const message = 'I need a band name for 5 twin sisters who play jazz'


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
                    content: "You are a helpful assistant designed to output JSON. Every request please generate a new band name based on the descriptio. Every response you make should have a band name you've never sent me before.",
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

            console.log(typeof data)
            // Display ChatGPT response
            // chatContainer.innerHTML = '<strong>You:</strong> ' + prompt + '<br><strong>ChatGPT:</strong> ' + data.choices[0].text;
            const ojb = data.choices[0].message.content.band_name
            console.log(ojb)

        })
        .catch(error => {
            console.error('Errorr:', error);
        });
    }

    console.log(sendPromptToChatGPT())

