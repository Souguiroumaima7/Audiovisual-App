import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'productImageUrl'
})
export class ProductImageUrlPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) { }

  transform(product: any) {
    let objectURL = 'data:image/jpg;base64,' + product.image;
    return this.sanitizer.bypassSecurityTrustUrl(objectURL);
  }

}
