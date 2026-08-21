"use server";

export async function forwardContactEmail(formData: FormData) {

    const url = 'https://comms.twilio.com/v1/Emails';

    const sid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const authString = Buffer.from(`${sid}:${authToken}`).toString('base64');

    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            authorization: `Basic ${authString}`
        },
        body: JSON.stringify({
            "from": { "address": "contact@app.callforward.pro", "name": "Contact" },
            "to": [{ "address": "laura@gaffigan.net", "name": "Laura Gaffigan" }],
            "content": {
                "subject": formData.get("subject"),
                "text": `${formData.get("name")} at ${formData.get("email")}: ${formData.get("message")}`,
                "html": `<p>${formData.get("name")} at ${formData.get("email")}: ${formData.get("message")}</p>`
            }
        })
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}