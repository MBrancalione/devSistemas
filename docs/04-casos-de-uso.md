---
title: 4. Casos de Uso
---

## 4.1 Diagrama de Casos de Uso

![Diagrama de Casos de Uso Eva N' Essence](/Casos%20de%20Uso%20ENE-Página-1.drawio.png)

## 4.2 Descrição de Casos de Uso
### 4.2.1 Cenário de Caso de Uso 1: Realizar Compra

* **Atores:** Cliente e Sistema
* **Objetivo:** Permitir ao cliente finalizar a compra dos itens selecionados em seu carrinho.

::: info Pré-condições
* O cliente deve estar registrado no sistema.
* O cliente deve ter pelo menos um produto adicionado ao carrinho de compras.
:::

### Fluxo Principal

1. O cliente acessa o sistema e realiza o login.
2. O cliente entra no catálogo.
3. O cliente abre a descrição do produto desejado.
4. O cliente seleciona a opção de adicionar ao carrinho.
5. O cliente informa a quantidade a ser adicionada no carrinho.
6. O sistema adiciona os produtos desejados em um carrinho de compras.
7. O sistema exibe o número total de pedidos e o valor total de itens no carrinho.
8. O cliente acessa o carrinho de compras e solicita a finalização da compra.
9. O sistema exibe os detalhes do pedido e solicita o endereço de entrega.
10. O cliente preenche e confirma os dados de entrega.
11. O sistema gera o número do pedido e inicia o status como **Em espera**.
12. O cliente escolhe a forma de pagamento (PIX, boleto ou cartão de crédito/débito).
13. O sistema integra com a API de pagamento.
14. O sistema processa o pagamento com sucesso.
15. O sistema gera o número do pedido e altera o status para **Pago**.
16. O sistema esvazia o carrinho de compras do cliente.
17. O cliente recebe uma notificação de confirmação do pedido.

### Fluxos Alternativos

::: details Alternativa 1: Produto desejado fora de estoque
No **passo 4**, se o cliente selecionar um produto não disponível em estoque, o sistema oferece a opção de ir para uma lista de espera.
:::

::: details Alternativa 2: Pagamento recusado 
No **passo 14**, o pagamento é negado pela operadora financeira:
1. O sistema informa o erro ao cliente.
2. O cliente pode retornar para tentar outra forma de pagamento ou cancelar a operação.
:::

::: details Alternativa 3: Geração de boleto 
No **passo 12**, o cliente escolhe a opção boleto:
1. O sistema gera o boleto.
2. O cliente realiza o pagamento externamente.
3. Após a compensação, o sistema atualiza e avança para o passo 14.
* *Nota:* Caso o pagamento do boleto não ocorra até a data de vencimento, o sistema cancela o pedido automaticamente e o estoque dos itens reservados é restaurado.
:::

::: tip Pós-condições
* Pedido gerado e registrado no histórico do funcionário.
* Carrinho de compras devidamente esvaziado.
* Estoque dos produtos atualizado automaticamente.
:::

---

### 4.2.2 Cenário de Caso de Uso 2: Cadastrar Produto

* **Atores:** Funcionário e Sistema
* **Objetivo:** Permitir ao funcionário cadastrar um produto novo na loja virtual.

::: info Pré-condições
* O funcionário deve ter realizado o login no sistema.
:::

### Fluxo Principal

1. O funcionário acessa o sistema e realiza o login.
2. O funcionário acessa a seção de estoque.
3. O sistema exibe a listagem de produtos cadastrados no estoque.
4. O sistema exibe o botão **Adicionar novo produto**.
5. O funcionário acessa a opção de adicionar novo produto.
6. O sistema exibe o formulário de cadastro com os campos em branco (imagem, nome, descrição, categoria, preço e quantidade).
7. O funcionário preenche os dados do novo produto e clica em **Salvar**.
8. O sistema valida os dados e armazena o produto no banco de dados.
9. O sistema exibe uma mensagem de sucesso.
10. O sistema redireciona o funcionário de volta para a listagem de produtos atualizada.

### Fluxos Alternativos

::: details Alternativa 1: Dados obrigatórios não preenchidos ou inválidos 
No **passo 6**, se o funcionário deixar de preencher um campo obrigatório ou inserir dados inválidos:
1. O funcionário clica em **Salvar**.
2. O sistema impede o envio, destaca os campos com erro e exibe uma mensagem de alerta.
3. O fluxo retorna ao passo 4 do fluxo principal.
:::

::: details Alternativa 2: Produto já foi cadastrado 
Se o sistema verificar no banco de dados que já existe um produto registrado com o mesmo identificador único:
1. O sistema bloqueia o cadastro e não altera as informações do banco de dados.
2. O sistema exibe uma mensagem de alerta na tela e oferece duas alternativas ao funcionário:
   * **Opção A (Corrigir):** O funcionário altera o nome ou o identificador do produto e clica em **Salvar** novamente. O fluxo retorna para o passo 6.
   * **Opção B (Editar o produto existente):** O funcionário clica em um link fornecido pelo alerta para ser redirecionado diretamente para a tela de edição do produto já existente. O fluxo retorna ao passo 4 do fluxo principal.
:::

::: tip Pós-condições
* O novo produto está devidamente registrado no banco de dados da Eva N’ Essence.
* O produto passa a ficar visível na listagem do painel do funcionário e disponível para busca ou compra na loja virtual (caso a quantidade disponível seja maior que zero).
:::