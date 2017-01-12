import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: 'i-probar' // Attribute selector
})
export class IProbar {

    constructor(public element: ElementRef) {

    }
    ngOnInit(): void {
		var type = this.element.nativeElement.attributes[1].nodeValue;
		if(type=="1"){
			this.element.nativeElement.style.background = "#f75858";
		}
		else if(type=="2"){
			this.element.nativeElement.style.background = "#4a8af5";
		}
		this.element.nativeElement.style.marginLeft = "20px";
		this.element.nativeElement.style.paddingRight =
			this.element.nativeElement.attributes[0].nodeValue + "px";

	}

}
