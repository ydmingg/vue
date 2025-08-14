import React, { useRef } from "react";

function R5() {
    // const [state, setState] = useState('');
    const fileInput = useRef<HTMLInputElement>(null)
    
    
    // const handleChange = (event) => {
    //     setState(event.target.value);
    // }

    // const handleSubmit = (event) => {
    //     alert('提交的值为: ' + state);
    //     event.preventDefault();
    // }

    const Bob = 'asdfasdfa'

    //
    const handleSubmit1 = (event) => {
        event.preventDefault()
        console.log(fileInput.current.files)

    }


	return (
		<form onSubmit={handleSubmit1} >
			<label>
				名字:
				<input
					type="text"
					defaultValue={Bob}
				/>
			</label>
            {/* <input type="submit" value="提交" /> */}
            <input type="file" ref={fileInput} />
            <input type="submit" value="提交" />
		</form>
	);
}

export default R5;
