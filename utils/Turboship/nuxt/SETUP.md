- npm i pinia
  [Known bug](https://stackoverflow.com/a/77913047/5451285)
- npm install
- touch .env

```
NUXT_HOST=localhost
# URLs
NUXT_HOST_URL='http://localhost:3005'
API_URL=http://localhost:3005/api

# Map
GOOGLE_API_KEY=''

# Storage
FILE_STORAGE_PROVIDER=
FILE_STORAGE_BUCKET=
FILE_STORAGE_LOCAL_FOLDER=
GOOGLE_CLOUD_PLATFORM_CREDENTIALS=

# Misc
AUTH_TOKEN_EXPIRES_IN='3650 days'
AUTH_TOKEN_SECRET='secret'
MONGODB_URI=mongodb://localhost:27017/turboship
SENDGRID_API_KEY=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
```

- git init
- create .gitignore with node_modules
- git add ., git commit -m "Initial commit'", 
- npm run dev