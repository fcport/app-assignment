import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const postalcodeValidator = (
  formGroup: AbstractControl
): ValidationErrors | null => {
  const country = formGroup.get('country')?.value;
  const postalcode = formGroup.get('postCode')?.value;

  const regexUk =
    /^[A-Za-z]{1,2}[0-9Rr][0-9A-Za-z]? [0-9][ABD-HJLNP-UW-Zabdhjlnp-uw-z]{2}$/;

  switch (country) {
    case 'Ireland':
      if (postalcode && (postalcode.length > 10 || postalcode.length < 6)) {
        return { invalidPostalCodeIreland: true };
      }
      break;

    case 'United Kingdom':
      let errors = null;
      if (!postalcode) errors = { postalCodeUkNull: true };
      if (!regexUk.test(postalcode))
        errors = { ...errors, invalidPostalCodeUk: true };

      return errors;

    default:
      break;
  }

  return null;
};
