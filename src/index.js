const init = () => {
    const inputForm=document.querySelector('form')
    inputForm.addEventListener('submit',(event)=>{

        event.preventDefault();
      const input=document.querySelector('input#searchByID')
        console.log(input.value)
        
        fetch(`http://localhost:3000/movies/${input.value}`)
        .then(response=>response.json())
        .then(data=>{

            //Let's replace Title and Summary with data we retrieved from our server.
            //To do this, we'll work inside the second then of our fetch 
            //request. First, we'll access the DOM and store the two elements in JavaScript
            const title=document.querySelector("section#movieDetails h4")
            const summary=document.querySelector("section#movieDetails p")
            console.log(data)

            //Next, we want to change the contents of our title and summary elements based on the retrieved data. 
            //We can do this by setting their innerText values to the appropriate values in our data:
            
            title.innerText=data.title
            summary.innerText=data.summary
            

        });

    });
  
}

document.addEventListener('DOMContentLoaded', init);