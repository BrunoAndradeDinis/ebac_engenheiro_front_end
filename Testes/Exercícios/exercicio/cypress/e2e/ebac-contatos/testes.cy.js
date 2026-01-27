/// <reference types="cypress" />

describe("Testes cypres para o site de lista de contatos", () => {
  beforeEach(() => {
    cy.visit("https://ebac-agenda-contatos-tan.vercel.app/");
  });

  it("deve testar o montagem da App", () => {
    cy.get("header > h1").should("have.length.greaterThan", 0);
    cy.get("form > input").should("have.length", 3);
  });

  it("deve incluir um novo contato", () => {
    cy.get('[type="text"]').type("Leyser Erick Pinto Estrada");
    cy.get('[type="email"]').type("leyserestrada@mailer.com");
    cy.get('[type="tel"]').type("47 91000 1234");
    cy.get(".adicionar").click();
  });

  it("deve ativar modo de edição", () => {
    cy.get(":nth-child(2) > .sc-gueYoa > .edit").click();
    cy.get('[type="text"]').should("have.length.greaterThan", 0);
  });

  it("deve alterar o primeiro contato selecionado", () => {
    cy.get(".edit").first().click();

    cy.get('[type="text"]').clear();
    cy.get('[type="text"]').type("Jasmielis Leysimar Pinto Estrada");

    cy.get('[type="email"]').clear();
    cy.get('[type="email"]').type("jasmielisestrada@mailer.com");
    
    cy.get('[type="tel"]').clear();
    cy.get('[type="tel"]').type("47 91000 1234");
    
    cy.get(".alterar").click();
  });

  it("Deve apagar o ultimo contato", () => {
    cy.get(".delete").last().click();
  });
});
