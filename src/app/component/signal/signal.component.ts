import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  templateUrl: './signal.component.html',
  styleUrls: ['./signal.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class SignalComponent implements OnInit {
  public firstName = signal("Gahan");
  public lastName = signal<string>("Kotebagilu");
  public course='Angular';
  public rollNo =signal<number>(100);

  constructor() {
    const value = this.firstName();
    setTimeout(() => {  
      this.firstName.set('Gagan');
      this.course = 'React JS';
    },5000);
  }

  public Increment()
  {
    this.rollNo.update(oldValue=>oldValue+1);
  }

  ngOnInit() {
  }

}
