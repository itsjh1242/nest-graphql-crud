import { Injectable } from '@nestjs/common';
import { GetAllLocationOutput } from './dtos/get-all-location.dto';
import { GetLocationInput, GetLocationOutput } from './dtos/get-location.dto';
import {
  CreateLocationInput,
  CreateLocationOutput,
} from './dtos/create-location.dto';
import {
  DeleteLocationInput,
  DeleteLocationOutput,
} from './dtos/delete-location.dto';
import {
  UpdateLocationVisitorCountInput,
  UpdateLocationVisitorCountOutput,
} from './dtos/update-location-visitor-count.dto';

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

  async deleteLocation({
    placeNumber,
  }: DeleteLocationInput): Promise<DeleteLocationOutput> {
    try {
      const index = locations.findIndex(
        (location) => location.placeNumber === placeNumber,
      );

      if (index === -1) {
        return {
          ok: false,
          error: 'Location not found',
        };
      }

      locations.splice(index, 1);

      return {
        ok: true,
      };
    } catch (e) {
      console.error(e);
      return { ok: false, error: e.message };
    }
  }

  async updateLocationVisitorCount({
    placeNumber,
    value,
  }: UpdateLocationVisitorCountInput): Promise<UpdateLocationVisitorCountOutput> {
    try {
      const index = locations.findIndex(
        (location) => location.placeNumber === placeNumber,
      );

      if (index === -1) {
        return { ok: false, error: 'Location not found' };
      }

      // Validation
      const visitorCount = locations[index].placeVisitorCount;
      if (visitorCount + value < 0) {
        return {
          ok: false,
          error: 'Location visitor count must be at least 0',
        };
      }
      // Update the visitor count
      locations[index].placeVisitorCount += value;

      return { ok: true };
    } catch (e) {
      console.error(e);
      return { ok: false, error: e.message };
    }
  }
}
