/*-----------------------------------------------------------------------------
| Copyright (c) 2014-2015, S. Chris Colbert
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/
import ICollection = require('./ICollection');

export = IList;


/**
 * A collection of elements which can be accessed by index.
 */
interface IList<T> extends ICollection<T> {
  /**
   * Get the element at the given index.
   *
   * Returns `undefined` if the index is out of range.
   */
  get(index: number): T;

  /**
   * Set the value at the given index.
   *
   * Returns false if the index is out of range.
   */
  set(index: number, value: T): boolean;

  /**
   * Get the index of the given value.
   *
   * Returns -1 if the value is not in the list.
   */
  indexOf(value: T): number;

  /**
   * Insert a value at the given index.
   *
   * Returns false if the index is out of range.
   */
  insert(index: number, value: T): boolean;

  /**
   * Remove and return the value at the given index.
   *
   * Returns `undefined` if the index is out of range.
   */
  removeAt(index: number): T;
}
