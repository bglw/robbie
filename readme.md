<p align="center"><img src="https://raw.githubusercontent.com/rphillips-nz/robbie/main/raw/bagpiper.svg" alt="Nice, unrelated image of a bagpiper"  width="380"></p>
<h1 align="center">Robbie</h1>
<p align="center">A rating engine for Robbie's preferences.</p>
<p align="center"><a href="https://npmjs.org/package/robbie"><img src="https://nodei.co/npm/robbie.png?mini=true" alt="NPM badge"></a></p>

Usage:

```
import * as robbie from 'robbie';

robbie.rate('beatles'); // 0
robbie.rate('arnold'); // 5

robbie.run(() => {console.log('Function')}); // Runs 10,000 times
```
