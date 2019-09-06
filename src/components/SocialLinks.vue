<template>
  <ul class="list-inline mb-0">
    <li v-for="account in socialAccounts" :key="account.id" class="list-inline-item">
      <a :href="account.url" target="_blank">
        <i :class="['fa fa-2x', 'fa-' + account.company]"></i>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  data () {
    return {
      socialAccounts: [
        // {
        //   company: 'twitter', /* Used for font-awesome icon */
        //   url: 'https://twitter.com/' /* URL for social account */
        // },
        {
          company: 'twitter',
          url: 'https://twitter.com/topo_95'
        },
        {
          company: 'github',
          url: 'https://github.com/jeor0980'
        },
        {
          company: 'spotify',
          url: 'https://open.spotify.com/user/12736438?si=NfzdFGdrTnmREzdc7CEBcg'
        }
      ]
    }
  }
}
</script>

<style>

</style>
