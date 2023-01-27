const URL = "http://localhost:8080/api/v1/applicant/register/";

export const applicantExists = async (email) => {
    const emailResponse = await fetch(`${URL}${email}`, {method: 'POST', mode: 'no-cors'});
    const emailBool = await emailResponse.attachment("f.txt");
    console.log(emailBool);
    return emailBool;
}
