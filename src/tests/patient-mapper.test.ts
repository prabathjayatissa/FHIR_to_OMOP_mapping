import { expect, test } from 'vitest';
import { PatientMapper } from '../mappers/patient-mapper';
import { FHIRPatient } from '../types/fhir';

test('maps FHIR Patient to OMOP Person', () => {
  const fhirPatient: FHIRPatient = {
    resourceType: 'Patient',
    id: '123',
    gender: 'male',
    birthDate: '1990-01-15',
  };

  const omopPerson = PatientMapper.toOMOP(fhirPatient);
  expect(omopPerson.person_id).toBe(123);
  expect(omopPerson.gender_concept_id).toBe(8507);
  expect(omopPerson.year_of_birth).toBe(1990);
  expect(omopPerson.month_of_birth).toBe(1);
  expect(omopPerson.day_of_birth).toBe(15);
});
