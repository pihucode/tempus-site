<template>
  <div class="hero">
    <link href="/your-path-to-fontawesome/css/fontawesome.css" rel="stylesheet" />
    <link href="/your-path-to-fontawesome/css/brands.css" rel="stylesheet" />
    <link href="/your-path-to-fontawesome/css/solid.css" rel="stylesheet" />
    <img class="img-logo" alt="Tempus logo" src="../assets/logo.gif" />

    <div class="hero-container">
      <div class="info">
        <h2>A fast-paced action puzzle game</h2>

        <a
          class="btn"
          href="https://github.com/clillianhong/tempus/releases/download/Showcase/mac_tempus.zip"
          download="Tempus"
        >
          <img src="../assets/windows-brands.svg" class="icon" alt />Download for Windows
        </a>

        <a
          class="btn"
          href="https://github.com/clillianhong/tempus/releases/download/Showcase/windows_tempus.zip"
          download="Tempus"
        >
          <img src="../assets/apple-brands.svg" class="icon" alt />Download for Mac
        </a>
        <!-- <h3>{{msg}}</h3> -->
      </div>

      <video controls>
        <source src="../assets/showcase_trailer.mp4" type="video/mp4" />Sorry, your browser doesn't support embedded videos.
      </video>
    </div>
  </div>
</template>

<script>
export default {
  name: "TitleView",
  props: {
    msg: String
  }
};
</script>

<style lang="scss">
.hero {
  background-image: url("../assets/bg_v2.png");
  background-size: 100%;
  background-repeat: no-repeat;
}
.img-logo {
  width: 60vw;
  max-width: 620px;
  min-width: 320px;
  margin-top: 128px;
  filter: drop-shadow(3px 24px 6px rgba(0, 0, 0, 0.4));
}

.hero-container {
  // background: linear-gradient(
  //   rgba(0, 0, 0, 0),
  //   rgba(0, 0, 0, 0.3),
  //   rgba(0, 0, 0, 0)
  // );
  max-width: 75vw;
  margin: auto;
  // margin-top: 64px;
}

.info {
  padding: 12px;
}

.icon {
  position: relative;
  top: 8px;
  width: 32px;
  height: 32px;
  padding-right: 12px;
}

.btn {
  display: inline-block;
  padding: 0 14px;
  padding-bottom: 16px;
  margin: 8px 14px;
  border-radius: 6px;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: bold;
  font-family: "Raleway Light", "Montserrat", "Gill Sans", "Gill Sans MT",
    Calibri, "Trebuchet MS", sans-serif;
  letter-spacing: 2px;
  color: white;
  font-size: 16px;
  text-align: center;
  background: linear-gradient(
    45deg,
    rgba(59, 173, 227, 1) 0%,
    rgba(87, 111, 230, 1) 25%,
    rgba(152, 68, 183, 1) 51%,
    rgba(255, 53, 127, 1) 100%
  );
}

a:hover {
  text-decoration: underline;
}

.section-header {
  letter-spacing: 2px;
  font-size: 2em;
}

h2 {
  font-size: 1.75em;
  margin: 12px;
  text-shadow: 4px 4px 8px rgb(79, 190, 255);
  padding-bottom: 12px;
  font-family: "Raleway Light", "Montserrat", "Gill Sans", "Gill Sans MT",
    Calibri, "Trebuchet MS", sans-serif;
}

h3 {
  font-size: 1.35em;
  margin: 12px;
  padding-top: 6px;
  text-shadow: 4px 4px 8px rgba(144, 220, 255, 0.8);
}

video {
  width: 900px;
  max-width: 80vw;
  min-width: 240px;
  margin-top: 32px;
  margin-left: auto;
  margin-right: auto;
}
</style>
