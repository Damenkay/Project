import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: '[addDropdown]'
})
export class DropdownDirective{
   @HostBinding('class.keep-Open') isOpen = false
   
    @HostListener('click')toggleOpen(){
       this.isOpen = !this.isOpen
    }
    
}