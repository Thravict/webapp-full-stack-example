const URL = "api/v1/applicant/register";

export function applicantExistence(email) {
    fetch(URL + "/" +  email, {
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => response.text()).then(text => console.log(text));

}

export const addApplicant = async (email, password) => {
    const json = {email, password };
    await fetch(URL, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(json)
    }).then((response) => {
        console.log("New User added")
        if (response.status === 200) {
            console.log("Go to Login")
        }
    });
}
