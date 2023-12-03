<!-- 
Problems:

Latest
Oldest
-->

12/3/23
Add table column handler. Currently it's a blank array

12/2/23
Fix Netlify function/connection success!
- Muxter 1.0.34
- netlify.toml function with key 'node_bundler' is null
- netlify/function/build-muxter is written in CommonJS syntax
- Fix stall build on Netlify due to Mongoose
  - Generate build locally & deploy
    - netlify build
    - when nuxi hangs close connection
    - netlify deploy --prod

- Fix relationships generation
- Fix broker filterFilteredEntity
- Update Bank seeds
- Learn: Must RS Nuxt when working on package
- Fix new entity breaking attribute editor
- Cleanup {{ }} syntax