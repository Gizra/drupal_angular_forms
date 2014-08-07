<?php

$plugin = array(
  'label' => t('Articles'),
  'resource' => 'articles',
  'name' => 'articles__1_0',
  'entity_type' => 'node',
  'bundle' => 'article',
  'description' => t('Create the "articles" content type.'),
  'class' => 'DrupalAngularArticlesResource',
  'authentication_types' => TRUE,
);
