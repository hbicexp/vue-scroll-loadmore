<template>
  <div id="app3" v-scroll-loadmorebody="loadItem">
    <div class="title">Load More Parent</div>
    <div class="item" v-for='(item, index) in Items' :key='index + item'>
      <span class="title">{{index+1}}.</span>{{item}}
    </div>
  </div>
</template>

<script>
export default {
  name: "detail",
  components: {},
  data: function() {
    return {
      Items: [],
    };
  },
  mounted: function() {
    this.loadItem();
  },
  methods: {
    loadItem: function() {
      this.$set(this.Items, this.Items.length, Math.random())
    }
  }
};
</script>
