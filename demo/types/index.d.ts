export interface DemoOption<
  Value extends string,
  Options extends object = object
> {
  label: string;
  value: Value;
  options?: Options;
}
