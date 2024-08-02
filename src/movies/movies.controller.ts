import {
  Controller,
  Get,
  Param,
  Post,
  Delete,
  Patch,
  Body,
  NotFoundException,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entity';
import { CreateMovieDto } from './dtos/create-movie.dto';
import { UpdateMovieDto } from './dtos/update-movie.dto';

@Controller('movies')
export class MoviesController {
  constructor(private readonly movieService: MoviesService) {}

  @Get()
  getAll(): Movie[] {
    return this.movieService.getAll();
  }

  @Get('/:id')
  getOne(@Param('id') id: number): Movie {
    const movie = this.movieService.getOne(id);

    if (!movie) {
      throw new NotFoundException(`Movie with ID Not Found, ID: ${id}`);
    }

    return movie;
  }

  @Post('')
  create(@Body() movieData: CreateMovieDto) {
    return this.movieService.create(movieData);
  }

  @Delete('/:id')
  remove(@Param('id') id: number): any {
    this.getOne(id);
    this.movieService.deleteOne(id);
  }

  @Patch('/:id')
  path(@Param('id') id: number, @Body() updateData: UpdateMovieDto) {
    return this.movieService.update(id, updateData);
  }
}
