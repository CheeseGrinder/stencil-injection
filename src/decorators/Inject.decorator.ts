interface Constructor {
  new (): any;
}

const dependencies: Map<string, Constructor> = new Map();

export function Inject(injectable: Constructor): PropertyDecorator {
  return (target: any, propertyKey: string | symbol) => {
    if (!dependencies.has(injectable.name)) dependencies.set(injectable.name, new injectable());
    target[propertyKey as string] = dependencies.get(injectable.name);
  }
}
