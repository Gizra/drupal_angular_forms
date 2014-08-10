<?php

$plugin = array(
  'label' => t('Events'),
  'resource' => 'events',
  'name' => 'events__1_0',
  'entity_type' => 'node',
  'bundle' => 'event',
  'description' => t('Create the "event" content type.'),
  'class' => 'DrupalAngularEventsResource',
  'authentication_types' => TRUE,
);
