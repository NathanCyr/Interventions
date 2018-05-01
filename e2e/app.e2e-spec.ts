import { AppPage } from './app.po';

describe('stocks App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Déclarer un problème');
  });

  it('doit activer le bouton Sauvegarder avec champs valides scénario nominal', () => {
    page.setChampsValidesScenarioNominal();                    
    expect(page.boutonSubmit().isEnabled()).toBe(true);
  });  

  it('doit activer le bouton Sauvegarder avec champs valides scénario alternatif par message TEXTE', () => {
    page.setChampsValidesScenarioAlternatifParMessageTexte();                    
    expect(page.boutonSubmit().isEnabled()).toBe(true);
  });   
  
  it('doit activer le bouton Sauvegarder avec champs valides scénario alternatif par message COURRIEL', () => {
    page.setChampsValidesScenarioAlternatifParCourriel();                    
    expect(page.boutonSubmit().isEnabled()).toBe(true);
  });    

  it('zone NOM DU PRODUIT a une bordure VERTE si nombre de caractères suffisant', () => {
    page.setZoneProblemeCaracteresInsuffisant();  
    expect(page.obtenirClasseZoneNomProduit()).toContain('is-valid');
  });  

  it('zone NOM DU PRODUIT a une bordure ROUGE si nombre de caractères insuffisant', () => {
    page.setZoneProblemeCaracteresSuffisant();  
    expect(page.obtenirClasseZoneNomProduit()).toContain('is-invalid');
  });  
});
