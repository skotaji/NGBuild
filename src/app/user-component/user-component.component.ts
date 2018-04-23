import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.css']
})
export class UserComponentComponent implements OnInit {

  users= [
    {
      id: '1',
      name: 'Subbu',
      skills: '.net'
    },
    {
      id: '2',
      name: 'Two',
      skills: 'Two skills'
    },
    {
      id: '3',
      name: 'Three',
      skills: 'Three Skils'
    },
    {
      id: '4',
      name: 'Four',
      skills: 'Four skills'
    }
  ]
  user;
  temp;
  constructor(private route: ActivatedRoute) { 
    this.user = this.users.find((x)=>{
      return x.id == this.route.snapshot.params['id']
         
       }
     );
 
  }

  ngOnInit() {
    alert('lol');
    console.log(this.route.snapshot.params['id']);
    this.route.params.subscribe((x)=>{
      console.log(x);
    })

    this.route.params.subscribe(
    (x)=>{
      this.temp = x.id;
      console.log(x);
      this.user = this.users.find((y)=>{
        console.log(y);
        return y.id == this.temp;
      })
    }
    )
    

    
  let usr =   [{name:'one', age:'one'}, {name:'two', age:'two'}, {name:'three', age:'three'}].find((x)=>{
      return x.name == 'three'
    })

    console.log(usr);
  }

}
