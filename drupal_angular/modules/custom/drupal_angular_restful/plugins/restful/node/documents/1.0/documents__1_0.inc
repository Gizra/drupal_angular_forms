<?php

$plugin = array(
  'label' => t('Documents'),
  'resource' => 'documents',
  'name' => 'documents__1_0',
  'entity_type' => 'node',
  'bundle' => 'document',
  'description' => t('Create the "document" content type.'),
  'class' => 'DrupalAngularDocumentsResource',
  'authentication_types' => TRUE,
);
