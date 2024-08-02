import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { AppController } from './app.controller';

@Module({
  imports: [MoviesModule],
  // get url, execute function
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
