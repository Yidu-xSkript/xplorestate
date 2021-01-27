<template>
  <a :href="`#${tab.id}`" data-toggle="tab">
    <div class="icon-circle">
      <i :class="tab.tab_icon"></i>
    </div>
    {{ tab.tab_name }}
  </a>
</template>

<script>
export default {
  props: {
    tab: {
      type: Object,
      default: {},
      required: true,
    },
  },
};
</script>

<style>
</style>
