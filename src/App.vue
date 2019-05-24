<template>
  <div id="app" class="container">
    <h1>Cadastro de Usuários</h1>
    <b-card>
      <b-form-group label="Nome:">
        <b-form-input type="text" size="lg" v-model="usuario.nome" placeholder="Informe o Nome"></b-form-input>
      </b-form-group>
      <b-form-group label="E-mail:">
        <b-form-input type="email" size="lg" v-model="usuario.email" placeholder="Informe o E-mail"></b-form-input>
      </b-form-group>
      <hr>

      <b-button @click="salvar" size="lg" variant="primary">Salvar</b-button>
      <b-button @click="obterUsuarios" size="lg" variant="success" class="ml-2">Obter Usuários</b-button>
    </b-card>
    <hr>

    <b-list-group>
      <b-list-group-item v-for="(usuario,id) in usuarios" :key="id">
        <strong>Nome:</strong>
        {{usuario.name}}
        <br>
        <strong>E-mail:</strong>
        {{usuario.email}}
        <br>
        <strong>ID</strong>
        {{id}}
        <br>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      usuarios: [],
      usuario: {
        nome: "",
        email: ""
      }
    };
  },

  methods: {
    salvar() {
      this.$http
        .post("http://frontendapi.cm2tech.com.br/users", this.usuario)
        .then(resp => {
          (this.usuario.name = ""), (this.usuario.email = "");
        });
    },

    obterUsuarios() {
      axios("http://frontendapi.cm2tech.com.br/users").then(res => {
        this.usuarios = res.data["hydra:member"];
      });
    }
  }
  // created() {
  //   this.$http
  //     .post("usuarios.json", {
  //       nome: "João",
  //       email: "joao@gmail.com"
  //     })
  //     .then(res => console.log(res));
  // }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 1.5rem;
}

#app h1 {
  text-align: center;
  margin: 50px;
}
</style>
