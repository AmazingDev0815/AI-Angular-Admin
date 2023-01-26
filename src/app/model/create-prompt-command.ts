export interface CreatePromptCommand{
  value: string,
  negativeValue: string,
  seed: number,
  numberOfInferenceSteps: number,
  cfgScale: number,
  exampleImagePath: string,
  tags: string[]
}

export interface UpdatePromptCommand extends  CreatePromptCommand{
  id: string
}
