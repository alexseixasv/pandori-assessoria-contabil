<template>
    <div class="p-6 bg-transparent rounded-lg shadow hover:shadow-lg transition-shadow duration-300 relative overflow-hidden">
      <!-- Background animado -->
      <div class="absolute inset-0 bg-gradient-to-r from-primary to-secondary animate-gradient-x opacity-20 z-0"></div>
  
      <!-- Conteúdo da caixa -->
      <div class="relative z-10">
        <!-- Ícone do Material Icons -->
        <div class="mb-4">
          <span class="bg-indigo-600 p-4 rounded-xl flex max-w-14 items-center">
            <i class="material-icons text-white">{{ icon }}</i>
          </span>
        </div>
  
        <!-- Título -->
        <h2 class="text-lg font-bold text-white mb-2">{{ title }}</h2>
  
        <!-- Descrição -->
        <p class="text-sm text-gray-300">{{ description }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      title: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      icon: {
        type: String, // Agora o ícone é uma string com o nome do ícone do Material Icons
        required: true
      }
    }
  };
  </script>
  