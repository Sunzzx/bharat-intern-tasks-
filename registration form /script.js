async function validateForm(){
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;

    console.log("Form Data received: ",{name,email,age,phone});

    const data = {name,age,phone,email};

    try {
        const response = await fetch("http://localhost:5500/api/users",{
            method:"POST",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })

        const responseData = await response.json();
        if(responseData){
            alert("Response received at backend");
        }
        console.log(responseData);
    } catch (error) {
        console.log(error);
    }
}
