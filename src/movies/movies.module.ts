import { Module } from '@nestjs/common';
import { MoviesResolver } from './movies.resolver';

@Module({
  providers: [MoviesResolver],
})
export class MoviesModule {}
