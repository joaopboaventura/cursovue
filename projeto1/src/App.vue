<template>
  <div id="app" >
    <router-link :to="{ name: 'Form' }">Clique para o formulario</router-link>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <titulo texto="Titulo do APP" cor="orange"></titulo>
    <!--<resultados :pessoasProp="pessoas"></resultados><br>
    <formulario labelnome="Nome do Funcionário" labelatividades="Atividades" labelunidade="Unidade de Alocação"
     :unidades="unidades"  ></formulario> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default { 
  name: 'app',
  components: {
    // HelloWorld 
   
  },
    data: function() {
  return {
      unidades: [{
                        codigo: 1,
                        unidade: "Sede"
                    },
                    {
                        codigo: 2,
                        unidade: "Tupis"
                    },
                ],
      pessoas: [{
                        nome: 'Paulo',
                        cargo: 'Analista',
                        unidade: 'Tupis',
                        salario: 10000.01,
                    },
                    {
                        nome: 'Natália',
                        cargo: 'Redatora',
                        unidade: 'Fazenda',
                        salario: 15000.01
                    },
                    {
                        nome: 'Patrícia',
                        cargo: 'Tester',
                        unidade: 'Tupis',
                        salario: 8000.01
                    },
                    {
                        nome: 'Fernando Silva',
                        cargo: 'Analista',
                        unidade: 'Fazenda',
                        salario: 25000.01
                    },
                ],
      
    }
  }  

         
  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
