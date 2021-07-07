# init

[![Build](https://github.com/GJZwiers/deno-init/actions/workflows/build.yaml/badge.svg)](https://github.com/GJZwiers/deno-init/actions/workflows/build.yaml)
[![Coverage Status](https://coveralls.io/repos/github/GJZwiers/deno-init/badge.svg?branch=main)](https://coveralls.io/github/GJZwiers/deno-init?branch=main)

Start Deno projects faster with `deno-init`, a simple executable that scaffolds the project structure for you.

> Please note this module's API is not stable yet and there may be breaking changes on `0.x` version increments.

## Requirements

- `deno` installed and available on a terminal.

## Installation

Use the `deno install` command to install or upgrade the executable. If you download it without specifying a version the latest will be installed.

```bash
deno install --allow-read --allow-write -n deno-init https://deno.land/x/init@0.9.1/mod.ts
```

If you would like to have the very latest (unreleased) changes you can also install `deno-init` from its raw GitHub URL:

```bash
deno install --allow-read --allow-write -n deno-init https://raw.githubusercontent.com/GJZwiers/deno-init/main/mod.ts
```

## Basic Usage

You can run the command without specifying any options. This will prompt you for a few values:

- TypeScript? (default `y`)
- Entrypoint? (default `mod.ts`)
- Dependency entrypoint? (default `deps.ts`)
- Add debug configuration? (default `y`).

```bash
deno-init
```

Choosing all defaults will create the following structure in the current directory:

```bash
.
│   .gitignore
│   deps.ts  
│   mod.ts
│
└───.vscode
│   │   launch.json
│   │   settings.json
```

The generated `.gitignore` will include `.vscode` and `launch.json` as well as `settings.json` will contain the necessary setup.

## Available Options

Use `--help` to print all available options. In addition, they are listed below:

Use `--yes` or `-y` if you simply want to use all the default values without being prompted:

```bash
deno-init -y
```

`deno-init` will not overwrite files or directories unless `--force` is passed.

Use `--editor` or `-e` to generate editor-specific configuration for a project. At this moment only the option `vscode` is supported and it is also set as the default.

```bash
deno-init --editor vscode
```

Use `--force` or `-f` in case you explicitly want to overwrite existing files. This can be helpful to re-initialize but use with caution.

```bash
deno-init -f
```

Use `--name` or `-n` to make a new directory in the current directory where the files will be placed.

```bash
deno-init --name my_deno_project
```

Use `--template` or `-t` to initialize project templates for various Deno frameworks. This is still a work in progress. Right now the available templates are `oak`,`restful_oak` and `opine`.

```bash
deno-init --template oak
```

## Subcommands

### `api`

Initialize a RESTful API from a template.

```bash
deno-init api --template opine
```

### `cli`

Initialize a Command Line Interface (CLI) from a template.

```bash
deno-init cli --template cliffy
```

## Roadmap

- Support more editor/IDE setups
- Add more project templates
