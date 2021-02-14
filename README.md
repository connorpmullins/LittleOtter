# Getting up and Running:

- Clone this repository locally
- In the root directory of this repository, run `yarn` or `npm install`
- After that, run `yarn dev` (or `npm run dev`) to start the proxy server and build the front-end (Note: it will watch for changes in `/src` and recompile for you).

# To-Do / Next Steps:
1. Make responsive (web & mobile)
2. If this were a larger project, I'd handle global data sharing w/redux, context, or something similar. Not necessary here, but worth noting.
3. In prod, we'd want to remove the 'enable CORS' code I added to the express server