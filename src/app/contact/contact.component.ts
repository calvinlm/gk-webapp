import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from '../service/crud.service';
import { Observer } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private crudService: CrudService
  ) {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  ngOnInit() {}

  onSubmit(): void {
    if (this.contactForm.valid) {
      const observer: Observer<any> = {
        next: (response) => {
          console.log('Data added successfully:', response);
          this.router.navigateByUrl('/contact-list');
        },
        error: (error) => {
          console.error('Error adding data:', error);
        },
        complete: () => {
          console.log('Request complete');
        }
      };

      this.crudService.addContact(this.contactForm.value).subscribe(observer);
    }
  }
}
