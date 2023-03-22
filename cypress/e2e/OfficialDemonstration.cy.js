describe('official demonstration', () => {
  it('primary use case', () => {
    // TO-DO: (This is a brittle version of the cy test)
    // - Refactor all cy.get() methods to use data-testid's for all getting
    // - Add more assertions where appropriate

    // Enter the application and login
    cy.visit('/');
    cy.get('[data-testid="start-analysis-button"]').click();
    cy.get('#accept_genie_terms').click();
    cy.get('.form-signin .btn-primary').click();

    // Select a dataset to work with (i.e. the 'GENIE public' dataset)
    cy.contains('TISSUE').parent().find('.btn-coral.dropdown-toggle').click();
    // BUG: If you click on an item in the dropdown list too quickly, even within human limits, nothing happens <- Wrong
    // Or maybe it's the 'Start by selecting a dataset...' popup that's the issue? <- This is the issue
    // cy.wait(4000).then(() => cy.get('.dropdown-menu.show .dropdown-item').eq(0).click());
    cy.get('.dropdown-menu.show .dropdown-item').eq(2).click();

    // Filter dataset by specific tumor type
    cy.get('.layout_rect .rectCohort').eq(0).click().should('have.class', 'selected');
    cy.get('div.dual.filter').click();
    cy.get('div.search-bar').click();
    cy.get('[data-optid="tumortype"]').click();
    // This graph is pretty tricky to select the approriate bars without data-testid's
    cy.get('[aria-label="Share within Cohort: 5%; Cohort: Tissue: TCGA tumors; tumortype: lung adenocarcinoma; Count: 586; Share: 5%"]').click();
    cy.get('[aria-label="Share within Cohort: 4.4%; Cohort: Tissue: TCGA tumors; tumortype: lung squamous cell carcinoma; Count: 511; Share: 4.4%"]').click();
    // cy.get('[]').click(); // 'non-small cell lung cancer' doesn't exist in this dataset
    cy.get('.btn .fa-filter').click({force: true});
    cy.get('.confirmBtn').click();

    // Filter dataset by another tumor type
    cy.get('.layout_rect .rectCohort').eq(1).click().should('not.have.class', 'selected');
    cy.get('.layout_rect .rectCohort').eq(0).click().should('have.class', 'selected');
    // cy.get('div.dual.filter').click();
    cy.get('div.search-bar').click();
    cy.get('[data-optid="tumortype"]').click();
    // This graph is pretty tricky to select the approriate bars without data-testid's
    cy.get('[aria-label="Share within Cohort: 4%; Cohort: Tissue: TCGA tumors; tumortype: colon adenocarcinoma; Count: 466; Share: 4%"]').click();
    // cy.get('[]]').click(); // missing colorectal adenocarcinoma in this dataset
    cy.get('[aria-label="Share within Cohort: 1.5%; Cohort: Tissue: TCGA tumors; tumortype: rectum adenocarcinoma; Count: 174; Share: 1.5%"]').click();
    cy.get('.btn .fa-filter').click({force: true});
    cy.get('.confirmBtn').click();

    // Inspect the difference in age distribution for the two tumortype filters
    cy.get('.layout_rect .rectCohort').eq(1).click().should('have.class', 'selected');
    cy.get('.layout_rect .rectCohort').eq(2).should('have.class', 'selected');
    cy.get('div.search-bar').click();
    cy.get('[data-optid="age"]').click();

    // Compare the statistical significance of the two filters
    cy.get('.task-title.btn').click();
    cy.get('.compare').click();
    // Perhaps add the mouse hover events here?
    cy.get('div.search-bar').click();
    cy.get('[data-optid="gender"]').click();
    cy.get('td.action.score').eq(2).click();

    // Split by race
    cy.get('.task-title.btn').click();
    cy.get('div.dual.filter').click();
    cy.get('.layout_rect .rectCohort').eq(1).dblclick().should('have.class', 'selected');
    cy.get('div.clear-all').click();
    cy.get('div.search-bar').click();
    cy.get('[data-optid="race"]').click();
    cy.get('[aria-label="Share within Cohort: 67.9%; Cohort: #1 Tumortype: Lung squamous cell carcinoma/Lung adenocarcinoma; race: white; Count: 745; Share: 67.9%"]').click();
    cy.get('[aria-label="Share within Cohort: 7.7%; Cohort: #1 Tumortype: Lung squamous cell carcinoma/Lung adenocarcinoma; race: black or african american; Count: 85; Share: 7.7%"]').click();
    cy.get('[aria-label="Share within Cohort: 1.5%; Cohort: #1 Tumortype: Lung squamous cell carcinoma/Lung adenocarcinoma; race: asian; Count: 17; Share: 1.5%"]').click();
    cy.get('.btn i.fa-share-alt').click({force: true});
    cy.wait(2000); // Waits for the columns to load properly before pinning, TO-DO: Replace with non-arbitrary wait
    cy.get('i.fa-thumbtack').eq(1).click();
    cy.get('i.fa-thumbtack').eq(0).click();
    cy.get('.confirmBtn').click();

    // Split by gender
    cy.get('div.search-bar').click();
    cy.get('[data-optid="gender"]').click();
    cy.get('.btn i.fa-share-alt').click({force: true});
    cy.wait(2000); // Waits for the columns to load properly before pinning, TO-DO: Replace with non-arbitrary wait
    cy.get('i.fa-thumbtack').eq(1).click(); //pin the gender columns as well
    cy.get('i.fa-thumbtack').eq(3).click();
    cy.get('.confirmBtn').click();

    // Something about the Kras: AA Mutation
    cy.get('div.search-bar').type('kras');
    cy.get('[data-optid="ENSG00000133703"]').click();
    // cy.get('[data-optid="ENSG00000133703:aamutation"]').click();

    //Kras data is not loading / throwing error?

    





  })
})