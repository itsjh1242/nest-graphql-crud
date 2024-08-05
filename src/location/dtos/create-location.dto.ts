import { InputType, ObjectType, Field, Int } from '@nestjs/graphql';
import { IsString, IsNumber } from 'class-validator';
import { CoreOutput } from 'src/common/dtos/core-output.dto';

@InputType()
export class CreateLocationInput {
  @Field(() => String!)
  @IsString()
  placeName?: string;

  @Field(() => Int, { nullable: true })
  placeNumber?: number;

  @Field(() => Int)
  @IsNumber()
  placeVisitorCount?: number;
}

@ObjectType()
export class CreateLocationOutput extends CoreOutput {}
