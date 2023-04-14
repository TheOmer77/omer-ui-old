export interface DemoOption<Value, Options extends object = object> {
  label: string;
  value: Value;
  options?: Options;
}
