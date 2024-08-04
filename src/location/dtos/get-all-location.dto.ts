import { ObjectType, Field, Int } from '@nestjs/graphql';
import { CoreOutput } from 'src/common/dtos/core-output.dto';

@ObjectType()
export class Location {
  @Field(() => String)
  placeName: string;

  @Field(() => Int)
  placeNumber: number;

  @Field(() => Int)
  placeVisitorCount: number;
}

@ObjectType()
export class GetAllLocationOutput extends CoreOutput {
  @Field(() => [Location], { nullable: true })
  locations?: Location[];
}
