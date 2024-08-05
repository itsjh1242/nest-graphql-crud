import { Injectable } from '@nestjs/common';
import { GetAllLocationOutput } from './dtos/get-all-location.dto';
import { GetLocationInput, GetLocationOutput } from './dtos/get-location.dto';
import {
  CreateLocationInput,
  CreateLocationOutput,
} from './dtos/create-location.dto';

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

@Injectable()
export class LocationService {
  async getAllLocation(): Promise<GetAllLocationOutput> {
    try {
      return { ok: true, locations };
    } catch (e) {
      return { ok: false, error: 'Failed to get all locations' };
    }
  }

  async getLocation({
    placeNumber,
  }: GetLocationInput): Promise<GetLocationOutput> {
    try {
      const location = locations.find((loc) => loc.placeNumber === placeNumber);
      if (!location) {
        return { ok: false, error: 'Location not found' };
      }
      return { ok: true, ...location };
    } catch (e) {
      console.log(e);
      return { ok: false, error: 'Failed to get location' };
    }
  }

  async createLocation(
    createLocationInput: CreateLocationInput,
  ): Promise<CreateLocationOutput> {
    try {
      // Find last place number
      const lastPlaceNumber = locations.reduce(
        (max, loc) => Math.max(max, loc.placeNumber),
        0,
      );
      // Create the new location with the next place number
      const newLocation = {
        placeName: createLocationInput.placeName,
        placeNumber: lastPlaceNumber + 1,
        placeVisitorCount: createLocationInput.placeVisitorCount,
      };

      locations.push(newLocation);

      return { ok: true };
    } catch (e) {
      return { ok: false, error: e.message };
    }
  }
}
