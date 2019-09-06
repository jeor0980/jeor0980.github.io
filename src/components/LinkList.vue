<template>
  <div class="link-list">
    <a v-for="link in links" :key="link.id" :href="link.url" class="btn btn-link d-block" target="_blank">{{link.title}}</a>
  </div>
</template>

<script>
export default {
  data () {
    return {
      links: [
        // {
        //   title: 'Pieter Montoulieu', /* Button Label */
        //   url: 'https://pi-mont.github.io/resume/' /* Button Url */
        // },
        {
          title: 'Tres Leches KEXP Peformance',
          url: 'https://youtu.be/1sikxtPPuxY'
        }
      ]
    }
  }
}
</script>
