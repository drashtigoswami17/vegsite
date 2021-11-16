<template>
  <div>
    <div class="hero_area">
      <div class="hero_bg_box">
        <img src="../assets/images/backimg.jpg" alt="" />
      </div>
      <!-- header section strats -->
      <header class="header_section">
        <div class="container-fluid">
          <nav class="navbar navbar-expand-lg custom_nav-container">
            <a class="navbar-brand" href="index.html">
              <span> Veg Mart </span>
            </a>
            <div class="" id="">
              <div class="container">
                <div class="mr-auto flex-column flex-lg-row align-items-center">
                  <ul class="navbar-nav justify-content-between">
                    <div class="User_option">
                      <li class="">
                        <router-link to="/login">
                          <a class="" href="">
                            <i
                              style="font-size: 20px"
                              class="fa fa-user"
                              onClick=""
                              aria-hidden="true"
                            ></i>
                          </a>
                        </router-link>
                      </li>
                      <li class="">
                        <router-link to="/cart">
                          <a class="" href="">
                            &nbsp; &nbsp; &nbsp; &nbsp;<i
                              style="font-size: 20px"
                              class="fa fa-shopping-cart"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </router-link>
                      </li>
                      <li class="">
                        <router-link to="/sign">
                          <a class="" href="">
                            &nbsp; &nbsp; &nbsp; &nbsp;<i
                              style="font-size: 20px"
                              class="fa fa-heart"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </router-link>
                      </li>
                      <li class="">
                        <router-link to="/sign">
                          <a class="" href="">
                            <router-link to="/register">
                              &nbsp; &nbsp; &nbsp; &nbsp;<i
                                style="font-size: 20px"
                                class="fa fa-registered"
                                aria-hidden="true"
                              ></i>
                            </router-link>
                          </a>
                        </router-link>
                      </li>
                      <div class="header">
                        <div class="header-right">
                          <a class="active" href="#fruit">Fruits</a>
                          &nbsp; &nbsp;&nbsp; &nbsp;<a href="#veg"
                            >Vegitables</a
                          >
                          &nbsp; &nbsp;<a href="#contact">Contact Us</a>
                        </div>
                      </div>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
      <!-- end header section -->
      <!-- slider section -->
      <section class="slider_section">
        <div id="customCarousel1" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="container">
                <div class="row">
                  <div class="col-md-6">
                    <div class="detail-box">
                      <h1>
                        Fresh <br />
                        Vegetables
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="container">
                <div class="row">
                  <div class="col-md-6">
                    <div class="detail-box">
                      <h1>
                        Fresh <br />
                        Fruits
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ol class="carousel-indicators">
            <li
              data-target="#customCarousel1"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#customCarousel1" data-slide-to="1"></li>
          </ol>
        </div>
      </section>
      <!-- end slider section -->
    </div>

    <!-- veg section -->

    <section class="veg_section layout_padding" id="veg">
      <div class="container">
        <div class="heading_container heading_center">
          <h2>Our Vegetables</h2>
        </div>
        <div class="row">
          <div v-for="(v, i) in veg" :key="i" class="col-md-6 col-lg-4">
            <div class="box" v-if="v.stock != 0">
              <div class="img-box">
                <img
                  v-bind:src="getImgUrl(v.img)"
                  width="150"
                  height="150"
                  :alt="v.img"
                />
              </div>
              <div class="detail-box">
                <a href="">
                  {{ v.name }}
                </a>
                <div class="price_box">
                  <h6 class="price_heading">
                    <span>RS</span> {{ v.price }}/-
                    <br />
                    <br />
                    <i
                      style="font-size: 20px"
                      @click="addToCart(i,'1','add')"
                      class="fa fa-shopping-cart"
                      aria-hidden="true"
                    ></i>
                    &nbsp;<i
                      v-if="wish.includes(i)"
                      @click="addToWish(i, 'remove')"
                      class="fa fa-heart"
                      style="color: red"
                      aria-hidden="true"
                    ></i>
                    <i
                      v-if="!wish.includes(i)"
                      @click="addToWish(i, 'add')"
                      class="fa fa-heart"
                      style="color: gray"
                      aria-hidden="true"
                    ></i>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- end veg section -->

    <section class="veg_section layout_padding" id="fruit">
      <div class="container">
        <div class="heading_container heading_center">
          <h2>Our Fruits</h2>
        </div>
        <div class="row">
          <div v-for="(v, i) in fruit" :key="i" class="col-md-6 col-lg-4">
            <div class="box" v-if="v.stock != 0">
              <div class="img-box">
                <img v-bind:src="getImgUrl(v.img)" :alt="v.img" />
              </div>
              <div class="detail-box">
                <a href="">
                  {{ v.name }}
                </a>
                <div class="price_box">
                  <h6 class="price_heading">
                    <span>RS</span> {{ v.price }}/-
                    <br />
                    <br />
                    <i
                      style="font-size: 20px"
                      @click="addToCart(i,'1','add')"
                      class="fa fa-shopping-cart"
                      aria-hidden="true"
                    ></i>
                    &nbsp;<i
                      v-if="wish.includes(i)"
                      @click="addToWish(i, 'remove')"
                      class="fa fa-heart"
                      style="color: red"
                      aria-hidden="true"
                    ></i>
                    <i
                      v-if="!wish.includes(i)"
                      @click="addToWish(i, 'add')"
                      class="fa fa-heart"
                      style="color: gray"
                      aria-hidden="true"
                    ></i>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- about section -->

    <section class="about_section">
      <div class="about_bg_box">
        <img src="../assets/images/vegimg.jpg" alt="" />
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-6 ml-auto">
            <div class="detail-box">
              <div class="heading_container">
                <h2>
                  We Provide <br />
                  Fresh Vegetables
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- end about section -->

    <!-- footer section -->
    <section class="container-fluid footer_section" id="contact">
      <div class="container">
        <div class="row">
          <div class="col-sm-6 col-md-4 col-lg-3 footer-col">
            <div class="footer_detail">
              <a href="index.html">
                <h4>Veg Mart</h4>
              </a>
              <p>You can also follow us on below resources</p>
              <div class="social_box">
                <a href="">
                  <i class="fa fa-facebook" aria-hidden="true"></i>
                </a>
                <a href="">
                  <i class="fa fa-twitter" aria-hidden="true"></i>
                </a>
                <a href="">
                  <i class="fa fa-linkedin" aria-hidden="true"></i>
                </a>
                <a href="">
                  <i class="fa fa-instagram" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3 mx-auto footer-col">
            <h4>Contact us</h4>
            <p>Drashti Goswami</p>
            <div class="contact_nav">
              <a href="">
                <i class="fa fa-map-marker" aria-hidden="true"></i>
                <span> Bhuj </span>
              </a>
              <a href="">
                <i class="fa fa-phone" aria-hidden="true"></i>
                <span> Call : +91 9106942548 </span>
              </a>
              <a href="">
                <i class="fa fa-envelope" aria-hidden="true"></i>
                <span> Email : VegMart@gmail.com </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
export default {
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
      .collection("user")
      .doc("9106942548")
      .get()
      .then((d) => {
        this.cart = d.data().cart;
        this.wish = d.data().wishlist;
      });
    this.getD();
  },
  data() {
    return {
      veg: {},
      fruit: {},
      wish: [],
      cart: {},
    };
  },
  methods: {
    addToWish(proID, mode) {
      if (mode === "add") {
        this.wish.push(proID);
      } else {
        const index = this.wish.indexOf(proID);
        if (index > -1) {
          this.wish.splice(index, 1);
        }
      }
      firebase
        .firestore()
        .collection("user")
        .doc(window.localStorage.getItem("vgUser"))
        .update({
          wishlist: this.wish,
        });
    },
    addToCart(proID,qty,mode){
      if(mode==="add"){
        if(!this.cart[proID]){
        this.cart[proID]=qty;}
      }
      firebase
        .firestore()
        .collection("user")
        .doc(window.localStorage.getItem("vgUser"))
        .update({
          cart: this.cart
        });
    },
    getD() {
      firebase
        .firestore()
        .collection("product")
        .where("cat", "==", "veg")
        .get()
        .then((d) => {
          d.forEach((doc) => {
            if (doc.data().stock !== "0") {
              this.veg[doc.id] = doc.data();
            }
          });
        });
      firebase
        .firestore()
        .collection("product")
        .where("cat", "==", "fruit")
        .get()
        .then((d) => {
          d.forEach((doc) => {
            if (doc.data().stock !== "0") {
              this.fruit[doc.id] = doc.data();
            }
          });
        });
    },
    getImgUrl(img) {
      return require("../assets/images/" + img);
    },
  },
};
</script>

<style scoped>
.header {
  overflow: hidden;

  padding: 10px 10px;
}

/* Style the header links */
.header a {
  float: right;
  color: rgb(231, 221, 221);
  text-align: center;
  padding: 12px;
  text-decoration: none;
  font-size: 18px;
  line-height: 25px;
  border-radius: 4px;
  font-weight: bold;
}

/* Style the logo link (notice that we set the same value of line-height and font-size to prevent the header to increase when the font gets bigger */
.header a.logo {
  font-size: 25px;
  font-weight: bold;
}

/* Change the background color on mouse-over */
.header a:hover {
  background-color: #ddd;
  color: black;
}

/* Style the active/current link*/
.header a.active {
}

/* Float the link section to the right */
.header-right {
  float: right;
}

/* Add media queries for responsiveness - when the screen is 500px wide or less, stack the links on top of each other */
@media screen and (max-width: 500px) {
  .header a {
    float: none;
    display: block;
    text-align: left;
  }
  .header-right {
    float: none;
  }
}
</style>