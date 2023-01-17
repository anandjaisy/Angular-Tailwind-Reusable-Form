# Falcon Tailwind Dynamic form builder

- Check the [Demo](https://anandjaisy.github.io/Angular-Tailwind-Reusable-Form/).


## In Production

- Add the dependencies to the project `npm i @falcon-ng/tailwind`

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

