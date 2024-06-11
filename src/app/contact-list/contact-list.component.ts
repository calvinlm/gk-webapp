import { Component, OnInit, ViewChild } from '@angular/core';
import { CrudService } from './..//service/crud.service';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css'
})
export class ContactListComponent implements OnInit {

  Contacts: any = [];
  paginatedContacts: any = [];
  filteredContacts: any = [];
  searchTerm: string = '';
  selectedType: string = 'all'; // Default selected type

 @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private crudService: CrudService) { }

  ngOnInit(): void {
    this.crudService.getContacts().subscribe(res => {
      this.Contacts = res;
      this.filteredContacts = this.Contacts;
      this.paginatedContacts = this.filteredContacts.slice(0, 5);
    });    
  }

  ngAfterViewInit() {
    this.paginator.page.subscribe((event) => {
      const startIndex = event.pageIndex * event.pageSize;
      const endIndex = startIndex + event.pageSize;
      this.paginatedContacts = this.filteredContacts.slice(startIndex, endIndex);
    });
  }

  delete(id: any, i: any) {
    if(window.confirm('Do you want to go ahead?')) {
      this.crudService.deleteContact(id).subscribe(() => {
        this.Contacts.splice(i, 1);
        this.filteredContacts = this.Contacts; // Update filtered books after deletion
        this.paginatedContacts = this.filteredContacts.slice(this.paginator.pageIndex * this.paginator.pageSize, (this.paginator.pageIndex * this.paginator.pageSize) + this.paginator.pageSize);
      });
    }
  }

  applyFilter() {
    
    // Apply search filter if search term is not empty
    if (this.searchTerm.trim() !== '') {
      this.filteredContacts = this.filteredContacts.filter((book: any) => {
        return book.title.toLowerCase().includes(this.searchTerm.toLowerCase());
      });
    }
    
    // Reset paginator to the first page when applying a filter
    this.paginator.firstPage();
    this.paginatedContacts = this.filteredContacts.slice(0, this.paginator.pageSize);
  }

  resetFilters() {
    this.selectedType = 'all';
    this.searchTerm = '';
    this.applyFilter(); // Apply filter after resetting
  }
}
