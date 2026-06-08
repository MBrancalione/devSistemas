---
title: 1. Introdução
---

# 1. Introdução

A perfumaria busca implementar um sistema de gestão e vendas online para organizar seu inventário e otimizar a experiência de compra dos seus clientes. O sistema visa integrar a facilidade do e-commerce com um controle de estoque eficiente, garantindo a segurança dos dados e transparência no acompanhamento das compras realizadas.

## 1.1. Objetivo {#objetivo}
O sistema Eva N' Essence tem como objetivos principais:
* **Digitalizar e centralizar as operações**: Substituir processos manuais por um sistema integrado de gestão e vendas online.
* **Catálogo organizado**: Disponibilizar um catálogo online organizado em categorias e subcategorias, permitindo navegação intuitiva.
* **Automação de estoque**: Garantir que a quantidade de produtos seja updated em tempo real após cada venda, evitando a venda de itens indisponíveis.
* **Transparência**: Permitir que o cliente visualize o histórico de compras e o status de entrega em tempo real.

## 1.2. Escopo {#escopo}
O projeto visa desenvolver um sistema web de gestão e e-commerce focado em dois perfis de usuário: clientes (portal da loja) e funcionários (painel administrativo exclusivo). 

* **O que está no escopo**: Cadastro e autenticação, navegação/filtragem por categorias, carrinho de compras, integração com meios de pagamento (PIX, boleto e cartão), controle automático de estoque, histórico de pedidos com rastreamento, lista de espera para produtos esgotados, sistema de avaliações e conformidade com a LGPD.
* **Fora de escopo**: Aplicativo móvel nativo, logística própria de entrega e integração com sistemas de contabilidade externos.

## 1.3. Definições, Acrônimos e Abreviações {#definicoes-acronimos-e}
* **E-commerce**: Modalidade de comércio eletrônico realizado pela internet.
* **LGPD**: Lei Geral de Proteção de Dados (Lei nº 13.709/2018), que regulamenta o tratamento de dados pessoais no Brasil.
* **PIX**: Sistema de pagamento instantâneo criado pelo Banco Central do Brasil.
* **Anvisa**: Agência Nacional de Vigilância Sanitária.

## 1.4. Público-alvo {#publico-alvo}
Este documento destina-se a todas as partes interessadas envolvidas no desenvolvimento, implementação e uso do software Eva N’ Essence. Isso inclui os membros da equipe de desenvolvimento, os funcionários que utilizarão o portal administrativo e os clientes finais que realizarão compras pela plataforma. 

## 1.5. Minimundo {#minimundo}
A perfumaria busca implementar um sistema de gestão e vendas online para organizar seu inventário e otimizar a experiência de compra dos seus clientes. O sistema deve gerenciar o catálogo de mercadorias, que são classificadas e divididas em 4 categorias principais: perfumes, itens de skincare, maquiagens e cosméticos corporais. Cada categoria principal será subdividida em subcategorias. Essas subcategorias permitem uma organização melhor do catálogo, facilitando a filtragem dos produtos para os usuários.

* **Perfumes:** Subdivididos por concentração, gênero e família olfativa.
* **Skincare:** Organizados por etapa de cuidado (limpeza, hidratação, tratamento).
* **Maquiagens:** Segmentados por área do rosto (pele, olhos, lábios).
* **Cosméticos Corporais:** Classificados por função (banho, hidratação ou higiene).

Cada produto possui informações detalhadas, incluindo nome, marca, descrição, composição, valor e quantidade em estoque. 

Para realizar uma compra, o cliente deve realizar um cadastro obrigatório, contendo nome completo, CPF, endereço completo (logradouro, número, bairro, cidade e UF), CEP , email, número de telefone e a criação de uma senha de 8 dígitos. 

**Não é permitido o cadastro de mais de uma conta com o mesmo CPF ou e-mail.** 

O cliente pode realizar ações no site escolhendo e adicionando produtos a um carrinho de compras virtual. O sistema permite que o cliente adicione novos itens, remova produtos ou prossiga para a finalização do pedido. 

Caso um produto desejado não esteja disponível em estoque, o sistema oferece uma **lista de espera**, onde o cliente cadastrado recebe uma notificação automática via e-mail assim que o item retornar ao catálogo.

No momento da compra, o cliente deve selecionar uma das formas de pagamento integradas: PIX, cartão de crédito/débito ou boleto bancário. 

Após a confirmação do pagamento, o sistema gera um registro no histórico de pedidos do cliente. Através desse histórico, o usuário pode consultar todas as suas compras anteriores, detalhando os produtos adquiridos e seus respectivos valores no ato da compra, além do status atual da entrega (ex: Pendente, Enviado ou Entregue).

Após a alteração do status do pedido para 'Entregue', o usuário poderá atribuir uma nota de 1 a 5 e registrar um comentário descritivo sobre sua experiência com o produto.

O sistema impõe um controle de acesso rigoroso:
* **Funcionários:** Possuem um portal administrativo acessado via login e senha exclusivos, cadastrados com nome completo, CPF, endereço completo (logradouro, número, bairro, cidade e UF), CEP , email e número de telefone, onde podem adicionar novos produtos ao catálogo, atualizar preços, retirar itens de linha e gerenciar o estoque.
* **Clientes:** Têm acesso apenas à interface de compra, consulta de produtos e perfil pessoal para acompanhamento de seus pedidos, sem permissão de acesso às ferramentas de gestão interna.

O sistema visa integrar a facilidade do e-commerce com um controle de estoque eficiente, garantindo a segurança dos dados e transparência no acompanhamento das compras realizadas.
