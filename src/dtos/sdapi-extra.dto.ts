export class SdapiExtraDto {
  resize_mode: number = 0;
  show_extras_results: boolean = true;
  gfpgan_visibility: number = 0;
  codeformer_visibility: number = 0;
  codeformer_weight: number = 0;
  upscaling_resize: number = 2;
  upscaling_resize_w: number = 512;
  upscaling_resize_h: number = 512;
  upscaling_crop: boolean = true;
  upscaler_1: string;
  upscaler_2: string;
  extras_upscaler_2_visibility: number = 0;
  upscale_first: boolean = false;

  public constructor(partial: Partial<SdapiExtraDto>) {
    Object.assign(this, partial);
  }
}

export class SdapiExtraSingleImageDto extends SdapiExtraDto {
  image: string;

  public constructor(partial: Partial<SdapiExtraSingleImageDto>) {
    super(partial);
    Object.assign(this, partial);
  }
}

export class SdapiExtraBatchImagesDto extends SdapiExtraDto {
  imageList: SdapiExtraBatchImageList[];

  public constructor(partial: Partial<SdapiExtraBatchImagesDto>) {
    super(partial);
    Object.assign(this, partial);
  }
}

export class SdapiExtraBatchImageList {
  data: string;
  name: string;
}