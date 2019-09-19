import Vue from 'vue'
import App from './App.vue'
import Titulo from './components/titulo.vue'
import Resultados from './components/resultados.vue'
import Formulario from './components/formulario.vue'
import VueRouter from 'vue-router'
Vue.config.productionTip = false;


Vue.component('titulo',Titulo);
Vue.component('resultados',Resultados);
Vue.use(VueRouter);

const routes = [
  {path:'/', name: 'Home', component: App},
  {path:'/tabela', name: 'Tabela', component: Resultados,
    props: { pessoasProp: [{
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
    ] 
  }},
  {path:'/formulario', name: 'Form', component: Formulario,
  props:{unidades: [{
    codigo: 1,
    unidade: "Sede"
},
{
    codigo: 2,
    unidade: "Tupis"
},
],
} },
]

const router = new VueRouter({
  mode: 'history', 
  routes,
})


new Vue({
  router,
}).$mount('#app');
