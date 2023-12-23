<template>
    <div class='heading'>
      <h1>{{ title }}</h1>
      <p>{{ subtitle }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AppHeading',
    props: {
      title: String,
      subtitle: String
    }
  }
  </script>