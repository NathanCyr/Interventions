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
        noProbleme: ['', Validators.required]
     });

     this.probleme.obtenirProbleme()
    .subscribe(cat => this.categoriesProbleme = cat,
               error => this.errorMessage = <any>error);  

   }
 
 }