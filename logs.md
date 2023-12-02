<!-- 
Problems:

Latest
Oldest
 -->


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