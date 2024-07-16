import React, { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import { Rnd } from "react-rnd";

export interface DragElementProps {
    children: JSX.Element;
}

const rndHandlerCSS: React.CSSProperties = {
    width: '10px',
    height: '10px',
    backgroundColor: '#E5F4F7',
    border: '1px solid gray',
    zIndex: '120',
    position: 'absolute',
}

export interface Size {
    width: number;
    height: number;
}

export const DragElement = forwardRef<Rnd, DragElementProps>(({ children }, ref) => {
    const [ctnSize, setCtnSize] = useState<Size>({ width: 100, height: 100 });

    const onHandleResizeStop = (
        e: any,
        direction: any,
        ref: any,
        delta: any,
        pos: any,
    ) => {
        const newSize: Size = { width: ref.style.width, height: ref.style.height };
        setCtnSize(newSize);
    };

    return <div className="DragElement">
        <Rnd
            ref={ref}
            className="RndElement"
            resizeHandleStyles={{
                topLeft: rndHandlerCSS,
                topRight: rndHandlerCSS,
                bottomLeft: rndHandlerCSS,
                bottomRight: rndHandlerCSS,
                left: {
                    ...rndHandlerCSS,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    left: '-10px',
                },
                right: {
                    ...rndHandlerCSS,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    right: '-10px',
                },
                top: {
                    ...rndHandlerCSS,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    top: '-10px',
                },
                bottom: {
                    ...rndHandlerCSS,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    bottom: '-10px',
                },
            }}
            size={ctnSize}
            onResizeStop={onHandleResizeStop}>
            <div style={{ width: "100%", height: "100%" }}>
                {children}
            </div>
        </Rnd>
    </div >;
});