import { NgwWowService } from 'ngx-wow';
import { fadeInAnimation, slideInOutAnimation } from '../animations';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, HostListener } from '@angular/core';
import { ProductService } from '../product.service';
import { AngularFirestore } from '@angular/fire/firestore'; 
import  { Observable } from  'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [fadeInAnimation,
    slideInOutAnimation]
})
export class ContactComponent {
   // Adding variables
   itemName: any;
   itemEmail: any;
   itemSubject: any;
   itemMessage: any;
   items: any;
   contactForm: FormGroup;

  constructor(private wowService: NgwWowService,
    private fb: FormBuilder, private db: AngularFirestore) {
      this.items = db.collection('messages').valueChanges()
      // Passing in MD_Bootstrap form validation 
              this.contactForm = fb.group({
              contactFormName: ['', Validators.required],
              contactFormEmail: ['', [Validators.required, Validators.email]],
              contactFormSubject: ['', Validators.required],
              contactFormMessage: ['', Validators.required]
           });
    }
  // Pushing the contact-form to the firebase data base
  onSubmit()  {
    this.db.collection('messages').add({ name: this.itemName, email: this.itemEmail, subject: this.itemSubject, 
    message: this.itemMessage});
    
    //Popup message
    alert('Thank you for contacting us, your message has gone through!')
   }

// Clearing the form after submit
  clearForm() {
        this.contactForm.reset();
      }


}
