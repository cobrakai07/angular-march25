import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private route:ActivatedRoute, private router:Router){}
  username="";
  ngOnInit(){
    this.route.queryParams.subscribe(params=>{
      console.log(params);
      
        this.username=params['name'];
    })
  }


  goToAboutPage(){
    this.router.navigate(["about"]);
  }
}
