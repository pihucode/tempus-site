<template>
  <div class="container">
    <h2 class="section-header">Screenshots</h2>
    <div class="container-screenshots">
      <expandable-image
        class="screenshot"
        :src="require('../assets/screenshot-2-12.jpg')"
        alt="level 2-12"
        :close-on-background-click="true"
      />
      <expandable-image
        class="screenshot"
        :src="require('../assets/screenshot-1-4.jpg')"
        alt="level 2-12"
        :close-on-background-click="true"
      />
      <expandable-image
        class="screenshot"
        :src="require('../assets/screenshot-3-9.jpg')"
        alt="level 3-9"
        :close-on-background-click="true"
      />
      <expandable-image
        class="screenshot"
        :src="require('../assets/screenshot-1-15.jpg')"
        alt="level 1-15"
        :close-on-background-click="true"
      />
      <expandable-image
        class="screenshot"
        :src="require('../assets/screenshot-2-15.jpg')"
        alt="level 2-15"
        :close-on-background-click="true"
      />
      <expandable-image
        class="screenshot"
        :src="require('../assets/bg_past_lv_1.jpg')"
        alt="level 1 past world background"
        :close-on-background-click="true"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Gallery",
  components: {},
  props: {}
};
</script>

<style scoped>
.container {
  padding: 26px 0;
  /* background: linear-gradient(
    rgba(255, 255, 255, 0.16),
    rgba(255, 255, 255, 0.05),
    rgba(0, 39, 65, 0.85),
    rgba(5, 10, 32, 0.467)
  ); */
  background-color: rgba(255, 255, 255, 0.16);
  margin: 0 48px;
  margin-bottom: 72px;
}

.container-screenshots {
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  justify-content: center;
}

.screenshot {
  width: 300px;
  padding: 24px;
  /* margin: 24px; */
}
</style>