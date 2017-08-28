(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common'], factory) :
	(factory((global.vervaljs = global.vervaljs || {}, global.vervaljs.charts = {}),global.ng.core,global.ng.common));
}(this, (function (exports,core,common) { 'use strict';

var BarComponent = (function () {
    function BarComponent() {
    }
    BarComponent.prototype.ngOnInit = function () { };
    BarComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'bar',
                    template: "<h1>Gr\u00E1fica de barras</h1>"
                },] },
    ];
    /** @nocollapse */
    BarComponent.ctorParameters = function () { return []; };
    return BarComponent;
}());

var ChartsModule = (function () {
    function ChartsModule() {
    }
    ChartsModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [
                        common.CommonModule
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

exports.ChartsModule = ChartsModule;
exports.BarComponent = BarComponent;

Object.defineProperty(exports, '__esModule', { value: true });

})));
