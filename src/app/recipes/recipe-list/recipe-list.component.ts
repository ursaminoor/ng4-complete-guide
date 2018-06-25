import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test recipe', 'This is simply a test',
     'https://www.skinnytaste.com/wp-content/uploads/2017/08/Grilled-Garlic-and-Herb-Chicken-and-Veggies-1-2.jpg'),
    new Recipe('Recipe 2', 'Another one recipe', 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2015/11/20/3/FNK_Kids-Can-Make-OPENER_s4x3.jpg.rend.hgtvcom.966.725.suffix/1448050653882.jpeg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
