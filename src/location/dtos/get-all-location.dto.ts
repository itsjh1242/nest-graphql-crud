import { ObjectType, Field } from '@nestjs/graphql';
import { CoreOutput } from 'src/common/dtos/core-output.dto';
import { Location } from './location.dto';

@ObjectType()
export class GetAllLocationOutput extends CoreOutput {
  @Field(() => [Location], { nullable: true })
  locations?: Location[];
}
