<template>
    <section class="relative overflow-hidden bg-gradient-to-r from-primary to-secondary pb-9 pt-3">
      <div
        class="absolute whitespace-nowrap text-white font-bold text-base tracking-wide w-full flex justify-center"
        :style="{ transform: `translateX(${scrollPosition}px)` }"
      >
        @pandoricontabil | @pandoricontabil | @pandoricontabil | @pandoricontabil @pandoricontabil | @pandoricontabil | @pandoricontabil | @pandoricontabil @pandoricontabil | @pandoricontabil | @pandoricontabil | @pandoricontabil @pandoricontabil | @pandoricontabil | @pandoricontabil | @pandoricontabil @pandoricontabil | @pandoricontabil | @pandoricontabil | @pandoricontabil @pandoricontabil | @pandoricontabil | @pandoricontabil | @pandoricontabil @pandoricontabil | @pandoricontabil | @pandoricontabil | @pandoricontabil @pandoricontabil | @pandoricontabil | @pandoricontabil | @pandoricontabil @pandoricontabil | @pandoricontabil | @pandoricontabil | @pandoricontabil @pandoricontabil | @pandoricontabil | @pandoricontabil | @pandoricontabil @pandoricontabil | @pandoricontabil | @pandoricontabil | @pandoricontabil @pandoricontabil | @pandoricontabil | @pandoricontabil | @pandoricontabil 
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        scrollPosition: 0,
      };
    },
    methods: {
      handleScroll() {
        // Ajuste a velocidade do movimento ao fazer o scroll
        this.scrollPosition = window.scrollY * -0.5; // Velocidade ajustável
      },
    },
    mounted() {
      window.addEventListener("scroll", this.handleScroll);
    },
    beforeDestroy() {
      window.removeEventListener("scroll", this.handleScroll);
    },
  };
  </script>
  
  <style scoped>
  /* Pode customizar o estilo adicional aqui, se necessário */
  </style>
  