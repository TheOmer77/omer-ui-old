export type Styles = {
  'button-elevated': string;
  'button-error': string;
  'button-filled': string;
  'button-icon': string;
  'button-icon-end': string;
  'button-icon-start': string;
  'button-lg': string;
  'button-md': string;
  'button-neutral': string;
  'button-primary': string;
  'button-root': string;
  'button-secondary': string;
  'button-sm': string;
  'button-text': string;
  'button-tonal': string;
  'button-xl': string;
  'button-xs': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
