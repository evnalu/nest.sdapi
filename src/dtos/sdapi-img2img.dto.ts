import { Sdapi2imgDto } from './sdapi.dto';

export class SdapiImg2imgDto extends Sdapi2imgDto {
  init_images: string[] = [];



  resize_mode: number = 0;



  image_cfg_scale: number = 0;



  mask: string;



  mask_blur_x: number = 4;



  mask_blur_y: number = 4;



  mask_blur: number = 0;



  inpainting_fill: number = 0;



  inpaint_full_res: boolean = true;



  inpaint_full_res_padding: number = 0;



  inpainting_mask_invert: number = 0;



  initial_noise_multiplier: number = 0;



  latent_mask: string;



  include_init_images: boolean = false;


  public constructor(partial: Partial<SdapiImg2imgDto>) {
    super();
    Object.assign(this, partial);
  }
}