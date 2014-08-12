<?php

/**
 * @file
 * Contains DafEventNodes.
 */

class DafEventNodes extends DafMigration {
  protected $csvColumns = array(
    array('id', 'Unique ID'),
    array('title', 'Title'),
    array('body', 'Description'),
    array('field_categories', 'Categories'),
    array('field_event_date', 'Date'),
  );

  protected $entityType = 'node';
  protected $bundle = 'event';

  public function __construct() {
    parent::__construct();

    $this->dependencies = array(
      'DafCategoriesTaxonomyTerms',
    );

    $field_names = array(
      'title',
      'body',
      'field_event_date',
    );
    $this->addSimpleMappings($field_names);

    $this
      ->addFieldMapping('field_categories', 'field_categories')
      ->separator('|')
      ->sourceMigration('DafCategoriesTaxonomyTerms');
  }

  /**
   * Fix an Entity reference related error when migrating multiple values.
   */
  public function prepare($entity, $row) {
    $values = array();
    if (!empty($entity->field_categories[LANGUAGE_NONE])) {
      foreach ($entity->field_categories[LANGUAGE_NONE] as $value) {
        $values[] = array('target_id' => $value['target_id']);
      }
    }

    $entity->field_categories[LANGUAGE_NONE] = $values;
  }
}