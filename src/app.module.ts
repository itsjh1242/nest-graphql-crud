import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

import { MoviesModule } from './movies/movies.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RModule } from './s/r/r.module';
import { LocationModule } from './location/location.module';

@Module({
  imports: [
    MoviesModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      playground: true, // GraphQL Playground 활성화
    }),
    RModule,
    LocationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
