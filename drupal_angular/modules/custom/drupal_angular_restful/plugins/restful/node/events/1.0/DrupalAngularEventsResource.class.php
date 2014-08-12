<?php

/**
 * @file
 * Contains DrupalAngularEventsResource.
 */

class DrupalAngularEventsResource extends RestfulEntityBaseNode {

  /**
   * Overrides \ResfulEntityBaseNode::getPublicFields().
   */
  public function getPublicFields() {
    $public_fields = parent::getPublicFields();

    $public_fields['body'] = array(
      'property' => 'body',
      'sub_property' => 'value',
    );

    $public_fields['categories'] = array(
      'property' => 'field_categories',
    );

    $public_fields['date'] = array(
      'property' => 'field_event_date',
    );

    return $public_fields;
  }

  /**
   * Overrides \RestfulEntityBaseTaxonomyTerm::checkEntityAccess().
   *
   * Allow access to create "Tags" resource for privileged users, as
   * we can't use entity_access() since entity_metadata_taxonomy_access()
   * denies it for a non-admin user.
   */
  protected function checkEntityAccess($op, $entity_type, $entity) {
    $account = $this->getAccount();
    return user_access('create ' . $entity->type . ' content', $account);
  }
}
