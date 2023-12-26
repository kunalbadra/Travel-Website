
    function bookNow(){
        // Get form values
        var whereTo = document.querySelector('[name="whereTo"]').value;
        var howMany = document.querySelector('[name="howMany"]').value;
        var arrival = document.querySelector('[name="arrival"]').value;
        var leaving = document.querySelector('[name="leaving"]').value;
        var details = document.querySelector('[name="text"]').value;

        // Check if any of the fields are empty
        if (whereTo === '' || howMany === '' || arrival === '' || leaving === '' || details === '') {
            alert('Please fill in all the fields before booking.');
        } else {
            // Display success message
            alert('Booking successful!');
        }
    }

    function toggleReadMore(){
      var moreText = document.getElementById("more-text");
      var btnText = document.getElementById("about-btn");

      if (moreText.style.display === "none") {
        moreText.style.display = "inline";
        btnText.innerHTML = "Read Less";
      } 
      else {
        moreText.style.display = "none";
        btnText.innerHTML = "Read More";
      }

    }


    function validateForm(){
            var fullname = document.getElementById('fullname').value;
            var contact = document.getElementById('contact').value;
            var dob = document.getElementById('dob').value;
            var email = document.getElementById('email').value;
            var password = document.getElementById('password').value;
            if (fullname && contact && dob && email && password) {
                // Redirect to login.html
                window.location.href = 'login.html';
                return true; 
            } else {
                alert('Please fill in all the fields.');
                return false;
            }
        }