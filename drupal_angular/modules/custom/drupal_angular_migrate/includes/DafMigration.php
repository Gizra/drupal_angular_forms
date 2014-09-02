<?php

/**
 * @file
 *
 * Contains Overriding the Migration class for DAF migration specific definitions.
 */

class DafMigration extends Migration {
  // Whether the migration involves creation of an attached Numeric-value node.
  protected $createValueNode = FALSE;

  public function __construct() {
    parent::__construct();

    $this->description = t('Import @bundle nodes from CSV file.', array('@bundle' => $this->bundle));

    // Create a map object for tracking the relationships between source rows
    $id_field = empty($this->idField) ? 'id' : $this->idField;
    $key = array(
      $id_field => array(
        'type' => 'varchar',
        'length' => 255,
        'not null' => TRUE,
      ),
    );

    $destination_handler = new MigrateDestinationEntityAPI($this->entityType, $this->bundle);
    $this->map = new MigrateSQLMap($this->machineName, $key, $destination_handler->getKeySchema($this->entityType));

    // Check if "csvFile" exists and overwrite the bundle for the file name.
    $csv_file_name = (isset($this->csvFile)) ? $this->csvFile : $this->bundle;
    // Create a MigrateSource object.
    $csv_file = $this->entityType . '/' . $csv_file_name . '.csv';
    $this->source = new MigrateSourceCSV(drupal_get_path('module', 'drupal_angular_migrate') . '/csv/' . $csv_file, $this->csvColumns, array('header_rows' => 1));

    $class = $this->entityType == 'node' ? 'MigrateDestinationNode' : 'MigrateDestinationTerm';

    $this->destination = new $class($this->bundle, array('text_format' => 'filtered_html'));

    // Set author to be admin.
    $this
      ->addFieldMapping('uid')
      ->defaultValue(1);
  }
}
