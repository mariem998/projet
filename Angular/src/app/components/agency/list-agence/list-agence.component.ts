import { Component, Input } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Agency } from 'src/app/Models/agency';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-agence',
  templateUrl: './list-agence.component.html',
  styleUrls: ['./list-agence.component.css']
})
export class ListAgenceComponent {

  @Input() agency!: Agency;
  agencies: Agency[] = [];

  constructor ( 
    private userService : UserService,
    private router : Router) {}

  ngOnInit(): void {
    this.userService.getAllAgencies().subscribe((data: Agency[]) => {
      this.agencies = data;
    });
  }

  deleteAgency(agency: Agency): void {
    if (agency && agency.id) {
      this.userService.deleteAgency(agency.id).subscribe(
        () => {
          console.log(`Agency with ID ${agency.id} deleted successfully.`);
          this.router.navigate(['/list-agence']).then(() => {
            location.reload();
          });
          
        },
        (error) => {
          console.error('Error deleting agency:', error);
        }
      );
    } else {
      console.error('Invalid agency data for deletion.', agency);
    }
  } 
}
