<?php
/**
 * @file
 * drupal_angular_document.features.inc
 */

/**
 * Implements hook_node_info().
 */
function drupal_angular_document_node_info() {
  $items = array(
    'document' => array(
      'name' => t('Document'),
      'base' => 'node_content',
      'description' => '',
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
  );
  return $items;
}
