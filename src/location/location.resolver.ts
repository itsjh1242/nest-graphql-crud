import { Args, Query, Resolver } from '@nestjs/graphql';
import { LocationService } from './location.service';
import { GetAllLocationOutput } from './dtos/get-all-location.dto';
import { GetLocationInput, GetLocationOutput } from './dtos/get-location.dto';

@Resolver()
export class LocationResolver {
  constructor(private readonly locationService: LocationService) {}

  @Query(() => GetAllLocationOutput)
  async getAllLocation(): Promise<GetAllLocationOutput> {
    return this.locationService.getAllLocation();
  }

  @Query(() => GetLocationOutput)
  async getLocation(
    @Args('input') input: GetLocationInput,
  ): Promise<GetLocationOutput> {
    return this.locationService.getLocation(input);
  }
}
