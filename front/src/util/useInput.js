import { useState } from "react";

const useInput = () => {
    const [value, setValue] = useState('');

    const bind = {
        value,
        onChange:(e) => setValue(e.target.value)
    }
    
    const resetValue = (value) => {setValue(value)}

return [value, bind, resetValue];
}

export default useInput