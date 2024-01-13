import { Sdapi2imgDto } from './sdapi.dto';

export class SdapiTxt2imgDto extends Sdapi2imgDto {
  enable_hr: boolean = false;



  firstphase_width: number = 0;



  firstphase_height: number = 0;



  hr_scale: number = 2;



  hr_upscaler: string;



  hr_second_pass_steps: number = 0;



  hr_resize_x: number = 0;



  hr_resize_y: number = 0;



  hr_checkpoint_name: string;



  hr_sampler_name: string;



  hr_prompt: string = '';



  hr_negative_prompt: string = '';

  public constructor(partial: Partial<SdapiTxt2imgDto>) {
    super();
    Object.assign(this, partial);
  }
}