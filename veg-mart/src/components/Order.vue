<template>
  <div>
    <div class="sub_page">
      <div class="hero_area">
        <div class="hero_bg_box">
          <img src="../assets/images/backimg.jpg" alt="" />
        </div>
        <!-- header section strats -->
        <header class="header_section">
          <div class="container-fluid">
            <nav class="navbar navbar-expand-lg custom_nav-container">
              <a class="navbar-brand" href="index.html">
                <span> VegMart </span>
              </a>
              <div class="" id="">
                <div class="container">
                  <div
                    class="mr-auto flex-column flex-lg-row align-items-center"
                  >
                    <ul class="navbar-nav justify-content-between">
                      <div class="User_option">
                        <li class="">
                          <router-link to="/">
                          <a class="" href="">
                            <i
                              style="font-size: 20px"
                              class="fa fa-home"
                              onClick=""
                              aria-hidden="true"
                            ></i>
                          </a>
                          </router-link>
                        </li>
                        <form class="form-inline">
                          <button class="btn nav_search-btn" type="submit">
                            <i
                              style="font-size: 20px"
                              class="fa fa-heart"
                              aria-hidden="true"
                            ></i>
                          </button>
                        </form>
                      </div>
                    </ul>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </header>
        <!-- end header section -->
      </div>
    </div>
    <div style="display: flex; justify-content: space-around; margin: 5%">
      <div class="CartContainer">
        <div class="Header">
          <h3 class="Heading">Your Order</h3>
        </div>

        <div class="Cart-Items" v-for="p, k in order" :key="k">
            <b>{{k}}</b>
            <p>
                <span v-for="i,id in p.item" :key="id">{{getName(id)}}, </span>
            </p>
            <b>{{p.price}}</b>
          
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
     order:{}
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
    
    firebase
        .firestore()
        .collection("order")
        .where('user','==',window.localStorage.getItem("vgUser"))
        .get()
        .then((d) => {
          d.forEach((doc)=>{
              alert(doc.id)
              this.order[doc.id]=doc.data()
          })
        });

  },
  methods:{
      getName(id)
      {
          return window.localStorage.getItem(id)
      }
  }
};
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  background: linear-gradient(to bottom right, #e3f0ff, #fafcff);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.CartContainer {
  width: 70%;
  height: 90%;
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: 0px 10px 20px #1687d933;
}

.Header {
  margin: auto;
  width: 90%;
  height: 15%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.Heading {
  font-size: 20px;
  font-family: "Open Sans";
  font-weight: 700;
  color: #2f3841;
}

.Action {
  font-size: 14px;
  font-family: "Open Sans";
  font-weight: 600;
  color: #e44c4c;
  cursor: pointer;
  border-bottom: 1px solid #e44c4c;
}

.Cart-Items {
  margin: auto;
  width: 90%;
  height: 30%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.image-box {
  width: 15%;
  text-align: center;
}
.about {
  height: 100%;
  width: 24%;
}
.title {
  padding-top: 10px;
  line-height: 10px;
  font-size: 20px;
  font-family: "Open Sans";
  font-weight: 800;
  color: #202020;
}
.subtitle {
  line-height: 10px;
  font-size: 18px;
  font-family: "Open Sans";
  font-weight: 600;
  color: #e44c4c;
}

.counter {
  width: 15%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.btn {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #d9d9d9;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-family: "Open Sans";
  font-weight: 900;
  color: #202020;
  cursor: pointer;
}
.count {
  font-size: 20px;
  font-family: "Open Sans";
  font-weight: 600;
  color: #202020;
}

.prices {
  height: 100%;
  text-align: right;
}
.amount {
  padding-top: 20px;
  font-size: 26px;
  font-family: "Open Sans";
  font-weight: 800;
  color: #202020;
}
.save {
  padding-top: 5px;
  font-size: 14px;
  font-family: "Open Sans";
  font-weight: 600;
  color: #1687d9;
  cursor: pointer;
}
.remove {
  padding-top: 5px;
  font-size: 14px;
  font-family: "Open Sans";
  font-weight: 600;
  color: #e44c4c;
  cursor: pointer;
}

.pad {
  margin-top: 5px;
}

hr {
  width: 66%;
  float: right;
  margin-right: 5%;
}
.checkout {
  float: right;
  margin-right: 5%;
  width: 28%;
}
.total {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.Subtotal {
  font-size: 22px;
  font-family: "Open Sans";
  font-weight: 700;
  color: #202020;
}
.items {
  font-size: 16px;
  font-family: "Open Sans";
  font-weight: 500;
  color: #909090;
  line-height: 10px;
}
.total-amount {
  font-size: 36px;
  font-family: "Open Sans";
  font-weight: 900;
  color: #202020;
}
.button {
  margin-top: 10px;
  width: 100%;
  height: 40px;
  border: none;
  background: linear-gradient(to bottom right, #10c910, #058817);
  border-radius: 20px;
  cursor: pointer;
  font-size: 16px;
  font-family: "Open Sans";
  font-weight: 600;
  color: #202020;
}
</style>
