## Migration Plan

There are no official tools for migrating directly from django to wordpress.

### Migration Steps
- Run `python migate.py`
    - `postgres` -> `mysql` migration
    - URI safe encoding
- Run `python migrate-images.py`
- Run `wp --allow-root taxonomy list --field=name | xargs wp --allow-root term recount` __directly on wordpress server__ To re-count posts/category and posts/tag
- Run "Regenerate Thumbnails" from wordpress plugins