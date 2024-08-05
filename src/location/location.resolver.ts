import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { LocationService } from './location.service';
import { GetAllLocationOutput } from './dtos/get-all-location.dto';
import { GetLocationInput, GetLocationOutput } from './dtos/get-location.dto';
import {
  CreateLocationInput,
  CreateLocationOutput,
} from './dtos/create-location.dto';

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
    @Args('input') createLocationInput: CreateLocationInput,
  ): Promise<CreateLocationOutput> {
    return this.locationService.createLocation(createLocationInput);
  }
}

// @Mutation(returns => CreateBookingOutput)
//     @Role(['Any'])
//     async createBooking(
//       @AuthUser() authUser: User,
//       @Args('input') createBookingInput: CreateBookingInput,
//     ): Promise<CreateBookingOutput> {
//       return this.bookingService.createBooking(authUser.id, createBookingInput);
//     }
