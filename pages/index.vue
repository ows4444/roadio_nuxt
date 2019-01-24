
<template>
  <section class="container">
    <div>
      <logo />
      <h1 class="title">
        roadio_nuxt
      </h1>
      <h2 class="subtitle">
        My divine Nuxt.js project
      </h2>
      <vuetable :fields="fields" />
      <vuetable-pagination ref="pagination" />
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >
          GitHub ={{ sd.name }} time {{ now }}
        </a>
      </div>
    </div>
  </section>
</template>


<script>
import Logo from '~/components/Logo.vue'
import moment from 'moment'
import { db } from '~/plugins/firebase.js'
import { Vuetable, VuetablePagination } from 'vuetable-2'
export default {
  components: {
    Logo,
    Vuetable,
    VuetablePagination
  },
  data() {
    return {
      database: db,
      sd: '',
      fields: ['name'],
      now: ''
    }
  },
  async created() {
    await this.database.ref('/users').set({ name: 'Ows' })
    setInterval(() => {
      this.now = moment().format('hh:mm:ss a')
    }, 1000)
    const snap = await this.database.ref('/users').once('value')
    this.sd = snap.val()
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
