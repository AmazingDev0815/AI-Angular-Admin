export interface CreatePromptCommand{
  value: string,
  negativeValue: string,
  seed: number,
  active: boolean,
  denoisingStrength: number,
  numberOfInferenceSteps: number,
  numberOfImages: number,
  cfgScale: number,
  exampleImageFile: File,
  initImageFile: File,
  tags: string[]
}

export interface UpdatePromptCommand extends  CreatePromptCommand{
  id: string
}
