export type Styles = {
  'blue': string;
  'green': string;
  'lavender': string;
  'maroon': string;
  'muave': string;
  'peach': string;
  'pink': string;
  'red': string;
  'rosewater': string;
  'sapphire': string;
  'sky': string;
  'teal': string;
  'yellow': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
