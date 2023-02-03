const URL = "api/v1/applicant/register";


export const applicantExists = async (email) => {
    const apiresbool = await fetch(URL + "/" +  email)
        .then((existsResponse) => {
            console.log(existsResponse)
        });
    return apiresbool.headersSent;
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
