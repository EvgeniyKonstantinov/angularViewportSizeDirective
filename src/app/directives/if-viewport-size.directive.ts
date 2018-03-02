import { Directive, HostListener, Input, TemplateRef, ViewContainerRef, Renderer } from '@angular/core';
import { AppSetings } from '../config';
import { IConfig } from '../config.interface';

@Directive({
  selector: '[IfViewportSize]'
})
export class IfViewportSizeDirective {

  IConfig: IConfig;
  screenwidth: number;
  directiveparam: string;

  constructor(private templateRef: TemplateRef<any>, 
              private viewContainer: ViewContainerRef,
              private appSetings: AppSetings,
              private renderer: Renderer) { 
    this.IConfig = appSetings.IConfig;
    this.screenwidth = window.innerWidth;

  }

  @Input() set IfViewportSize(param: string){
    this.directiveparam = param;
    this.showComponent();
  
  }

  showComponent() {
    if(this.screenwidth < this.IConfig[this.directiveparam]){
      const el = this.viewContainer.createEmbeddedView(this.templateRef).rootNodes[0];
      this.renderer.listen(el, 'click', this.onResize);
    } else {
      this.viewContainer.clear();
    }
  }

  onResize(event: any) {
    console.log('sda');
    // this.screenwidth = event.target.innerWidth;
    // this.showComponent();
  }

  
 
}
