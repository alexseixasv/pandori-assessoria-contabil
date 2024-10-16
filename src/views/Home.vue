<template>
  <section>
    <div class="bg-zinc-900 text-white flex items-center justify-center py-20">
      <div
        class="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-center items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <!-- Coluna de texto -->
        <div class="flex flex-col justify-center">
          <h1 class="max-w-3xl text-start font-bold text-4xl md:text-5xl mb-5">
            Bem-vindo à <span class="text-teal-400">Pandori</span> Assessoria
            Contábil
          </h1>
          <p class="max-w-xl text-start text-base leading-7 text-gray-200 mb-9">
            Serviços especializados em contabilidade para empresas e pessoas
            físicas. Planejamento tributário, apuração de impostos e muito mais.
          </p>
          <!-- Botões de ação -->
          <div
            class="flex flex-col md:flex-row space-x-0 md:space-x-4 space-y-4 md:space-y-0"
          >
            <a
              href="#"
              class="bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition-all duration-300"
            >
              Solicite uma Consultoria
            </a>
            <a
              href="#"
              class="bg-transparent text-white px-6 py-3 rounded-full font-semibold shadow-lg border border-white hover:scale-105 transition-all duration-300"
            >
              Saiba Mais
            </a>
          </div>
        </div>

        <!-- Coluna de imagem -->
        <div class="flex justify-center">
          <img
            src="../assets/imagem-teste.png"
            alt="Imagem de Contabilidade"
            class="max-w-3xl"
          />
        </div>
      </div>
    </div>
  </section>
  <Separador />
  <section class="py-40 bg-zinc-900">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-extrabold text-white sm:text-4xl">
          Serviços que a
          <span class="text-teal-400">Pandori Assessoria Contábil</span> oferece
        </h2>
        <p class="mt-4 text-lg leading-6 text-gray-200">
          Oferecemos uma ampla gama de serviços contábeis para atender às suas
          necessidades empresariais e pessoais.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Loop para renderizar os serviços -->
        <ServiceCard
          v-for="(service, index) in services"
          :key="index"
          :title="service.title"
          :description="service.description"
          :icon="service.icon"
        />
      </div>
    </div>
  </section>
  <section class="py-40 bg-zinc-900">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div
        class="flex flex-col justify-center items-center gap-x-16 gap-y-5 xl:gap-28 lg:flex-row lg:justify-between max-lg:max-w-2xl mx-auto max-w-full"
      >
        <!-- Imagem ao lado -->
        <div class="w-full lg:w-1/2">
          <img
            src="https://pagedone.io/asset/uploads/1696230182.png"
            alt="Benefícios de escolher a Pandori Assessoria Contábil"
            class="w-full rounded-xl object-cover"
          />
        </div>

        <!-- Conteúdo dos Benefícios -->
        <div class="w-full lg:w-1/2">
          <div class="lg:max-w-xl">
            <div class="mb-6 lg:mb-16">
              <h6
                class="text-lg text-center font-medium text-teal-500 mb-2 lg:text-left"
              >
                Benefícios
              </h6>
              <h2
                class="text-4xl text-center font-bold text-white leading-[3.25rem] mb-5 lg:text-left"
              >
                Por que escolher a Pandori Assessoria Contábil?
              </h2>
            </div>

            <!-- Accordion com funcionalidade de abrir/fechar -->
            <div class="accordion-group">
              <!-- Benefício 1 -->
              <div class="accordion pb-8 border-b border-solid border-gray-200">
                <button
                  class="accordion-toggle group inline-flex items-center justify-between text-xl font-normal leading-8 text-gray-200 w-full transition duration-500 hover:text-teal-500"
                  @click="toggleAccordion(1)"
                >
                  <h5>Atendimento Personalizado</h5>
                  <svg
                    :class="{ 'rotate-180': activeAccordion === 1 }"
                    class="text-gray-900 transition duration-500 group-hover:text-teal-500"
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                      stroke="currentColor"
                      stroke-width="1.6"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </button>
                <div
                  v-show="activeAccordion === 1"
                  class="accordion-content w-full px-0 overflow-hidden pr-4 transition-all duration-500"
                >
                  <p class="text-base font-normal text-white">
                    Atendimento feito sob medida para as necessidades da sua
                    empresa, oferecendo soluções específicas para a sua
                    realidade contábil.
                  </p>
                </div>
              </div>

              <!-- Benefício 2 -->
              <div class="accordion py-8 border-b border-solid border-gray-200">
                <button
                  class="accordion-toggle group inline-flex items-center justify-between font-normal text-xl leading-8 text-gray-200 w-full transition duration-500 hover:text-teal-500"
                  @click="toggleAccordion(2)"
                >
                  <h5>Especialização em Pequenas Empresas e MEIs</h5>
                  <svg
                    :class="{ 'rotate-180': activeAccordion === 2 }"
                    class="text-gray-900 transition duration-500 group-hover:text-teal-500"
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                      stroke="currentColor"
                      stroke-width="1.6"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </button>
                <div
                  v-show="activeAccordion === 2"
                  class="accordion-content w-full px-0 overflow-hidden pr-4 transition-all duration-500"
                >
                  <p class="text-base text-white font-normal">
                    Expertise em atender microempreendedores individuais (MEIs)
                    e pequenas empresas, com soluções focadas em crescimento e
                    conformidade tributária.
                  </p>
                </div>
              </div>

              <!-- Benefício 3 -->
              <div class="accordion py-8 border-b border-solid border-gray-200">
                <button
                  class="accordion-toggle group inline-flex items-center justify-between text-xl font-normal leading-8 text-gray-200 w-full transition duration-500 hover:text-teal-500"
                  @click="toggleAccordion(3)"
                >
                  <h5>Eficiência no Gerenciamento Fiscal</h5>
                  <svg
                    :class="{ 'rotate-180': activeAccordion === 3 }"
                    class="text-gray-900 transition duration-500 group-hover:text-teal-500"
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                      stroke="currentColor"
                      stroke-width="1.6"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </button>
                <div
                  v-show="activeAccordion === 3"
                  class="accordion-content w-full px-0 overflow-hidden pr-4 transition-all duration-500"
                >
                  <p class="text-base text-white font-normal">
                    Otimização de processos fiscais e contábeis, garantindo
                    eficiência na apuração de impostos e cumprimento das
                    obrigações fiscais com tranquilidade.
                  </p>
                </div>
              </div>

              <!-- Benefício 4 -->
              <div class="accordion py-8">
                <button
                  class="accordion-toggle group inline-flex items-center justify-between text-xl font-normal leading-8 text-gray-200 w-full transition duration-500 hover:text-teal-500"
                  @click="toggleAccordion(4)"
                >
                  <h5>Transparência e Confiança</h5>
                  <svg
                    :class="{ 'rotate-180': activeAccordion === 4 }"
                    class="text-gray-900 transition duration-500 group-hover:text-teal-500"
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                      stroke="currentColor"
                      stroke-width="1.6"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </button>
                <div
                  v-show="activeAccordion === 4"
                  class="accordion-content w-full px-0 overflow-hidden pr-4 transition-all duration-500"
                >
                  <p class="text-base text-white font-normal">
                    Trabalhamos com total transparência em todos os processos e
                    construímos uma relação de confiança duradoura com nossos
                    clientes, garantindo segurança em todas as transações.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <Depoimentos />
  <section class="py-24 bg-gray-900 text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <!-- Título da Seção -->
      <h2 class="text-4xl font-bold text-white sm:text-5xl mb-6">
        Especialidades Contábeis
      </h2>
      <p class="text-lg text-gray-400 mb-16 max-w-2xl mx-auto">
        Oferecemos uma ampla gama de serviços especializados em contabilidade
        para atender todas as suas necessidades financeiras e fiscais.
      </p>

      <!-- Especialidades em Cards com Imagens -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Especialidade 1 -->
        <div class="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
          <img
            class="w-full h-48 object-cover"
            src="https://source.unsplash.com/featured/?accounting,finance"
            alt="Folha de Pagamento"
          />
          <div class="p-6">
            <h3 class="text-2xl font-semibold mb-2">Folha de Pagamento</h3>
            <p class="text-base text-gray-400 mb-4">
              Gestão eficiente e completa da folha de pagamento, com soluções
              personalizadas para pequenas e médias empresas.
            </p>
            <a href="#" class="text-indigo-400 hover:text-indigo-300">
              Saiba mais &rarr;
            </a>
          </div>
        </div>

        <!-- Especialidade 2 -->
        <div class="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
          <img
            class="w-full h-48 object-cover"
            src="https://source.unsplash.com/featured/?taxes,finance"
            alt="Apuração de Impostos"
          />
          <div class="p-6">
            <h3 class="text-2xl font-semibold mb-2">Apuração de Impostos</h3>
            <p class="text-base text-gray-400 mb-4">
              Serviços de apuração e planejamento tributário para garantir
              conformidade e otimização fiscal.
            </p>
            <a href="#" class="text-indigo-400 hover:text-indigo-300">
              Saiba mais &rarr;
            </a>
          </div>
        </div>

        <!-- Especialidade 3 -->
        <div class="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
          <img
            class="w-full h-48 object-cover"
            src="https://source.unsplash.com/featured/?business"
            alt="Consultoria para MEIs"
          />
          <div class="p-6">
            <h3 class="text-2xl font-semibold mb-2">Consultoria para MEIs</h3>
            <p class="text-base text-gray-400 mb-4">
              Atendimento especializado para Microempreendedores Individuais,
              ajudando no crescimento e na gestão eficiente.
            </p>
            <a href="#" class="text-indigo-400 hover:text-indigo-300">
              Saiba mais &rarr;
            </a>
          </div>
        </div>

        <!-- Especialidade 4 -->
        <div class="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
          <img
            class="w-full h-48 object-cover"
            src="https://source.unsplash.com/featured/?tax"
            alt="Declaração de IR"
          />
          <div class="p-6">
            <h3 class="text-2xl font-semibold mb-2">Declaração de IR</h3>
            <p class="text-base text-gray-400 mb-4">
              Facilite sua declaração de imposto de renda com nosso suporte
              especializado para pessoas físicas e jurídicas.
            </p>
            <a href="#" class="text-indigo-400 hover:text-indigo-300">
              Saiba mais &rarr;
            </a>
          </div>
        </div>

        <!-- Especialidade 5 -->
        <div class="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
          <img
            class="w-full h-48 object-cover"
            src="https://source.unsplash.com/featured/?consulting,finance"
            alt="Consultoria Tributária"
          />
          <div class="p-6">
            <h3 class="text-2xl font-semibold mb-2">Consultoria Tributária</h3>
            <p class="text-base text-gray-400 mb-4">
              Consultoria tributária avançada, ajudando a reduzir custos e
              melhorar a eficiência fiscal da sua empresa.
            </p>
            <a href="#" class="text-indigo-400 hover:text-indigo-300">
              Saiba mais &rarr;
            </a>
          </div>
        </div>

        <!-- Especialidade 6 -->
        <div class="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
          <img
            class="w-full h-48 object-cover"
            src="../assets/imagem-teste.png"
            alt="Consultoria Trabalhista"
          />
          <div class="p-6">
            <h3 class="text-2xl font-semibold mb-2">Consultoria Trabalhista</h3>
            <p class="text-base text-gray-400 mb-4">
              Soluções trabalhistas, garantindo que sua empresa atenda às normas
              e legislações com segurança e agilidade.
            </p>
            <a href="#" class="text-indigo-400 hover:text-indigo-300">
              Saiba mais &rarr;
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Depoimentos from "../components/Depoimentos.vue";
import Separador from "../components/Separador.vue";
import ServiceCard from "../components/ServiceCard.vue";

export default {
  data() {
    return {
      activeAccordion: null,
      services: [
        {
          title: 'Folha de Pagamento',
          description:
            'Gerenciamento completo da folha de pagamento para sua empresa, garantindo conformidade e eficiência.',
          icon: 'receipt_long',
        },
        {
          title: 'Planejamento tributário',
          description:
            'Ajudamos sua empresa a otimizar a carga tributária com estratégias eficazes e seguras.',
          icon: 'calculate',
        },
        {
          title: 'Consultorias Contábeis e Tributárias',
          description:
            'Consultoria especializada para garantir a saúde financeira e fiscal da sua empresa.',
          icon: 'gavel',
        },
        {
          title: 'Declaração de Imposto de Renda',
          description:
            'Consultoria para preparar e garantir o cumprimento das obrigações fiscais do Imposto de Renda.',
          icon: 'assignment',
        },
        {
          title: 'Assessoria para MEIs',
          description:
            'Oferecemos assessoria completa para microempreendedores individuais, desde abertura até gestão fiscal.',
          icon: 'storefront',
        },
        {
          title: 'Serviços para pessoas físicas',
          description:
            'Consultoria especializada para organizar e otimizar suas finanças pessoais e tributárias.',
          icon: 'person',
        },
      ],
    };
  },
  components: {
    Separador,
    Depoimentos,
    ServiceCard,
  },
  methods: {
    toggleAccordion(index) {
      this.activeAccordion = this.activeAccordion === index ? null : index;
    },
  },
};
</script>
