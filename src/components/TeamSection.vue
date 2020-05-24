<template>
  <div class="team-section">
    <div class="team-container">
      <h2>Meet the Team</h2>
      <MemberContainer />
    </div>
  </div>
</template>

<script>
import MemberContainer from "./MemberContainer.vue";

export default {
  name: "TeamSection",
  components: {
    MemberContainer
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.team-section {
  margin: auto;
  padding-top: 128px;
}
.team-container {
  padding: 64px;
  background: url("../assets/team_bg.jpg");
  background-size: 100%;
  background-repeat: no-repeat;
}

h2 {
  font-size: 2.4em;
}
</style>