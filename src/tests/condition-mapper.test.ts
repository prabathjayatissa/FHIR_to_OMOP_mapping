import { expect, test } from 'vitest';
import { ConditionMapper } from '../mappers/condition-mapper';
import { FHIRCondition } from '../types/fhir';

test('maps FHIR Condition to OMOP ConditionOccurrence', () => {
  const fhirCondition: FHIRCondition = {
    resourceType: 'Condition',
    id: '456',
    subject: {
      reference: 'Patient/123'
    },
    code: {
      coding: [{
        system: 'http://snomed.info/sct',
        code: '73211009',
        display: 'Diabetes mellitus'
      }]
    },
    onsetDateTime: '2023-01-15T00:00:00Z'
  };

  const omopCondition = ConditionMapper.toOMOP(fhirCondition);

  expect(omopCondition.condition_occurrence_id).toBe(456);
  expect(omopCondition.person_id).toBe(123);
  expect(omopCondition.condition_start_date).toBe('2023-01-15T00:00:00Z');
});