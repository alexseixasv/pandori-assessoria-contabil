# App Nilandra Tarot

## Descrição

Esta aplicação é um MVP para leitura de Tarot e mapa astral, permitindo que usuários façam perguntas, recebam respostas parciais com base em cartas aleatórias, e desbloqueiem o conteúdo completo mediante pagamento via AppMax. A aplicação também inclui uma área pós-login para usuários que realizaram compras, onde podem acessar leituras anteriores, acompanhar gastos, editar dados pessoais e agendar consultas. Para usuários que estão na versão grátis, banners com ofertas são exibidos.

## Funcionalidades

- Sorteio de 6 cartas de Tarot com geração de resposta parcial via API da OpenAI.
- Integração com o gateway de pagamento AppMax para desbloqueio de respostas completas.
- Cadastro de leads (nome, email, telefone e pergunta).
- Área administrativa para acompanhamento de leads, receita e previsão de crescimento.
- Área pós-login para usuários que já compraram conteúdo:
  - Visualização de leituras anteriores.
  - Acompanhamento de gastos.
  - Alteração de dados pessoais.
  - Agendamento de consultas via WhatsApp.
  - Banners com ofertas e descontos.
- Google Analytics para monitoramento de comportamento de usuários.

## Tecnologias

- **Frontend:** VueJS
- **Backend:** Supabase (PostgreSQL, API REST, JWT)
- **Pagamento:** AppMax
- **Outras:** OpenAI API, Google Analytics

## Instalação

### Pré-requisitos
- Node.js instalado.
- Conta no Supabase configurada.
- Chave API da OpenAI.

### Passos para rodar o projeto:

1. Clone o repositório:
- **bash**: git clone https://github.com/seu-usuario/app-nilandra-tarot.git

2. Instale as dependências:
- **bash**: npm install

3. Configure as variáveis de ambiente:
- **Crie um arquivo .env**: com suas chaves para Supabase, OpenAI e AppMax.

4. Inicie o projeto:
- **bash**: npm run serve
