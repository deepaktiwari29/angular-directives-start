import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
  
  constructor(private elRef : ElementRef,private renderer : Renderer2) { }

  ngOnInit() {
    // this.renderer.setStyle(this.elRef.nativeElement,
    //     'background-color', 'blue');
    this.backgroundColor = this.defaultColor;
  }

  @HostBinding('style.backgroundColor') backgroundColor : string;
  @Input() defaultColor = 'transparent';
  @Input('appBetterHighlight') highlightedColor = 'blue';


  @HostListener('mouseenter') mouseover(eventData : Event) {
    // this.renderer.setStyle(this.elRef.nativeElement,
    //   'background-color', 'blue');
    this.backgroundColor = this.highlightedColor;
  }

  @HostListener('mouseleave') mouseleave(eventData : Event) {
    // this.renderer.setStyle(this.elRef.nativeElement,
    //   'background-color', 'transparent');
    this.backgroundColor = this.defaultColor;
  }
  
}
