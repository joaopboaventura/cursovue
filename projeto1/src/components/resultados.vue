<template>
<div>
        <h2>Lista de Funcionários</h2>
        <table class="table" border="1" style="width:100%" name="resultados">
            <thead class="thead-dark">
                <tr>
                    <th scope="col">Nome</th>
                    <th scope="col">Cargo</th>
                    <th scope="col">Unidade</th>
                    <th align="right" scope="col">Salário</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="pessoa in pessoasProp" :key="pessoa.nome">
                    <td v-text="pessoa.nome"></td>
                    <td v-text="pessoa.cargo"></td>
                    <td v-text="pessoa.unidade"></td>
                    <td align="right" v-text="pessoa.salario"></td>
                </tr>
                <tr v-if="(!pessoasProp)">
                    <td colspan="4">SEM DADOS</td>
                </tr>
                <tr v-else>
                    <td colspan="4" align="center">
                        <strong>Total salários computed: {{somarSalariosComputed}}</strong><br>
                        <!-- <strong>Total salários method: {{somarSalariosMethod()}}</strong><br>  -->
                    </td>
                </tr>
                <strong>Total computed: {{contadorComputed}}</strong><br> 
                <strong>Total methods: {{contadorMethod}}</strong><br> 
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
props: ['pessoasProp'],
data(){
    return {
        contadorMethod: 0,
        contadorComputed: 0,
    }
},
computed: {
    somarSalariosComputed(){
        this.contadorComputed++;
        let somaSalarios=0.00;
        for(let pessoa of this.pessoasProp){
            somaSalarios = Math.round(somaSalarios + pessoa.salario*100);
        }
        return somaSalarios/100;
        }
    },
methods: {
    somarSalariosMethod(){
        this.contadorMethod++; 
        let somaSalarios=0.00;
        for(let pessoa of this.pessoasProp){
            somaSalarios = Math.round(somaSalarios + pessoa.salario*100);
        }
        return somaSalarios/100;
        }
    }

}
</script>

<style>
</style>