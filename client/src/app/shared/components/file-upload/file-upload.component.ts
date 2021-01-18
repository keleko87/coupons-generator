import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FileUploadType } from 'src/app/model/core.model';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css'],
})
export class FileUploadComponent implements OnInit {
  acceptFileTypes: string;

  @Input() file: File = null;
  @Input() form: FormGroup = new FormGroup({});
  @Input() fileControlName = 'file';
  @Input() maxFileSize = 15; // MB
  @Input() allowedFileTypes: FileUploadType[] = [FileUploadType.JSON];
  @Input() showErrorMessage = false;
  @Input() disabled = false;
  @Input() required = false;
  @Input() icon = 'far fa-file';

  @Output() selectFile: EventEmitter<any> = new EventEmitter<any>();
  @Output() resetFile: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild('inputFile') inputFile: ElementRef<HTMLInputElement>;
  @ViewChild('fileNameContainer') fileNameContainer: ElementRef<HTMLElement>;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    this.form.addControl(
      this.fileControlName,
      new FormControl('', this.required ? [Validators.required] : null)
    );
    this.acceptFileTypes = this.transformTypesToAccept(this.allowedFileTypes);
  }

  get isValidSize() {
    return this.file?.size <= this.transformMegasToBytes(this.maxFileSize);
  }

  get isValidType() {
    return this.allowedFileTypes.find(
      (allowedType) => allowedType === this.file?.type
    );
  }

  get fileFormControl() {
    return this.form.get(this.fileControlName);
  }

  markControlAsTouched() {
    this.fileFormControl.markAsTouched();
  }

  onSelectFile(ev) {
    this.file = ev.target.files[0];
    this.markControlAsTouched();

    if (!this.isValidSize) {
      return this.selectFile.emit({ file: this.file, isValidSize: false });
    }

    return this.selectFile.emit({ file: this.file, isValidSize: true });
  }

  removeFile() {
    this.file = null;
    this.fileFormControl.setValue(null);
    this.markControlAsTouched();

    this.resetFile.emit({ file: this.file, isValidSize: false });
  }

  downloadFile(file: File) {
    const url = this.setDownloadURL(file, file.type);

    // Create link element and set URL and file name
    const link = this.renderer.createElement('a');
    this.renderer.setAttribute(link, 'href', url);
    this.renderer.setAttribute(link, 'download', file.name);

    // Add the new element in DOM and trigger click event
    this.renderer.appendChild(this.fileNameContainer.nativeElement, link);
    link.click();

    // Remove element
    this.renderer.removeChild(this.fileNameContainer.nativeElement, link);
    window.URL.revokeObjectURL(url);
  }

  setDownloadURL(file, type: string) {
    const blob = new Blob([file], { type });
    return window.URL.createObjectURL(blob);
  }

  // PENDING Backend implementation
  setDownloadURLByRemoteFile(apiResponse) {
    const json = JSON.stringify(apiResponse);
    return this.setDownloadURL(json, apiResponse.type);
  }

  transformTypesToAccept(allowedFileTypes: FileUploadType[]) {
    return allowedFileTypes.join(', ');
  }

  transformMegasToBytes(megabytes: number) {
    return megabytes * (1024 * 1024);
  }
}
