<template>
  <div class="team-container">
    <h2 class="section-header">The Team</h2>
    <div class="memebers">
      <MemeberLine name="Lillian Hong" title="Project Lead" />
      <MemeberLine name="Max Tomsick" title="Programming Lead" />
      <MemeberLine name="Annie Deng" title="Design Lead" />
      <MemeberLine name="Rose Zhou" title="Level Editor Programmer" />
      <MemeberLine name="Tim Tran" title="JSON & Particle Programmer" />
      <MemeberLine name="Leo Decter" title="Music & SFX Designer" />
      <MemeberLine name="Elisha Chen" title="Enemy AI Programmer" />
      <MemeberLine name="Chelsea Wang" title="UI Designer" />
      <MemeberLine name="Pinxuan Huang" title="Character Designer" />
      <!-- <MemberLine name="" title="" /> -->
    </div>
  </div>
</template>

<script>
import MemeberLine from "./MemeberLine.vue";
export default {
  name: "TeamBlurb",
  components: {
    MemeberLine
  }
};
</script>

<style scoped>
.team-container {
  padding-top: 128px;
  padding-bottom: 24px;
  background: linear-gradient(rgba(0, 39, 65, 0.2), rgb(65, 34, 18));
  background-image: url("../assets/bg_end.jpg");
  background-size: 100%;
  background-repeat: no-repeat;
}

.memebers {
  margin: auto;
  padding: 24px;
  font-family: "Raleway Light", "Montserrat", "Gill Sans", "Gill Sans MT",
    Calibri, "Trebuchet MS", sans-serif;
  font-size: 1.2em;
  background: linear-gradient(
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.35),
    rgba(0, 0, 0, 0.35),
    rgba(173, 99, 99, 0.3)
  );
  width: 50%;
}
</style>