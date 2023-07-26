document.getElementById("my-form").addEventListener("submit", function(event){
    const formElements = event.target.elements
    const {firstName, lastName} = formElements

    submitViaAPI({
        firstName: firstName.value,
        lastName: lastName.value
    })
})


function submitViaAPI(data)
{
    window.alert(data.firstName);
    
}