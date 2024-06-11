import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CrudService } from './../service/crud.service';
import { FormGroup, FormBuilder } from "@angular/forms";
 
@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrl: './contact-detail.component.css'
})
export class ContactDetailComponent implements OnInit {

  getId: any;
  updateForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private activatedRoute: ActivatedRoute,
    private crudService: CrudService
  ) {
    this.getId = this.activatedRoute.snapshot.paramMap.get('id');
 
    this.crudService.getContact(this.getId).subscribe(res => {
      this.updateForm.setValue({
        name: res['name'],
        email: res['email'],
        message: res['message'],
      });
    });
 
    this.updateForm = this.formBuilder.group({
      name: [''],
      email: [''],
      message: [''],
    })
  }
 
  ngOnInit() { }
 
  onUpdate(): any {
    this.crudService.updateContact(this.getId, this.updateForm.value)
    .subscribe(() => {
        console.log('Data updated successfully!')
        this.ngZone.run(() => this.router.navigateByUrl('/contact-list'))
      }, (err) => {
        console.log(err);
    });
  }
}
