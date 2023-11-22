const { OpenAI, Configuration } = require('openai');


const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
});
const openai = new OpenAI(configuration);


/**
 * @desc Get result from openAI
 * @route GET /api/chats
 * @return the response of prompt
 */
const prompt = async (req, res) => {
    const { content } = req.body
    const completion = await openai.chat.completions.create({
        messages: [{"role": "system", "content": "You are a healthcare provider and symptom diagnoser."},
            {"role": "user", "content": "What medical condition does these symptoms suggest"},
            {"role": "user", content}],
        model: "gpt-3.5-turbo",
    });
    
    console.log(completion.choices[0]);
};



module.exports = { prompt };