import { AsyncPipe, DatePipe } from '@angular/common';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { filter, map, switchMap } from 'rxjs';
import { IFile } from 'src/app/api/v1/models';
import { FileManagementService } from 'src/app/api/v1/services';
import { FileSizePipe } from 'src/app/core/pipes/file-size.pipe';
import { ErrorHandlerService } from 'src/app/core/services/error-handler.service';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-file-management',
  templateUrl: './file-management.component.html',
  styleUrl: './file-management.component.scss',
  standalone: true,
  imports: [
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    FileSizePipe,
    AsyncPipe,
    MatSortModule,
    DatePipe,
  ],
})
export class FileManagementComponent implements AfterViewInit {
  @ViewChild(MatSort) sort!: MatSort;
  public displayedColumns: string[] = [
    'name',
    'size',
    'updatedDate',
    'createdDate',
    'active',
  ];
  public dataSource = new MatTableDataSource<IFile>([]);

  constructor(
    private fileManagementService: FileManagementService,
    public dialog: MatDialog,
    private errorHandlerService: ErrorHandlerService,
  ) {}

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.fetchData();
  }

  public fetchData() {
    this.fileManagementService
      .fileManagementControllerGetFiles()
      .pipe(map((res) => res.data as IFile[]))
      .subscribe({
        next: (data) => {
          this.dataSource.data = data;
        },
        error: this.errorHandlerService.handleRequestError.bind(this),
      });
  }

  public downloadFile(element: IFile) {
    this.fileManagementService
      .fileManagementControllerDownload$Response({
        fileName: element.name,
      })
      .subscribe({
        next: (res) => {
          const contentType = res.headers.get('content-type')!;
          const bold = res.body as unknown as Blob;
          var blob = new Blob([bold], { type: contentType });
          const downloadUrl = window.URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = downloadUrl;
          console.log(downloadUrl);

          a.download = element.name;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          window.URL.revokeObjectURL(downloadUrl);
        },
        error: this.errorHandlerService.handleRequestError.bind(this),
      });
  }

  public deleteFile(element: IFile) {
    return this.fileManagementService.fileManagementControllerDelete({
      fileName: element.name,
    });
  }

  public openDeleteConfirmDialog(element: IFile): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: { message: '確定刪除嗎?' },
      panelClass: ['w-[240px]'],
    });

    dialogRef
      .afterClosed()
      .pipe(
        filter((res) => !!res),
        switchMap(() => this.deleteFile(element)),
      )
      .subscribe({
        next: (data) => {
          this.fetchData();
        },
        error: this.errorHandlerService.handleRequestError.bind(this),
      });
  }

  public fileChanged(event: any) {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        const blob: Blob = new Blob([reader.result as ArrayBuffer], {
          type: file.type,
        });
        this.callApiWithBlob(blob, file.name);
      };
      reader.readAsArrayBuffer(file);
    }
  }

  private callApiWithBlob(blob: Blob, fileName: string) {
    this.fileManagementService
      .fileManagementControllerUpload$Response({
        body: {
          file: blob,
          fileName,
        },
      })
      .subscribe({
        next: (data) => {
          this.fetchData();
        },
        error: this.errorHandlerService.handleRequestError.bind(this),
      });
  }
}
