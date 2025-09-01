export interface CheckboxFieldProps {
  id: string;
  label: string;
  checked?: boolean;
}

export interface CheckboxFieldRef {
  setChecked: (checked: boolean) => void;
  getChecked: () => boolean;
}
