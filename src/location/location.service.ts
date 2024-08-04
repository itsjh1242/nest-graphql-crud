import { Injectable } from '@nestjs/common';
import { GetAllLocationOutput } from './dtos/get-all-location.dto';

@Injectable()
export class LocationService {
  async getAllLocation(): Promise<GetAllLocationOutput> {
    try {
      const locations = [
        {
          placeName: 'Jeju',
          placeNumber: 1,
          placeVisitorCount: 1,
        },
        {
          placeName: 'Cebu',
          placeNumber: 2,
          placeVisitorCount: 30,
        },
      ];
      return { ok: true, locations };
    } catch (e) {
      return { ok: false, error: 'Failed to get all locations' };
    }
  }
}
