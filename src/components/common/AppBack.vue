<template>
    <div class='back'>
      <div class='container'>
        <span>{{ name }}</span>
        <h1>{{ title }}</h1>
      </div>
      <img :src="cover" alt='' />
    </div>
  </template>
  
  <script>
  export default {
    name: 'AppBack',
    props: {
      name: String,
      title: String,
      cover: String
    }
  }
  </script>