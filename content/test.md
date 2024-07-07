---
title: "Markdown Test"
---

Here is a sample paragraph.

Here is *another* **with** ***some*** ~~styling~~.

And `here` [is](https://example.com) https://example.com.

- Unordered
- List
    - With Indentation
1. Ordered
2. List
    1. With Indentation
- [ ] Check
- [x] List
    - [ ] With Indentation

> This is a quote block that crosses *multiple **lines***!
> 
> —Doctor Who, 2072

![Test Image](/not-found-forest.png)

## Code Blocks
```cpp
#include <iostream>

int main()
{
    std::cout << "Hello, World!" << std::endl;

    return 0;
}
```

```java
class Main {
    public static void main() {
        System.out.println("Hello, World!");
    }
}
```

### Admonitions
> [!note]
> Highlights information that users should take into account, even when skimming.

> [!tip]
> Optional information to help a user be more successful.

> [!important]
> Crucial information necessary for users to succeed.

> [!warning]
> Critical content demanding immediate user attention due to potential risks.

> [!caution]
> Negative potential consequences of an action.

> [!note] Embedded Admonitions
> This is a note admonition with an
>
> > [!info]
> > info admonition
>
> > a quote,
>
> | Table | Column |
> | - | - |
> | a | table, |
>
> $$
> math\ (\pi),
> $$
>
> - an unordered list,
> 1. an ordered list,
> - [ ] a checklist,
> 
> ```python
> # and a code block nested inside.
> ```

#### Tables

| Table | Example | Column |
| - |:-:| -:|
| Hello | World | $\pi$ |
| Foo | Bar | 🐈 |

##### Math
Let $x = 5$ and $y = 2$.

$$
\begin{align*}
\errorButTheRestStillRenders \\
f(x) &= x\pi \\
g(x) &= \sum_{k=0}^{10}\frac{1}{k} \\
\end{align*}
$$
