import { TestBed, inject } from '@angular/core/testing';

import { PatientListingService } from './patient-listing.service';

describe('PatientListingServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PatientListingService]
    });
  });

  it('should be created', inject([PatientListingService], (service: PatientListingService) => {
    expect(service).toBeTruthy();
  }));
});
