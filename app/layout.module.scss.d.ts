export type Styles = {
  'body': string;
  'footer': string;
  'header': string;
  'hr': string;
  'link': string;
  'main': string;
  'nav-list': string;
  'nav-row': string;
  'nav-title': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
