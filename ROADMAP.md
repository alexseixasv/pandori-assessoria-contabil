### **Roadmap Atualizado para o MVP:**

#### **Semana 1: Planejamento e Configuração Inicial (7 dias)**
- **Objetivo:** Preparar o ambiente de desenvolvimento e definir as tecnologias necessárias.
- **Prazos:** De 9/10 até 15/10

1. **Configuração do Ambiente de Desenvolvimento (2 dias)**
   - Instalação do VueJS, Supabase e integração inicial no local de desenvolvimento.
   - Configuração básica de autenticação (JWT) e banco de dados no Supabase.
   - **Data:** Até 10/10.

2. **Estruturação da Homepage (3 dias)**
   - Criação do layout básico da homepage com VueJS.
   - Implementar o formulário de leads (nome, email, telefone, pergunta).
   - Integração com o Supabase para salvar os leads no banco de dados.
   - **Data:** Até 13/10.

3. **Configuração de API OpenAI e Geração de Cartas (2 dias)**
   - Integração com a API OpenAI para gerar respostas automáticas baseadas nas cartas tiradas.
   - Criar a lógica para gerar 6 cartas aleatórias e exibir a resposta parcialmente (com Blur).
   - **Data:** Até 15/10.

#### **Semana 2: Integração de Pagamento e Finalização da Homepage (7 dias)**
- **Objetivo:** Finalizar a funcionalidade principal da homepage e integrar o sistema de pagamento.
- **Prazos:** De 16/10 até 22/10

1. **Integração com AppMax para Pagamento (3 dias)**
   - Implementar o gateway de pagamento AppMax para desbloquear as respostas completas.
   - Testar o fluxo de pagamento e assegurar que o pagamento desbloqueie a resposta.
   - **Data:** Até 18/10.

2. **Testes e Correções de Bugs na Homepage (3 dias)**
   - Realizar testes completos da página de leitura (fluxo de leads, geração de cartas, pagamento).
   - Corrigir bugs e problemas de usabilidade.
   - **Data:** Até 21/10.

3. **Lançamento do MVP da Homepage (1 dia)**
   - Fazer o deploy da homepage.
   - **Data:** Até 22/10.

#### **Semana 3: Área Administrativa e Área Pós-Login (7 dias)**
- **Objetivo:** Criar a área administrativa e a área pós-login para usuários pagantes e grátis.
- **Prazos:** De 23/10 até 29/10

1. **Configuração do Subdomínio e Autenticação (2 dias)**
   - Configurar o subdomínio `admin.nilandratarot.com.br` e `app.nilandratarot.com.br`.
   - Implementar a autenticação (JWT) para garantir o acesso autorizado a áreas específicas.
   - **Data:** Até 25/10.

2. **Painel de Controle e Estatísticas (3 dias)**
   - Criar um dashboard na área administrativa com VueJS para mostrar:
     - Leads coletados.
     - Leituras realizadas.
     - Receita gerada.
   - Criar a área pós-login para usuários que já pagaram e usuários gratuitos:
     - Visualização de leituras anteriores.
     - Acompanhamento de gastos.
     - Agendamento de consultas via WhatsApp.
     - Banners e ofertas para pagantes e não pagantes.
   - **Data:** Até 28/10.

3. **Testes e Ajustes na Área Administrativa e Pós-Login (2 dias)**
   - Realizar testes na área administrativa e na área pós-login.
   - Corrigir bugs e finalizar a primeira versão.
   - **Data:** Até 29/10.

#### **Semana 4: Análise de Usuário e Previsão de Crescimento (7 dias)**
- **Objetivo:** Adicionar ferramentas de análise e previsão de crescimento.
- **Prazos:** De 30/10 até 5/11

1. **Integração com Google Analytics (2 dias)**
   - Configurar o Google Analytics para monitorar o comportamento do usuário (tempo médio, dispositivo principal).
   - Configurar a visualização desses dados na área administrativa.
   - **Data:** Até 1/11.

2. **Previsão de Receita e Crescimento (3 dias)**
   - Implementar uma ferramenta básica de previsão de receita com base em dados históricos.
   - Exibir gráficos de crescimento e previsão no dashboard administrativo.
   - **Data:** Até 4/11.

3. **Testes Finais e Ajustes (2 dias)**
   - Fazer testes finais e ajustes gerais.
   - **Data:** Até 5/11.

#### **Semana 5: Deploy Final e Revisão (7 dias)**
- **Objetivo:** Colocar a versão final no ar e revisar as funcionalidades do MVP.
- **Prazos:** De 6/11 até 12/11

1. **Deploy Final (3 dias)**
   - Fazer o deploy da área administrativa e pós-login.
   - Revisar todas as funcionalidades e testar em ambiente de produção.
   - **Data:** Até 9/11.

2. **Revisão e Ajustes Finais (4 dias)**
   - Coletar feedback e ajustar com base nos dados e nos usuários.
   - **Data:** Até 12/11.

Esse roadmap ajustado agora inclui a área pós-login para usuários pagantes e gratuitos, com funcionalidades para gerenciar leituras, gastos e agendar consultas.