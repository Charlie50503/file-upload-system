import * as admin from 'firebase-admin';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { v4 as uuidv4 } from 'uuid';
import { IFile } from './dto/file.dto';
@Injectable()
export class FirebaseStorageService {
  private storageBucket: admin.storage.Storage;

  constructor(private configService: ConfigService) {
    admin.initializeApp({
      credential: admin.credential.cert({
        projectId: configService.get<string>('FIREBASE_PROJECT_ID'),
        clientEmail: configService.get<string>('FIREBASE_CLIENT_EMAIL'),
        privateKey: configService.get<string>('FIREBASE_PRIVATE_KEY'),
        // privateKeyId: configService.get<string>('FIREBASE_PRIVATE_KEY_ID'),
      }),
      storageBucket: configService.get<string>('FIREBASE_STORAGE_BUCKET'),
    });

    this.storageBucket = admin.storage();
  }

  async uploadFile(file: Express.Multer.File): Promise<string> {
    const bucket = this.storageBucket.bucket();
    const fileName = file.originalname.split('.').slice(0, -1).join('.'); // 获取文件名
    const fileExtension = file.originalname.split('.').pop(); // 获取文件扩展名
    const uniqueFilename = `${fileName}.${uuidv4()}.${fileExtension}`;
    const fileRef = bucket.file(uniqueFilename);

    await fileRef.save(file.buffer, {
      metadata: { contentType: file.mimetype },
    });

    // 回傳 保存成功
    return fileRef.name;
  }

  async getFiles() {
    const bucket = this.storageBucket.bucket();

    const [files] = await bucket.getFiles();

    // 创建一个表示当天结束的时间的 Date 对象
    const endDate = new Date();
    endDate.setHours(23, 59, 59, 999);

    // 使用 Promise.all 来处理所有的异步操作
    const result = await Promise.all(
      files.map(async (file) => {
        const [downloadUrl] = await file.getSignedUrl({
          action: 'read',
          expires: endDate,
        });

        return {
          name: file.name,
          updatedDate: file.metadata.updated,
          createdDate: file.metadata.timeCreated,
          size: file.metadata.size,
          downloadUrl: downloadUrl, // 使用下载链接
        } as IFile;
      }),
    );

    return result; // 等待所有文件处理完成后返回
  }

  async deleteFile(fileName: string) {
    const bucket = this.storageBucket.bucket();
    const fileRef = bucket.file(fileName);
    await fileRef.delete();
  }
  async downloadFile(fileName: string) {
    const bucket = this.storageBucket.bucket();
    const fileRef = bucket.file(fileName);

    // 檢查文件是否存在
    const [exists] = await fileRef.exists();
    if (!exists) {
      throw new Error('File not found');
    }

    // 獲取文件的metadata
    const [metadata] = await fileRef.getMetadata();

    // 獲取文件流
    const stream = fileRef.createReadStream();

    return { stream, contentType: metadata.contentType };
  }
}
