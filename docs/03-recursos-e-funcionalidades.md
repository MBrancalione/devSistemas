---
title: 3. Recursos e Funcionalidades
---

# 3. Recursos e Funcionalidades

O sistema divide-se em um conjunto de regras de negócio detalhadas através de Requisitos Funcionais (RF) e Não Funcionais (RNF).

## 3.1 Requisitos Funcionais

| ID | Descrição |
| :--- | :--- |
| **RF01** | Permitir que visitantes se cadastrem preenchendo obrigatoriamente: Nome Completo, CPF, Data de Nascimento, Endereço Completo, CEP, Email, Telefone e Senha. |
| **RF02** | Permitir o cadastro de funcionários no portal administrativo com os mesmos dados obrigatórios. |
| **RF03** | Disponibilizar interfaces distintas de login utilizando email e senha. |
| **RF04** | Restringir o acesso baseado no perfil do usuário conectado (Cliente ou Funcionário). |
| **RF05** | Exibir produtos divididos em 4 categorias principais: Perfumes, Skincare, Maquiagens e Cosméticos Corporais. |
| **RF06** | Permitir a filtragem de produtos com base em subcategorias específicas de cada categoria. |
| **RF07** | Exibir informações detalhadas do item: Nome, Marca, Descrição, Composição, Valor e Estoque. |
| **RF08** | Permitir ao funcionário adicionar novos produtos associando-os às categorias. |
| **RF09** | Permitir ao funcionário alterar o valor de venda de qualquer produto. |
| **RF10** | Permitir ao funcionário alterar a quantidade em estoque manualmente. |
| **RF11** | Permitir retirar itens de linha sem apagar o histórico de vendas passado. |
| **RF12** | Permitir ao cliente adicionar produtos disponíveis ao carrinho virtual. |
| **RF13** | Permitir ao cliente alterar a quantidade ou remover produtos do carrinho. |
| **RF14** | Oferecer opção de lista de espera caso o produto desejado esteja com estoque esgotado. |
| **RF15** | Enviar e-mail automático ao cliente na lista de espera assim que o item for reabastecido. |
| **RF16** | Integrar com meios de pagamento: PIX, Cartão de Crédito, Cartão de Débito ou Boleto Bancário. |
| **RF17** | Gerar automaticamente um registro no histórico de pedidos após confirmação do pagamento. |
| **RF18** | Subtrair a quantidade comprada do estoque geral após a confirmação do pagamento. |
| **RF19** | Permitir a visualização de compras anteriores com valores do ato da compra e status da entrega. |
| **RF20** | Atualizar o status do pedido via integração com a transportadora (Pendente, Enviado, Entregue). |
| **RF21** | Permitir avaliação com nota (1 a 5 estrelas) e comentário descritivo apenas após o status 'Entregue'. |

## 3.2 Requisitos Não Funcionais

| ID | Descrição |
| :--- | :--- |
| **RNF01**| Compatibilidade cross-browser nas últimas 3 versões estáveis do Chrome, Edge, Firefox e Safari. |
| **RNF02**| Mascarar ou proteger dados sensíveis como CPF, endereço e e-mail contra acessos não autorizados. |
| **RNF03**| Garantir que o banco de dados rejeite registros duplicados de CPF ou E-mail para clientes. |
| **RNF04**| O carregamento do catálogo e das filtragens deve ocorrer em menos de 2 segundos. |
| **RNF05**| O e-mail de alerta da lista de espera deve ser disparado em até 5 minutos após o reabastecimento. |
| **RNF06**| Os valores no histórico não devem mudar se o funcionário alterar o preço do catálogo posteriormente. |
| **RNF07**| A interface de avaliação de produtos deve permanecer bloqueada até o gatilho de status entregue. |
| **RNF08**| Suportar um aumento de até 300% no volume de acessos simultâneos sem apresentar lentidão. |
| **RNF09**| Operar na moeda Real Brasileiro (BRL, R$) e seguir o fuso horário de Brasília (GMT-3). |
| **RNF10**| Exibir banner de consentimento de cookies e termos de privacidade no primeiro acesso (LGPD). |