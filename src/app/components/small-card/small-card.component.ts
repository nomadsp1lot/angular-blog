import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import {dataFake} from '../../data/dataFake'

@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})
export class SmallCardComponent implements OnInit {
  @Input() photoCover:string="";
  @Input() cardTitle:string="";
  @Input() Id:string="0";


  ngOnInit(): void {
    this.setValuesToComponent(this.Id);
  }

  setValuesToComponent(id:string){
    const result = dataFake.filter(article => article.id == id)[0]
    this.cardTitle =result.description
    this.photoCover=result.photo
  }

}
