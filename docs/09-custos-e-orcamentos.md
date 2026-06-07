---
title: 9. Custos e Orçamentos
---

# 9. Custos e Orçamentos

O viés financeiro do projeto estrutura-se de acordo com os componentes mapeados na modelagem de negócios da perfumaria.

## Modelo de Desenvolvimento — COCOMO II
 
O modelo **COCOMO II** baseia-se na estimativa de custos de software. Apoiado no COCOMO (*Constructive Cost Modeling*), é um modelo empírico criado a partir de dados históricos, possibilitando a criação de fórmulas que auxiliam a estimação de custos em projetos de desenvolvimento de software.
 
Para facilitar a aplicação do método, foi utilizado um site que realiza os cálculos automaticamente por meio das fórmulas, conforme os dados inseridos nas variantes de complexidade do projeto.
 
::: info Ferramenta utilizada
[COCOMO II Online — softwarecost.org](https://softwarecost.org/tools/COCOMO/)
:::
 
O modelo prevê valores de custos com base no esforço necessário para realizar cada etapa. Todas as ações e fases do projeto são geradas automaticamente ao calcular os custos.
 
## Variantes de Complexidade
 
A partir de uma **Tabela de Contagem Detalhada de Funções**, foi possível entender, de forma clara e baseada em dados, a complexidade do projeto. O projeto foi inicialmente definido como de baixa complexidade construtiva, mas evoluiu para **média complexidade** ao considerar a manutenção e preservação de dados pessoais sensíveis e transações monetárias.
 
::: info Tabela de Contagem Detalhada de Funções
[Acessar tabela no Google Sheets](https://docs.google.com/spreadsheets/d/1kAOVISerpZO6NDvEN-y5s5F0cmrTr8c8/edit?usp=sharing&ouid=101991294724682763907&rtpof=true&sd=true)
:::
 
## Custos
 
### Tamanho do Software
 
Para utilizar o COCOMO II, foi necessário definir o **tamanho estimado em linhas de código (SLOC)**. O valor adotado foi de **3.850 linhas** no parâmetro *New* (projeto criado do zero), definido a partir de pesquisas em sistemas com funcionalidades similares ao software a ser construído.
 
> **Nota:** Linhas sem lógica (linhas vazias, comentários em branco etc.) não são contabilizadas no total de linhas válidas.
 
---
 
### Fatores de Escala
 
Os fatores de escala são compostos por **cinco atributos** responsáveis por determinar o expoente da equação de cálculo de esforço.
 
| Fator | Escala Adotada | Justificativa |
|---|---|---|
| Precedentes | **Alta** | Grande gama de projetos semelhantes de e-commerce disponíveis como referência |
| Flexibilidade de Desenvolvimento | Normal | — |
| Resolução de Riscos | Normal | — |
| Coesão da Equipe | Normal | — |
| Maturidade do Processo | Normal | — |
 
---
 
### Fatores de Custo
 
Os fatores de custo são variáveis multiplicativas que ajustam o esforço e o prazo do projeto com base nas características do ambiente de desenvolvimento, da equipe, do produto e do processo.
 
#### Produto
 
| Campo | Escala Adotada | Justificativa |
|---|---|---|
| Confiabilidade | **Alta** | Grande familiaridade com projetos de e-commerce |
| Demais campos | Normal | Complexidade comum a projetos de e-commerce |
 
#### Pessoal
 
Ao simular um cenário mais crítico, onde a maioria dos programadores são *juniors*:
 
| Campo | Escala Adotada |
|---|---|
| Capacidade do Analista | **Baixa** |
| Capacidade do Programador | **Baixa** |
| Demais campos | Normal |
 
#### Plataforma
 
| Campo | Escala Adotada | Justificativa |
|---|---|---|
| Restrição de Tempo | **Alta** | Alta velocidade exigida nos requisitos funcionais; maior uso de hardware |
| Memória RAM | Normal | — |
| Hospedagem | Normal | — |
 
#### Projeto
 
| Campo | Escala Adotada | Justificativa |
|---|---|---|
| Modernidade do Projeto | **Alta** | Sistema moderno de e-commerce |
| Distância entre membros | Normal | — |
| Exigência do contratante | Normal | — |
 
---
 
### Manutenção
 
Foi considerada uma **manutenção anual** com base na quantidade de linhas que precisariam ser modificadas ou adaptadas por ano, durante **1 (um) ano**.
 
- Percentual de entendimento do software na manutenção: **20%** (considera-se manutenção pelos próprios funcionários, sem necessidade de novas contratações)
O COCOMO II estimou os seguintes gastos com manutenção:
 
| Item | Valor |
|---|---|
| Custo anual estimado pelo COCOMO II | **R$ 18.562,00** |
| Mensalidade cobrada ao contratante | **R$ 2.000,00** |
| Custo mensal real | R$ 1.546,83 |
| **Lucro mensal sobre manutenção** | **R$ 453,17** |
 
---
 
### Taxas de Mão de Obra
 
O campo de **taxa de mão de obra** representa o custo mensal por funcionário envolvido na construção do site.
 
| Componente | Valor |
|---|---|
| Salário base (programador junior) | R$ 4.000,00 |
| Encargos CLT | Inclusos |
| Auxílios (vale-alimentação, etc.) | Inclusos |
| Licenças de software | Inclusos |
| Gastos extras imprevistos | Inclusos |
| **Total mensal por funcionário** | **R$ 9.370,00** |
 
---
 
## Resultados
 
### Funcionários e Prazo
 
| Item | Valor |
|---|---|
| Número de funcionários | **2** |
| Custo mensal por funcionário | R$ 9.370,00 |
| Prazo estimado | **9 meses** |
| **Custo total do projeto (sem manutenção)** | **R$ 199.149,00** |
 
### Composição do Valor Final
 
| Item | Valor |
|---|---|
| Custo total do projeto | R$ 199.149,00 |
| Lucro almejado | R$ 40.000,00 |
| Margem de erro | R$ 10.000,00 |
| **Subtotal** | **R$ 249.149,00** |
| **Valor final (arredondado)** | **R$ 250.000,00** |
 
---
 
## Orçamento Final
 
::: tip Resumo do Orçamento
| Item | Valor |
|---|---|
| **Desenvolvimento completo do software** | **R$ 250.000,00** |
| **Manutenção anual (12 meses)** | **R$ 24.000,00** |
| **Mensalidade de manutenção** | **R$ 2.000,00/mês** |
:::