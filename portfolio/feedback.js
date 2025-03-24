
let feedbackList = [];  

document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

 
    if (name && email && message) {
       
        const newFeedback = {
            name,  
            email,
            message
        };
   feedbackList.push(newFeedback);

        alert('Thank you for your feedback!');
        console.log('Feedback List:', feedbackList);

        for (let i = 0; i < feedbackList.length; i++) {
            console.log(`Feedback ${i + 1}:`, feedbackList[i]);
        }
    } else {
        
        alert('Please fill all the fields.');
    }
});
