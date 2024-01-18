import { ADetailerDto } from './adetailer.dto';
import { AnimateDiffDto } from './animate-diff.dto';
import { ControlNetDto } from './control-net.dto';
import { ReActorDto } from './reactor.dto';

export class SdapiOverrideSetting {


  sd_model_checkpoint: string;


  eta_noise_seed_delta: number = 0.0;


  CLIP_stop_at_last_layers: number = 1.0;
}

export class SdapiComment { }

export class SdapiAlwaysonScript {
  ADetailer?: ADetailerDto;
  ControlNet?: ControlNetDto;
  reactor?: ReActorDto;
  AnimateDiff?: AnimateDiffDto;
}

export class Sdapi2imgDto {


  id_task: string;



  prompt: string = '';



  negative_prompt: string = '';



  styles: string[] = [];



  seed: number = -1;



  clip_skip: number = 2;



  subseed: number = -1;



  subseed_strength: number = 0;



  seed_resize_from_h: number = -1;



  seed_resize_from_w: number = -1;



  sampler_name: string;



  batch_size: number = 1;



  n_iter: number = 1;



  steps: number = 30;



  cfg_scale: number = 7;



  width: number = 512;



  height: number = 512;



  restore_faces: boolean = true;



  tiling: boolean = true;



  do_not_save_samples: boolean = false;



  do_not_save_grid: boolean = false;



  eta: number = 0;



  denoising_strength: number = 0;



  s_min_uncond: number = 0;



  s_churn: number = 0;



  s_tmax: number = 0;



  s_tmin: number = 0;



  s_noise: number = 0;


  override_settings: SdapiOverrideSetting;



  override_settings_restore_afterwards: boolean = true;



  refiner_checkpoint: string;



  refiner_switch_at: number = 0;



  disable_extra_networks: boolean = false;


  comments: SdapiComment = {};



  sampler_index: string = 'Euler';



  script_name: string;



  script_args: any[] = [];



  send_images: boolean = true;



  save_images: boolean = false;


  alwayson_scripts: SdapiAlwaysonScript;
}