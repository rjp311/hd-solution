'use client'

import React, { FunctionComponent, useState } from 'react';
import Image, { ImageProps } from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

interface IFallbackImageProps extends ImageProps {
    fallbackSrc: string | StaticImport,
}

const FallbackImage: FunctionComponent<IFallbackImageProps> = (props) => {
    const { src, fallbackSrc, ...rest } = props;
    const [imgSrc, setImgSrc] = useState(src);

    return (
        <Image
            {...rest}
            src={imgSrc}
            onError={() => {
                setImgSrc(fallbackSrc);
            }}
        />
    );
};

export default FallbackImage;