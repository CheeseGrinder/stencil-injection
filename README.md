<div align="center">
  <a href="https://github.com/CheeseGrinder/stencil-injection">
    <img src="https://img.shields.io/github/license/CheeseGrinder/stencil-injection"/>
  </a>
  <a href="https://github.com/CheeseGrinder/stencil-injection">
    <img src="https://img.shields.io/npm/dm/stencil-injection"/>
  </a>
  <a href="https://github.com/CheeseGrinder/stencil-injection">
    <img src="https://github.com/CheeseGrinder/stencil-injection/actions/workflows/npm-publish.yml/badge.svg"/>
  </a>
  
</div>

## Description 📄
Stencil-injection is small package to make dependencies injection in StencilJS.
When a class is injected, only one instace of them are created.

## Install 📦️
```bash
npm i --save stencil-injection
```
## How to use ✏️
In the `shared/services` directory, create a file with the following code :
```ts
// class-to-injected.ts
export class ClassToInject {

  somePublicMethod() {
    // Do something.
  }
}
```
```ts
// some-other-class.ts
import { Inject } from 'stencil-injection';
import { ClassToInjected } from './class-to-inject';

export class SomeOtherClass {

  @Inject(ClassToInject) private injectedClass: ClassToInject;

  callInjectedClass() {
    this.injectedClass.somePublicMethod();
  }
}
```

Also it can be used in component:
```tsx
import { Component, h, State } from '@stencil/core';
import { Inject } from 'stencil-injection';
import { ClassToInject } from 'shared/services/class-to-inject';
import { SomeOtherClass } from 'shared/services/some-other-class';

@Component({
  tag: 'some-component'
})
export class SomeComponent {

  @Inject(ClassToInject) private injectedClass: ClassToInject;
  @Inject(SomeOtherClass) private someOtherClass: SomeOtherClass;

  render() {
    // Render a beautiful component
  }
}
```
