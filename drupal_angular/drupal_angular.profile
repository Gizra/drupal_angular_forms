<?php
/**
 * @file
 * Garmentbox profile.
 */

/**
 * Implements hook_form_FORM_ID_alter().
 *
 * Allows the profile to alter the site configuration form.
 */
function drupal_angular_form_install_configure_form_alter(&$form, $form_state) {
  // Pre-populate the site name with the server name.
  $form['site_information']['site_name']['#default_value'] = $_SERVER['SERVER_NAME'];
}

/**
 * Implements hook_install_tasks().
 */
function drupal_angular_install_tasks() {
  $tasks = array();
  $tasks['drupal_angular_set_variables'] = array(
    'display_name' => st('Set Variables'),
    'display' => FALSE,
  );

  return $tasks;
}

/**
 * Task callback; Set variables.
 */
function drupal_angular_set_variables() {
  $variables = array(
    // Homepage
    'site_frontpage' => 'homepage',

    // Site name and slogan
    'site_name' => 'DAF',
    'site_slogan' => 'Drupal AngularJs Forms',

    // Theme
    'theme_default' => 'bootstrap',
    'admin_theme' => 'seven',
    'node_admin_theme' => 1,
    'jquery_update_jquery_version' => 1.8,
    'jquery_update_jquery_admin_version' => 1.5,
    'page_manager_node_view_disabled' => FALSE,
    'page_manager_term_view_disabled' => FALSE,
  );

  foreach ($variables as $key => $value) {
    variable_set($key, $value);
  }
}
