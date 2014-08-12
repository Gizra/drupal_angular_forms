<?php

/**
 * @file
 * Contains DafCategoriesTaxonomyTerms
 */

class DafCategoriesTaxonomyTerms extends DafMigration {
  protected $csvColumns = array(
    array('id', 'Unique ID'),
    array('name', 'Name')
  );

  protected $entityType = 'taxonomy_term';
  protected $bundle = 'categories';

  protected $createValueNode = TRUE;

  public function __construct() {
    parent::__construct();

    $field_names = array(
      'name',
    );

    $this->addSimpleMappings($field_names);
  }
}
