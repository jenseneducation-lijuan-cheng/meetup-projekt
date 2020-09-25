<template>
  <div class="register">
    <Header />
   <router-link class="back" :to="`/eventsinfo/${eventId}`">Tillbaka</router-link>
    <div class="attend" v-if="!attending">
      <h2>Anmäla</h2>

      <label for="name">Name:</label>
      <input name="name" type="text" v-model="fullName" />
      <label for="email">E-mail:</label>
      <input name="email" type="text" v-model="userEmail" />
      <label class="switch">
        <input
          class="check"
          type="checkbox"
          id="gdpr"
          name="gdpr"
          value="true"
          v-model="gdprAccepted"
          @change="update_checkbox"
        />
        <span class="slider"></span>
        <p class="ok">GDPR OK!</p>
      </label>
      <section class="buttons">
        <button @click="register" class="blob-btn save" :disabled="!gdprAccepted">
          <span class="text">Anmäla</span>
          <span class="blob-btn__inner">
            <span class="blob-btn__blobs">
              <span class="blob-btn__blob"></span>
              <span class="blob-btn__blob"></span>
              <span class="blob-btn__blob"></span>
              <span class="blob-btn__blob"></span>
            </span>
          </span>
        </button>
      </section>
    </div>
    <div class="attending" v-else>
      <h1 class="you-attend">Du har anmält dig!</h1>
    </div>
    <div class="down">
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import Footer from "../components/Footer";

export default {
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      fullName: "",
      userEmail: "",
      gdprAccepted: false,
      attending: false,
    };
  },
  computed: {
    eventId() {
      return parseInt(this.$route.params.id);
    },
  },
  methods: {
    update_checkbox() {},
    register() {
      this.$store.commit("saveUser", {
        fullName: this.fullName,
        userEmail: this.userEmail,
      });
      this.$store.dispatch("attendEvent", this.eventId);
      this.attending = true;
    },
  },
  async created() {
    await this.$store.dispatch("getUser");
    let user = this.$store.state.user;
    if (user.fullName) {
      this.fullName = user.fullName;
      this.userEmail = user.userEmail;
    }
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";

.you-attend {
  
  color: $darkpink;
  letter-spacing: 2px;
}
.register {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
 

  .attend {
    background-color: $white;
    box-shadow: 1px 1px 8px #888888;
    //height: 100%;
    width: 65vh;
    box-sizing: border-box;
    margin:  50px auto;
    display: flex;
    flex-direction: column;
  }
  h2 {
    color: $black;
    letter-spacing: 2px;
  }
  .blob-btn:disabled {
    .blob-btn__inner {
      background-color: $light-gray;
    }
  }
  label {
    margin: 1rem 0px 0px 1rem;
    display: flex;

    font-weight: bold;
  }
  input {
    border: 1px solid $black;
    padding: 1rem;
    border-radius: 20px;
    background: none;
    transition: all 0.5 ease;
    margin: 2rem;
    font-size: 1.5rem;
    width: 400px;
    height: 40px;
    outline: none;
  }
  .ok {
    margin-left: 4.5rem;
    text-align: center;
  }
  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
  }

  /* Hide default HTML checkbox */
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  /* The slider */
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: $light-gray;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: $blue;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px rgb(143, 156, 167);
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }

  /* Rounded sliders */
  .slider {
    border-radius: 34px;
  }

  .slider:before {
    border-radius: 50%;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  $openSans: "Open Sans", Helvetica, Arial, sans-serif;
  body {
    background: #333;
    font-family: $openSans;
  }

  .buttons {
    margin: 50px;
    //text-align: center;
    border-radius: 30px;
  }
  $cyan: rgb(238, 164, 175);
  $dark: $blue;
  $borderW: 2px;

  .blob-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    $numOfBlobs: 4;
    z-index: 1;
    margin: auto;
    position: relative;
    padding: 20px 46px;
    //margin-bottom: 30px;
    //text-align: center;
    text-transform: uppercase;
    color: $cyan;
    font-size: 16px;
    font-weight: bold;
    background-color: transparent;
    outline: none;
    border: none;
    transition: color 0.5s;
    cursor: pointer;
    border-radius: 30px;

    &:before {
      content: "";
      z-index: 1;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      border: $borderW solid $darkpink;
      border-radius: 30px;
    }

    &:after {
      content: "";
      z-index: -2;
      position: absolute;
      left: $borderW * 1.5;
      top: $borderW * 1.5;
      width: 100%;
      height: 100%;

      transition: all 0.3s 0.2s;
      border-radius: 30px;
    }

    &:hover {
      color: $dark;
      border-radius: 30px;

      &:after {
        transition: all 0.3s;
        left: 0;
        top: 0;
        border-radius: 30px;
      }
    }

    &__inner {
      z-index: -1;
      overflow: hidden;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      border-radius: 30px;
      background: #ffffff;
    }

    // additional container created, because in FF blobs are breaking overflow:hidden of element with svg gooey filter
    &__blobs {
      position: relative;
      display: block;
      height: 100%;
      filter: url("#goo");
    }

    &__blob {
      position: absolute;
      top: $borderW;
      width: 120% / $numOfBlobs;
      height: 100%;
      background: $cyan;
      border-radius: 100%;
      transform: translate3d(0, 150%, 0) scale(1.7);
      transition: transform 0.45s;

      @supports (filter: url("#goo")) {
        transform: translate3d(0, 150%, 0) scale(1.4);
      }

      @for $i from 1 through $numOfBlobs {
        &:nth-child(#{$i}) {
          left: ($i - 1) * (120% / $numOfBlobs);
          transition-delay: ($i - 1) * 0.08s;
        }
      }

      .blob-btn:hover & {
        transform: translateZ(0) scale(1.7);

        @supports (filter: url("#goo")) {
          transform: translateZ(0) scale(1.4);
        }
      }
    }
  }

</style>