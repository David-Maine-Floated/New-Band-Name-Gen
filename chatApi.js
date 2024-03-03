import OpenAI from 'openai';
import dotenv from 'dotenv';

dotenv.config();

let organization = process.env.ORGANIZATION

const openai = new OpenAI({
  organization: organization,
});

apiKey = 

export async function main(message) {
  const completion = await openai.chat.completions.create({
    method: 'POST',
    headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + apiKey,
            },
    body: {
          messages: [
      {
        role: "system",
        content: "You are a helpful assistant designed to output JSON. I want you to give me a band name based on the description I send to you.",
      },
      { role: "user", content: `${message}` },
    ],
    model: "gpt-3.5-turbo-0125",
    response_format: { type: "json_object" },
    }    

  });
  console.log(completion.choices[0].message.content);
}

console.log(await main('A jazz band with 5 identical sisters as guitar players'))