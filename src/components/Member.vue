<template>
  <div class="member">
    <h3>{{name}}</h3>
    <h4>{{title}}</h4>
  </div>
</template>

<script>
export default {
  name: "Member",
  props: {
    name: String,
    title: String,
    icon: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.member {
  margin: 32px 16px;
  padding: 24px;
  width: 128px;
  height: 128px;
  text-align: center;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4));
}
</style>