<?php

/**
 * @file
 * Contains DafDiscussionNodes.
 */

class DafDiscussionNodes extends DafMigration {
  protected $csvColumns = array(
    array('id', 'Unique ID'),
    array('title', 'Title'),
    array('body', 'Description'),
    array('field_categories', 'Categories'),
  );

  protected $entityType = 'node';
  protected $bundle = 'discussion';

  public function __construct() {
    parent::__construct();

    $this->dependencies = array(
      'DafCategoriesTaxonomyTerms',
    );

    $field_names = array(
      'title',
      'body',
    );
    $this->addSimpleMappings($field_names);

    $this
      ->addFieldMapping('field_categories', 'field_categories')
      ->sourceMigration('DafCategoriesTaxonomyTerms');
  }

  /**
   * Fix an Entity reference related error when migrating multiple values.
   */
  public function prepare($entity, $row) {
    $values = array();
    if (!empty($entity->field_meetings[LANGUAGE_NONE])) {
      foreach ($entity->field_meetings[LANGUAGE_NONE] as $value) {
        $values[] = array('target_id' => $value['target_id']['destid1']);
      }
    }

    $entity->field_meetings[LANGUAGE_NONE] = $values;
  }
}
