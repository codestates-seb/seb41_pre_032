import { useState } from "react";

const useInput = () => {
    const [value, setValue] = useState('');

    const bind = {
        value,
        onChange:(e) => setValue(e.target.value)
    }
    
    const resetValue = () => {setValue('')}

return [value, bind, resetValue];
}

export default useInput