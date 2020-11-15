# Robbie

A rating engine for Robbie's preferences.

Usage:

```
import * as robbie from 'robbie';

robbie.rate("beatles"); // 0
robbie.rate("arnold"); // 5

robbie.run(() => {console.log("Function")}); // Runs 10,000 times
```