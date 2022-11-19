export type Styles = {
  'button-elevated': string;
  'button-error': string;
  'button-filled': string;
  'button-icon': string;
  'button-icon-end': string;
  'button-icon-start': string;
  'button-large': string;
  'button-medium': string;
  'button-neutral': string;
  'button-primary': string;
  'button-root': string;
  'button-secondary': string;
  'button-small': string;
  'button-text': string;
  'button-tonal': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
