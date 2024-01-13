## Installation

First install [Node.js](http://nodejs.org/). Then:
```bash
$ npm i @evnalu/nest.sdapi
```
or
```bash
$ yarn add @evnalu/nest.sdapi
```

## Usage
```ts
import { Sdapi } from '@evnalu/nest.sdapi';

async function bootstrap() {
  const sdapi = new Sdapi({
    baseURL: 'http://127.0.0.1:7860',
    headers: {
      Authorization: 'Basic <base64>'
    }
  });

  const realistic = await sdapi.txt2img({
    prompt: '1girl,hair with bangs,black long dress,orange background,',
    negative_prompt: '(worst quality:2),(low quality:2),(normal quality:2),lowres,watermark,',
    steps: 20,
    cfg_scale: 7,
    width: 512,
    height: 768,
    seed: 4216575496,
    sampler_index: 'Restart',
    override_settings: {
      sd_model_checkpoint: 'majicmixRealistic_v7.safetensors [7c819b6d13]',
    },
    override_settings_restore_afterwards: true,
    clip_skip: 1,
    enable_hr: true,
    denoising_strength: 0.7,
    hr_scale: 2,
    hr_upscaler: '8x_NMKD-Superscale_150000_G',
    hr_second_pass_steps: 15,
    hr_resize_x: 0,
    hr_resize_y: 0,
    hr_checkpoint_name: "",
    hr_sampler_name: "",
    hr_prompt: "",
    hr_negative_prompt: "",
    send_images: true,
    save_images: true,
    alwayson_scripts: {
      ADetailer: {
        args: [
          true,
          {
            "ad_model": "face_yolov8n.pt",
            "ad_prompt": "",
            "ad_negative_prompt": "",
            "ad_confidence": 0.3,
            "ad_mask_min_ratio": 0.0,
            "ad_mask_max_ratio": 1.0,
            "ad_dilate_erode": 32,
            "ad_x_offset": 0,
            "ad_y_offset": 0,
            "ad_mask_merge_invert": "None",
            "ad_mask_blur": 4,
            "ad_denoising_strength": 0.4,
            "ad_inpaint_only_masked": true,
            "ad_inpaint_only_masked_padding": 0,
            "ad_use_inpaint_width_height": true,
            "ad_inpaint_width": 512,
            "ad_inpaint_height": 512,
            "ad_use_steps": true,
            "ad_steps": 28,
            "ad_use_cfg_scale": false,
            "ad_cfg_scale": 7.0,
            "ad_use_checkpoint": true,
            "ad_checkpoint": "majicmixRealistic_v7.safetensors [7c819b6d13]",
            "ad_use_vae": true,
            "ad_vae": "vae-ft-mse-840000-ema-pruned.safetensors",
            "ad_use_sampler": true,
            "ad_sampler": "Euler a",
            "ad_use_noise_multiplier": false,
            "ad_noise_multiplier": 1.0,
            "ad_use_clip_skip": true,
            "ad_clip_skip": 2,
            "ad_restore_face": false,
            "ad_controlnet_model": "None",
            "ad_controlnet_weight": 1.0,
            "ad_controlnet_guidance_start": 0.0,
            "ad_controlnet_guidance_end": 1.0
          }
        ]
      }
    }
  });

  const ghost = await sdapi.img2img({
    init_images: realistic.images,
    prompt: '1girl,hair with bangs,black long dress,orange background,',
    negative_prompt: '(worst quality:2),(low quality:2),(normal quality:2),lowres,watermark,',
    steps: 20,
    cfg_scale: 7,
    width: 1024,
    height: 1536,
    seed: 4216575496,
    sampler_index: 'Restart',
    override_settings: {
      sd_model_checkpoint: 'ghostmix_v20Bakedvae.safetensors [e3edb8a26f]',
    },
    override_settings_restore_afterwards: true,
    clip_skip: 2,
    send_images: true,
    save_images: true
  });

  const ghost2real = await sdapi.img2img({
    init_images: ghost.images,
    prompt: '1girl,hair with bangs,black long dress,orange background,',
    negative_prompt: '(worst quality:2),(low quality:2),(normal quality:2),lowres,watermark,',
    steps: 20,
    cfg_scale: 7,
    width: 1024,
    height: 1536,
    seed: 4216575496,
    sampler_index: 'Restart',
    override_settings: {
      sd_model_checkpoint: 'majicmixRealistic_v7.safetensors [7c819b6d13]',
    },
    override_settings_restore_afterwards: true,
    clip_skip: 2,
    send_images: true,
    save_images: true,
    alwayson_scripts: {
      ADetailer: {
        args: [
          true,
          {
            "ad_model": "face_yolov8n.pt",
            "ad_prompt": "",
            "ad_negative_prompt": "",
            "ad_confidence": 0.3,
            "ad_mask_min_ratio": 0.0,
            "ad_mask_max_ratio": 1.0,
            "ad_dilate_erode": 32,
            "ad_x_offset": 0,
            "ad_y_offset": 0,
            "ad_mask_merge_invert": "None",
            "ad_mask_blur": 4,
            "ad_denoising_strength": 0.4,
            "ad_inpaint_only_masked": true,
            "ad_inpaint_only_masked_padding": 0,
            "ad_use_inpaint_width_height": true,
            "ad_inpaint_width": 512,
            "ad_inpaint_height": 512,
            "ad_use_steps": true,
            "ad_steps": 28,
            "ad_use_cfg_scale": false,
            "ad_cfg_scale": 7.0,
            "ad_use_checkpoint": true,
            "ad_checkpoint": "majicmixRealistic_v7.safetensors [7c819b6d13]",
            "ad_use_vae": true,
            "ad_vae": "vae-ft-mse-840000-ema-pruned.safetensors",
            "ad_use_sampler": true,
            "ad_sampler": "Euler a",
            "ad_use_noise_multiplier": false,
            "ad_noise_multiplier": 1.0,
            "ad_use_clip_skip": true,
            "ad_clip_skip": 2,
            "ad_restore_face": false,
            "ad_controlnet_model": "None",
            "ad_controlnet_weight": 1.0,
            "ad_controlnet_guidance_start": 0.0,
            "ad_controlnet_guidance_end": 1.0
          }
        ]
      },
      ControlNet: {
        "args": [
          {
            // "input_image": "base64...",
            "model": "control_v11p_sd15_lineart [43d4be0d]",
            "mask": "",
            "module": "lineart_realistic",
            "weight": 1.0,
            "resize_mode": "Resize and Fill",
            "lowvram": false,
            "processor_res": 1024,
            "threshold_a": 64,
            "threshold_b": 64,
            "guidance_start": 0.0,
            "guidance_end": 1.0,
            "control_mode": 0,
            "pixel_perfect": false,
            "hr_option": "Both"  // Both, Low res only, High res only
          }
        ]
      }
    }
  });
}

bootstrap();
```