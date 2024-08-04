import { ObjectType, Field, InputType, Int } from '@nestjs/graphql';
import { IsNumber } from 'class-validator';
import { CoreOutput } from 'src/common/dtos/core-output.dto';

@InputType()
export class GetLocationInput {
  @Field(() => Int)
  @IsNumber()
  placeNumber: number;
}

@ObjectType()
export class GetLocationOutput extends CoreOutput {
  @Field(() => String, { nullable: true })
  placeName?: string;

  @Field(() => Int, { nullable: true })
  placeNumber?: number;

  @Field(() => Int, { nullable: true })
  placeVisitorCount?: number;
}
