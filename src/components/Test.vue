<template>
  <div>Sync Props: {{ myprop.test }}</div>
  <button @click="update()">Update</button>
</template>

<script>
  export default {
    props: {
      myprop: Object,
    },
    methods: {
      update() {
        this.myprop.test = 'Test1111'
      },
    },
  }
</script>
