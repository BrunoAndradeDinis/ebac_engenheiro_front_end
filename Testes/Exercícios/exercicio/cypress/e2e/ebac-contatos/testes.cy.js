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

    cy.contains("Leyser Erick Pinto Estrada").should("be.visible");
    cy.contains("leyserestrada@mailer.com").should("be.visible");
    cy.contains("47 91000 1234").should("be.visible");
  });

  it("deve ativar modo de edição", () => {
    cy.get(":nth-child(2) > .sc-gueYoa > .edit").click();

    cy.get('[type="text"]').should("have.length.greaterThan", 0);
    cy.get('[type="email"]').should("have.length.greaterThan", 0);
    cy.get('[type="tel"]').should("have.length.greaterThan", 0);
    cy.get(".alterar").should("be.visible");
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

    cy.contains("Jasmielis Leysimar Pinto Estrada").should("be.visible");
    cy.contains("jasmielisestrada@mailer.com").should("be.visible");
  });

  it("Deve apagar o ultimo contato", () => {

    cy.get(".sc-gueYoa").then(($contatos) => {
      const contatosAntesDelete = $contatos.length;
      cy.get(".delete").last().click();

      cy.get(".sc-gueYoa").should("have.length", contatosAntesDelete - 1);
    });
  });
});
