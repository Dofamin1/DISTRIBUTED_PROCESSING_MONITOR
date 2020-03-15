<template>
  <v-app>
      <div id="app">
        <img alt="Vue logo" id="logo" src="./assets/logo.png">
      </div>
  </v-app>
</template>

<script>
import SocketClient from './socketClient'
export default {
  name: 'App',
  created() {
    this.socketClient.onEvent('nodes_graph', this.onGraphChange);
    this.socketClient.onEvent('queue_length', this.onQueueLengthChange)
  },
  data: () => {
    return {
      socketClient: new SocketClient()
    }
  },
  methods: {
    onGraphChange(graph) {
      console.log(graph);
      throw new Error("onGraphChange is not implemented")
    },
    onQueueLengthChange(length) {
      console.log(length);
      throw new Error('onQueueLengthChange is not implemented')
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#logo {
  max-width: 50%;
  height: 300px;
}
#progress {
  max-width: 20%;
}
</style>
