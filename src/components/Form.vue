<template>
  <div class="form">
    <h2>Skapa meetup</h2>
    <div class="part2">
      <input type="text" class="put long" placeholder="Namn" v-model="newEvent.name" />
      <input type="text" class="put long" placeholder="Plats" v-model="newEvent.location" />
      <input
        type="text"
        onfocus="(this.type='date')"
        class="put long"
        placeholder="Datum"
        v-model="newEvent.date"
      />
    </div>
    <div class="part1">
      <input
        type="text"
        onfocus="(this.type='time')"
        class="put long"
        placeholder="Tid"
        v-model="time"
      />
    </div>
    <div class="part1">
      <select v-model="selectedType" class="short">
        <option disabled value>Välj en Kategori</option>
        <option>Adventure</option>
        <option>Health</option>
        <option>Social</option>
      </select>

      <select v-model="selectedImage" class="short">
        <option disabled value>Välj en image</option>
        <optgroup label="Adventure">
          <option value="kajsaskör.jpg">Kajsaskör</option>
          <option value="palace.jpg">Palace</option>
          <option value="familyskiing.jpg">Familyskiing</option>
        </optgroup>
        <optgroup label="Health">
          <option value="yoga.jpg">Yoga</option>
          <option value="meditera.jpg">Meditera</option>
          <option value="healthycooking.jpg">Healthycooking</option>
        </optgroup>
        <optgroup label="Social">
          <option value="womensfika.jpg">Womensfika</option>
          <option value="whiskey.jpg">Whiskey</option>
          <option value="travel.jpg">Travel</option>
        </optgroup>
      </select>
    </div>
    <button @click="createEvents" class="formButton">Skapa meetup</button>
    <p class="error-text" v-show="!valid">Please fill in the blanks</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newEvent: {
        name: "",
        location: "",
        date: "",
      },
      time: "",
      valid: true,
      loading:false,
      selectedType: "",
      selectedImage: "",
    };
  },
  methods: {
    createEvents() {
      this.newEvent.type = this.selectedType;
      this.newEvent.image = this.selectedImage;
      if (
        this.newEvent.name != "" &&
        this.newEvent.location != "" &&
        this.newEvent.date != ""
      ) {
        this.newEvent.date = this.newEvent.date + " " + this.time;
        this.loading = true;
        this.$store.dispatch("createEvent", this.newEvent);
        this.valid = true;
        
       this.$router.push("/");
      } else {
        this.valid = false;
      }
     
    },

    
  },
};
</script>

<style lang ="scss" scoped>
@import "../assets/scss/main.scss";
@import "../assets/scss/form.scss";
.form {
  width: 432px;
  height: 90%; 
  background-color: $darkPurple;
  display: flex;
  flex-direction: column;
  margin: auto auto;
  .put {
    border: 1px solid rgba(255, 255, 255, 0.7);
    box-sizing: border-box;
    border-radius: 3px;
    margin-bottom: 10px;
    background: transparent;
    color: $white;
  }
  .long {
    width: 400px;
    height: 40px;
  }
  h2 {
    font-family: "Fira Sans";
    font-style: normal;
    font-weight: bold;
    font-size: 26px;
    line-height: 31px;
    color: $pink;
    margin: 10px;
  }
  .short {
    width: 190px;
    height: 40px;
  }
  select {
    background-color: $darkPurple;
    color: $white;
  }

  .part1 {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  .part2 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  /*
    cursor: pointer;
    outline:none;
    margin-left:10px;
    color: $white;
    text-align: center;*/

  .formButton {
    border-radius: 3px;
    width: 169px;
    height: 40px;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    background: $pink;
    align-self: center;
    color: $black;
    margin-top: 50px;
  }
  input {
    padding-left: 6px;
  }
  input:hover {
    border: 1px solid rgba(24, 160, 251);
  }
  .error-text {
    color: red;
    margin: 8px 0 0;
    font-size: 14px;
  
  }
}
</style>