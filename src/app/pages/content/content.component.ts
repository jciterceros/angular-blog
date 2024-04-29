import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit {
  @Input()
  photoCover: string = "https://vidafullstack.com.br/wp-content/uploads/2023/12/angular-1080x675.jpg"
  @Input()
  contentTitle: string = "Lorem ipsum dolor sit amet"
  @Input()
  contentDescription: string = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam aspernatur ipsum eligendi blanditiis ratione, ipsa sapiente iure! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam aspernatur ipsum eligendi blanditiis ratione, ipsa sapiente iure!"
  @Input()
  id: string | null = "0"


  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value => {
      this.id = value.get("id");
      this.setvaluesToComponent(this.id);
    })
  }
  setvaluesToComponent(id: string | null) {
    const result = dataFake.filter(article => article.id.toString() === id)
    this.photoCover = result[0].photo;
    this.contentTitle = result[0].title;
    this.contentDescription = result[0].description;
  }
}
