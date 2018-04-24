import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { VerifierCaracteresValidator } from '../Shared/caracteres-validator';
import { ProblemeService } from './probleme.service';
import { ITypeProbleme } from './probleme';
 
 @Component({
   selector: 'Inter-probleme',
   templateUrl: './probleme.component.html',
   styleUrls: ['./probleme.component.css']
 })
 export class ProblemeComponent implements OnInit {
 
   problemeForm: FormGroup;
   categoriesProbleme: ITypeProbleme[];
   errorMessage: string;

   constructor(private fb:FormBuilder, private probleme: ProblemeService) { }
 
   ngOnInit() {
     this.problemeForm = this.fb.group({
 
        prenom: ['',[VerifierCaracteresValidator.sansEspaces(), VerifierCaracteresValidator.longueurMinimum(3)]],
        nom: ['',[VerifierCaracteresValidator.sansEspaces(), VerifierCaracteresValidator.longueurMaximum(50)]],
        noProbleme: ['', Validators.required],
        Notification: ['appliquerNotification'],
        telephone: [{value: '', disabled: true}],
        notificationCourrielGroupe: this.fb.group({
          Courriel: [{value: '', disabled: true}],
          CourrielValidation: [{Value: '', disabled: true}]

        })
     });

     this.probleme.obtenirProbleme()
    .subscribe(cat => this.categoriesProbleme = cat,
               error => this.errorMessage = <any>error);  

   }

  appliquerNotifications(typeNotification: string): void{
    const ControleCourriel = this.problemeForm.get('notificationCourrielGroup.Courriel');
    const ControleTelephone = this.problemeForm.get('telephone');
    const ControleCourrielValidation = this.problemeForm.get('notificationCourrielGroup.CourrielValidation');

    ControleCourriel.clearValidators();
    ControleTelephone.clearValidators();
    ControleCourrielValidation.clearValidators();

    ControleCourriel.reset();
    ControleTelephone.reset();
    ControleCourrielValidation.reset();

    ControleCourriel.disable();
    ControleTelephone.disable();
    ControleCourrielValidation.disable();

    if(typeNotification == 'Notifier'){
      ControleCourriel.enable();
      ControleCourriel.setValidators([Validators.required]);
      ControleTelephone.enable();
      ControleTelephone.setValidators([Validators.required]);
      ControleCourrielValidation.enable();
      ControleCourrielValidation.setValidators([Validators.required]);
    }

    ControleCourriel.updateValueAndValidity();
    ControleTelephone.updateValueAndValidity();
    ControleCourrielValidation.updateValueAndValidity();
  }
 
 }