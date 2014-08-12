<?php

/**
 * @file
 *
 * Contains Overriding the Migration class for DAF migration specific definitions.
 */

class DafFilesMigration extends Migration {
  public function __construct() {
    parent::__construct();

    $this->description = t('Import files from CSV file.');

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

    // Create a MigrateSource object.
    $csv_file = $this->entityType . '/' . $this->bundle . '.csv';
    $this->source = new MigrateSourceCSV(drupal_get_path('module', 'drupal_angular_migrate') . '/csv/' . $csv_file, $this->csvColumns, array('header_rows' => 1));

    $class = 'MigrateDestinationFile';

    $this->destination = new $class($this->bundle, 'MigrateFileUri');

    // Set author to be admin.
    $this
      ->addFieldMapping('uid')
      ->defaultValue(1);

    // Files location.
    $this->addFieldMapping('source_dir')
      ->defaultValue(drupal_get_path('module', 'drupal_angular_migrate') . '/files');
  }
}
