<template>
  <div id="app">
    <usuario/>
  </div>
</template>

<script>
import usuario from "./components/Usuario.vue";

export default {
  name: "#app",
  components: {
    usuario
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

button {
  padding: 10px;
  color: #fff;
  font-size: 1.3rem;
}

.caixa {
  color: #fff;
  font-size: 1.8rem;
  padding: 50px;
  margin: 10px 0px;
}

.criar {
  border: 2px solid white;
  background-color: rgb(48, 46, 46);
}

.listar {
  border: 2px solid white;
  background-color: rgb(48, 46, 46);
}

.editar {
  border: 2px solid white;
  background-color: rgb(48, 46, 46);
}

.deletar {
  border: 2px solid white;
  background-color: rgb(48, 46, 46);
}

.usuario {
  border: 2px solid white;
  background-color: rgb(48, 46, 46);
}
</style>
