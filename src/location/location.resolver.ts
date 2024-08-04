import { Query, Resolver } from '@nestjs/graphql';
import { LocationService } from './location.service';
import { GetAllLocationOutput } from './dtos/get-all-location.dto';

@Resolver()
export class LocationResolver {
  constructor(private readonly locationService: LocationService) {}

  @Query(() => GetAllLocationOutput)
  async getAllLocation(): Promise<GetAllLocationOutput> {
    return this.locationService.getAllLocation();
  }
}
