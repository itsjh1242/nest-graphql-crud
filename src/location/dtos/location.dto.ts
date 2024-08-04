import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Location {
  @Field(() => String)
  placeName: string;

  @Field(() => Int)
  placeNumber: number;

  @Field(() => Int)
  placeVisitorCount: number;
}
