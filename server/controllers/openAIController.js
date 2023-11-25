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
        model: "gpt-3.5-turbo",
        stream: true
    });
    for await (const chunk of completion) {
        return chunk
    }
}


/**
 * @desc Get result from openAI
 * @route GET /api/chats
 * @return the response object from api call
 */
const getPromptResp = async (req, res) => {
    try {
        const { content } = req.body
        // console.log("CONTENT", content);
        // const completion = await prompt(content);
        const completion = await openai.chat.completions.create({
            messages: [{"role": "system", "content": "You are a healthcare provider and symptom diagnoser."},
                {"role": "user", "content": "What medical condition does these symptoms suggest"},
                {"role": "user", "content": content}],
            model: "gpt-3.5-turbo",
            // stream: true
        });
        res.json(completion.choices[0]);   
    } catch (error) {
        console.log("error", error);
        res.json(error);
    }
};



module.exports = { getPromptResp };