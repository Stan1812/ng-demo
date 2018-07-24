import { Injectable } from "@angular/core";
import { Hero } from "./app.hero";
import { HEROES } from "./app.mock.heros";
@Injectable({
  providedIn: "root"
})
export class HeroService {
  constructor() {}

  getHeros(): Hero[] {
    return HEROES;
  }
}
