import { FHIRPatient } from '../types/fhir';
import { Person } from '../types/omop';
import { parseISO } from 'date-fns';

export class PatientMapper {
  private static genderConceptMap: Record<string, number> = {
    male: 8507,
    female: 8532,
    unknown: 0,
  };

  
  public static toOMOP(fhirPatient: FHIRPatient): Person {
    const birthDate = fhirPatient.birthDate ? parseISO(fhirPatient.birthDate) : null;

    return {
      person_id: parseInt(fhirPatient.id || '0'),
      gender_concept_id: this.mapGenderConcept(fhirPatient.gender),
      year_of_birth: birthDate?.getFullYear() || 0,
      month_of_birth: birthDate?.getMonth() ? birthDate.getMonth() + 1 : undefined,
      day_of_birth: birthDate?.getDate(),
      birth_datetime: fhirPatient.birthDate,
      race_concept_id: 0, // Default/Unknown
      ethnicity_concept_id: 0, // Default/Unknown
      person_source_value: fhirPatient.id,
      gender_source_value: fhirPatient.gender,
    };
  }

  private static mapGenderConcept(gender?: string): number {
    if (!gender) return this.genderConceptMap.unknown;
    return this.genderConceptMap[gender.toLowerCase()] || this.genderConceptMap.unknown;
  }
}
