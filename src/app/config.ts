import { IConfig } from "./config.interface";
import { NgModule } from "@angular/core";

@NgModule({})

export class AppSetings { 
    public IConfig: IConfig = {
        small: 768,
        medium: 1024,
        large: 1280
    }
}