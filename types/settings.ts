export interface Settings {
  debug: string | "n";
  depsEntrypoint: string | "deps.ts";
  depsModule: Uint8Array;
  entrypoint: string | "mod.ts";
  extension: string | "ts";
  gitignore: string | ".gitignore";
  module: Uint8Array;
  force: boolean | false;
  git: boolean | true;
  path: string | ".";
  template: string | "";
  templateDir: string | "templates";
  editor: string | "vscode";
}