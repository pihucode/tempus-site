<template>
  <div class="about">
    <div class="about-container">
      <p>
        A century after the Timewalkers fell, Fluz wakes up to find
        themselves responsible for recovering the Timewalkers’ most closely
        guarded secret in order to save them all.
      </p>

      <p>
        Tempus is a fast-paced action game that launches players into
        the heat of battle in a beautiful, strange fantasy world.
        Players inhabit Fluz, a powerful avian Timewalker, who can shift at
        will between the past and the present. This allows players to evade
        dangers in one time or leverage weapons from the other, as they dash
        between two worlds to survive and ultimately rewrite the timeline.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "About"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.about {
  /* width: 100vw; */
  margin: 64px 0;
  padding: 32px;
  background: url("../assets/bg_about.jpg");
  background-size: 100%;
  background-repeat: no-repeat;
}

.about-container {
  width: 50vw;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(173, 99, 99, 0.3));
  padding: 32px 48px;
  margin: 32px;
}

p {
  font-family: "Raleway Light", "Montserrat", "Gill Sans", "Gill Sans MT",
    Calibri, "Trebuchet MS", sans-serif;
  font-size: 1.2em;
  text-align: center;
}
</style>