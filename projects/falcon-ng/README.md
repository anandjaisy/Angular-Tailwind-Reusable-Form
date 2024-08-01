## Build

Run below command to build respective project

```
ng build @falcon-ng/core;
ng build @falcon-ng/tailwind
```

Note - Tailwind project is dependent on core project. The build artifacts will be stored in the `dist/` directory.

## In Production

- Add the dependencies to the project
  - `npm i @falcon-ng/core`
  - `npm i @falcon-ng/tailwind`

### Publish projects to NPM

#### Core

     ng build @falcon-ng/core --configuration=production

- `npm login`
- From the project root folder: `cd dist/@falcon-ng/core`
- `npm publish --access public` access public is for free version

#### Tailwind

-     ng build @falcon-ng/tailwind --configuration=production
- `npm login`
- From the project root folder: `cd dist/@falcon-ng/tailwind`
- `npm publish --access public` access public is for free version

### To unpublish the package from NPM

    npm unpublish @falcon-ng/core@<version>
    npm unpublish @falcon-ng/tailwind@<version>

- If publish error or previous version try the below command

```
npm unpublish --force @falcon-ng/core@0.0.1
npm unpublish --force @falcon-ng/tailwind@0.0.1
npm publish --force --access public
```

- To update the version of the library, cd into the library project

```
npm version <new_Version_No>
```

## In Development

- During development the best way to consume library is using `npm link`

```
    cd dist/@falcon-ng/core
    cd dist/@falcon-ng/tailwind
    npm link
```

- We can link an Angular project to this library from anywhere on local machine. From the project root folder:

```
npm link @falcon-ng/core
npm link @falcon-ng/tailwind
```

- If we now build the library with the watch flag `ng build @falcon-ng/tailwind --watch`, and at the same time run `ng serve -o` to another project in another terminal window.
- This will allow us to develop an application and (one or more) linked libraries simultaneously, and see the app recompile with each modification to the library’s source code.
- add `preserveSymlinks = true` to the `angular.json` located at the other project

```
{
  "architect":
  {
    "build":
    {
      "builder": "@angular-devkit/build-angular:browser",
      "options": {
        "preserveSymlinks": true
      }
    }
  }
}
```

- Add falcol core and tailwind module to the project

```
import { FalconCoreModule } from '@falcon-ng/core';
import { FalconTailwindModule } from '@falcon-ng/tailwind';
import {environment} from "../environments/environment";
@NgModule({
  declarations: [],
  imports:[
  FalconCoreModule,
  FalconTailwindModule.forRoot(environment)
  ],
  bootstrap: [AppComponent]
})
```

#### Link one lib to another lib

- Build the dependent library `ng build @falcon-ng/core;`
- `cd dist/falcon-ng/core`
- `npm link`
- cd to dependent lib eg `cd dist/falcon-ng/tailwind`
- `npm link @falcon-ng/tailwind`

## Publish code to GitHub

ng build --configuration=production --output-path docs --base-href /<project_name>/

Example --> ng build --configuration=production --output-path docs --base-href /Angular-Tailwind-Reusable-Form/

- Reference - https://angular.io/guide/deployment
