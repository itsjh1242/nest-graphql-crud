import { InputType, Field, Int, ObjectType } from '@nestjs/graphql';
import { IsNumber } from 'class-validator';
import { CoreOutput } from 'src/common/dtos/core-output.dto';

@InputType()
export class DeleteLocationInput {
  @Field(() => Int!)
  @IsNumber()
  placeNumber: number;
}

@ObjectType()
export class DeleteLocationOutput extends CoreOutput {}
