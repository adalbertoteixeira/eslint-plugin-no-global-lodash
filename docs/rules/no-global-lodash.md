# Lodash should not be loaded globally. If a lodash method is needed only the package for that method should be loaded in the file (no-global-lodash)

Please describe the origin of the rule here.


## Rule Details

This rule aims to...

Examples of **incorrect** code for this rule:

```js

  import { get, isEqual, cloneDeep } from 'lodash';
  import _, { get, isEqual, cloneDeep } from 'lodash';
  import _ from 'lodash';

```

Examples of **correct** code for this rule:

```js

import get from 'lodash.get';
import isEqual from 'lodash.isequal';
import cloneDeep from 'lodash.clonedeep';

```

### Options


## When Not To Use It


## Further Reading

