# Angular- Ng Dynamic Loader with NGRX

Dynamically loading components from any module to any host directive for angular 5.x integration with ngrx store and effects.

## Set up

Import `LoaderModule` into your AppModule.
Import `LoaderEffect` and include in your EffectsModule forRoot array.

Create your directive as normal with viewContainerRef injected into contructor and implement `GenericHostDirective`.
Place directive selector on an anchor element in a component.html where you will dynamically load.
Get a ViewChild reference to the directive in the component.ts.

Make sure all components to be dynamicall loaded are included in the `entryComponent `array of the module they are registered.
Let all components to be dynamically loaded implement `BaseComponent`.

