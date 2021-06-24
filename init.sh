version=$(node -p "require('./package.json').version")
echo "<?php define('vikalpsangam_VERSION', '$version');" >| version.php
echo "\$theme-version: \"$version\";" >| _version.scss