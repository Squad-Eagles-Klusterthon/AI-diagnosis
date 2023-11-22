const { OpenAI } = require('openai');
const dotenv = require('dotenv').config();


const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});


/**
 * @desc handle the api call to openAI
 * @args - content: the prompt
 * @return the response to prompt
 */
const prompt = async (content) => {
    const completion = await openai.chat.completions.create({
        messages: [{"role": "system", "content": "You are a healthcare provider and symptom diagnoser."},
            {"role": "user", "content": "What medical condition does these symptoms suggest"},
            {"role": "user", "content": content}],
        model: "gpt-3.5-turbo-0613",
    });

    const reason = completion.choices[0].finish_reason
    if(reason == 'stop') {
        return (completion.choices[0].message.content);
    } else {
        return prompt(content);
    }
}


/**
 * @desc Get result from openAI
 * @route GET /api/chats
 * @return the response object from api call
 */
const getPromptResp = async (req, res) => {
    const { content } = req.body
    const completion = await prompt(content);

    res.json(completion);
};



module.exports = { getPromptResp };