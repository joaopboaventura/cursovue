<template>
  <div>
    <router-link :to="{name: 'Home'}">Clique Home</router-link>
    <h2 style="color: darkgreen">Formulário</h2> 
    <form action="#" method="POST">
      <div style="text-align: left;" >
        <label for="nome" v-text="labelnome"></label>
        <label for="nome" style="margin-right: 5px;">:</label>
        <input
          @keydown="escondeDados()"
          v-model="nome"
          type="text"
          name="nome"
          id="nome"
          :placeholder="placeLabelnome"
        />
        <br />
      </div>
      <br />
      <div style="text-align: left;" >
        <label for="unidade" v-text="labelunidade"></label> <label for="unidade">:</label>
        <br />
        <select @change="escondeDados()" v-model="unidadeselecionada" name="unidade" id="unidade">
          <option value>Selecione uma opção</option>
          <option
            v-for="unidade in unidades"
            v-text="unidade.unidade"
            :value="unidade.codigo"
            :key="unidade.unidade"
          ></option>
        </select>
      </div>
      <br />
      <div style="text-align: left;" >
        <label for="atividades" v-text="labelatividades"></label>
        <label for="atividades">:</label>
        <br />
        <textarea
          @keydown="escondeDados()"
          v-model="atividades"
          name="atividades"
          id="atividades"
          cols="30"
          rows="10"
          :placeholder="placeLabelatividade"
        ></textarea>
      </div>
      <div style="text-align: left;" >
        <input type="button" @click="voltarHome" value="Voltar HOME" />
      </div>
    </form>
    <div v-if="dadosInformados" style="text-align: left;">
      <h1 style="color: darkorange">Resultado</h1>
      <div>
        <strong v-text="labelnome"></strong>
        <strong style="margin-right: 5px;">:</strong>
        <span v-text="nome"></span>
      </div>
      <div>
        <strong v-text="labelunidade"></strong>
        <strong style="margin-right: 5px;">:</strong>
        <span v-text="unidadeselecionada"></span>
      </div>
      <div>
        <strong v-text="labelatividades"></strong>
        <strong style="margin-right: 5px;">:</strong>
        <span v-text="atividades"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      unidadeselecionada: "",
      nome: "",
      atividades: "",
      dadosInformados: false
    };
  },
  props: {
    unidades: {
      type: Array
    },
    labelnome: {
      type: String,
      default: 'Nome',
      required: false,
    },
    labelunidade: {
      type: String,
      default: 'Unidade de Alocação',
      required: false,
    },
    labelatividades: {
      type: String,
      default: 'Atividades',
      required: false,
    }
  },
  computed: {
    verificaDados() {
      // this.dadosInformados =
      //   this.unidadeselecionada !== "" &&
      //   this.nome !== "" &&
      //   this.atividades !== "";
      // return this.dadosInformados;
      return true;
    },
    placeLabelnome() {
      return "Digite seu " + this.labelnome;
    },
    placeLabelatividade() {
      return "Digite " + this.labelatividades ;
    },
  },
  methods: {
    mostraDados() {
      if (!this.verificaDados) {
        alert("Informe tudo!"); 
      }
    },
    escondeDados() {
      this.dadosInformados = false;
    },
    voltarHome(){
      this.$router.push({name: 'Home'});
    }
  }
};
</script>

<style>
</style>