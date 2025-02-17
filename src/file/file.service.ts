import { Injectable, NotFoundException } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

const FILE_PATH = path.join(__dirname, '../../data.txt');

@Injectable()
export class FileService {
  
  // Create or Overwrite File
  async writeToFile(content: string): Promise<string> {
    fs.writeFileSync(FILE_PATH, content, 'utf8');
    return 'File written successfully';
  }

  // Read File Content
  async readFromFile(): Promise<string> {
    if (!fs.existsSync(FILE_PATH)) {
      throw new NotFoundException('File not found');
    }
    return fs.readFileSync(FILE_PATH, 'utf8');
  }

  // Append Data to File
  async appendToFile(content: string): Promise<string> {
    if (!fs.existsSync(FILE_PATH)) {
      throw new NotFoundException('File not found');
    }
    fs.appendFileSync(FILE_PATH, `\n${content}`, 'utf8');
    return 'File updated successfully';
  }

  // Delete File
  async deleteFile(): Promise<string> {
    if (!fs.existsSync(FILE_PATH)) {
      throw new NotFoundException('File not found');
    }
    fs.unlinkSync(FILE_PATH);
    return 'File deleted successfully';
  }
}
