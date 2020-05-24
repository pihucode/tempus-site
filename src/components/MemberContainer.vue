<template>
  <div class="member-container">
    <div class="member-row">
      <Member name="Pancake" title="placeholder boi" icon />
      <Member name="Pancake" title="placeholder boi" icon />
      <Member name="Pancake" title="placeholder boi" icon />
    </div>
    <div class="member-row">
      <Member name="Pancake" title="placeholder boi" icon />
      <Member name="Pancake" title="placeholder boi" icon />
      <Member name="Pancake" title="placeholder boi" icon />
    </div>
    <div class="member-row">
      <Member name="Pancake" title="placeholder boi" icon />
      <Member name="Pancake" title="placeholder boi" icon />
      <Member name="Pancake" title="placeholder boi" icon />
    </div>
  </div>
</template>

<script>
import Member from "./Member.vue";

export default {
  name: "MemberContainer",
  components: {
    Member
  },
  props: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.member-container {
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  margin: auto;
  justify-content: center;
  /* background: transparent; */
}
</style>