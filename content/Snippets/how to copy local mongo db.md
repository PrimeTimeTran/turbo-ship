# Local connection string
mongodb://localhost:27017/next_unicorn

# Create copy of db to dump dir
mongodump --uri="mongodb://localhost:27017/next_unicorn"

# Remote connection string
mongodb+srv://primetimetran:4pKLgLLS1Bm1FgJk@cluster0.xfhlaio.mongodb.net/next_unicorn

# Copy local dump db/dir to cloud.mongodb.com
mongorestore --uri="mongodb+srv://primetimetran:4pWLgAAS1Bm7FgJk@cluster0.xfhlaio.mongodb.net/next_unicorn" --drop --db=next_unicorn --dir=dump/next_unicorn

