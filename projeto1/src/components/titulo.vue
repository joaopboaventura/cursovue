<template>
    <div>
    <h1 :style="{color: cor}">{{texto}}</h1>
    </div>
</template>

<script>
export default {
    props: {
        texto: {
                    type: String,
                    default: 'Texto de exemplo',
                },
                cor: {
                    type: String,
                    default: 'red',
                }
    }


}
</script>

<style>

</style>