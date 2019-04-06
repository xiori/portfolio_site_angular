import { Projet } from './projet';
import { AdminService } from './admin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  projets: Projet[];

  selectedProjet: Projet = { id: null, projetImg: null, projetTitle: null, projetDescription: null, projetLink: null};

  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.adminService.readProjects().subscribe((projets: Projet[]) => {
      this.projets = projets;
      console.log(projets);
    });
  }

  createOrUpdateProjet(form) {
    if (this.selectedProjet && this.selectedProjet.id) {
      form.value.id = this.selectedProjet.id;
      this.adminService.updateProjet(form.value).subscribe((projet: Projet) => {
        console.log('Projet Mis à jour', projet);
      });
    } else {
      this.adminService.createProject(form.value).subscribe((projet: Projet) => {
        console.log('Projet Créer', projet);
      });
    }
  }

  selectProjet(projet: Projet) {
    this.selectedProjet = projet;
  }

  deleteProjet(id) {
    this.adminService.deleteProjet(id).subscribe((projet: Projet) => {
      console.log('Projet supprimer', projet);
    });
  }

}
