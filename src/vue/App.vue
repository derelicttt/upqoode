<template>
  <div>
    <NavBar></NavBar>
    <SVGpath></SVGpath>
    <MeetUS></MeetUS>
    <Under></Under>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import SVGpath from "./components/SVGpath";
import MeetUS from "./components/MeetUS";
import Under from "./components/Under";


export default {
  name: "App",
  components:{
    NavBar,
    SVGpath,
    MeetUS,
    Under,
  }
}
</script>

<style scoped>

</style>