<?php
/**
 * @file
 * drupal_angular_article.features.inc
 */

/**
 * Implements hook_node_info().
 */
function drupal_angular_article_node_info() {
  $items = array(
    'article' => array(
      'name' => t('Article'),
      'base' => 'node_content',
      'description' => '',
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
  );
  return $items;
}
