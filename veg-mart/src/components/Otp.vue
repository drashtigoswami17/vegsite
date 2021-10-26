<template>
  <div class="sub_page">
    <div class="hero_area">
      <div class="hero_bg_box">
        <img src="../assets/images/backimg.jpg" alt="">
      </div>
      <!-- header section strats -->
      <header class="header_section">
        <div class="container-fluid">
          <nav class="navbar navbar-expand-lg custom_nav-container">
            <a class="navbar-brand" href="index.html">
              <span>
                VegMart
              </span>
            </a>
            <div class="" id="">
                            
            </div>
          </nav>
        </div>
      </header>
      <!-- end header section -->
    </div>
</div>  
  <div style="display:flex; justify-content: space-around; margin: 4%;">
     
      <div class="container" style="alignment:center">
    <input type="checkbox" id="flip">
    <div class="cover">

      <div class="front">
        <img src="../assets/images/backimg.jpg" alt="">
        <div class="text">
          <span class="text-1">WE SERVE FRESH<br>PRODUCTS</span>
          <span class="text-2">YOUR HEALTH IS OUR FIRST PRIORITY</span>
        </div>
      </div>
      <div class="back">
        <img class="backImg" src="" alt="">
        <div class="text">
          <span class="text-1">VegMart <br>is here</span>
          <span class="text-2">to serve you</span>
        </div>
      </div>
    </div>
    <div class="forms">
        <div class="form-content">
          <div class="login-form">
            <div class="title">Login</div>
          <form action="#">
            <div class="input-boxes">
              <div class="input-box">
                
                <input type="text" placeholder="Enter your mobile number" required>
              </div>
              <div class="button input-box">
                <input type="submit" value="Send OTP">
              </div>
              <div class="input-box">
                
                <input type="password" placeholder="Enter your OTP" required>
              </div>
              
              <div class="button input-box">
                <input type="submit" value="Verify OTP">
              </div>
              
            </div>
        </form>
      </div>
        
    </div>
    </div>
  </div>
  </div>
</template>

<script>
  import firebase from 'firebase/compat';

import 'firebase/compat/firestore'
export default {
  mounted(){
 firebase.initializeApp( {
  apiKey: "AIzaSyDn7efC-m69rn1jevcOIRw6-cIJITcacak",
  authDomain: "vegmart-c4605.firebaseapp.com",
  databaseURL: "https://vegmart-c4605-default-rtdb.firebaseio.com",
  projectId: "vegmart-c4605",
  storageBucket: "vegmart-c4605.appspot.com",
  messagingSenderId: "402249625272",
  appId: "1:402249625272:web:1dd85811f72e821e484e4d"
});

firebase.auth().useDeviceLanguage();
window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
  'size': 'invisible',
  'callback': (response) => {
   console.log(response);
  }
})
const appVerifier = window.recaptchaVerifier;

firebase.auth().signInWithPhoneNumber('+917490972908', appVerifier)
    .then((confirmationResult) => {
      alert(confirmationResult)
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      window.confirmationResult = confirmationResult;
      // ...
    }).catch((error) => {
      console.log(error);
      // Error; SMS not sent
      // ...
    });

},
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap');
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins" , sans-serif;

}
body{
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
 
  padding: 30px;
}
.container{
  position: relative;
  max-width: 850px;
  width: 100%;
  background: #fff;
  padding: 40px 30px;
  box-shadow: 0 5px 10px rgba(0,0,0,0.2);
  perspective: 2700px;
}
.container .cover{
  position: absolute;
  top: 0;
  left: 25%;
  height: 100%;
  width: 50%;
  z-index: 98;
  transition: all 1s ease;
  transform-origin: left;
  transform-style: preserve-3d;
}
.container .cover::before{
  content: '';
  position: absolute;
  height: 100%;
  width: 100%;
  background:#04cf41;
  opacity: 0.5;
  z-index: 100;
}
.container .cover::after{
  content: '';
  position: absolute;
  height: 100%;
  width: 100%;
  background: #04cf41;
  opacity: 0.5;
  z-index: 100;
  transform: rotateY(180deg);
}
.container #flip:checked ~ .cover{
  transform: rotateY(-180deg);
}
.container .cover img{
  position: absolute;
  height: 100%;
  width: 100%;
  object-fit: cover;
  z-index: 12;
  backface-visibility: hidden;
}
.container .cover .back .backImg{
  transform: rotateY(180deg);
  transform: rotateY(180deg);
}
.container .cover .text{
  position: absolute;
  z-index: 111;
  height: 100%;
  width: 100%;
  display: flex;
  left:50%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.cover .text .text-1,
.cover .text .text-2{
  font-size: 26px;
  font-weight: 600;
  color: #fff;
  text-align: center;
  backface-visibility: hidden;
}
.cover .back .text .text-1,
.cover .back .text .text-2{
  transform: rotateY(180deg);
}
.cover .text .text-2{
  font-size: 15px;
  font-weight: 500;
}
.container .forms{
  height: 100%;
  width: 100%;
  background: #fff;
  align:center;
}
.container .form-content{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.form-content .login-form,
.form-content .signup-form{
  width: calc(100% / 2 - 25px);
  
}
.forms .form-content .title{
  position: relative;
  font-size: 24px;
  font-weight: 500;
  
}
.forms .form-content .title:before{
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  height: 3px;
  width: 25px;
  background: #04cf41;
}
.forms .signup-form  .title:before{
  width: 20px;
}
.forms .form-content .input-boxes{
  margin-top: 30px;
}
.forms .form-content .input-box{
  display: flex;
  align-items: center;
  height: 50px;
  width: 100%;
  margin: 10px 0;

  position: relative;
}
.form-content .input-box input{
  height: 100%;
  width: 100%;
  outline: none;
  border: none;
  padding: 0 30px;
  font-size: 16px;
  font-weight: 500;
  
  border-bottom: 2px solid rgba(0,0,0,0.2);
  transition: all 0.3s ease;
}
.form-content .input-box input:focus,
.form-content .input-box input:valid{
  border-color: #04cf41;
}
.form-content .input-box i{
  position: absolute;
  color: #04cf41;
  font-size: 17px;
}
.forms .form-content .text{
  font-size: 14px;
  font-weight: 500;
  color: #333;
}
.forms .form-content .text a{
  text-decoration: none;
}
.forms .form-content .text a:hover{
  text-decoration: underline;
}
.forms .form-content .button{
  color: #fff;
  margin-top: 40px;
}
.forms .form-content .button input{
  color: #fff;
  background: #04cf41;
  border-radius: 6px;
  padding: 0;
  cursor: pointer;
  transition: all 0.4s ease;
}
.forms .form-content .button input:hover{
  background: #04cf41;
}
.forms .form-content label{
  color: #04cf41;
  cursor: pointer;
}
.forms .form-content label:hover{
  text-decoration: underline;
}
.forms .form-content .login-text,
.forms .form-content .sign-up-text{
  text-align: center;
  margin-top: 25px;
}
.container #flip{
  display: none;
}
@media (max-width: 730px) {
  .container .cover{
    display: none;
  }
  .form-content .login-form,
  .form-content .signup-form{
    width: 100%;
  }
  .form-content .signup-form{
    display: none;
  }
  .container #flip:checked ~ .forms .signup-form{
    display: block;
  }
  .container #flip:checked ~ .forms .login-form{
    display: none;
  }
}

</style>