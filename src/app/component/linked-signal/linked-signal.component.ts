import { Component, linkedSignal, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-linked-signal',
  templateUrl: './linked-signal.component.html',
  styleUrls: ['./linked-signal.component.css']
})
export class LinkedSignalComponent implements OnInit {
  public firstName = signal<string>("Gahan");
  public lastName = signal<string>("Kotebagilu");

  fullName = linkedSignal({
    source: this.firstName,
    computation: (newOptions, previous) => {
    const fullName = newOptions + " " + this.lastName()
      return fullName;
  }
  })

  user=signal({id:1997,name:"gahan"});

  email=linkedSignal({
    source:this.user,
    computation:user=>`${user.name+user.id}@gmail.com`,
    equal:(a:any,b:any)=>a.i==b.id
  })

  public changeName():void 
  {
    this.firstName.set("Gagan");
  }
  public changeEmail():void 
  {
    this.user.set({id:1993,name:"gagan"});
  }

constructor() { }

ngOnInit() {
}

}
