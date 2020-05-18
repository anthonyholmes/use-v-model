# use-v-model

Like v-model in Vue... but for React

Only works on `<input>` and `<select>` at the moment

```jsx
import React from "react";
import { useVModel } from "use-v-model";

function App() {
  // can pass default value
  let name = useVModel("Anthony");
  let email = useVModel();

  return (
    <div>
      <input name="name" {...name} />
      
      // Output the value
      {name.value}
    </div>
  );
}
```
