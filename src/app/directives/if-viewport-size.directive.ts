import { Directive, HostListener, Input, TemplateRef, ViewContainerRef, Renderer2 } from '@angular/core';
import { ScreenwidthService } from '../services/screenwidth.service';

@Directive({
  selector: '[IfViewportSize]'
})
export class IfViewportSizeDirective {

  
  directiveparam: string;

  constructor(private templateRef: TemplateRef<any>, 
              private viewContainer: ViewContainerRef,
              private screenwidth: ScreenwidthService,
              private renderer: Renderer2) { 
     this.renderer.listen(window, 'resize', (event) => {
       this.showComponent(window.innerWidth)
      });
  }

  @Input() set IfViewportSize(param: string){
    this.directiveparam = param;
    this.showComponent(window.innerWidth);
  }

  showComponent(windowWidth) {

    if(this.viewContainer.length === 0){
      if(this.screenwidth.checShow(this.directiveparam,  windowWidth)) {
        this.viewContainer.createEmbeddedView(this.templateRef);
      }
    } else {
      if(this.screenwidth.checShow(this.directiveparam,  windowWidth)) {
        return;
      }
      else {
        this.viewContainer.clear();
      }
    } 
  }
 
}
