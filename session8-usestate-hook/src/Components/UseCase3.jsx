import { useEffect } from "react";

function UseCase3() {
    useEffect(
        () => {
            console.log('useeffect 3 components is mounted');
            return (() => {
                console.log('useeffect 3 is unmounted');

            })
        }
    )

    return (
        <div>
            <h3>this is my use case 3</h3>
        </div>
    );
}

export default UseCase3;