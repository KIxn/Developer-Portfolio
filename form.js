window.onload = () => {
    let sub = document.getElementById('subject');
    let bod = document.getElementById('body');
    let respondent = document.getElementById('respondant');

    let btn = document.getElementById('subbtn');

    btn.onclick = () => {
        let checked = false;
        do {
            Email.send({
                Host: "smtp.gmail.com",
                Username: "krdevsolutions@gmail.com",
                Password: "abc123!?",
                To: String(respondent.value),
                From: "krdevsolutions@gmail.com",
                Subject: "Re: " + String(sub.value),
                Body: "{" + String(bod.value) + "}" + " has been noted, we will get back to you soon",
            }).then(function(message) {
                alert("mail sent successfully");
                checked = true;
            })
        } while (!checked);

        console.log(checked);
    }
}