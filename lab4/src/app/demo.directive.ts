import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[appDemo]'
})
export class DemoDirective{
    constructor(private el: ElementRef) { }

    @HostListener('click')
    imageChange(){
        var src: any = this.el.nativeElement.src;
        var prev: any = document.getElementById("preview")
        prev.src = src;
    }
}