# Material Table Localization for JP

[![npm version](https://badge.fury.io/js/%40technote-space%2Fmaterial-table-localization-jp.svg)](https://badge.fury.io/js/%40technote-space%2Fmaterial-table-localization-jp)
[![CI Status](https://github.com/technote-space/material-table-localization-jp/workflows/CI/badge.svg)](https://github.com/technote-space/material-table-localization-jp/actions)
[![codecov](https://codecov.io/gh/technote-space/material-table-localization-jp/branch/master/graph/badge.svg)](https://codecov.io/gh/technote-space/material-table-localization-jp)
[![CodeFactor](https://www.codefactor.io/repository/github/technote-space/material-table-localization-jp/badge)](https://www.codefactor.io/repository/github/technote-space/material-table-localization-jp)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/technote-space/material-table-localization-jp/blob/master/LICENSE)

Localization helper for Japanese.

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
<details>
<summary>Details</summary>

- [Setup](#setup)
  - [yarn](#yarn)
  - [npm](#npm)
- [Author](#author)

</details>
<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Usage

### Install

`yarn add @technote-space/material-table-localization-jp`

or

`npm i @technote-space/material-table-localization-jp`

### Use

e.g.

```tsx
import type {FC} from 'react';
import {memo} from 'react';
import MaterialTable from '@technote-space/material-table';
import useLocalStorage from '@technote-space/material-table-localization-jp';

const TestTable: FC = memo(() => {
  const tableLocalization = useTableLocalization();

  // ...

  return <MaterialTable
    localization={tableLocalization}
    // title={title}
    // columns={columns}
    // data={fetchData}
    // ...
  />
});
```

## Author

[GitHub (Technote)](https://github.com/technote-space)  
[Blog](https://technote.space)
