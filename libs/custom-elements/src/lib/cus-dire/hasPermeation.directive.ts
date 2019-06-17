import { 
    Directive, 
    Input,
    TemplateRef,
    ViewContainerRef
 } from "@angular/core";

import { Principal } from '@SVIS/auth';

@Directive({
    selector:'[permeationCode]'
})

export class hasPermeationDirective {
    constructor( 
        private principal: Principal,
        private templateRef: TemplateRef<any>,
        private viewContainerRef : ViewContainerRef
    ){

    }

    private authorities: string[];

    @Input()
    set permeationCode(value: string | string[]) {
        this.authorities = typeof value === 'string' ? [value] : value;

        this.updateView();
        // Get notified each time authentication state changes.
        this.principal.getAuthenticationState().subscribe(identity => this.updateView());
    }

    private updateView(): void {
        this.principal.hasAnyAuthority(this.authorities,'Code').then(result => { 
            this.viewContainerRef.clear();
            if (result) {
                this.viewContainerRef.createEmbeddedView(this.templateRef);
            }
        });
    }
}