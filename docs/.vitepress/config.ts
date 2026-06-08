import { defineConfig } from 'vitepress';

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: 'pt-BR',
  title: "Eva N' Essence",
  description: 'Documentação do Sistema de Gestão',

  themeConfig: {
    // Desativa a coluna de subtópicos da direita (Outline)
    aside: false,

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Documentação', link: '/01-introducao'},
    ],
    
    sidebar: [
      {
        text: 'Documentação do Projeto',
        items: [
          { text: 'Início', link: '/' },
          { 
            text: '1. Introdução', 
            link: '/01-introducao',
            collapsed: true, 
            items: [
              { text: '1.1 Objetivo', link: '/01-introducao#objetivo' },
              { text: '1.2 Escopo', link: '/01-introducao#escopo' },
              { text: '1.3 Definições, Acrônimos e Abreviações', link: '/01-introducao#definicoes-acronimos-e' },
              { text: '1.4 Público-alvo', link: '/01-introducao#publico-alvo' },
              { text: '1.5 Minimundo', link: '/01-introducao#minimundo' }
            ]
          },
          { text: '2. Descrição do Projeto', link: '/02-descricao-do-projeto',
            collapsed: true,
            items: [
              { text: '2.1. Visão Geral do Projeto', link: '/02-descricao-do-projeto#visao-geral-do-projeto',
              collapsed: true,
              items: [
                { text: '2.1.1. Canvas do Projeto', link: '/02-descricao-do-projeto#canvas-do-projeto' }] },
              { text: '2.2. Stakeholders', link: '/02-descricao-do-projeto#stakeholder' }
            ]},
          { text: '3. Recursos e Funcionalidades', link: '/03-recursos-e-funcionalidades',
            collapsed: true,
            items: [
              { text: 'Ambiente do Cliente: Loja Virtual', link: '/03-recursos-e-funcionalidades#ambiente-do-cliente-loja-virtual' },
              { text: 'Ambiente Operacional: Painel...', link: '/03-recursos-e-funcionalidades#ambiente-operacional-painel' },
              { text: '3.1. Requisitos Funcionais', link: '/03-recursos-e-funcionalidades#requisitos-funcionais' },
              { text: '3.2. Requisitos Não Funcionais', link: '/03-recursos-e-funcionalidades#requisitos-nao-funcionais' }
            ]},
          { text: '4. Casos de Uso', link: '/04-casos-de-uso',
            collapsed: true,
            items: [
              { text: '4.1. Diagrama de Casos de Uso', link: '/04-casos-de-uso#diagrama-de-casos-de-uso' },
              { 
                text: '4.2. Descrição de Casos de Uso', link: '/04-casos-de-uso#descricao-de-casos-de',
                collapsed: true,
                items: [
                  { text: '4.2.1. Cenário de Caso de Uso: Realizar Compra', link: '/04-casos-de-uso#cenario-de-caso-d' },
                  { text: '4.2.2. Cenário de Caso Uso: Cadastrar Produto', link: '/04-casos-de-uso#cenario-de-caso' }
                ]
              }] },
          { text: '5. Diagrama ER', link: '/05-diagrama-er' },
          { text: '6. Protótipos', link: '/06-prototipos' },
          { text: '7. Cronograma', link: '/07-cronograma' },
          { text: '8. Riscos e Mitigações', link: '/08-riscos-e-mitigacoes' },
          { 
            text: '9. Custos e Orçamentos', 
            link: '/09-custos-e-orcamentos',
            collapsed: true,
            items: [
              { text: '9.1. Modelo de Desenvolvenvolvimento', link: '/09-custos-e-orcamentos#cocomo' },
              { text: '9.2. Variantes de Complexidadade', link: '/09-custos-e-orcamentos#variantes' },
              { 
                text: '9.3. Custos', 
                link: '/09-custos-e-orcamentos#custos',
                collapsed: true,
                items: [
                  { text: '9.3.1. Tamanho do Software', link: '/09-custos-e-orcamentos#tamanho' },
                  { text: '9.3.2. Fatores de Escala', link: '/09-custos-e-orcamentos#escala' },
                  { 
                    text: '9.3.3. Fatores de Custo', 
                    link: '/09-custos-e-orcamentos#fatores-custo',
                    collapsed: true,
                    items: [
                      { text: 'Produto', link: '/09-custos-e-orcamentos#prod' },
                      { text: 'Pessoal', link: '/09-custos-e-orcamentos#pes' },
                      { text: 'Plataforma', link: '/09-custos-e-orcamentos#plat' },
                      { text: 'Projeto', link: '/09-custos-e-orcamentos#proj' }
                    ]
                  },
                  { text: '9.3.4. Manutenção', link: '/09-custos-e-orcamentos#manutencao' },
                  { text: '9.3.5. Taxas de Mão de Obra', link: '/09-custos-e-orcamentos#taxas' }
                ]
              },
              { 
                text: '9.4. Resultados', 
                link: '/09-custos-e-orcamentos#resultados',
                collapsed: true,
                items: [
                  { text: '9.4.1 Funcionários e Prazo', link: '/09-custos-e-orcamentos#func-prazo' },
                  { text: '9.4.2. Composição do Valor Final', link: '/09-custos-e-orcamentos#composicao' }
                ]
              },
              { text: '9.5. Orçamento Final', link: '/09-custos-e-orcamentos#orcamento' }
            ]
          },
          { text: '10. Considerações Finais', link: '/10-consideracoes-finais' }
        ],
      },
    ],
  },
});