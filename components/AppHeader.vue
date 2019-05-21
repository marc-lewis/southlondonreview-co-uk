<template>
    <header class="appHeader">
        <h1 class="appHeader__title">
            South London Review of Hand Dryers
        </h1>
    </header>
</template>

<script>
module.exports = {
    name: 'appHeader'
}
</script>

<style lang="scss">
@import '../assets/styles/common';

.appHeader {
    @include fontFamily('calson_fsbook');

    display: flex;
    font-size: 30px;
    width: 100%;
}

.appHeader__title {
    color: black;
}
</style>
