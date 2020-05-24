<template>
  <div class="container">
    <h2 class="section-header">Screenshots</h2>
    <div class="container-screenshots">
      <expandable-image
        class="screenshot"
        :src="require('../assets/bg_past_lv_1.jpg')"
        alt="dog"
        title="dog"
        :close-on-background-click="true"
      />
      <expandable-image
        class="screenshot"
        :src="require('../assets/bg_past_lv_2.jpg')"
        alt="dog"
        title="dog"
        :close-on-background-click="true"
      />
      <expandable-image
        class="screenshot"
        :src="require('../assets/bg_present_lv_1.jpg')"
        alt="dog"
        title="dog"
        :close-on-background-click="true"
      />
      <expandable-image
        class="screenshot"
        :src="require('../assets/bg_present_lv_2.jpg')"
        alt="dog"
        title="dog"
        :close-on-background-click="true"
      />
      <expandable-image
        class="screenshot"
        :src="require('../assets/bg_present_lv_2.jpg')"
        alt="dog"
        title="dog"
        :close-on-background-click="true"
      />
      <expandable-image
        class="screenshot"
        :src="require('../assets/bg_present_lv_2.jpg')"
        alt="dog"
        title="dog"
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
  margin-bottom: 48px;
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