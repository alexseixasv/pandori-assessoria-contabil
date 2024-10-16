<template>
  <div class="bg-zinc-900 py-2 md:py-4 px-2 xl:px-32">
    <div class="flex items-center justify-between rounded-3xl px-8 py-4 bg-white bg-opacity-10 w-11/12 mx-auto">
      <!-- Logo -->
      <a href="#" class="flex items-center space-x-2">
        <img src="../assets/logo-white.svg" alt="Logo" class="w-32" />
      </a>

      <!-- Links de navegação -->
      <ul class="hidden lg:flex space-x-8 text-white font-medium">
        <li><a href="#" class="hover:text-primary">Home</a></li>
        <li><a href="#" class="hover:text-primary">Quem somos</a></li>
        <li><a href="#" class="hover:text-primary">Especialidades</a></li>
        <li><a href="#" class="hover:text-primary">Depoimentos</a></li>
        <li><a href="#" class="hover:text-primary">Serviços</a></li>
      </ul>

      <!-- Botão Gradiente -->
      <button
        class="hidden lg:flex bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:scale-105 transition-all duration-300"
      >
        Solicitar orçamento
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
/* Gradiente do botão */
.bg-gradient-to-r {
  background-image: linear-gradient(to right, #8A46FF, #039E96);
}
</style>
