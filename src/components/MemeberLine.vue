<template>
  <div>
    <div class="name">{{name}}</div>
    <div class="title">{{title}}</div>
  </div>
</template>

<script>
export default {
  name: "MemberLine",
  props: {
    name: String,
    title: String
  }
};
</script>

<style scoped>
.name {
  width: 50%;
  display: inline-block;
  box-sizing: border-box;
  text-align: right;
  text-transform: uppercase;
  font-weight: bold;
  padding-bottom: 12px;
}

.title {
  text-align: left;
  padding-left: 24px;
  width: 50%;
  display: inline-block;
  box-sizing: border-box;
}
</style>