### Things to Synchronise

1. Posts
1. Pages
1. Media
1. Plugins
    1. Categories image
    1. Longer Permalinks
    1. Advanced Custom Fields
    1. ~~Radio Buttons for Taxonomies~~ [REVERTED - Current site allowed for multiple categories]
        1. ~~Apply to Categories~~
1. Categories

### Migration
- Run `python migate.py`
- Run `python migrate-images.py`
- Run `wp --allow-root taxonomy list --field=name | xargs wp --allow-root term recount` directly on wordpress server
- Run "Regenerate Thumbnails" from wordpress plugins

### Upcoming for CI
- Automatically migrate menus
- Automatically install/enable relevant plugins
    - Longer URLs plugin
- Automatically set permalink urls (in settings)