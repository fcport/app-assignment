import { FormControl } from '@angular/forms';
export function nameValidator(
  formControl: FormControl
): { [key: string]: boolean } | null {
  const name = formControl.value;
  console.log(name);

  if (
    name
      .replace(' ', '')
      .split('')
      .filter((char: string | number) => !isNaN(+char)).length > 0
  )
    return { numberInName: true };

  return null;
}
