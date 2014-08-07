<?php
/**
 * @file
 * drupal_angular_discussion.features.inc
 */

/**
 * Implements hook_node_info().
 */
function drupal_angular_discussion_node_info() {
  $items = array(
    'discussion' => array(
      'name' => t('Discussion'),
      'base' => 'node_content',
      'description' => '',
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
  );
  return $items;
}
