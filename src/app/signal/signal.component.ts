import { Component, computed, effect, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css'
})
export class SignalComponent {
    
  signalCount: WritableSignal<number|string> = signal(0); // this type of signal we can change value

  x = signal(10);
  y = signal(17);
  computedSignal = computed(()=>this.y()+ this.x()); // this type of signal can't be updated directly, the signal it depends upon gets updated then it also gets updated automatically

  constructor(){
    effect(()=>{
      console.log("as soon as we are changing the value of signal this function gets executed automatically ",this.signalCount());
    })
  }

  incrementSignalCounter(){
    const val = this.signalCount();
    if(typeof val === 'number')
      this.signalCount.set(val+1);

    //this.signalCount.update((val)=>val+"Hello"); // another way to update signal
  }
}
