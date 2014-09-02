<?php

$plugin = array(
  'label' => t('Categories'),
  'resource' => 'categories',
  'name' => 'categories__1_0',
  'entity_type' => 'taxonomy_term',
  'bundle' => 'categories',
  'description' => t('Export the "categories" taxonomy term.'),
  'class' => 'RestfulEntityTaxonomyTermCategories',
  'authentication_types' => TRUE,
);
