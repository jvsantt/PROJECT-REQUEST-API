<template>
  <div id="#app" class="caixa usuario">
    <h1>Projeto</h1>
    <span>
      <button class="criar" @click="criarUsuario">Criar Usuário</button>
      <button class="listar" @click="listarUsuario">Listar Usuários</button>
      <button class="editar" @click="editarUsuario">Editar Usuário</button>
      <button class="deletar" @click="deletarUsuario">Deletar Usuário</button>
    </span>
    <hr>
    <div class="componentes">
      <criar-usuario/>
      <editar-usuario/>
      <deletar-usuario/>
    </div>
  </div>
</template>

<script>
import criarUsuario from "./components/criarUsuario.vue";
import editarUsuario from "./components/editarUsuario.vue";
import deletarUsuario from "./components/deletarUsuario.vue";

export default {
  components: {
    criarUsuario,
    editarUsuario,
    deletarUsuario
  },

  data() {
    return {
      nome: "João"
    };
  },

  methods: {
    criarUsuario() {}
  }
};
</script>

<style scoped>
.container {
  background-color: #27363b;
  color: #fff;
  padding: 10px;
}

.container hr {
  margin: 20px 10px;
}

.componentes {
  display: flex;
}

.componentes > * {
  margin: 10px;
}
</style>
