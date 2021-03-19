/* eslint-disable no-magic-numbers */
import {renderHook} from '@testing-library/react-hooks';
import useTableLocalization from '../src';

describe('useTableLocalization', () => {
  it('should return localization', () => {
    const {result} = renderHook(() => useTableLocalization());
    const value    = result.current;

    expect(value).toHaveProperty('error');
    expect(value).toHaveProperty('body');
    expect(value).toHaveProperty('header');
    expect(value).toHaveProperty('grouping');
    expect(value).toHaveProperty('pagination');
    expect(value).toHaveProperty('toolbar');
  });
});
