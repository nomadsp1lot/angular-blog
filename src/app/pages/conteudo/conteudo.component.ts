import { Component,Input, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import {dataFake} from '../../data/dataFake'

@Component({
  selector: 'app-conteudo',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './conteudo.component.html',
  styleUrl: './conteudo.component.css'
})
export class ConteudoComponent implements OnInit {
  @Input() photoCover:string = "";
  @Input() contentTitle:string = "";
  @Input() contentDescription:string = "";
  private id:string | null = "0";

  constructor(private route:ActivatedRoute){
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe( value => 
      this.id = value.get("Id")
    );
    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string | null){
    const result = dataFake.filter(article => article.id == id)[0]
    this.contentTitle=result.title
    this.photoCover=result.photo
  }

}
