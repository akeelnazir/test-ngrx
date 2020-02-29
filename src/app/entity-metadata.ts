import { EntityMetadataMap, EntityDataModuleConfig } from '@ngrx/data';

const entityMetadata: EntityMetadataMap = {
  Region: {},
  Country: {}
};

const pluralNames = {
  Region: 'Regions',
  Country: 'Countries'
};

export const entityConfig: EntityDataModuleConfig = {
  entityMetadata,
  pluralNames
};
