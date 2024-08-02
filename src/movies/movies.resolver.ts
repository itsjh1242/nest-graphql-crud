import { Resolver, Query } from '@nestjs/graphql';

@Resolver()
export class MoviesResolver {
  @Query(() => String)
  hello(): string {
    return 'Hello World!';
  }
}
