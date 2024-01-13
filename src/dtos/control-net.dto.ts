export class ControlNetSetting {
  model: string;
  mask: string;
  module: string;
  weight: number = 1;
  resize_mode: string;
  lowvram: boolean = false;
  processor_res: number = 1024;
  threshold_a: number = 64;
  threshold_b: number = 64;
  guidance_start: number = 0;
  guidance_end: number = 1;
  control_mode: number = 0;
  pixel_perfect: boolean = false;
  hr_option: string = "Both";   // Both, Low res only, High res only

  public constructor(partial: Partial<ControlNetSetting>) {
    Object.assign(this, partial);
  }
}

export class ControlNetDto {
  args: [ControlNetSetting];
}