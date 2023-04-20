<template>
  <div class="pollution">
    <div :title="index">
      <div v-if="index == 1">
        <img src="../../assets/airpollutionIcons/1.png" />
      </div>
      <div v-else-if="index == 2">
        <img src="../../assets/airpollutionIcons/2.png" />
      </div>
      <div v-else-if="index == 3">
        <img src="../../assets/airpollutionIcons/3.png" />
      </div>
      <div v-else-if="index == 4">
        <img src="../../assets/airpollutionIcons/4.png" />
      </div>
    </div>
  </div>
</template>

<script>

const API_key = process.env.VUE_APP_API_KEY;
const base_url = "https://api.openweathermap.org/data/2.5/";

export default {
  components: {},
  data() {
    return {
      index: "",
    };
  },
  mounted() {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      let airPollutionUrl = `${base_url}air_pollution?lat=${lat}&lon=${lon}&appid=${API_key}&units=metric`;
      // console.log(lat, lon);

      fetch(airPollutionUrl)
        .then((response) => response.json())
        .then((results) => {
          console.log(results);
          this.index = results.list[0].main.aqi;
        });
    });
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.pollution {
  img {
    width: 85px;
  }
}
</style>
