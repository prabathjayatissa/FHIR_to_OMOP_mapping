# FHIR_to_OMOP_mapping

Created a comprehensive FHIR to OMOP CDM mapping system with the following features:

Type Definitions:

FHIR resource interfaces
OMOP CDM table interfaces

Mappers:

PatientMapper: FHIR Patient → OMOP Person
ConditionMapper: FHIR Condition → OMOP Condition_Occurrence
Mapping Service:

Handles individual resources and FHIR bundles
Extensible for additional resource types
Tests:

Unit tests for both mappers
Validates mapping logic
The system is modular and can be extended to support additional FHIR resources and OMOP tables. Would you like me to add support for any specific FHIR resources or explain any part in detail?
