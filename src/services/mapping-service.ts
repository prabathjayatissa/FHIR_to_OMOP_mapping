import { PatientMapper, ConditionMapper } from '../mappers';
import { FHIRPatient, FHIRCondition } from '../types/fhir';
import { Person, ConditionOccurrence } from '../types/omop';

export class MappingService {
  public mapPatient(fhirPatient: FHIRPatient): Person {
    return PatientMapper.toOMOP(fhirPatient);
  }

  public mapCondition(fhirCondition: FHIRCondition): ConditionOccurrence {
    return ConditionMapper.toOMOP(fhirCondition);
  }

  public async mapBundle(bundle: any): Promise<{
    persons: Person[];
    conditions: ConditionOccurrence[];
  }> {
    const persons: Person[] = [];
    const conditions: ConditionOccurrence[] = [];

    for (const entry of bundle.entry || []) {
      const resource = entry.resource;
      
      switch (resource.resourceType) {
        case 'Patient':
          persons.push(this.mapPatient(resource));
          break;
        case 'Condition':
          conditions.push(this.mapCondition(resource));
          break;
      }
    }

    return { persons, conditions };
  }
}