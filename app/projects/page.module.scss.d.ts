export type Styles = {
  'info': string;
  'logo': string;
  'project': string;
  'project-list': string;
  'summary': string;
  'tag': string;
  'tags': string;
  'year-hr': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
