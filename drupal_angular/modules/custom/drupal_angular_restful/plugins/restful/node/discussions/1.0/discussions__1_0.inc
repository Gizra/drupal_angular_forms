<?php

$plugin = array(
  'label' => t('Discussions'),
  'resource' => 'discussions',
  'name' => 'discussions__1_0',
  'entity_type' => 'node',
  'bundle' => 'discussion',
  'description' => t('Create the "discussion" content type.'),
  'class' => 'DrupalAngularDiscussionsResource',
  'authentication_types' => TRUE,
);
