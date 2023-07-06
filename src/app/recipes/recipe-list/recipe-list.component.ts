import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Ricetta di prova',
      'Una bella ricetta',
      'https://th.bing.com/th/id/OIP.QExi6APdpquqTSgicOJpWgHaE-?pid=ImgDet&rs=1'
    ),
  ];

  constructor() {}

  ngOnInit() {}
}
