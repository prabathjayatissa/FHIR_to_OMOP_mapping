import { FHIRCondition } from '../types/fhir';
import { ConditionOccurrence } from '../types/omop';

export class ConditionMapper {
  public static toOMOP(fhirCondition: FHIRCondition): ConditionOccurrence {
    const personId = fhirCondition.subject?.reference
      ? parseInt(fhirCondition.subject.reference.replace('Patient/', ''))
      : 0;

    return {
      condition_occurrence_id: parseInt(fhirCondition.id || '0'),
      person_id: personId,
      condition_concept_id: this.getConditionConceptId(fhirCondition),
      condition_start_date: fhirCondition.onsetDateTime || fhirCondition.recordedDate || '',
      condition_start_datetime: fhirCondition.onsetDateTime || fhirCondition.recordedDate,
      condition_type_concept_id: 32020, // EHR encounter diagnosis
      condition_source_value: this.getConditionSourceValue(fhirCondition),
    };
  }

  private static getConditionConceptId(condition: FHIRCondition): number {
    const coding = condition.code?.coding?.[0];
    if (!coding) return 0;
    
    // In a real implementation, you would use a terminology service
    // or vocabulary mapping service to get the correct concept ID
    return 0;
  }

  private static getConditionSourceValue(condition: FHIRCondition): string {
    const coding = condition.code?.coding?.[0];
    if (!coding) return '';
    return `${coding.system || ''}|${coding.code || ''}`;
  }
}