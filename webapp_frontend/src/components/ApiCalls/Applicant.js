const URL = "http://localhost:8080/api/v1/applicant/register/";

export const applicantExists = async (email) => {
    const emailResponse = await fetch(`${URL}${email}`, {method: 'POST', mode: 'no-cors'});
    const emailBool = await emailResponse.attachment("f.txt");
    console.log(emailBool);
    return emailBool;
}

export const addApplicant = async (email, password) => {
    const json = { "email": email, "password": password };
    const registerParams = {
        method: 'POST',
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
        body: JSON.stringify(json)
    }
    await fetch(`${URL}`, registerParams).then(response => response.json());
}