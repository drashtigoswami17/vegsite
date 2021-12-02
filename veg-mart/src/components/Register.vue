<template>
  <div>
      <div class="sub_page">
    <div class="hero_area">
      <div class="hero_bg_box">
        <img src="../assets/images/backimg.jpg" alt="">
      </div>
     
        <!-- header section strats -->
        <header class="header_section">
          <div class="container-fluid">
            <nav
              class="navbar navbar-expand-lg custom_nav-container"
              style="display: flex; justify-content: space-between"
            >
              <a class="navbar-brand">
                <span> VegMart </span>
              </a>
              <div
                style="
                  background-color: #fff;
                  padding: 5px;
                  border-radius: 3px;
                  color: rgba(4, 207, 65, 1);
                  font-weight: bold;
                "
              >
                <label @click="$router.push('/login')">Login</label>
              </div>
            </nav>
          </div>
        </header>
        <!-- end header section -->
      </div>
    </div>

    <div style="display: flex; justify-content: space-around; margin: 2%">
      <div class="container">
        <div class="title">Registration</div>
        <div class="content">
          <form>
            <div class="user-details">
              <div class="input-box">
                <span class="details">First Name</span>
                <input type="text" v-model="firstName" placeholder="Enter your firstname" required />
              </div>
              <div class="input-box">
                <span class="details">Last Name</span>
                <input type="text" v-model="lastName" placeholder="Enter your lastname" required />
              </div>
              <div class="input-box">
                <div class="gender-details">
                  <input type="radio" v-model="gender" value="male" name="gender" id="dot-1" />
                  <input type="radio" v-model="gender" value="female" name="gender" id="dot-2" />
                  <div style="display: flex; justify-content: space-around">
                    <span class="gender-title">Gender</span>
                  </div>
                  <div class="category">
                    <label for="dot-1">
                      <span class="dot one"></span>
                      <span class="gender">Male</span>
                    </label>
                    <label for="dot-2">
                      <span class="dot two"></span>
                      <span class="gender">Female</span>
                    </label>
                  </div>
                </div>
              </div>
              <div class="input-box">
                <span class="details">Date of Birth</span>
                <input
                  type="date" v-model="dob"
                  placeholder="Enter your date of birth"
                  required
                />
              </div>
              <div class="input-box">
                <span class="details">Phone Number</span>
                <input
                  type="text"
                  inputmode="numeric"
                  maxlength="10"
                  v-model="mobile"
                  placeholder="Enter your number"
                  required
                />
              </div>
              <div class="input-box">
                <span class="details">Email</span>
                <input type="email" v-model="email" placeholder="Enter your email" required />
              </div>
              <div class="input-box">
                <span class="details">PIN</span>
                <input
                  type="password"
                  inputmode="numeric"
                  maxlength="6"
                  v-model="pin"
                  placeholder="******"
                  required
                />
              </div>
              <div class="input-box">
                <span class="details">Confirm PIN</span>
                <input
                  type="password"
                  inputmode="numeric"
                  maxlength="6"
                  placeholder="******"
                  v-model="cpin"
                  required
                />
              </div>

              <div class="input-box" >
                <span class="details">Address</span>
                <textarea  placeholder="Enter your Address" v-model="AddLine" required></textarea>
              </div>

              <div class="input-box">
                <span class="details">State</span>
                <input type="text" value="Gujarat" disabled />
              </div>
              <div class="input-box">
                <span class="details">City</span>
                <input type="text" value="Bhuj" disabled />
              </div>
              <div class="input-box">
                <span class="details">Pin Code</span>
                <input type="text" value="370001" disabled />
              </div>
            </div>

            <div class="button">
              <input type="button" @click="register()" value="Register" />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

export default {
  data() {
    return {
      firstName: "",
      lastName:'',
      pin:'',
      cpin:'',
      email:'',
      mobile:'',
      gender:'',
      AddLine:'',
      dob:''
    };
  },
  mounted() {
    firebase.initializeApp({
      apiKey: "AIzaSyDn7efC-m69rn1jevcOIRw6-cIJITcacak",
      authDomain: "vegmart-c4605.firebaseapp.com",
      databaseURL: "https://vegmart-c4605-default-rtdb.firebaseio.com",
      projectId: "vegmart-c4605",
      storageBucket: "vegmart-c4605.appspot.com",
      messagingSenderId: "402249625272",
      appId: "1:402249625272:web:1dd85811f72e821e484e4d",
    });
  },
  methods: {
    register() {
      
      console.log('done');
      
      
      firebase
        .firestore()
        .collection("user")
        .doc(this.mobile)
        .set({
          name: this.firstName + " " + this.lastName,
          wishlist: [],
          cart: {},
          mob: this.mobile,
          email: this.email,
          dob:this.dob,
          gender: this.gender,
          type: "customer",
          pin:this.pin,
          add: {
            addressLine: this.AddLine,
            city: "Bhuj",
            pin: "370001",
            state: "Gujarat",
          },
        }).then(()=>{
          this.$router.replace('/login')
        });
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
body {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background: #04cf41;
}
.container {
  max-width: 700px;
  width: 100%;
  background-color: #fff;
  padding: 25px 30px;
  border-radius: 5px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
}
.container .title {
  font-size: 25px;
  font-weight: 500;
  position: relative;
  color: #04cf41;
}
.container .title::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  height: 3px;
  width: 30px;
  border-radius: 5px;
  background: #04cf41;
}
.content form .user-details {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 20px 0 12px 0;
}
form .user-details .input-box {
  margin-bottom: 15px;
  width: calc(100% / 2 - 20px);
}
form .input-box span.details {
  display: block;
  font-weight: 500;
  margin-bottom: 5px;
}
.user-details .input-box input {
  height: 45px;
  width: 100%;
  outline: none;
  font-size: 16px;
  border-radius: 5px;
  padding-left: 15px;
  border: 1px solid #04cf41;
  border-bottom-width: 2px;
  transition: all 0.3s ease;
}
.user-details .input-box textarea {
  height: 45px;
  width: 100%;
  outline: none;
  font-size: 16px;
  border-radius: 5px;
  padding-left: 15px;
  border: 1px solid #04cf41;
  border-bottom-width: 2px;
  transition: all 0.3s ease;
}

.user-details .input-box input:focus,
.user-details .input-box input:valid {
  border-color: #04cf41;
}
form .gender-details .gender-title {
  display: block;
  font-weight: 500;
  margin-bottom: 5px;
}
form .category {
  display: flex;
  width: 80%;
  margin: 14px 0;
  justify-content: space-between;
}
form .category label {
  display: flex;
  align-items: center;
  cursor: pointer;
}
form .category label .dot {
  height: 18px;
  width: 18px;
  border-radius: 50%;
  margin-right: 10px;
  background: #04cf41;
  border: 5px solid transparent;
  transition: all 0.3s ease;
}
#dot-1:checked ~ .category label .one,
#dot-2:checked ~ .category label .two,
#dot-3:checked ~ .category label .three {
  background: #04cf41;
  border-color: #d9d9d9;
}
form input[type="radio"] {
  display: none;
}
form .button {
  height: 45px;
  margin: 35px 0;
}
form .button input {
  height: 100%;
  width: 100%;
  border-radius: 5px;
  border: none;
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s ease;
  background: #04cf41;
}
form .button input:hover {
  /* transform: scale(0.99); */
  background: #04cf41;
}
@media (max-width: 584px) {
  .container {
    max-width: 100%;
  }
  form .user-details .input-box {
    margin-bottom: 15px;
    width: 100%;
  }
  form .category {
    width: 100%;
  }
  .content form .user-details {
    max-height: 300px;
    overflow-y: scroll;
  }
  .user-details::-webkit-scrollbar {
    width: 5px;
  }
}
@media (max-width: 459px) {
  .container .content .category {
    flex-direction: column;
  }
}
</style>