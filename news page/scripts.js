
 let users = [];  

 function handleFormSubmission(event) {
     event.preventDefault();  
     const form = event.target;  
     const formId = form.id; 
     if (formId === 'registrationForm') {
         registerUser();  
     } else if (formId === 'loginForm') {
         loginUser();  
     }
 }
 

 function registerUser() {
  
     const name = document.getElementById('name').value;
     const email = document.getElementById('email').value;
     const password = document.getElementById('password').value;
 
   
     const newUser = {
         name,  
         email,
         password
     };
 
   
     users.push(newUser);
 
    
     alert('Registration successful!');
     console.log('Registered Users:', users);
 
  
     window.location.href = 'login.html';
 }
 
 
 function loginUser() {
 
     const loginEmail = document.getElementById('loginEmail').value;
     const loginPassword = document.getElementById('loginPassword').value;
 
     const user = users.find(user => user.email === loginEmail && user.password === loginPassword);
 
     if (user) {
        
         alert('Login successful!');
         console.log('Logged In User:', user);
 
        
     } else {
       
         alert('Invalid email or password.');
     }
 }
 
 // Event listeners for form submissions
 document.getElementById('registrationForm').addEventListener('submit', handleFormSubmission);
 document.getElementById('loginForm').addEventListener('submit', handleFormSubmission);
 