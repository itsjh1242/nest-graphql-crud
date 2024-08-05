import { InputType, ObjectType, Field, Int } from '@nestjs/graphql';
import { IsNumber } from 'class-validator';
import { CoreOutput } from 'src/common/dtos/core-output.dto';

@InputType()
export class UpdateLocationVisitorCountInput {
  @Field(() => Int!)
  @IsNumber()
  placeNumber: number;

  @Field(() => Int!)
  @IsNumber()
  value: number;
}

@ObjectType()
export class UpdateLocationVisitorCountOutput extends CoreOutput {}
