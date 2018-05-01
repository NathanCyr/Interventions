import { browser, by, element, ElementFinder } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/probleme');
  }

  getParagraphText() {
    return element(by.css('inter-root h5')).getText();
  }

  setChampsValidesScenarioNominal() : void {
    element(by.id('prenomId')).clear();
    element(by.id('prenomId')).sendKeys('Nathan');
    element(by.id('nomId')).clear();
    element(by.id('nomId')).sendKeys('Cyr');
    // Sélectionner le X élément dans la zone de liste déroulante
    element(by.id('noProblemeId')).all(by.tagName('option')).get(2).click();
    // Cliquer sur le bouton radio voulu
    element.all(by.id('NotifierId')).get(0).click();
    element(by.id('descriptionProblemeId')).clear();
    element(by.id('descriptionProblemeId')).sendKeys('Problème entre la chaise et le clavier...');
   }
   setChampsValidesScenarioAlternatifParMessageTexte() : void {
    element(by.id('prenomId')).clear();
    element(by.id('prenomId')).sendKeys('Nathan');
    element(by.id('nomId')).clear();
    element(by.id('nomId')).sendKeys('Cyr');
    // Sélectionner le X élément dans la zone de liste déroulante
    element(by.id('noProblemeId')).all(by.tagName('option')).get(2).click();
    // Cliquer sur le bouton radio voulu
    element.all(by.id('NotifierId')).get(0).click();
    element(by.id('descriptionProblemeId')).clear();
    element(by.id('descriptionProblemeId')).sendKeys('Problème entre la chaise et le clavier...');
   }
   setChampsValidesScenarioAlternatifParCourriel() : void {
    element(by.id('prenomId')).clear();
    element(by.id('prenomId')).sendKeys('Nathan');
    element(by.id('nomId')).clear();
    element(by.id('nomId')).sendKeys('Cyr');
    // Sélectionner le X élément dans la zone de liste déroulante
    element(by.id('noProblemeId')).all(by.tagName('option')).get(2).click();
    // Cliquer sur le bouton radio voulu
    element.all(by.id('NotifierId')).get(0).click();
    element(by.id('descriptionProblemeId')).clear();
    element(by.id('descriptionProblemeId')).sendKeys('Problème entre la chaise et le clavier...');
   } 

  boutonSubmit() : ElementFinder { 
    return element(by.buttonText('Sauvegarder'));
  }   

  setZoneProblemeCaracteresInsuffisant() : void {
    element(by.id('prenomId')).clear();
    element(by.id('prenomId')).sendKeys('XX');
  }

  setZoneProblemeCaracteresSuffisant() : void {
    element(by.id('prenomId')).clear();
    element(by.id('prenomId')).sendKeys('XXXXX');
  }

  obtenirClasseZoneNomProduit()   { 
    return element(by.id('prenomId')).getAttribute("class");
  }   
}

