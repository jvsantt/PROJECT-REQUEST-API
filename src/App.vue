<template>
  <div id="app">
    <h1>Cadastro de usuário</h1>
    <div class="conteudo">
      <form class="painel">
        <div class="cabecalho">Formulário</div>
        <Rotulo nome="Nome">
          <input type="text">
        </Rotulo>
        <Rotulo nome="Senha">
          <input type="password">
        </Rotulo>
        <Rotulo nome="Conta do banco">
          <input type="text">
        </Rotulo>

        <hr>

        <button>Enviar</button>
      </form>
      <div class="painel">
        <div class="cabecalho">Resultado</div>
        <Rotulo nome="Nome">
          <span>???</span>
        </Rotulo>
        <Rotulo nome="Senha">
          <span>???</span>
        </Rotulo>
        <Rotulo nome="Conta do banco">
          <span>???</span>
        </Rotulo>
      </div>
    </div>
  </div>
</template>

<script>
import Rotulo from "./components/Rotulo.vue";
import Escolha from "./components/Escolha.vue";

export default {
  name: "app",
  components: { Rotulo, Escolha }
};
</script>

<style>
body {
  background-color: #ececec;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  display: flex;
  flex-direction: column;
}

.conteudo {
  display: flex;
}

.painel {
  flex: 1;
  background: #fff;
  margin: 0px 10px;
  padding: 20px;
  border: 1px solid #aaa;
  border-radius: 5px;
}

.painel .cabecalho {
  width: 100%;
  background-color: #ddd;
  padding: 10px 0px;
  border-radius: 5px;
  font-size: 1.4rem;
}

#app form button {
  float: right;
  margin: 10px 0px;
  padding: 10px 20px;
  font-size: 1.4rem;
  border-radius: 5px;
  color: #fff;
  background-color: #2196f3;
}

#app h1 {
  font-weight: 200;
  margin: 20px;
  padding: 0;
}

.mr-4 {
  margin-right: 40px;
}
</style>
