export const CommonErrorCode = {
  /**
   * Authentication failed against database server at `{database_host}`, the provided database credentials for `{database_user}` are not valid. Please make sure to provide valid database credentials for the database server at `{database_host}`.
   */
  AuthenticationFailed: 'P1000',
  /**
   * Can't reach database server at `{database_host}`:`{database_port}` Please make sure your database server is running at `{database_host}`:`{database_port}`.
   */
  CouldNotConnectToDatabase: 'P1001',
  /**
   * The database server at `{database_host}`:`{database_port}` was reached but timed out. Please try again. Please make sure your database server is running at `{database_host}`:`{database_port}`.
   */
  ConnectionTimedOut: 'P1002',
  /**
   * Database `{database_file_name}` does not exist at `{database_file_path}`
   *
   * Database `{database_name}.{database_schema_name}` does not exist on the database server at `{database_host}:{database_port}`.
   *
   * Database `{database_name}` does not exist on the database server at `{database_host}:{database_port}`.
   */
  DatabaseFileNotFound: 'P1003',
  /**
   * Operations timed out after `{time}`
   */
  OperationsTimedOut: 'P1008',
  /**
   * Database `{database_name}` already exists on the database server at `{database_host}:{database_port}`
   */
  DatabaseAlreadyExists: 'P1009',
  /**
   * User `{database_user}` was denied access on the database `{database_name}`
   */
  AccessDeniedForUser: 'P1010',
  /**
   * Error opening a TLS connection: `{message}`
   */
  TLSConnectionError: 'P1011',
  /**
   * `{full_error}`
   */
  Error: 'P1012',
  /**
   * The provided database string is invalid. `{details}`
   */
  InvalidDatabaseString: 'P1013',
  /**
   * The underlying `{kind}` for model `{model}` does not exist.
   */
  KindForModelDoesNotExist: 'P1014',
  /**
   * Your Prisma schema is using features that are not supported for the version of the database. Database version: `{database_version}` Errors:
   */
  UnsupportedFeaturesAtPrismaSchema: 'P1015',
  /**
   * Your raw query had an incorrect number of parameters. Expected: `{expected}`, actual: `{actual}`.
   */
  IncorrectNumberOfParameters: 'P1016',
  /**
   * Server has closed the connection.
   */
  ServerClosedConnection: 'P1017',
} as const;

export const QueryErrorCode = {
  /**
   * The provided value for the column is too long for the column's type. Column: `{column_name}`
   */
  ValueTooLongForColumnType: 'P2000',

  /**
   * The record searched for in the where condition (`{model_name}.{argument_name} = {argument_value}`) does not exist
   */
  RecordDoesNotExist: 'P2001',

  /**
   * Unique constraint failed on the `{constraint}`
   */
  UniqueConstraintViolation: 'P2002',

  /**
   * Foreign key constraint failed on the field: `{field_name}`
   */
  ForeignConstraintViolation: 'P2003',

  /**
   * A constraint failed on the database: `{database_error}`
   */
  ConstraintViolation: 'P2004',

  /**
   * The value `{field_value}` stored in the database for the field `{field_name}` is invalid for the field's type
   */
  InvalidValueForFieldType: 'P2005',

  /**
   * The provided value `{field_value}` for `{model_name}` field `{field_name}` is not valid
   */
  InvalidValue: 'P2006',

  /**
   * Data validation error `{database_error}`
   */
  ValidationError: 'P2007',

  /**
   * Failed to parse the query `{query_parsing_error}` at `{query_position}`
   */
  QueryParsingError: 'P2008',

  /**
   * Failed to validate the query: `{query_validation_error}` at `{query_position}`
   */
  QueryValidationError: 'P2009',

  /**
   * Raw query failed. Code: `{code}`. Message: `{message}`
   */
  RawQueryError: 'P2010',

  /**
   * Null constraint violation on the `{constraint}`
   */
  NullConstraintViolation: 'P2011',

  /**
   * Missing a required value at `{path}`
   */
  MissingRequiredValue: 'P2012',

  /**
   * Missing the required argument `{argument_name}` for field `{field_name}` on `{object_name}`.
   */
  MissingRequiredArgument: 'P2013',

  /**
   * The change you are trying to make would violate the required relation '{relation_name}' between the `{model_a_name}` and `{model_b_name}` models.
   */
  RequiredRelationViolation: 'P2014',

  /**
   * A related record could not be found. `{details}`
   */
  RelatedRecordNotFound: 'P2015',

  /**
   * Query interpretation error. `{details}`
   */
  InterpretationError: 'P2016',

  /**
   * The records for relation `{relation_name}` between the `{parent_name}` and `{child_name}` models are not connected.
   */
  RecordsForParentAndChildNotConnected: 'P2017',

  /**
   * The required connected records were not found. `{details}`
   */
  RequiredConnnectedRecordsNotFound: 'P2018',

  /**
   * Input error. `{details}`
   */
  InputError: 'P2019',

  /**
   * Value out of range for the type. `{details}`
   */
  ValueOutOfRange: 'P2020',

  /**
   * The table `{table}` does not exist in the current database.
   */
  TableDoesNotExist: 'P2021',

  /**
   * The column `{column}` does not exist in the current database.
   */
  ColumnDoesNotExist: 'P2022',

  /**
   * Inconsistent column data: `{message}`
   */
  InconsistentColumnData: 'P2023',

  /**
   * Timed out fetching a new connection from the pool. Please consider reducing the number of requests or increasing the `connection_limit` parameter (https://www.prisma.io/docs/concepts/components/prisma-client/connection-management#connection-pool). Current limit: `{connection_limit}`.
   */
  TimedOutFetchingConnectionFromThePool: 'P2024',

  /**
   * An operation failed because it depends on one or more records that were required but not found. `{cause}`
   */
  RecordsNotFound: 'P2025',

  /**
   * The current database provider doesn't support a feature that the query used: `{feature}`
   */
  UnsupportedProviderFeature: 'P2026',

  /**
   * Multiple errors occurred on the database during query execution: `{errors}`
   */
  MultipleErrors: 'P2027',
} as const;

export const MigrationErrorCode = {
  /**
   * Failed to create database: `{database_error}`
   */
  FailedToCreateDatabase: 'P3000',
  /**
   * Migration possible with destructive changes and possible data loss: `{migration_engine_destructive_details}`
   */
  PossibleDestructiveOrDataLossChanges: 'P3001',
  /**
   * The attempted migration was rolled back: `{database_error}`
   */
  MigrationRolledBack: 'P3002',
  /**
   * The format of migrations changed, the saved migrations are no longer valid. To solve this problem, please follow the steps at: https://pris.ly/d/migrate
   */
  InvalidMigrationFormat: 'P3003',
  /**
   * The `{database_name}` database is a system database, it should not be altered with prisma migrate. Please connect to another database.
   */
  SystemDatabaseNotSupported: 'P3004',
  /**
   * The database schema for `{database_name}` is not empty. Read more about how to baseline an existing production database: https://pris.ly/d/migrate-baseline
   */
  DatabaseNotEmpty: 'P3005',
  /**
   * Migration `{migration_name}` failed to apply cleanly to a temporary database.
   */
  CouldNotApplyCleanlyToTemporaryDatabase: 'P3006',
  /**
   * Some of the requested preview features are not yet allowed in migration engine. Please remove them from your data model before using migrations.
   */
  PreviewFeaturesNotAllowedInMigrationEngine: 'P3007',
  /**
   * The migration `{migration_name}` is already recorded as applied in the database.
   */
  MigrationAlreadyApplied: 'P3008',
  /**
   * migrate found failed migrations in the target database, new migrations will not be applied. Read more about how to resolve migration issues in a production database: https://pris.ly/d/migrate-resolve `{details}`
   */
  FailedMigrationsFound: 'P3009',
  /**
   * The name of the migration is too long. It must not be longer than 200 characters (bytes).
   */
  MigrationNameTooLong: 'P3010',
  /**
   * Migration `{migration_name}` cannot be rolled back because it was never applied to the database.
   */
  CannotRollBackANeverAppliedMigration: 'P3011',
  /**
   * Migration `{migration_name}` cannot be rolled back because it is not in a failed state.
   */
  CannotRollBackANotFailedMigration: 'P3012',
  /**
   * Datasource provider arrays are no longer supported in migrate. Please change your datasource to use a single provider. Read more at https://pris.ly/multi-provider-deprecation
   */
  DatasourceProviderArraysNotSupported: 'P3013',
  /**
   * The datasource provider `{provider}` specified in your schema does not match the one specified in the migration_lock.toml. You will encounter errors when you try to apply migrations generated for a different provider. Please archive your current migration directory at a different location and start a new migration history with `prisma migrate dev`.
   */
  DatasourceProviderDontMatchMigrationLock: 'P3014',
  /**
   * Could not find the migration file at `{migration_file_path}`. Please delete the directory or restore the migration file.
   */
  MissingMigrationFile: 'P3015',
  /**
   * The fallback method for database resets failed, meaning Migrate could not clean up the database entirely. Original error: `{error_code}`
   * `{inner_error}`
   */
  CouldNotCleanupDatabase: 'P3016',
  /**
   * The migration `{migration_name}` could not be found. Please make sure that the migration exists, and that you included the whole name of the directory. (example: `"20201207184859_initial_migration"`)
   */
  MigrationNotFound: 'P3017',
  /**
   * A migration failed to apply. New migrations can not be applied before the error is recovered from. Read more about how to resolve migration issues in a production database: https://pris.ly/d/migrate-resolve
   *
   * Migration name: `{migration_name}`
   *
   * Database error code: `{database_error_code}`
   *
   * Database error:
   * `{database_error}`
   */
  FailedToApplyMigration: 'P3018',
  /**
   * The datasource provider `{provider}` specified in your schema does not match the one specified in the migration_lock.toml, `{expected_provider}`. Please remove your current migration directory and start a new migration history with prisma migrate dev. Read more: https://pris.ly/d/migrate-provider-switch
   */
  DatasourceProvidersDontMatch: 'P3019',
  /**
   * The automatic creation of shadow databases is disabled on Azure SQL. Please set up a shadow database using the `shadowDatabaseUrl` datasource attribute.
   *
   * Read the docs page for more details: https://pris.ly/d/migrate-shadow
   */
  ShadowDatabasesAutomaticCreationIsDisabled: 'P3020',
} as const;

export const PrismaErrorCode = {
  ...CommonErrorCode,
  ...MigrationErrorCode,
  ...QueryErrorCode,
} as const;
