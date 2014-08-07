<?php
/**
 * @file
 * drupal_angular_event.features.inc
 */

/**
 * Implements hook_node_info().
 */
function drupal_angular_event_node_info() {
  $items = array(
    'event' => array(
      'name' => t('Event'),
      'base' => 'node_content',
      'description' => '',
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
  );
  return $items;
}
