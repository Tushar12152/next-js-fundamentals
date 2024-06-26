import Image from 'next/image';
import React from 'react';

const Album = () => {
    return (
        <div>
             <Image  src="https://i.ibb.co/cLKKXfK/Screenshot-20230825-213730-2-1.png"
                width={500}
                height={500}
             alt="img"/>
        </div>
    );
};

export default Album