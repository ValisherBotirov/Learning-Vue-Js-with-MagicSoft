<template>
  <li>
    <h2>{{ name }} {{ fav == "1" ? "(Favorite friend)" : "" }}</h2>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? "Hide" : "Show" }} Details
    </button>
    <hr />
    <button @click="toggleFav">
      {{ fav == "0" ? "Add" : "Remove" }} Favorite
    </button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phone }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ email }}
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  props: ["name", "phone", "email", "favorite"],
  data() {
    return {
      detailsAreVisible: false,
      fav: this.favorite,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFav() {
      this.fav = !this.fav;
    },
  },
};
</script>
