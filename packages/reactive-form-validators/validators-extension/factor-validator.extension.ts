import {
    ValidatorFn,AbstractControl
} from "@angular/forms";
import { FactorConfig } from "../models/config/factor-config";
import { factorValidator  } from '../reactive-form-validators/index'
import { defaultContainer } from "../core/defaultContainer"
import { AnnotationTypes } from "../core/validator.static"
import {STRING } from '../const/validator.const';

export function factorValidatorExtension(config?: FactorConfig): ValidatorFn {
    var validator = factorValidator(config);
    var rxwebValidator = (control:any,target?:object): { [key: string]: any } => {
        if (typeof control == STRING)
          defaultContainer.init(target, 0, control, AnnotationTypes.factor, config);
        else
          return validator(control);
      return null
    }
    return rxwebValidator;
}