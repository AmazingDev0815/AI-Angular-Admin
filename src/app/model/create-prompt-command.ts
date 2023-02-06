import {NzUploadFile} from "ng-zorro-antd/upload";

export interface CreatePromptCommand{
  value: string,
  negativeValue: string,
  seed: number,
  numberOfInferenceSteps: number,
  cfgScale: number,
  exampleImageFile: File,
  initImageFile: File,
  tags: string[]
}

export interface UpdatePromptCommand extends  CreatePromptCommand{
  id: string
}
