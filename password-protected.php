<?php

$context = Timber::context();
$context["post"] = new Timber\Post();
$context["password_form"] = get_the_password_form();

Timber::render("views/pages/_page-password-protected.twig", $context);
