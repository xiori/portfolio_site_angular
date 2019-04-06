import { Observable } from 'rxjs';
import { Projet } from './projet';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})

export class AdminService {
    url = 'http://localhost:3000/api/v1/projets/';

    constructor(private httpClient: HttpClient) {}

    readProjects(): Observable<Projet[]> {
        return this.httpClient.get<Projet[]>(this.url);
    }

    createProject(projet: Projet): Observable<Projet>{
        return this.httpClient.post<Projet>(this.url, projet);
    }

    updateProjet(projet: Projet): Observable<Projet> {
        return this.httpClient.put<Projet>(this.url + projet.id, projet);
    }

    deleteProjet(id: number) {
        return this.httpClient.delete<Projet>(this.url + id);
    }
}