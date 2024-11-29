export interface AutoCompleteProps {
  name?: string;
  label?: string;
  value: string;
  disabled?: boolean;
  isLoading?: boolean;
  placeholder?: string;
  Icon?: React.ElementType;
  options: {
    value: string;
    label: string;
    flag?: string;
  }[];
  onChange: (value: string) => void;
}
