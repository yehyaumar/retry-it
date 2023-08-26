# retry-utils

retry-utils is a lightweight and intuitive module that provides a simple yet powerful retry mechanism for your applications.

## retry()

Retry any async function until it returns a meaningful value or the number of attempts is exhausted

## delay()

Delay execution flow for sometime in milliseconds

## Usage

```typescript
import { retry, delay } from "retry-utils";

// Delay execution flow for 5 seconds
await delay(5000);

// Retries function at least 10 times with 3 seconds interval until it returns a value
await retry(
    () => true;
    {
        attempts: 10, // default 5
        delayMs: 5000, // default 3000
    })
```
