import { Component } from '@angular/core';
import { ApiRestService } from '../api-rest.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  preguntas = [
    {id: 1, pregunta:'¿Cuál es la capital de Francia?'},
    {id: 2, pregunta:'¿Cuál es la capital de España?'},
    {id: 2, pregunta:'¿Cuál es la capital de Brasil?'},
    {id: 2, pregunta:'¿Cuál es la capital de México?'},
  ]
  
  constructor(private api: ApiRestService){}

  ngOnInit():void{
    this.consulta()
  }

  consulta(){
    this.api.getAllpreguntas().subscribe({
      next: datos => {
        console.log(datos)
      },
      error: e => {}
    })
  }
}
