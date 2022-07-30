const eledays = document.querySelectorAll('.counter-num')[0];
    const elehours = document.querySelectorAll('.counter-num')[1];
    const eleminutes = document.querySelectorAll('.counter-num')[2];
    const eleseconds = document.querySelectorAll('.counter-num')[3];

    // Set the date we're counting down to
    //var countDownDate = new Date("Sep 15, 2022 15:37:25").getTime();
    var countDownDate = new Date().getTime() + new Date('Jan 9, 1970 23:55:42').getTime();

    // Update the count down every 1 second
    var x = setInterval(function () {

      // Get today's date and time
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      //checks if the value is less than 10 an adds "0" to the front
      less = (n) =>{
        if (n < 10) {
          return "0" + n;
        } else {
          return n;
        }
      }

      // Output the result in an element with id="demo"
      eledays.innerHTML = less(days);
      elehours.innerHTML = less(hours);
      eleminutes.innerHTML = less(minutes);
      eleseconds.innerHTML = less(seconds);

      // If the count down is over, write some text 
      if (distance < 0) {
        clearInterval(x);
        eledays.innerHTML = elehours.innerHTML = eleminutes.innerHTML = eleseconds.innerHTML = "-";

        document.querySelector('.expired-message').innerHTML = 'WE ALREADY LAUNCHED!!!'
      }
    }, 1000);