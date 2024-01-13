export class ADetailerSetting {
  ad_model: string;
  ad_prompt: string;
  ad_negative_prompt: string;
  ad_confidence: number = 0.3;
  ad_mask_min_ratio: number = 0;
  ad_mask_max_ratio: number = 1;
  ad_dilate_erode: number = 32;
  ad_x_offset: number = 0;
  ad_y_offset: number = 0;
  ad_mask_merge_invert: string;
  ad_mask_blur: number = 4;
  ad_denoising_strength: number = 0.4;
  ad_inpaint_only_masked: boolean = true;
  ad_inpaint_only_masked_padding: number = 0;
  ad_use_inpaint_width_height: boolean = true;
  ad_inpaint_width: number = 512;
  ad_inpaint_height: number = 512;
  ad_use_steps: boolean = true;
  ad_steps: number = 28;
  ad_use_cfg_scale: boolean = false;
  ad_cfg_scale: number = 7;
  ad_use_checkpoint: boolean = true;
  ad_checkpoint: string;
  ad_use_vae: boolean = true;
  ad_vae: string;
  ad_use_sampler: boolean = true;
  ad_sampler: string = 'Euler a';
  ad_use_noise_multiplier: boolean = false;
  ad_noise_multiplier: number = 1;
  ad_use_clip_skip: boolean = true;
  ad_clip_skip: number = 2;
  ad_restore_face: boolean = false;
  ad_controlnet_model: string;
  ad_controlnet_weight: number = 1;
  ad_controlnet_guidance_start: number = 0;
  ad_controlnet_guidance_end: number = 1;

  public constructor(partial: Partial<ADetailerSetting>) {
    Object.assign(this, partial);
  }
}

export class ADetailerDto {
  args: [boolean, ADetailerSetting];
}