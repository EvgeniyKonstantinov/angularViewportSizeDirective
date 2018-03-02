import { Directive, HostListener, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { AppSetings } from '../config';
import { IConfig } from '../config.interface';

@Directive({
  selector: '[IfViewportSize]'
})
export class IfViewportSizeDirective {

  IConfig: IConfig;
  viewportWidth: number;
  directiveparam: string;

  constructor(private templateRef: TemplateRef<any>, 
              private viewContainer: ViewContainerRef,
              private appSetings: AppSetings) { 
    this.IConfig = appSetings.IConfig;
    this.viewportWidth = window.innerWidth;

  }

  @Input() set IfViewportSize(param: string){
    this.directiveparam = param;
    this.showComponent();
  }

  showComponent() {

    if( this.directiveparam === 'small' && this.viewportWidth < this.IConfig.medium){
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else if( this.directiveparam === 'medium' &&  this.IConfig.medium <= this.viewportWidth && this.viewportWidth < this.IConfig.large){
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else if( this.directiveparam === 'large' && this.viewportWidth >= this.IConfig.large){
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }

  }

 
}
