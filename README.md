# 💰 Controle de Gastos

Sistema full stack para controle financeiro pessoal, permitindo registrar **receitas, despesas e investimentos**, com cálculo automático do saldo disponível mensal.

---

## 📌 Sobre o Projeto

Este projeto foi desenvolvido com o objetivo de praticar desenvolvimento full stack utilizando:

- Backend com **Spring Boot**
- Banco de dados relacional
- Frontend em **React**
- Integração via API REST

A aplicação permite:

✔ Registrar receitas  
✔ Registrar despesas  
✔ Registrar investimentos  
✔ Visualizar resumo mensal  
✔ Calcular automaticamente o saldo disponível  
✔ Filtrar transações por mês e ano  
✔ Excluir registros  

---

## 🧮 Regra de Negócio

O saldo disponível é calculado com a seguinte lógica:
Disponível = Receita - Despesa - Investimento


O card de investimentos exibe apenas o total investido no mês.

---

## 🏗️ Arquitetura do Projeto

### 🔹 Backend
- Java
- Spring Boot
- JPA / Hibernate
- Banco de dados relacional

Estrutura principal:
com.fernanda.controle_gastos
├── controller
├── service
├── repository
├── entity


Principais endpoints:

| Método | Endpoint | Descrição |
|--------|----------|------------|
| POST | /transacoes | Criar transação |
| DELETE | /transacoes/{id} | Excluir transação |
| GET | /transacoes | Listar todas |
| GET | /transacoes/mes?mes=1&ano=2025 | Filtrar por mês |
| GET | /transacoes/resumo | Resumo mensal |

---

### 🔹 Frontend
- React
- Hooks (useState, useEffect)
- Integração com API REST

Funcionalidades visuais:

- Card de Disponível
- Card de Entradas
- Card de Saídas
- Card de Investimentos
- Listagem dinâmica por tipo
- Atualização automática após exclusão

---

## 🎯 Objetivo do Projeto

Este projeto foi desenvolvido para aprofundar conhecimentos em:

Arquitetura REST

Separação de responsabilidades (Controller / Service / Repository)

Manipulação de BigDecimal

Integração frontend-backend

Lógica financeira

## 👩‍💻 Desenvolvedora

Fernanda Beatriz Teixeira Faria Calvano

Estudante de Ciência da Computação
