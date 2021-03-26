<template>
    <div class="car">
      <h2>Name: {{carName}} </h2>
      <p>{{carYear}}</p>
    </div>
</template>

<script>
export default {
  props: ['carName', 'carYear']
}
</script>


