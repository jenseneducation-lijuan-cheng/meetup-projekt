<template>
  <div class="userSearch">
    <input class="search-input" type="text" v-model="userInput" @keyup="showList" />
    <button class="search-btn" @click="showList"></button>
  </div>
</template>

<script>
export default {
  props: ["events"],
  data() {
    return {
      userInput: "",
    };
  },
  computed: {
    filteredEvents() {
      return this.events.filter((event) => {
        return event.name.match(new RegExp(this.userInput, "i"));
      });
    },
  },
  methods: {
    showList() {
      if (this.userInput === "") {
        this.$emit("meetupMatch", this.events);
      } else {
        //this.isVisible = true;
        this.$emit("meetupMatch", this.filteredEvents);
      }
    },
  },
};
</script>

<style lang ="scss" scoped>
@import "../assets/scss/main.scss";
.userSearch {
  display: flex;
  position: relative;
  width: 400px;
}

.search-input {
  height: 40px;
  padding: 10px;
  z-index: 2;

  border: none;
  border-radius: 5px;
  width: 100%;

  &:focus {
    outline: 0;
  }
}

.search-btn {
  width: 40px;
  height: 40px;
  left: -20px;
  border-radius: 0 4px 4px 0;
  z-index: 999;

  &:hover::after {
    border-top: solid 2px lightsalmon;
  }

  &:hover::before {
    box-shadow: 0 0 0 2px lightblue;
  }
}

.search-btn::before {
  position: absolute;
  content: "";
  width: 15px;
  height: 15px;
  top: calc(50% - 9px);
  left: calc(50% - 9px);
  border-radius: 50%;
  box-shadow: 0 0 0 2px rgb(116, 94, 6);
}
.search-btn::after {
  position: absolute;
  content: "";
  width: 8px;
  height: 6px;
  top: calc(50% + 6px);
  left: calc(50% + 2px);
  border-top: solid 2px rgb(158, 136, 8);
  transform: rotate(45deg);
}
</style>