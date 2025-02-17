import { Controller, Get, Post, Delete, Body, HttpCode } from '@nestjs/common';
import { FileService } from './file.service';

@Controller('file')
export class FileController {
  constructor(private readonly fileService: FileService) {}

  // Create or Overwrite File
  @Post('write')
  @HttpCode(201)
  async writeFile(@Body('content') content: string) {
    return this.fileService.writeToFile(content);
  }

  // Read File
  @Get('read')
  async readFile() {
    return this.fileService.readFromFile();
  }

  // Append to File
  @Post('append')
  async appendFile(@Body('content') content: string) {
    return this.fileService.appendToFile(content);
  }

  // Delete File
  @Delete('delete')
  async deleteFile() {
    return this.fileService.deleteFile();
  }
}

