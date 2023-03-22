describe('official demonstration', () => {
  it('primary use case', () => {
    // TO-DO: (This is a brittle version of the cy test)
    // - Refactor most cy.get() methods to use data-testid's for getting
    // - Add more assertions where appropriate
    // - Prune arbitrary wait's

    // Enter the application and login
    cy.visit('/');
    cy.get('[data-testid="start-analysis-button"]').click();
    cy.get('#accept_genie_terms').click();
    cy.get('.form-signin .btn-primary').click();

    // Select a dataset to work with (i.e. the 'GENIE public' dataset)
    cy.contains('TISSUE').parent().find('.btn-coral.dropdown-toggle').click();
    // BUG: If you click on the top-most item in the dropdown list too quickly, even within human limits, nothing happens <- Wrong
    // Or maybe it's the 'Start by selecting a dataset...' popup that's the issue? <- This is the issue
    // cy.wait(4000).then(() => cy.get('.dropdown-menu.show .dropdown-item').eq(0).click());
    cy.get('.dropdown-menu.show .dropdown-item').eq(1).click();

    // Filter dataset by specific tumor type
    cy.get('.layout_rect .rectCohort').eq(0).click().should('have.class', 'selected'); // For some reason it must be manually clicked in a cy test
    cy.get('div.dual.filter').click();
    cy.get('div.search-bar').click();
    cy.get('[data-optid="tumortype"]').click();
    
    // This graph is pretty tricky to select the approriate bars without dynamic data-testid's
    cy.get('[aria-label="Share within Cohort: 11.4%; Cohort: Tissue: GENIE public; tumortype: lung adenocarcinoma; Count: 12931; Share: 11.4%"]').click();
    cy.get('[aria-label="Share within Cohort: 1.4%; Cohort: Tissue: GENIE public; tumortype: lung squamous cell carcinoma; Count: 1564; Share: 1.4%"]').click();
    cy.get('[aria-label="Share within Cohort: 0.9%; Cohort: Tissue: GENIE public; tumortype: non-small cell lung cancer; Count: 971; Share: 0.9%"]').click();
    
    cy.get('.btn .fa-filter').click({force: true});
    cy.get('.confirmBtn').click();

    // Filter dataset by another tumor type
    cy.get('.layout_rect .rectCohort').eq(0).dblclick().should('have.class', 'selected');
    cy.get('.layout_rect .rectCohort').eq(1).should('not.have.class', 'selected');

    // cy.get('div.dual.filter').click();
    cy.get('div.search-bar').click();
    cy.get('[data-optid="tumortype"]').click();

    // This graph is pretty tricky to select the approriate bars without dynamic data-testid's
    cy.get('[aria-label="Share within Cohort: 5.7%; Cohort: Tissue: GENIE public; tumortype: colon adenocarcinoma; Count: 6386; Share: 5.7%"]').click();
    cy.get('[aria-label="Share within Cohort: 2.1%; Cohort: Tissue: GENIE public; tumortype: colorectal adenocarcinoma; Count: 2377; Share: 2.1%"]').click();
    cy.get('[aria-label="Share within Cohort: 1.6%; Cohort: Tissue: GENIE public; tumortype: rectum adenocarcinoma; Count: 1841; Share: 1.6%"]').click();
    
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
    cy.wait(3000);
    cy.get('td.action.score').eq(2).click();

    // Split by race
    cy.get('.task-title.btn').click();
    cy.get('div.dual.filter').click();
    cy.get('.layout_rect .rectCohort').eq(1).dblclick().should('have.class', 'selected');

    cy.get('div.clear-all').click();
    cy.get('div.search-bar').click();
    cy.get('[data-optid="race"]').click();

    cy.get('[aria-label="Share within Cohort: 73%; Cohort: #1 Tumortype: Lung adenocarcinoma/Non-small cell lung cancer/Lung squamous cell carcinoma; race: white; Count: 11288; Share: 73%"]').click();
    cy.get('[aria-label="Share within Cohort: 7.3%; Cohort: #1 Tumortype: Lung adenocarcinoma/Non-small cell lung cancer/Lung squamous cell carcinoma; race: asian; Count: 1123; Share: 7.3%"]').click();
    cy.get('[aria-label="Share within Cohort: 6.9%; Cohort: #1 Tumortype: Lung adenocarcinoma/Non-small cell lung cancer/Lung squamous cell carcinoma; race: black; Count: 1074; Share: 6.9%"]').click();
    
    cy.get('.btn i.fa-share-alt').click({force: true});
    cy.wait(2000); // Waits for the columns to load properly before pinning, TO-DO: Replace with non-arbitrary wait
    cy.get('i.fa-thumbtack').eq(1).click({force: true});
    cy.get('i.fa-thumbtack').eq(0).click({force: true});
    cy.get('.confirmBtn').click();

    // Split by gender
    cy.get('div.search-bar').click();
    cy.get('[data-optid="gender"]').click();
    cy.get('.btn i.fa-share-alt').click({force: true});
    cy.wait(2000); // Waits for the columns to load properly before pinning, TO-DO: Replace with non-arbitrary wait
    cy.get('i.fa-thumbtack').eq(1).click({force: true}); //pin the gender columns as well
    cy.get('i.fa-thumbtack').eq(3).click({force: true});
    cy.get('.confirmBtn').click();

    // Filter each race-gender pair by KRAS: AA Mutation (P.Gly12Cys)    
    cy.get('div.search-bar').type('kras');
    cy.get('[data-optid="ENSG00000133703"]').click();
    cy.wait(1500);
    cy.get('[data-optid="ENSG00000133703:aamutation"]').click();

    // This graph is pretty tricky to select the approriate bars without data-testid's
    cy.get('[aria-label="Share within Cohort: 1.3%; Cohort: #6 Gender: Female; ENSG00000133703-aamutation: p.Gly12Cys; Count: 8; Share per Cohort: 1.3%"]').click();
    cy.get('[aria-label="Share within Cohort: 5.4%; Cohort: #7 Gender: Male; ENSG00000133703-aamutation: p.Gly12Cys; Count: 27; Share per Cohort: 5.4%"]').click();
    cy.get('[aria-label="Share within Cohort: 12.3%; Cohort: #8 Gender: Female; ENSG00000133703-aamutation: p.Gly12Cys; Count: 77; Share per Cohort: 12.3%"]').click();
    cy.get('[aria-label="Share within Cohort: 8.5%; Cohort: #9 Gender: Male; ENSG00000133703-aamutation: p.Gly12Cys; Count: 38; Share per Cohort: 8.5%"]').click();
    cy.get('[aria-label="Share within Cohort: 14.4%; Cohort: #10 Gender: Female; ENSG00000133703-aamutation: p.Gly12Cys; Count: 942; Share per Cohort: 14.4%"]').click();
    cy.get('[aria-label="Share within Cohort: 10.6%; Cohort: #11 Gender: Male; ENSG00000133703-aamutation: p.Gly12Cys; Count: 505; Share per Cohort: 10.6%"]').click();
    
    cy.get('.btn .fa-filter').click({force: true});
    cy.get('.confirmBtn').click();

    // Inspect the prevalence of this Mutation
    cy.get('.task-title.btn').click();
    cy.get('div.prevalence').click();

    cy.wait(3000);
    cy.get('div.prevalence-cohort-pack').eq(0).find('.prev-checkbox').eq(3).click();
    cy.get('div.prevalence-cohort-pack').eq(0).find('.prev-checkbox').eq(2).click();
    cy.get('div.prevalence-cohort-pack').eq(0).find('.prev-checkbox').eq(1).click();
    cy.get('div.prevalence-cohort-pack').eq(0).find('.prev-checkbox').eq(0).click();

    cy.get('div.prevalence-cohort-pack').eq(1).find('.prev-checkbox').eq(2).click();




    





  })
})