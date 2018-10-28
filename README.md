# angularJS-task

Final result https://nadya-ponka.github.io/angularJS-task/dist/

1. Initialize AngularJS project and set Webpack for it.
2. Create one page application using controllers, binding and built-in directives and filters (can change rating by pressing STAR).
3. Create service, handling requests from https://raw.githubusercontent.com/PokemonGOAPI/PokemonDataGraber/master/output.json and storing data. Search control with input. Use custom filter to filter the results.
4. Create custom directive to change course plate border based on createdDate. If creationDate < currentDate && creationDate >= currentDate - 14days - fresh course (use green border).
5. Add no data message using ng-if (should mock data.ts).
6. Implement component routing. Create page template for item in list and implement the ability to go to the page of each item (/items/:id).Create page for adding a new item.
7. Create simple form with validation.
8. Create at least 1 custom validation directive (date should be +- 1 year).
9. Store form's data in redux store.
10. Handle submit event with function calling POST request from your service if the form is valid.
