Step 1: create a folder.
step 2: we set up a new or exiting npm package using npm init.
step 3: we create a file starter called app.js
step 4: install dependencies like the (express, body-parser).
N.b : it listening on port 3000
step 5: we create a route folder it's also called the handler (it associate an HTTP verb like the GET, POST, PUT e.t.c).
step 6: we also create a controller which is almost the same has the routes.
n.b: we need to export both the routes, controller to be able to access code written in init.
step 7: we create a middleware which allows developers to reuse a code. In express middleware is a function which contain 3 parameter which are request, responds and Next.