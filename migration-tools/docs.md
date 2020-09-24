## Migration Plan

There are no official tools for migrating directly from django to wordpress.

### Migration Steps
- Run `python migate.py`
    - `postgres` -> `mysql` migration
    - URI safe encoding
- Run `python migrate-images.py`
- Run `wp --allow-root taxonomy list --field=name | xargs wp --allow-root term recount` __directly on wordpress server__ To re-count posts/category and posts/tag
- Run "Regenerate Thumbnails" from wordpress plugins

### Deploy site to dev environment
- Use __"Updraft plus"__ locally to create a backup of the local environment (only posts and media, not plugins / themes)
- Use __"Updraft plus"__ on the dev server to "restore" the backup
- Run the following on the dev server to restore the settings
    - `wp --path=/var/www/html option update home "https://dev.vikalpsangam.org"`
    - `wp --path=/var/www/html option update siteurl "https://dev.vikalpsangam.org"	`