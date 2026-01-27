/// <reference types="cypress" />

describe("Testes para a pagina de candidatura", () => {
  beforeEach(() => {
    cy.visit("https://ebac-jobs-e2e-bay.vercel.app/");
  });
  it("Deve levar o usuário até o formulário de inscrição", () => {
    cy.get(".Vaga_vagaLink__DeFkk").first().click();

    cy.get("input").should("have.length", 7);

    cy.screenshot('tela-inscrição')
  });
  it("Deve preencher o formulário de inscrição", () => {
    cy.get(".Vaga_vagaLink__DeFkk").first().click();
    cy.get("input[name='nome-completo']").type("bruno andrade");
    cy.get("input[name='email']").type("bruno@andrade.com");
    cy.get("input[name='telefone']").type("1140028922");
    cy.get("input[name='endereco']").type(
      "rua jeste, bairro cypress, são paulo-sp",
    );
    
    cy.get("#linux").check();
    cy.get("select[name='escolaridade'").select("outros");
    
    cy.get(".Aplicacao_button__tw2AE").click();
    
    cy.on("window:alert", (conteudo) => {
      expect(conteudo).contain("Obrigado pela candidatura!");
    });
    cy.screenshot('tela-inscrição-preenchido')
  });
});
