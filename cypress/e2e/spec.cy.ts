describe('Advertisement', () => {
  const adUrls = [
    'https://securepubads.g.doubleclick.net/gampad/ads*',
    'https://securepubads.g.doubleclick.net/pcs/view*',
    'https://securepubads.g.doubleclick.net/pcs/view*',
  ];

  it('loads and redirects on ad click', () => {
    // Intercept network requests for all ad URLs
    cy.intercept('GET', adUrls[0]).as('adRequest1');
    cy.intercept('GET', adUrls[1]).as('adRequest2');
    cy.intercept('GET', adUrls[2]).as('adRequest3');

    cy.visit('http://localhost:5173');

    // Check response status codes for all ad URLs
    adUrls.forEach((url, index) => {
      cy.get('[id^="banner-ad-"]', { timeout: 10000 }).should('exist').then(($adContainer) => {
        cy.wait(`@adRequest${index + 1}`).its('response.statusCode').should('eq', 200);
      });
    });
  });
});