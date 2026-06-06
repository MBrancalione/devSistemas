import { defineConfig } from 'vitepress';

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: 'pt-BR',
  title: "Eva N' Essence",
  description: 'Documentação do Sistema de Gestão',

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Documentação', link: '/01-introducao'},
      ],

    sidebar: [
      {
        text: 'Documentação do Projeto',
        items: [
          { text: 'Início', link: '/' },
          { text: '1. Introdução', link: '/01-introducao' },
          { text: '2. Descrição do Projeto', link: '/02-descricao-do-projeto' },
          { text: '3. Recursos e Funcionalidades', link: '/03-recursos-e-funcionalidades' },
          { text: '4. Casos de Uso', link: '/04-casos-de-uso' },
          { text: '5. Diagrama ER', link: '/05-diagrama-er' },
          { text: '6. Protótipos', link: '/06-prototipos' },
          { text: '7. Cronograma', link: '/07-cronograma' },
          { text: '8. Riscos e Mitigações', link: '/08-riscos-e-mitigacoes' },
          { text: '9. Custos e Orçamentos', link: '/09-custos-e-orcamentos' },
          { text: '10. Considerações Finais', link: '/10-consideracoes-finais' }
        ],
      },
    ],
  },
});
