<template>
  <div class="Carusel">
    <h2 class="Carusel__title">
      <span class='Carusel__title_regualar'>
        {{title1}}
      </span>
      <span class='Carusel__title_middle'>
        {{title2}}
      </span>
      <span class='Carusel__title_bold'>
        {{title3}}
      </span>
    </h2>
  </div>
</template>

<script>
export default {
  name: 'Carusel',
  props: {
    'title1': String,
    'title2': String,
    'title3': String,
  },
}
</script>

<style lang='scss'>

  .Carusel{
    &__title{
      max-width: 743px;
      font-size: 28px;
      margin: auto;
      &_middle{
        color: #FF994F;
      }
      &_bold{
        text-transform: uppercase;
        font-weight: bold;
      }
    }
  }

</style>