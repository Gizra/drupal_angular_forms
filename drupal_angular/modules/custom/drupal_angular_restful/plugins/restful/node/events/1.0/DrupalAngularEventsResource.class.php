<?php

/**
 * @file
 * Contains DrupalAngularEventsResource.
 */

class DrupalAngularEventsResource extends QuickPostNodeBase {

  /**
   * Overrides \ResfulEntityBaseNode::getPublicFields().
   */
  public function getPublicFields() {
    $public_fields = parent::getPublicFields();

    $public_fields['date'] = array(
      'property' => 'field_event_date',
    );

    return $public_fields;
  }
}
