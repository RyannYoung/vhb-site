/// <reference types="react-scripts" />

declare module "*.mp4" {
  const src: string;
  export default src;
}

declare module "*.m4v" {
  const src: string;
  export default src;
}

declare module "*.txt" {
  const content: any;
  export default content;
}
