import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarComponent } from './bar.component';
var ChartsModule = (function () {
    function ChartsModule() {
    }
    ChartsModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [
                        BarComponent
                    ],
                    exports: [
                        BarComponent
                    ]
                },] },
    ];
    /** @nocollapse */
    ChartsModule.ctorParameters = function () { return []; };
    return ChartsModule;
}());
export { ChartsModule };
//# sourceMappingURL=charts.module.js.map