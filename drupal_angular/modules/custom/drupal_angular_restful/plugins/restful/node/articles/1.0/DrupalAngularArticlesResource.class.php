<?php

/**
 * @file
 * Contains DrupalAngularArticlesResource.
 */

class DrupalAngularArticlesResource extends RestfulEntityBaseNode {

  /**
   * Overrides ResfulEntityBaseNode::getPublicFields().
   */
  public function getPublicFields() {
    $public_fields = parent::getPublicFields();

    $public_fields['content'] = array(
      'property' => 'body',
      'sub_property' => 'value',
    );

    return $public_fields;
  }
}
