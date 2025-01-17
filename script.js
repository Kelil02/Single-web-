document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault(); 
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    const feedbackMessage = `Thank you, ${name}! Your message has been received.`;
  
    document.getElementById('formFeedback').innerText = feedbackMessage;
  
    this.reset();
  });
  