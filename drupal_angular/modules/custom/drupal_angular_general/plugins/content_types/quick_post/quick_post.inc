<?php

/**
 * Plugin definition.
 */
$plugin = array(
  'title' => t('Quick post link'),
  'description' => t('Renders link to "quick post" page.'),
  'category' => t('Drupal Angular'),
);

/**
 * Render callback.
 */
function drupal_angular_general_quick_post_content_type_render($subtype, $conf, $args, $context) {
  $block = new stdClass();
  $block->module = 'drupal_angular_general';
  $block->title = '';
  $block->content = l(t('Add a new content'), 'create/content');
  return $block;
}

/**
 * Edit form.
 */
function drupal_angular_general_quick_post_content_type_edit_form($form, &$form_state) {
  return $form;
}
