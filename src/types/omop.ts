export interface Person {
  person_id: number;
  gender_concept_id: number;
  year_of_birth: number;
  month_of_birth?: number;
  day_of_birth?: number;
  birth_datetime?: string;
  race_concept_id: number;
  ethnicity_concept_id: number;
  location_id?: number;
  provider_id?: number;
  care_site_id?: number;
  person_source_value?: string;
  gender_source_value?: string;
  gender_source_concept_id?: number;
  race_source_value?: string;
  race_source_concept_id?: number;
  ethnicity_source_value?: string;
  ethnicity_source_concept_id?: number;
}

export interface ConditionOccurrence {
  condition_occurrence_id: number;
  person_id: number;
  condition_concept_id: number;
  condition_start_date: string;
  condition_start_datetime?: string;
  condition_end_date?: string;
  condition_end_datetime?: string;
  condition_type_concept_id: number;
  condition_status_concept_id?: number;
  stop_reason?: string;
  provider_id?: number;
  visit_occurrence_id?: number;
  visit_detail_id?: number;
  condition_source_value?: string;
  condition_source_concept_id?: number;
  condition_status_source_value?: string;
}