import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'page-peoplep',
  templateUrl: 'peoplep.html'
})
export class PeoplepPage {
  langs;
  langForm;

	constructor(public navCtrl: NavController){
    this.langForm = new FormGroup({
      "langs": new FormControl({value: 'rust', disabled: false})
    });
	}
	   
	goBack(){
	    this.navCtrl.pop();
	}

  doSubmit(event) {
    console.log('Submitting form', this.langForm.value);
    event.preventDefault();
  }
	
	
}