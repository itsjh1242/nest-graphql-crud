import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { LocationService } from './location.service';
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

  @Mutation(() => CreateLocationOutput)
  async createLocation(
    @Args('input') input: CreateLocationInput,
  ): Promise<CreateLocationOutput> {
    return this.locationService.createLocation(input);
  }

  @Mutation(() => DeleteLocationOutput)
  async deleteLocation(
    @Args('input') input: DeleteLocationInput,
  ): Promise<DeleteLocationOutput> {
    return this.locationService.deleteLocation(input);
  }

  @Mutation(() => UpdateLocationVisitorCountOutput)
  async updateLocationVisitorCount(
    @Args('input') input: UpdateLocationVisitorCountInput,
  ): Promise<UpdateLocationVisitorCountOutput> {
    return this.locationService.updateLocationVisitorCount(input);
  }
}
