export interface FHIRPatient {
  resourceType: 'Patient';
  id?: string;
  identifier?: Array<{
    system?: string;
    value?: string;
  }>;
  name?: Array<{
    given?: string[];
    family?: string;
  }>;
  gender?: string;
  birthDate?: string;
  address?: Array<{
    line?: string[];
    city?: string;
    state?: string;
    postalCode?: string;
    country?: string;
  }>;
}

export interface FHIRCondition {
  resourceType: 'Condition';
  id?: string;
  subject?: {
    reference?: string;
  };
  code?: {
    coding?: Array<{
      system?: string;
      code?: string;
      display?: string;
    }>;
  };
  onsetDateTime?: string;
  recordedDate?: string;
}