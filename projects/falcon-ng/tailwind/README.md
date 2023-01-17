## Build
Run `ng build @falcon-ng/tailwind` to build the project. The build artifacts will be stored in the `dist/` directory.

## In Production

- Add the dependencies to the project `npm i @falcon-ng/tailwind`
### Publish to NPM
- `ng build @falcon-ng/tailwind --configuration=production`
- `npm login`
- From the project root folder: `cd dist/@falcon-ng/tailwind`
- `npm publish --access public` access public is for free version
### To unplish the package from NPM
- `npm unpublish @falcon-ng/tailwind@<version>`
  - If publish error or previous version try the below command
  ```
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
cd dist/@falcon-ng/tailwind
npm link
```
- We can link an Angular project to this library from anywhere on local machine. From the project root folder:
```
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
- Add falcol tailwind module to the project
```
import { FalconCoreModule } from '@falcon-ng/tailwind';
import {environment} from "../environments/environment";
@NgModule({
  declarations: [],
  imports:[
  FalconCoreModule.forRoot(environment)
  ],
  bootstrap: [AppComponent]
})
```

## Publish code to GitHub

ng build --configuration=production --output-path docs --base-href /<project_name>/

Example --> ng build --configuration=production --output-path docs --base-href /Angular-Tailwind-Reusable-Form/

- Reference - https://angular.io/guide/deployment