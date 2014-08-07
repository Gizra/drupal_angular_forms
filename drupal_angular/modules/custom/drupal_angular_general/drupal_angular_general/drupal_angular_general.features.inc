<?php
/**
 * @file
 * drupal_angular_general.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function drupal_angular_general_ctools_plugin_api($module = NULL, $api = NULL) {
  if ($module == "page_manager" && $api == "pages_default") {
    return array("version" => "1");
  }
}
