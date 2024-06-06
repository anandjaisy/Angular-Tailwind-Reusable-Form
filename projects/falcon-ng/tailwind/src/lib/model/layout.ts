import { BaseControl } from '@falcon-ng/core';

/**
 * @description
 * Class use for setting the layout.
 * @usageNotes
 * ```ts
 *       new Dropdown({
 *        key: 'brave',
 *       label: 'Bravery Rating',
 *       options: [
 *         {key: 'solid',  value: 'Solid'},
 *         {key: 'great',  value: 'Great'},
 *         {key: 'good',   value: 'Good'},
 *         {key: 'unproven', value: 'Unproven'}
 *       ],
 *       order: 3
 * }),
 ** ```
 */
export interface Layout<T> {
  class?: string;
  baseControls: BaseControl<T>[];
}
