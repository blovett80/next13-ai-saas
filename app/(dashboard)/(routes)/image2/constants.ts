import * as z from "zod";

export const formSchema = z.object({
  prompt: z.string().min(1, { message: "Photo prompt is required" }),
  modelEndpoint: z.string().min(1, { message: "Model selection is required" }),
  resolution: z.string().min(1),
});

export const modelOptions = [
  {
    value: "stability-ai/sdxl:39ed52f2a78e934b3ba6e2a89f5b1c712de7dfea535525255b1aa35c5565e08b",
    label: "Stability AI SDXL"
  },
  {
    value: "stability-ai/stable-diffusion:ac732df83cea7fff18b8472768c88ad041fa750ff7682a21affe81863cbe77e4",
    label: "Stable Diffusion 2.1"
  },
  // Add more models here as needed, for example:
  // {
  //   value: "model-endpoint-2",
  //   label: "Model Name 2"
  // },
];

export const resolutionOptions = [
  {
    value: "1024x1024",
    label: "Square",
  },
  {
    value: "1024x1792",
    label: "Portrait",
  },
  {
    value: "1792x1024",
    label: "Landscape",
  },
];
