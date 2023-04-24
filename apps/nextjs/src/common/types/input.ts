import { type FormFieldState } from '../constants';

export interface Input {
  /**
   * Specify an optional test ID to use on e2e tests.
   */
  dataTestId?: string;

  /**
   * Add extra styling and visual feedback.
   */
  isRequired?: boolean;

  /**
   * Disables the input, disallowing user interaction.
   */
  isDisabled?: boolean;

  /**
   * The input is read only.
   */
  isReadOnly?: boolean;

  /**
   * Extends the input to 100% width.
   */
  isFullWidth?: boolean;

  /**
   * If set to true, the input will be rounded.
   */
  isRounded?: boolean;

  /**
   * If set to true, the button will display a loading spinner.
   */
  isLoading?: boolean;

  /**
   * Set a label text
   */
  label?: string;

  /**
   * Set an assistive text
   */
  assistiveText?: string;

  /**
   * Set the Text Input state
   */
  fieldState?: FormFieldState;
}
