<template>
  <div id="app">
    <TitleView />
    <About />
    <Gallery />
    <!-- <TeamSection /> -->
    <TeamBlurb />
    <Footer />
  </div>
</template>

<script>
import TitleView from "./components/TitleView.vue";
import About from "./components/About.vue";
import Gallery from "./components/Gallery.vue";
// import TeamSection from "./components/TeamSection.vue";
import TeamBlurb from "./components/TeamBlurb.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    TitleView,
    About,
    Gallery,
    // TeamSection,
    TeamBlurb,
    Footer
  }
};
</script>

<style>
body {
  margin: 0 !important;
}

#app {
  font-family: "Gill Sans Ultra Bold", "Gill Sans", "Arial";
  text-align: center;
  color: white;
  background-color: #002741;
}
</style>
