import assert from 'node:assert';

import { add, subtract } from './index.js';

assert(add(1, 1) === 2);

// Missing coverage!
// assert(subtract(1, 1) === 0);
